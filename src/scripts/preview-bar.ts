/**
 * Astro Components Kit — Preview Navigation & GitHub Star Top Bar.
 *
 * This bar is strictly active on live preview pages (`/preview/*`).
 * It never runs on standard documentation pages or inside embedded iframes.
 */

(function initAckPreviewBar() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const pathname = window.location.pathname;
  const isPreview = pathname.startsWith('/preview/') || /^\/([a-z]{2}\/)?preview\//.test(pathname);

  // Strictly run only on preview pages
  if (!isPreview) return;

  // Never display inside miniature preview iframes (e.g. inside /templates/[slug] doc frames)
  if (window.self !== window.top) return;

  // Check if previously dismissed in this browser session
  const STORAGE_KEY = 'ack_preview_bar_dismissed_v1';
  if (sessionStorage.getItem(STORAGE_KEY) === '1') return;

  // Detect language from path, doc element, or referrer
  const referrer = document.referrer || '';
  let isEs = /^\/es\//.test(pathname) || document.documentElement.lang?.toLowerCase().startsWith('es');
  let isRu = /^\/ru\//.test(pathname) || document.documentElement.lang?.toLowerCase().startsWith('ru');

  if (!isEs && !isRu && referrer) {
    try {
      const refUrl = new URL(referrer);
      if (refUrl.pathname.startsWith('/es/')) isEs = true;
      else if (refUrl.pathname.startsWith('/ru/')) isRu = true;
    } catch {}
  }

  // Fallback to Spanish if navigator language is Spanish (common default for author & primary user)
  if (!isEs && !isRu && typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
    isEs = true;
  }

  // Extract template slug
  const match = pathname.match(/(?:^|\/)(?:[a-z]{2}\/)?preview\/([^/]+)/);
  const templateSlug = match ? match[1] : '';

  // Determine target back URL
  const langPrefix = isEs ? '/es' : isRu ? '/ru' : '';
  const backUrl = templateSlug ? `${langPrefix}/templates/${templateSlug}/` : `${langPrefix}/templates/`;

  // Human-readable template label
  const templateLabels: Record<string, string> = {
    'food-delivery': 'Food Delivery CMS',
    'construction': isEs ? 'Construcción & Inmobiliaria' : 'Construction & Real Estate',
    'dental': isEs ? 'Clínica Dental' : 'Dental Clinic SaaS',
    'moving': isEs ? 'Mudanzas & Flota' : 'Moving & Logistics',
    'saas-hotel': 'Hotel OS & Frontdesk',
    'saas-clinic': 'Clinic & Telehealth',
    'cyberpunk': 'Cyberpunk Terminal OS',
    'ecommerce': 'Modern E-Commerce',
    'ecommerce-editorial': 'Editorial Store',
    'toy-store': 'Toy Store 3D',
    'agency': 'Creative Agency',
    'portfolio': 'Developer Portfolio',
  };
  const templateName = templateLabels[templateSlug] || templateSlug.replace(/-/g, ' ');

  // Localized strings
  const strings = isEs
    ? {
        back: 'Volver a la plantilla',
        backShort: 'Volver',
        prompt: '¿Te gusta este template?',
        star: 'Danos una ⭐ en GitHub',
        starBtn: 'Dar estrella',
        dismiss: 'Cerrar barra',
        previewBadge: 'Vista previa',
      }
    : isRu
    ? {
        back: 'Назад к шаблону',
        backShort: 'Назад',
        prompt: 'Нравится шаблон?',
        star: 'Поставьте ⭐ на GitHub',
        starBtn: 'Поставить звезду',
        dismiss: 'Закрыть',
        previewBadge: 'Превью',
      }
    : {
        back: 'Back to template',
        backShort: 'Back',
        prompt: 'Like this template?',
        star: 'Give us a ⭐ on GitHub',
        starBtn: 'Star on GitHub',
        dismiss: 'Dismiss',
        previewBadge: 'Live Preview',
      };

  function insertBar() {
    if (document.getElementById('ack-preview-top-bar')) return;

    // Inject styles
    const style = document.createElement('style');
    style.id = 'ack-preview-top-bar-styles';
    style.textContent = `
      #ack-preview-top-bar {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        height: 42px;
        padding: 0 1rem;
        box-sizing: border-box;
        background: rgba(10, 12, 18, 0.92);
        -webkit-backdrop-filter: blur(14px);
        backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
        color: #f1f5f9;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 13px;
        line-height: 1;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
      }
      #ack-preview-top-bar * {
        box-sizing: border-box;
      }
      .ack-pb__left {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        min-width: 0;
        flex-shrink: 0;
      }
      .ack-pb__back {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        height: 28px;
        padding: 0 0.7rem;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: #f8fafc;
        text-decoration: none;
        font-weight: 500;
        font-size: 12px;
        transition: all 0.15s ease;
        white-space: nowrap;
        cursor: pointer;
      }
      .ack-pb__back:hover {
        background: rgba(255, 255, 255, 0.14);
        border-color: rgba(255, 255, 255, 0.25);
        color: #ffffff;
        transform: translateX(-1px);
      }
      .ack-pb__back svg {
        transition: transform 0.15s ease;
      }
      .ack-pb__back:hover svg {
        transform: translateX(-2px);
      }
      .ack-pb__tag {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        height: 22px;
        padding: 0 0.5rem;
        border-radius: 999px;
        background: rgba(99, 102, 241, 0.15);
        border: 1px solid rgba(99, 102, 241, 0.3);
        color: #a5b4fc;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.02em;
        white-space: nowrap;
      }
      .ack-pb__tag-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #818cf8;
        box-shadow: 0 0 6px #818cf8;
      }
      .ack-pb__center {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        flex: 1;
        min-width: 0;
        text-align: center;
      }
      .ack-pb__msg {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        color: #cbd5e1;
        font-size: 12.5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ack-pb__msg strong {
        color: #ffffff;
        font-weight: 600;
      }
      .ack-pb__msg-star {
        display: inline-block;
        color: #fbbf24;
        filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.5));
        animation: ack-pb-pulse 2s infinite ease-in-out;
      }
      @keyframes ack-pb-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.18); }
      }
      .ack-pb__right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
      }
      .ack-pb__star-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        height: 28px;
        padding: 0 0.75rem;
        border-radius: 6px;
        background: linear-gradient(135deg, rgba(234, 179, 8, 0.18), rgba(245, 158, 11, 0.28));
        border: 1px solid rgba(250, 204, 21, 0.4);
        color: #fef08a;
        text-decoration: none;
        font-weight: 600;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(234, 179, 8, 0.15);
        transition: all 0.15s ease;
        white-space: nowrap;
      }
      .ack-pb__star-btn:hover {
        background: linear-gradient(135deg, rgba(234, 179, 8, 0.3), rgba(245, 158, 11, 0.45));
        border-color: rgba(250, 204, 21, 0.7);
        color: #ffffff;
        box-shadow: 0 0 14px rgba(234, 179, 8, 0.3);
        transform: translateY(-1px);
      }
      .ack-pb__star-btn svg {
        color: #facc15;
      }
      .ack-pb__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        padding: 0;
        border-radius: 6px;
        background: transparent;
        border: 1px solid transparent;
        color: #94a3b8;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .ack-pb__close:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.12);
        color: #ffffff;
      }
      .ack-pb__close:focus-visible {
        outline: 2px solid #818cf8;
        outline-offset: 1px;
      }
      .ack-pb__text-full { display: inline; }
      .ack-pb__text-short { display: none; }

      @media (max-width: 860px) {
        .ack-pb__tag { display: none; }
        .ack-pb__text-full { display: none; }
        .ack-pb__text-short { display: inline; }
      }
      @media (max-width: 640px) {
        #ack-preview-top-bar {
          height: 38px;
          padding: 0 0.6rem;
          gap: 0.5rem;
        }
        .ack-pb__center {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);

    // Build Top Bar DOM
    const bar = document.createElement('aside');
    bar.id = 'ack-preview-top-bar';
    bar.setAttribute('role', 'banner');
    bar.setAttribute('aria-label', strings.previewBadge);

    bar.innerHTML = `
      <div class="ack-pb__left">
        <a href="${backUrl}" class="ack-pb__back" id="ack-pb-back" title="${strings.back}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span class="ack-pb__text-full">${strings.back}</span>
          <span class="ack-pb__text-short">${strings.backShort}</span>
        </a>
        ${templateName ? `
          <span class="ack-pb__tag" title="${templateName}">
            <span class="ack-pb__tag-dot" aria-hidden="true"></span>
            ${templateName}
          </span>
        ` : ''}
      </div>

      <div class="ack-pb__center">
        <div class="ack-pb__msg">
          <span class="ack-pb__msg-star" aria-hidden="true">★</span>
          <span>${strings.prompt} <strong>${strings.star}</strong></span>
        </div>
      </div>

      <div class="ack-pb__right">
        <a href="https://github.com/konstantinWDK/astro-components" target="_blank" rel="noopener noreferrer" class="ack-pb__star-btn" title="GitHub — konstantinWDK/astro-components">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>${strings.starBtn}</span>
        </a>

        <button type="button" class="ack-pb__close" id="ack-pb-close" aria-label="${strings.dismiss}" title="${strings.dismiss}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    `;

    document.body.prepend(bar);

    // Wire Back Button: if referrer is on this domain, use referrer, else fallback to backUrl
    const backBtn = document.getElementById('ack-pb-back');
    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        if (
          document.referrer &&
          document.referrer.includes(window.location.host) &&
          document.referrer.includes('/templates')
        ) {
          e.preventDefault();
          window.location.href = document.referrer;
        }
      });
    }

    // Wire Dismiss Button
    const closeBtn = document.getElementById('ack-pb-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        bar.style.opacity = '0';
        bar.style.transform = 'translateY(-100%)';
        try {
          sessionStorage.setItem(STORAGE_KEY, '1');
        } catch {}
        setTimeout(() => {
          bar.remove();
          style.remove();
        }, 260);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBar);
  } else {
    insertBar();
  }
})();

