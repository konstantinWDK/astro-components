// src/components/lib/templates/agency/data.ts
// Demo content for the marketing agency template ("Volta"): services (Ads, SEO, Web),
// case studies, pricing, team and FAQs. Copy this file, edit it and pass it as `site` to every page.

export type AgencyServiceSlug = 'ads' | 'seo' | 'web';

export interface AgencyRoutes {
  home: string;
  services: string;
  /** Service URL prefix — pages live at `${service}${slug}/`. */
  service: string;
  work: string;
  /** Case-study URL prefix — pages live at `${caseStudy}${slug}/`. */
  caseStudy: string;
  pricing: string;
  about: string;
  contact: string;
}

export interface AgencyStat { value: string; label: string; detail?: string }
export interface AgencyStep { title: string; text: string; duration?: string }
export interface AgencyFaq { question: string; answer: string }
export interface AgencyQuote { quote: string; name: string; role: string; company: string; result?: string }

export interface AgencyService {
  slug: AgencyServiceSlug;
  name: string;
  /** Short line for cards. */
  short: string;
  /** Longer pitch for the service page. */
  pitch: string;
  icon: 'ads' | 'seo' | 'web';
  kpi: AgencyStat;
  deliverables: string[];
  timeline: string;
  from: string;
  included: Array<{ title: string; text: string }>;
  tools: string[];
  outcomes: AgencyStat[];
  process: AgencyStep[];
  faqs: AgencyFaq[];
}

export interface AgencyCase {
  slug: string;
  client: string;
  title: string;
  category: 'Ads' | 'SEO' | 'Web';
  services: string[];
  result: string;
  year: string;
  hue: number;
  industry: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string[];
  metrics: Array<{ label: string; before: string; after: string; change: string }>;
  /** 12 monthly values for the results chart (any unit). */
  series: number[];
  seriesLabel: string;
  quote: AgencyQuote;
}

export interface AgencyPackage {
  name: string;
  price: number;
  /** 'monthly' retainers get the billing toggle; 'project' prices are one-off. */
  billing: 'monthly' | 'project';
  note: string;
  features: string[];
  featured?: boolean;
}

export interface AgencySite {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  currency: string;
  locale: string;
  offices: Array<{ city: string; address: string }>;
  socials: Array<{ label: string; href: string }>;
  services: AgencyService[];
  cases: AgencyCase[];
  pricing: Record<AgencyServiceSlug, AgencyPackage[]>;
  stats: AgencyStat[];
  process: AgencyStep[];
  platforms: string[];
  quotes: AgencyQuote[];
  team: Array<{ name: string; role: string; location?: string; fact?: string; links?: Array<{ label: string; href: string }> }>;
  values: Array<{ title: string; text: string }>;
  faqs: AgencyFaq[];
}

export const agencyRoutes: AgencyRoutes = {
  home: '/',
  services: '/services/',
  service: '/services/',
  work: '/work/',
  caseStudy: '/work/',
  pricing: '/pricing/',
  about: '/about/',
  contact: '/contact/',
};

export const agencyServiceHref = (routes: AgencyRoutes, slug: string) => `${routes.service}${slug}/`;
export const agencyCaseHref = (routes: AgencyRoutes, slug: string) => `${routes.caseStudy}${slug}/`;

export const voltaAgency: AgencySite = {
  name: 'Volta',
  tagline: 'Performance marketing, SEO and websites for brands that want measurable growth.',
  email: 'hello@volta.agency',
  phone: '+34 910 123 456',
  currency: 'EUR',
  locale: 'en-IE',
  offices: [
    { city: 'Madrid', address: 'Calle de Fuencarral 45, 28004' },
    { city: 'Lisbon', address: 'Rua das Flores 12, 1200-195' },
  ],
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'X', href: '#' },
  ],

  services: [
    {
      slug: 'ads',
      name: 'Paid Ads',
      short: 'Google, Meta, TikTok and LinkedIn campaigns built around profit, not clicks.',
      pitch: 'We plan, build and optimise paid campaigns across search, social and video. Every euro is tracked from impression to revenue, and every week we move budget to what is actually selling.',
      icon: 'ads',
      kpi: { value: '4.8×', label: 'average ROAS' },
      deliverables: ['Account audit', 'Campaign build', 'Creative testing', 'Server-side tracking', 'Weekly optimisation'],
      timeline: 'Live in 2 weeks',
      from: '€1,900 / mo',
      included: [
        { title: 'Full-funnel strategy', text: 'Prospecting, retargeting and retention campaigns mapped to your margins and LTV.' },
        { title: 'Creative that converts', text: 'Hooks, static and short-form video variants tested every two weeks.' },
        { title: 'Tracking you can trust', text: 'GA4, Conversions API and server-side tagging so the platforms optimise on real data.' },
        { title: 'Budget pacing', text: 'Daily checks on spend, CPA and ROAS with automatic alerts when something drifts.' },
        { title: 'Landing page CRO', text: 'A/B tests on the pages your ads send traffic to — included, not extra.' },
        { title: 'Live dashboard', text: 'One Looker Studio report with spend, revenue and profit per channel.' },
      ],
      tools: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'GA4', 'Looker Studio'],
      outcomes: [
        { value: '4.8×', label: 'average ROAS' },
        { value: '−38%', label: 'cost per acquisition' },
        { value: '€42M', label: 'ad spend managed' },
      ],
      process: [
        { title: 'Audit', text: 'We review accounts, tracking and creatives and size the opportunity.', duration: 'Week 1' },
        { title: 'Rebuild', text: 'New structure, audiences, tracking and the first creative batch.', duration: 'Week 2' },
        { title: 'Test', text: 'Structured tests on offers, hooks and bidding with clear stop rules.', duration: 'Weeks 3–8' },
        { title: 'Scale', text: 'Budget follows the winners while profit stays above target.', duration: 'Ongoing' },
      ],
      faqs: [
        { question: 'What ad budget do I need?', answer: 'We recommend at least €3,000 per month in media so tests reach significance. Our fee is separate and fixed.' },
        { question: 'Do you take a percentage of spend?', answer: 'No. Fixed monthly fees mean we have no incentive to spend more than makes sense.' },
        { question: 'Who owns the ad accounts?', answer: 'You do. We work inside your accounts and you keep everything if we part ways.' },
      ],
    },
    {
      slug: 'seo',
      name: 'SEO',
      short: 'Technical SEO, content and links that compound into traffic you do not pay for.',
      pitch: 'We fix what holds your site back, publish content that answers what your buyers search for and earn links from sites that matter. Organic growth takes months — so we report on leading indicators from week one.',
      icon: 'seo',
      kpi: { value: '+212%', label: 'organic traffic in 12 months' },
      deliverables: ['Technical audit', 'Keyword strategy', 'Content production', 'Digital PR', 'Monthly reporting'],
      timeline: 'First wins in 6–8 weeks',
      from: '€1,500 / mo',
      included: [
        { title: 'Technical foundations', text: 'Crawl, indexation, Core Web Vitals, structured data and internal linking.' },
        { title: 'Keyword & topic map', text: 'Every page mapped to search intent and a business outcome.' },
        { title: 'Content that ranks', text: 'Briefs, writing and editing by specialists in your industry.' },
        { title: 'Digital PR & links', text: 'Data-led stories that earn coverage and authority, never bought links.' },
        { title: 'Local & international', text: 'Google Business Profile, hreflang and multi-market setups.' },
        { title: 'Search-to-revenue reporting', text: 'Rankings, traffic and the leads and sales they produce.' },
      ],
      tools: ['Search Console', 'Ahrefs', 'Screaming Frog', 'GA4', 'PageSpeed', 'Looker Studio'],
      outcomes: [
        { value: '+212%', label: 'organic traffic' },
        { value: '1,340', label: 'page-one keywords' },
        { value: '3.1×', label: 'organic leads' },
      ],
      process: [
        { title: 'Audit', text: 'Technical crawl, competitors and the keywords you are missing.', duration: 'Weeks 1–2' },
        { title: 'Fix', text: 'Quick technical wins shipped with your team or ours.', duration: 'Weeks 3–6' },
        { title: 'Publish', text: 'A steady cadence of content mapped to buying intent.', duration: 'Monthly' },
        { title: 'Earn', text: 'Digital PR and partnerships that build authority.', duration: 'Ongoing' },
      ],
      faqs: [
        { question: 'How long until we see results?', answer: 'Technical fixes often move rankings within 6–8 weeks; content and links compound over 6–12 months.' },
        { question: 'Do you write the content?', answer: 'Yes — specialist writers and editors. You approve every brief and every article.' },
        { question: 'Do you guarantee rankings?', answer: 'Nobody honestly can. We commit to the work, the process and transparent reporting.' },
      ],
    },
    {
      slug: 'web',
      name: 'Web Development',
      short: 'Fast, accessible websites and landing pages designed to turn visitors into leads.',
      pitch: 'We design and build marketing websites that load in under a second, rank well and are easy for your team to update. Strategy, UX, copy, design and development under one roof.',
      icon: 'web',
      kpi: { value: '0.8s', label: 'median load time' },
      deliverables: ['UX & content', 'Design system', 'Astro build', 'Headless CMS', 'Analytics & CRO'],
      timeline: '6–10 weeks',
      from: '€9,500',
      included: [
        { title: 'Conversion-first UX', text: 'Messaging, page structure and journeys built around your best leads.' },
        { title: 'Custom design system', text: 'Components and templates your team can recombine without a developer.' },
        { title: 'Lightning-fast build', text: 'Astro, image optimisation and edge hosting: 95+ Lighthouse scores.' },
        { title: 'Headless CMS', text: 'Edit pages, blog posts and landing pages in a CMS your team will like.' },
        { title: 'SEO-ready from day one', text: 'Redirect maps, schema, sitemaps and metadata handled before launch.' },
        { title: 'Care plan', text: 'Monitoring, updates and a monthly block of improvement hours.' },
      ],
      tools: ['Figma', 'Astro', 'Storyblok', 'Vercel', 'GA4', 'Hotjar'],
      outcomes: [
        { value: '0.8s', label: 'median load time' },
        { value: '+64%', label: 'conversion rate' },
        { value: '98', label: 'Lighthouse score' },
      ],
      process: [
        { title: 'Discover', text: 'Workshops, analytics review and the sitemap.', duration: 'Weeks 1–2' },
        { title: 'Design', text: 'Wireframes, visual design and prototype in Figma.', duration: 'Weeks 3–5' },
        { title: 'Build', text: 'Development, CMS setup, content migration and QA.', duration: 'Weeks 6–9' },
        { title: 'Launch', text: 'Redirects, tracking, training and a 30-day hypercare.', duration: 'Week 10' },
      ],
      faqs: [
        { question: 'Can you migrate our current site?', answer: 'Yes. We map every URL and set up redirects so you keep your rankings.' },
        { question: 'Which CMS do you use?', answer: 'Usually Storyblok or Sanity, but we can build on WordPress or your existing stack.' },
        { question: 'Do you offer maintenance?', answer: 'Every site includes 30 days of hypercare; after that, care plans start at €450 per month.' },
      ],
    },
  ],

  cases: [
    {
      slug: 'nordlys-skincare',
      client: 'Nordlys',
      title: 'Scaling a skincare brand to 6.2× ROAS on Meta and Google',
      category: 'Ads',
      services: ['Meta Ads', 'Google Shopping', 'Creative'],
      result: '6.2× ROAS',
      year: '2026',
      hue: 190,
      industry: 'Beauty · D2C e-commerce',
      duration: '9 months',
      summary: 'Nordlys had a loyal community but paid social stopped scaling past €20k a month. We rebuilt tracking, campaign structure and the creative engine.',
      challenge: 'Rising CPMs, a single hero ad that had fatigued and tracking that missed 30% of purchases after iOS changes. Every new campaign seemed to cannibalise the last one.',
      approach: [
        'Server-side tracking with Conversions API recovered the missing purchase data.',
        'A simple three-campaign structure (prospect, retarget, retain) with broad audiences.',
        'Twelve new creatives every two weeks, led by founder and customer videos.',
        'Google Shopping feed rebuilt with margin labels so high-profit products get the budget.',
      ],
      metrics: [
        { label: 'ROAS', before: '2.1×', after: '6.2×', change: '+195%' },
        { label: 'Monthly revenue from ads', before: '€42k', after: '€188k', change: '+348%' },
        { label: 'Cost per purchase', before: '€38', after: '€19', change: '−50%' },
      ],
      series: [42, 48, 55, 61, 78, 92, 104, 118, 131, 149, 166, 188],
      seriesLabel: 'Revenue from ads (€k / month)',
      quote: { quote: 'Volta treated our ad budget like their own money. We tripled revenue without tripling spend.', name: 'Freja Lund', role: 'Co-founder', company: 'Nordlys', result: '6.2× ROAS' },
    },
    {
      slug: 'casa-alba-hotels',
      client: 'Casa Alba',
      title: 'Direct bookings up 64% with a new website and local SEO',
      category: 'Web',
      services: ['Website', 'Local SEO', 'CRO'],
      result: '+64% direct revenue',
      year: '2025',
      hue: 25,
      industry: 'Hospitality · Boutique hotels',
      duration: '10 weeks + 6 months SEO',
      summary: 'A group of four boutique hotels paying 18% commission to booking platforms on most stays. They wanted guests to book direct.',
      challenge: 'A slow theme-based website, a booking engine hidden behind three clicks and no local SEO, so every search for the hotels led to an OTA listing first.',
      approach: [
        'A new Astro website with the booking widget on every page and a 0.7-second load time.',
        'Room and experience pages written for the searches guests actually make.',
        'Google Business Profiles, reviews and local schema for all four properties.',
        'A best-rate guarantee and member perks to make direct booking the obvious choice.',
      ],
      metrics: [
        { label: 'Direct booking revenue', before: '€61k', after: '€100k', change: '+64%' },
        { label: 'Mobile conversion rate', before: '0.9%', after: '2.4%', change: '+167%' },
        { label: 'Page load (mobile)', before: '4.8s', after: '0.7s', change: '−85%' },
      ],
      series: [61, 60, 63, 66, 71, 76, 80, 84, 88, 93, 97, 100],
      seriesLabel: 'Direct booking revenue (€k / month)',
      quote: { quote: 'For the first time our own website is our best salesperson. The commission we save paid for the project in four months.', name: 'Lucía Romero', role: 'Commercial director', company: 'Casa Alba', result: '+64% direct revenue' },
    },
    {
      slug: 'fintrack-saas',
      client: 'Fintrack',
      title: 'Halving the cost per signup for a B2B finance SaaS',
      category: 'Ads',
      services: ['LinkedIn Ads', 'Google Ads', 'Landing pages'],
      result: '−48% CPA',
      year: '2026',
      hue: 280,
      industry: 'B2B SaaS · Fintech',
      duration: '6 months',
      summary: 'Fintrack sells expense software to finance teams. Paid search was profitable but tiny, and LinkedIn burned budget on the wrong job titles.',
      challenge: 'Leads came from students and freelancers, sales ignored most of them, and nobody could say which campaign produced pipeline.',
      approach: [
        'CRM integration so campaigns optimise on qualified pipeline, not form fills.',
        'LinkedIn audiences rebuilt around company size and finance job functions.',
        'Competitor and problem-aware search campaigns with dedicated landing pages.',
        'A demo-first landing page that doubled the conversion rate.',
      ],
      metrics: [
        { label: 'Cost per qualified signup', before: '€310', after: '€161', change: '−48%' },
        { label: 'Qualified pipeline / month', before: '€120k', after: '€410k', change: '+242%' },
        { label: 'Landing page conversion', before: '3.2%', after: '7.9%', change: '+147%' },
      ],
      series: [120, 132, 160, 198, 241, 270, 302, 331, 356, 380, 398, 410],
      seriesLabel: 'Qualified pipeline (€k / month)',
      quote: { quote: 'They speak finance and they speak CAC. Our sales team finally trusts marketing leads.', name: 'Tomás Ferreira', role: 'VP Growth', company: 'Fintrack', result: '−48% CPA' },
    },
    {
      slug: 'pace-running',
      client: 'Pace',
      title: 'From 4k to 41k monthly organic visits for a running app',
      category: 'SEO',
      services: ['Technical SEO', 'Content', 'Digital PR'],
      result: '+925% organic traffic',
      year: '2025',
      hue: 80,
      industry: 'Consumer app · Sport',
      duration: '12 months',
      summary: 'Pace had a great app and a blog nobody read. We turned it into the go-to resource for training plans in two languages.',
      challenge: 'A JavaScript-heavy site Google could barely crawl, thin articles and zero backlinks from running media.',
      approach: [
        'Pre-rendered pages and a clean internal-link structure Google could crawl.',
        '120 training-plan pages generated from real coaching data and reviewed by coaches.',
        'Two data studies on running habits that earned 140 referring domains.',
        'App-install prompts on every guide, measured as conversions in GA4.',
      ],
      metrics: [
        { label: 'Organic sessions / month', before: '4.0k', after: '41k', change: '+925%' },
        { label: 'Keywords on page one', before: '38', after: '1,340', change: '+3,426%' },
        { label: 'App installs from organic', before: '210', after: '3,900', change: '+1,757%' },
      ],
      series: [4, 5, 7, 9, 12, 16, 20, 24, 29, 33, 37, 41],
      seriesLabel: 'Organic sessions (k / month)',
      quote: { quote: 'Our training guides now bring more installs than our paid campaigns did — and they keep working while we sleep.', name: 'Daniel Okafor', role: 'Founder', company: 'Pace', result: '+925% organic traffic' },
    },
    {
      slug: 'verde-legal',
      client: 'Verde Legal',
      title: 'A law firm that now wins clients from Google, not referrals only',
      category: 'SEO',
      services: ['Local SEO', 'Content', 'Website'],
      result: '3.1× organic leads',
      year: '2026',
      hue: 150,
      industry: 'Professional services · Legal',
      duration: '8 months',
      summary: 'A 20-lawyer firm relying entirely on referrals wanted a predictable source of new clients in three cities.',
      challenge: 'Competitors dominated the map pack and the firm’s practice-area pages were a single paragraph each.',
      approach: [
        'Location and practice-area pages written with the lawyers, each answering real client questions.',
        'Google Business Profiles optimised and a review program for satisfied clients.',
        'A faster site with clear calls to book a first consultation.',
        'Call tracking so every lead is attributed to its source.',
      ],
      metrics: [
        { label: 'Organic leads / month', before: '14', after: '44', change: '+214%' },
        { label: 'Map-pack visibility', before: '9%', after: '61%', change: '+52 pts' },
        { label: 'Cost per lead vs ads', before: '€190', after: '€38', change: '−80%' },
      ],
      series: [14, 15, 17, 19, 22, 26, 29, 33, 36, 39, 42, 44],
      seriesLabel: 'Organic leads / month',
      quote: { quote: 'We hired two lawyers this year because of the leads coming from search.', name: 'Elena Prieto', role: 'Managing partner', company: 'Verde Legal', result: '3.1× organic leads' },
    },
    {
      slug: 'kora-furniture',
      client: 'Kora',
      title: 'A headless store that loads in under a second and sells 41% more',
      category: 'Web',
      services: ['Headless Shopify', 'UX', 'Performance'],
      result: '+41% conversion rate',
      year: '2025',
      hue: 330,
      industry: 'Retail · Furniture',
      duration: '12 weeks',
      summary: 'Kora sells design furniture online. Their theme was slow, product pages were confusing and mobile shoppers left before seeing a price.',
      challenge: 'A 6-second mobile load, apps fighting each other and a checkout that dropped 70% of mobile visitors.',
      approach: [
        'A headless Shopify storefront built with Astro and edge rendering.',
        'Product pages redesigned around dimensions, materials and delivery dates.',
        'Room visualiser and swatch requests that capture high-intent leads.',
        'Weekly A/B tests after launch on product and cart pages.',
      ],
      metrics: [
        { label: 'Conversion rate', before: '1.2%', after: '1.7%', change: '+41%' },
        { label: 'Mobile load time', before: '6.1s', after: '0.9s', change: '−85%' },
        { label: 'Average order value', before: '€640', after: '€735', change: '+15%' },
      ],
      series: [1.2, 1.2, 1.25, 1.3, 1.38, 1.44, 1.5, 1.55, 1.6, 1.63, 1.67, 1.7],
      seriesLabel: 'Conversion rate (%)',
      quote: { quote: 'The new store paid for itself in the first quarter. Our customers keep telling us how fast it is.', name: 'Mikkel Sørensen', role: 'CEO', company: 'Kora', result: '+41% conversion rate' },
    },
  ],

  pricing: {
    ads: [
      { name: 'Launch', price: 1900, billing: 'monthly', note: 'For brands spending up to €15k / month on ads.', features: ['2 ad platforms', 'Monthly creative batch (6 ads)', 'Conversion tracking setup', 'Monthly report & call'] },
      { name: 'Growth', price: 3400, billing: 'monthly', note: 'For brands spending €15–60k / month.', features: ['Up to 4 ad platforms', 'Bi-weekly creative batch (12 ads)', 'Server-side tracking', 'Landing page A/B tests', 'Weekly report & Slack channel'], featured: true },
      { name: 'Scale', price: 5900, billing: 'monthly', note: 'For brands spending €60k+ / month.', features: ['All platforms incl. YouTube & CTV', 'Weekly creative production', 'Marketing mix modelling', 'Dedicated growth team', 'Quarterly strategy workshop'] },
    ],
    seo: [
      { name: 'Foundations', price: 1500, billing: 'monthly', note: 'Fix the technical basics and grow one market.', features: ['Technical audit & fixes', '4 optimised pages / month', 'Keyword tracking', 'Monthly report'] },
      { name: 'Authority', price: 2900, billing: 'monthly', note: 'Content and links to win competitive keywords.', features: ['Everything in Foundations', '8 new articles / month', 'Digital PR campaign / quarter', 'Local SEO for 3 locations', 'Search-to-revenue dashboard'], featured: true },
      { name: 'Enterprise', price: 4800, billing: 'monthly', note: 'Large sites, many markets, complex stacks.', features: ['International & hreflang', '16 articles / month', 'Monthly digital PR', 'Developer hours included', 'Dedicated SEO lead'] },
    ],
    web: [
      { name: 'Landing page', price: 3200, billing: 'project', note: 'One high-converting page for a campaign or launch.', features: ['Copy & design', 'Astro build', 'A/B test setup', 'Delivered in 2 weeks'] },
      { name: 'Website', price: 9500, billing: 'project', note: 'Up to 12 templates with a headless CMS.', features: ['UX & content strategy', 'Custom design system', 'Headless CMS', 'SEO migration', '30 days hypercare'], featured: true },
      { name: 'E-commerce', price: 18000, billing: 'project', note: 'Headless Shopify store built for speed.', features: ['Headless Shopify + Astro', 'Product & checkout UX', 'Integrations & tracking', 'CRO roadmap', '60 days hypercare'] },
    ],
  },

  stats: [
    { value: '€42M', label: 'ad spend managed', detail: 'across Google, Meta, TikTok and LinkedIn' },
    { value: '4.8×', label: 'average client ROAS', detail: 'last 12 months, e-commerce clients' },
    { value: '+212%', label: 'median organic growth', detail: 'after 12 months of SEO' },
    { value: '96%', label: 'client retention', detail: 'clients renewing after year one' },
  ],

  process: [
    { title: 'Free audit', text: 'We review your ads, site and search presence and show you the biggest opportunities — no strings attached.', duration: 'Week 0' },
    { title: 'Growth plan', text: 'A 90-day plan with targets, budget, channels and the experiments we will run first.', duration: 'Week 1' },
    { title: 'Launch', text: 'Tracking, campaigns, content and pages go live with the team that planned them.', duration: 'Weeks 2–4' },
    { title: 'Optimise', text: 'Weekly tests, monthly reviews and budget that follows what is working.', duration: 'Ongoing' },
  ],

  platforms: ['Google Ads', 'Meta', 'TikTok', 'LinkedIn', 'YouTube', 'Microsoft Ads', 'Google Analytics 4', 'Search Console', 'Shopify', 'HubSpot', 'Astro', 'Looker Studio'],

  quotes: [
    { quote: 'Volta treated our ad budget like their own money. We tripled revenue without tripling spend.', name: 'Freja Lund', role: 'Co-founder', company: 'Nordlys', result: '6.2× ROAS' },
    { quote: 'For the first time our own website is our best salesperson.', name: 'Lucía Romero', role: 'Commercial director', company: 'Casa Alba', result: '+64% direct revenue' },
    { quote: 'They speak finance and they speak CAC. Our sales team finally trusts marketing leads.', name: 'Tomás Ferreira', role: 'VP Growth', company: 'Fintrack', result: '−48% CPA' },
    { quote: 'We hired two lawyers this year because of the leads coming from search.', name: 'Elena Prieto', role: 'Managing partner', company: 'Verde Legal', result: '3.1× organic leads' },
  ],

  team: [
    { name: 'Marta Ibáñez', role: 'Founder & strategy director', location: 'Madrid', fact: 'Has managed €20M+ in paid search budgets.', links: [{ label: 'LinkedIn', href: '#' }] },
    { name: 'Aisha Bello', role: 'Head of paid media', location: 'Lisbon', fact: 'Tests 40 ad creatives a week — and keeps a spreadsheet of every hook.', links: [{ label: 'LinkedIn', href: '#' }] },
    { name: 'Jonas Weber', role: 'Head of SEO', location: 'Berlin', fact: 'Read every Google patent since 2004. Twice.', links: [{ label: 'LinkedIn', href: '#' }] },
    { name: 'Leo Martins', role: 'Lead developer', location: 'Remote', fact: 'Has never shipped a site with a Lighthouse score under 95.', links: [{ label: 'GitHub', href: '#' }] },
    { name: 'Carmen Ruiz', role: 'Content lead', location: 'Madrid', fact: 'Former journalist; edits every article before it ships.', links: [{ label: 'LinkedIn', href: '#' }] },
    { name: 'Noah Kim', role: 'Data & analytics', location: 'Lisbon', fact: 'Builds the dashboards clients actually open.', links: [{ label: 'LinkedIn', href: '#' }] },
    { name: 'Inés Duarte', role: 'Creative director', location: 'Lisbon', fact: 'Shot 300 short-form ads last year on a phone.', links: [{ label: 'Instagram', href: '#' }] },
  ],

  values: [
    { title: 'Profit over vanity', text: 'We report revenue, pipeline and margin — not impressions.' },
    { title: 'Senior people only', text: 'The specialists who pitch are the ones who do the work.' },
    { title: 'No lock-in', text: 'Monthly contracts, your accounts, your data, your code.' },
  ],

  faqs: [
    { question: 'Do you work with companies like mine?', answer: 'We work best with e-commerce, SaaS and service businesses that already have product-market fit and want to grow faster.' },
    { question: 'What does the free audit include?', answer: 'A 30-minute call and a written report on your ads, SEO and website with the three biggest opportunities we see.' },
    { question: 'Are there long-term contracts?', answer: 'No. Retainers are monthly after a 3-month initial period; websites are fixed-price projects.' },
    { question: 'Can you work with our in-house team?', answer: 'Yes — many clients keep an internal marketer and use us for specialist channels and execution.' },
    { question: 'How do you report results?', answer: 'A live dashboard, a monthly review call and a weekly update in a shared Slack channel.' },
    { question: 'Which markets do you cover?', answer: 'We run campaigns and SEO in English, Spanish, Portuguese and German across Europe and the Americas.' },
  ],
};

/** Formats a price with the site's currency and locale. */
export const agencyMoney = (site: AgencySite, n: number) =>
  new Intl.NumberFormat(site.locale, { style: 'currency', currency: site.currency, maximumFractionDigits: 0 }).format(n);
