// scripts/audit-components-playwright.mjs
import { chromium } from 'playwright';

const BASE_URL = (process.env.AUDIT_BASE_URL || 'http://localhost:4321').replace(/\/$/, '');
const NAV_TIMEOUT = Number(process.env.AUDIT_TIMEOUT || 45000);
const CONCURRENCY = Number(process.env.AUDIT_CONCURRENCY || 4);
// AUDIT_SAMPLE=N audits every Nth page (CI uses a sample; run without it for the full audit).
const SAMPLE = Math.max(1, Number(process.env.AUDIT_SAMPLE || 1));

async function audit() {
  console.log(`Connecting to ${BASE_URL}/ ...`);
  const browser = await chromium.launch({ headless: true });
  
  // 1. Visit docs index to collect all component URLs from the sidebar
  const initPage = await browser.newPage();
  await initPage.goto(`${BASE_URL}/docs/glass-button`, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });

  const componentLinks = await initPage.$$eval('.sidebar-nav a, a[href^="/docs/"], a[href^="/sections/"]', (links) => {
    const urls = new Set();
    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (href && (href.startsWith('/docs/') || href.startsWith('/sections/')) && !href.includes('#')) {
        urls.add(href);
      }
    });
    return Array.from(urls);
  });
  
  // Add core routes
  componentLinks.push('/', '/sections');
  if (SAMPLE > 1) {
    const sampled = componentLinks.filter((_, i) => i % SAMPLE === 0);
    componentLinks.length = 0;
    componentLinks.push(...sampled);
  }

  await initPage.close();

  console.log(`Found ${componentLinks.length} total pages to audit.\n`);

  // Images, fonts and media do not affect these checks and make the pages slow to load.
  const skipHeavy = (route) =>
    ['image', 'font', 'media'].includes(route.request().resourceType()) ? route.abort() : route.continue();

  const results = {
    passed: [],
    emptyPreview: [],
    previewError: [],
    pageError: [],
    consoleErrors: []
  };

  let index = 0;

  async function worker(workerId) {
    const page = await browser.newPage();
    await page.route('**/*', skipHeavy);

    while (index < componentLinks.length) {
      const currentIndex = index++;
      const link = componentLinks[currentIndex];
      const slug = link.replace('/docs/', '').replace('/sections/', '').trim() || 'home';
      const url = `${BASE_URL}${link}`;
      const pageConsoleErrors = [];

      const onConsole = (msg) => {
        // Blocked images/fonts surface as failed resource loads; they are not page errors.
        if (msg.type() === 'error' && !msg.text().startsWith('Failed to load resource')) {
          pageConsoleErrors.push(msg.text());
        }
      };

      page.on('console', onConsole);

      try {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
        const status = response ? response.status() : 500;

        if (status !== 200) {
          results.pageError.push({ slug, status, error: `HTTP ${status}` });
          console.log(`❌ [${slug}] HTTP ${status}`);
          page.off('console', onConsole);
          continue;
        }

        // Wait a tiny bit for any hydration/render
        await page.waitForTimeout(50);

        // Check if preview has error text
        const previewErrorEl = await page.$('.preview-error');
        if (previewErrorEl) {
          const text = await previewErrorEl.innerText();
          results.previewError.push({ slug, text });
          console.log(`⚠️  [${slug}] Preview Error: "${text.replace(/\n/g, ' ')}"`);
          page.off('console', onConsole);
          continue;
        }

        // Check if preview container is empty or has zero rendered content (only on docs pages)
        if (link.startsWith('/docs/')) {
          const previewContainer = await page.$('.preview-renderer, .preview-container');
          let isEmpty = true;
          let reason = 'no container';

          if (previewContainer) {
            const boundingBox = await previewContainer.boundingBox();
            const innerHTML = await previewContainer.innerHTML();

            // Check if there is actual rendered markup / widget inside
            if (innerHTML.trim().length > 30 && boundingBox && boundingBox.height > 15) {
              isEmpty = false;
            } else {
              reason = `height=${boundingBox ? Math.round(boundingBox.height) : 0}, htmlLen=${innerHTML.trim().length}`;
            }
          }

          if (isEmpty) {
            results.emptyPreview.push({ slug, reason });
            console.log(`⚠️  [${slug}] Empty Preview (${reason})`);
            page.off('console', onConsole);
            continue;
          }
        }

        results.passed.push({ slug });
        console.log(`✅ [${slug}] OK`);

        if (pageConsoleErrors.length > 0) {
          results.consoleErrors.push({ slug, errors: pageConsoleErrors });
        }

      } catch (err) {
        results.pageError.push({ slug, error: err.message });
        console.log(`❌ [${slug}] Error: ${err.message}`);
      } finally {
        page.off('console', onConsole);
      }
    }

    await page.close();
  }

  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i));
  await Promise.all(workers);
  await browser.close();

  console.log('\n================ AUDIT SUMMARY ================');
  console.log(`Total pages checked: ${componentLinks.length}`);
  console.log(`✅ Passed: ${results.passed.length}`);
  console.log(`⚠️  Preview Errors (Not Found / Unmapped): ${results.previewError.length}`);
  console.log(`⚠️  Empty Previews: ${results.emptyPreview.length}`);
  console.log(`❌ Page/Server Errors: ${results.pageError.length}`);
  console.log(`⚠️  Console Errors: ${results.consoleErrors.length}`);

  if (results.previewError.length > 0) {
    console.log('\n--- Components with "Preview not available": ---');
    results.previewError.forEach(item => console.log(`- ${item.slug}: ${item.text.replace(/\n/g, ' ')}`));
  }

  if (results.emptyPreview.length > 0) {
    console.log('\n--- Components with Empty/Blank Previews: ---');
    results.emptyPreview.forEach(item => console.log(`- ${item.slug} (${item.reason})`));
  }

  if (results.pageError.length > 0) {
    console.log('\n--- Pages with Errors: ---');
    results.pageError.forEach(item => console.log(`- ${item.slug}: ${item.error}`));
  }

  if (results.consoleErrors.length > 0) {
    console.log('\n--- Pages with Console Errors: ---');
    results.consoleErrors.forEach(item => console.log(`- ${item.slug}: ${item.errors.join(' | ')}`));
  }

  // Console errors are reported but do not fail the run; broken pages and previews do.
  return results.previewError.length + results.emptyPreview.length + results.pageError.length;
}

audit()
  .then((failed) => {
    if (failed > 0) process.exitCode = 1;
  })
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
