# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.8.2] - 2026-11-23

### Added
- **Custom bicycle workshop template "Biela"** (`astro-component-kit/templates/bike-workshop`): six pages and no real functionality (demo data only). A live configurator with a bike drawn in SVG from a real geometry (gravel, road, city, track) that changes colour, tube thickness, mudguards, rack, light and leather, with type, frame material, transmission filtered by type, wheels, colour, extras and size, a live price and delivery time, a native reservation dialog and a shareable URL; a builds gallery with filter, sort and "start from this bike"; the workshop page with six exclusive-details stages, a materials table that turns into cards on phones and the build queue by month with a waiting list; a size and fit calculator; and a visit booking that generates the next open days in the browser. Light and dark themes.
- App components: `BielaBike`, `BielaConfigurator`, `BielaBuilds`, `BielaFit`, `BielaSlots`, `BielaVisit`, `BielaHero`, `BielaProcess`, `BielaMaterials`, `BielaHeader` and `BielaFooter`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `bike-workshop`) and the live preview is at `/preview/bike-workshop/`.
- **AI-agents workspace template "Nexo"** (`astro-component-kit/templates/ai-agents`): UI for an AI-agents app, six screens and no real functionality (demo data only). A general chat with a conversation list, message log with openable tool-call blocks, an agent picker and an inspector, where sending streams a canned reply word by word with a Stop button; agent management with a native create/edit dialog; users and roles with a searchable table that turns into cards on phones, invitations, suspend/remove with confirmation and a written permissions matrix; integrations with provider cards, a masked API-key table (add, rotate with one-time reveal, revoke), webhooks with send-test and a copyable request example; usage with a 7/30-day chart plus equivalent table, share per agent and spending limits; and sign-in. Light and dark themes.
- App components: `AgtChat`, `AgtAgents`, `AgtUsers`, `AgtIntegrations`, `AgtUsage`, `AgtSidebar` (bottom tab bar on phones), `AgtTopbar`, `AgtHeading` and `AgtSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `ai-agents`) and the live preview is at `/preview/ai-agents/`.
- **Motocross shop template "Barro"** (`astro-component-kit/templates/motocross`): e-commerce for a motocross shop. Home with a speed-stripes hero and category list, a scroll-driven ride scene that plays like a short film (a bike rides along a dirt track at sunset, a ramp arrives and it jumps, tilts and lands in dust), the most requested products and FAQ; the shop with search, category filter, maximum-price slider, stock switch and sorting over bikes and gear illustrated in SVG; the product page with options that change the price live (`?p=id`); "your bike", with a comparison of up to three bikes with bars scaled to the best value, a financing simulator with a principal-versus-interest chart and a gear size guide; a cart and checkout with free-shipping progress, promo code and demo payment; and a customer area with sign-in, a home (the order on its way and the garage with a maintenance plan per bike), orders with tracking and returns, and a wish list. 9 page types, asphalt-black and hot-orange theme with an impact condensed type (Barlow Condensed) and light/dark variants.
- Sections: `MotoHero`, `MotoRide`, `MotoShop`, `MotoProduct`, `MotoCompare`, `MotoFinance`, `MotoSizeGuide`, `MotoCart`, `MotoFaq`, `MotoFooter` (new "Motocross" section category).
- App components: `MotoArt`, `MotoAccountSummary`, `MotoOrders`, `MotoWishlist`, plus its own customer shell: `MotoAccountNav` (bottom tab bar on phones), `MotoAccountTopbar`, `MotoAccountHeading` and `MotoSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `motocross`) and the live preview is at `/preview/motocross/`.
- **Fishing-tackle shop template "Corcho"** (`astro-component-kit/templates/fishing`): e-commerce for a fishing shop. Home with a ripples hero and category list, a scroll-driven casting scene that plays like a short film (the sky changes from dawn to day, the rod swings, the line flies and draws itself, the float lands and a fish bites), the most requested products and FAQ; the shop with search, category filter, maximum-price slider, stock switch and sorting over product illustrations generated in SVG; the product page with options that change the price live (`?p=id`); the kit builder by species with a twelve-month bite chart and tickable recommended tackle; a cart and checkout with free-shipping progress, promo code and demo payment; and a customer area with sign-in, a home (order on its way, what bites this month), orders with tracking and returns, and a wish list. 9 page types, deep teal and aqua theme with a characterful grotesque (Bricolage Grotesque) and light/dark variants.
- Sections: `FishHero`, `FishCast`, `FishShop`, `FishProduct`, `FishKit`, `FishCart`, `FishFaq`, `FishFooter` (new "Fishing" section category).
- App components: `FishArt`, `FishAccountSummary`, `FishOrders`, `FishWishlist`, plus its own customer shell: `FishAccountNav` (bottom tab bar on phones), `FishAccountTopbar`, `FishAccountHeading` and `FishSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `fishing`) and the live preview is at `/preview/fishing/`.
- **Theatre-ticket shop template "Telón"** (`astro-component-kit/templates/theater`): e-commerce for selling theatre tickets. Home with a hero whose velvet curtains part as you scroll (driven by scroll progress, with a spotlight that follows the pointer), a title marquee, this week's billboard and FAQ; the billboard with search, genre filter and sorting over posters generated in SVG; the show page with sessions and an interactive hall plan (real checkbox seats, taken seats disabled, prices by zone, up to six seats, "best seats together"); a cart and checkout with a ten-minute hold that releases the seats, a promo code, live totals and a demo payment; and a customer area with sign-in, a home (next performance with a countdown), a ticket wallet with perforated tickets and codes shown full screen in a native dialog, and orders with change and return actions. 8 page types, dark-wine and curtain-red theme with a classic display serif (Playfair Display) and light/dark variants.
- Sections: `TheaHero`, `TheaMarquee`, `TheaShows`, `TheaShowDetail`, `TheaCart`, `TheaFaq`, `TheaFooter` (new "Theater" section category).
- App components: `TheaPoster`, `TheaSeatMap`, `TheaTickets`, `TheaAccountSummary`, `TheaOrders`, plus its own customer shell: `TheaAccountNav` (bottom tab bar on phones), `TheaAccountTopbar`, `TheaAccountHeading` and `TheaSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `theater`) and the live preview is at `/preview/theater/`.
- **Architecture template "Cota"** (`astro-component-kit/templates/architecture`): site for an architecture studio with a client-works area. Home with a hero whose building elevation draws itself line by line, recent work as an index with floor plans generated by binary space partition, an interactive solar study with real sun altitude and azimuth (shadows cast by a neighbouring building and hours of direct sun), and the studio principles; the full built-work index with a type filter; the studio with the process as a Gantt accordion; the estimate with a cost calculator (price range, breakdown and calendar) and a request form; and a client area with sign-in, a work home (progress drawn floor by floor, phases, what waits for an answer, latest diary entries), a budget with change orders and decisions to approve, and documents with signing plus a searchable site diary. 8 page types, graphite and acid-lime theme with a heavy grotesque (Archivo) and a mono (IBM Plex Mono) and light/dark variants.
- Sections: `ArchHero`, `ArchProjects`, `ArchSun`, `ArchProcess`, `ArchEstimate`, `ArchPrinciples`, `ArchFaq`, `ArchFooter` (new "Architecture" section category).
- App components: `ArchElevation`, `ArchPlan`, `ArchWorkSummary`, `ArchBudget`, `ArchDecisions`, `ArchDiary`, `ArchDocuments`, plus its own client shell: `ArchAccountNav` (bottom tab bar on phones), `ArchAccountTopbar`, `ArchAccountHeading` and `ArchSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `architecture`) and the live preview is at `/preview/architecture/`.
- **Restaurant template "Lumbre"** (`astro-component-kit/templates/restaurant`): site for a fire-cooking restaurant with a customer area. Home with an ember hero (a gradient wordmark with CSS sparks), the tasting menu told plate by plate with plates generated in SVG, and a producer radar; the menu with the eight-course tasting menu and an à la carte list with a diet filter; origin with a radar placing every producer at its real distance; table booking with date, time, guests and a floor plan where taken or too-small tables are disabled and say why; and a customer area with sign-in, a home (next reservation with a countdown), reservations with cancel and change actions, and preferences with allergies, celebrations and gift cards. 8 page types, charcoal and ember theme with a condensed display serif (Instrument Serif) and light/dark variants.
- Sections: `RestHero`, `RestTasting`, `RestMenu`, `RestOrigin`, `RestBooking`, `RestFaq`, `RestFooter` (new "Restaurant" section category).
- App components: `RestPlate`, `RestAccountSummary`, `RestReservations`, `RestPreferences`, `RestGiftCards`, plus its own customer shell: `RestAccountNav` (bottom tab bar on phones), `RestAccountTopbar`, `RestAccountHeading` and `RestSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `restaurant`) and the live preview is at `/preview/restaurant/`.
- **Perfumery template "Umbra"** (`astro-component-kit/templates/perfumery`): site for a niche perfume house with a customer area. Home with a hero of drifting colour clouds and a generated flacon, a first rail of fragrances, an "evolution on skin" slider where top, heart and base notes rise and fade over a layered curve, and the first raw materials; the six fragrances with sizes, prices and an olfactory map; the atelier with kilos of matter per kilo of essence; discovery with a four-question profile test and a 2 ml discovery-set builder with a live total; and a customer area with sign-in, a home (order in progress with a written timeline), a shelf where every flacon is drawn at its real liquid level plus a layering lab with saved mixes, and orders with tracking. 8 page types, ink-violet and iris theme with a high-contrast display serif (Bodoni Moda) and light/dark variants.
- Sections: `PerfHero`, `PerfSkin`, `PerfCollection`, `PerfMap`, `PerfAtelier`, `PerfQuiz`, `PerfDiscovery`, `PerfFaq`, `PerfFooter` (new "Perfumery" section category).
- App components: `PerfBottle`, `PerfAccountSummary`, `PerfShelf`, `PerfLayering`, `PerfOrderTracker`, plus its own customer shell: `PerfAccountNav` (bottom tab bar on phones), `PerfAccountTopbar`, `PerfAccountHeading` and `PerfSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `perfumery`) and the live preview is at `/preview/perfumery/`.
- **Winery template "Solera"** (`astro-component-kit/templates/winery`): site for a winery with a wine-club members area. Home with a tilting-bottle hero, a first look at the wines, a pinned scroll scene that changes a drawn vineyard through the five stages of the vintage, and press scores; the full wine list as an editorial index with type filter, tasting notes, profile and drinking window; the estate with a family timeline and an interactive plot map; visit booking with a live total; a wine-club configurator that redraws the crate; and a members area with sign-in, a home (next box with countdown), a cellar with drinking windows and a tasting notebook, and shipments with plan management. 9 page types, cellar-dark and aged-gold theme with an optical serif (Fraunces) and light/dark variants.
- Sections: `WineHero`, `WineVintageScene`, `WineCollection`, `WineTerroir`, `WineStory`, `WineVisits`, `WineClub`, `WineAwards`, `WineFaq`, `WineFooter` (new "Winery" section category).
- App components: `WineBottleLabel`, `WineMemberSummary`, `WineShipmentTracker`, `WineCellar`, `WineTastingNotebook`, `WinePlanManager`, plus its own members shell: `WineMemberNav` (bottom tab bar on phones), `WineMemberTopbar`, `WineMemberHeading` and `WineSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `winery`) and the live preview is at `/preview/winery/`.
- **Law firm template "Fuero"** (`astro-component-kit/templates/law-firm`): site for a law firm with a home (case-file hero, practice areas, process, results, fee models, team, articles, FAQ), interactive practice areas, a team page with area filter and free-consultation booking, plus a client portal with sign-in, a portal home (what needs your attention, appointments, invoices), a case explorer with timeline, a document vault with upload and e-signature, and secure messaging. 9 page types, wine-rose and ivory theme with a classical serif and light/dark variants.
- Sections: `LawHero`, `LawPracticeAreas`, `LawTeam`, `LawProcess`, `LawResults`, `LawFees`, `LawConsultation`, `LawInsights`, `LawFaq`, `LawFooter` (new "Law Firm" section category).
- App components: `LawCaseSummary`, `LawCaseExplorer`, `LawDocumentVault`, `LawMessageThread`, `LawAppointments`, `LawInvoices`, plus its own portal shell: `LawPortalNav` (bottom tab bar on phones), `LawPortalTopbar`, `LawPortalHeading` and `LawSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `law-firm`) and the live preview is at `/preview/law-firm/`.
- **Neobank template "Cobre"** (`astro-component-kit/templates/fintech`): site for a neobank aimed at freelancers and small businesses with a home (product mock, benefits, card picker, savings calculator, fee comparison, security, FAQ), plans with monthly/yearly billing, a security page and a three-step account-opening wizard, plus an account area with sign-in, a dashboard (balances, income vs. expenses, spending donut), a movements table with filters and CSV export, card management with freeze and limits, and a transfer form with IBAN validation. 9 page types, copper and mint theme on deep green with light/dark variants.
- Sections: `BankHero`, `BankFeatures`, `BankCardShowcase`, `BankPlans`, `BankFeeTable`, `BankSavingsCalculator`, `BankSecurity`, `BankFaq`, `BankOnboarding`, `BankFooter` (new "Fintech & Banking" section category).
- App components: `BankBalanceCard`, `BankCashflowChart`, `BankSpendingBreakdown`, `BankTransactionsTable`, `BankCardManager`, `BankTransferForm`, plus its own area shell: `BankAppNav` (bottom tab bar on phones), `BankAppTopbar`, `BankAppHeading` and `BankSignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `fintech`) and the live preview is at `/preview/fintech/`.
- **Examples in context on every component and section page**: real snippets taken from the templates, sections and components that use it (with links), where it is used, what it works well with and what it is built from. Computed at build time from the real sources, so it never drifts.
- **Smoother docs navigation**: previous/next now stay inside the category, an "On this page" jump bar, and a "More in <category>" block at the bottom of each component page.
- **Component catalog pages**: `/components/` lists every category and `/components/<category>/` (buttons, forms, cards, feedback, navigation, layout, overlays, data, typography, charts, e-commerce, app) shows all its components as live preview cards that link to their docs page, in en/es/ru. The sidebar, the home categories and the doc breadcrumbs link to them.

### Added
- **Online academy template "Lumen"** (`astro-component-kit/templates/academy`): course platform with a home (search, learning paths, featured courses, instructors, reviews, plans), a filterable catalog (`?q=` / `?cat=`), a course page (enrolment card, syllabus accordion, reviews, related courses), plans with monthly/yearly billing and FAQ, and an instructor application, plus a learner area (sign-in, dashboard with weekly goal and streak, lesson player with notes and quiz) and an instructor studio (KPIs, 12-month chart, course manager). 9 page types, ink-blue and amber theme with a serif display face and light/dark variants.
- Sections: `AcademyHero`, `AcademyTracks`, `AcademyCourseGrid`, `AcademyCourseHero`, `AcademyCurriculum`, `AcademyPricingPlans`, `AcademyInstructors`, `AcademyReviews`, `AcademyTeachForm`, `AcademyFooter` (new "Online Academy" section category).
- App components: `AcademyLessonPlayer`, `AcademyProgressBoard`, `AcademyQuiz`, `AcademyStudioStats`, `AcademyCoursesTable`, plus its own area shell: `AcademyAreaNav` (bottom tab bar on phones), `AcademyAreaTopbar`, `AcademyAreaHeading` and `AcademySignIn`.
- Built only from its own components (`reusedComponents: []`); the MCP server lists it (`get_template` slug `academy`) and the live preview is at `/preview/academy/`.

## [0.8.1] - 2026-11-21

### Changed
- **BiteFlow food delivery template redesigned** (`astro-component-kit/templates/food-delivery`): pop "sticker" aesthetic with cream paper, dark ink outlines and tomato/mustard accents; 16 dedicated components (`FoodHeroPlate`, `FoodMenuBoard`, `FoodScrollStory`, `FoodPartnerPitch`, `FoodFooter`, `FoodCartDrawer`, `FoodOrderMap`, `FoodKitchenBoard`, `FoodMenuManager`, `FoodRiderDispatch`, `FoodOrdersTable`, `FoodServicePulse`, `FoodOpsNav`, `FoodOpsTopbar`, `FoodOpsHeading`, `FoodCrewSignIn`) and 11 pages with Spanish preview routes (`/preview/food-delivery/carta`, `/pedido`, `/cocina/...`), zero reused generic components.
- **Strukto construction & Site OS template redesigned** (`astro-component-kit/templates/construction`): architectural blueprint theme (navy drafting sheet with light tracing-paper variant), self-drawing elevation generator and 15 dedicated components (`ConstructionBlueprintHero`, `ConstructionProjectSheets`, `ConstructionBuildSequence`, `ConstructionTenderForm`, `ConstructionFooter`, `ConstructionCostEstimator`, `ConstructionIsoUnitPicker`, `ConstructionGanttBoard`, `ConstructionSitesBoard`, `ConstructionSiteLogbook`, `ConstructionUnitsLedger`, `ConstructionOsSidebar`, `ConstructionOsTopbar`, `ConstructionOsHeading`, `ConstructionSignIn`) across 11 pages, zero reused generic components.

### Added
- **Real estate template "Nido"** (`astro-component-kit/templates/real-estate`): agency site with buy/rent search, filterable listings with favourites and zone map, a page per property (gallery, viewing booking, mortgage simulator or rental terms), 3-step owner valuation, contact and agents, plus an agent CRM (sign-in, overview, listings table, lead pipeline). 9 page types.
- Sections: `EstateHero`, `EstateListingsGrid`, `EstateNeighborhoods`, `EstatePropertyGallery`, `EstateAgentsGrid`, `EstateValuationCta` (new "Real Estate Agency" section category).
- App components: `EstateMortgageCalculator`, `EstateValuationWizard`, `EstateVisitScheduler`, `EstateLeadsPipeline`, plus its own CRM shell: `EstateCrmSidebar`, `EstateCrmTopbar`, `EstateCrmHeading`, `EstateListingsTable`, `EstateAgentSignIn` (and the `EstateFooter` section).
- **Gym template "Forja"** (`astro-component-kit/templates/gym`): club site with today's classes, disciplines, live occupancy, weekly timetable, plans with monthly/yearly billing, coaches and a free-trial pass, plus a member area (sign-in, progress, class booking with waitlist) and a staff view (members table, occupancy). 9 page types.
- Sections: `GymHero`, `GymDisciplines`, `GymSchedule`, `GymMembershipPlans`, `GymTrainersGrid`, `GymTrialForm` (new "Gym & Fitness" section category).
- App components: `GymClassBooking`, `GymProgressTracker`, `GymOccupancyMeter`, plus its own member-area shell: `GymAreaNav` (bottom tab bar on phones), `GymAreaTopbar` (with check-in pass), `GymAreaHeading`, `GymMembersTable`, `GymSignIn` (and the `GymFooter` section).
- Both templates are built only from their own components; nothing is shared with other templates.
- The MCP server lists the new templates (`get_template` slugs `real-estate` and `gym`).

## [0.8.0] - 2026-11-20

### ⚠ Breaking
- **`OverlayModal`, `SideDrawerRight` and `BottomSheetMobile` are now real dialogs** built on the native `<dialog>` (`showModal()`): they need an `id`, stay closed until opened and are opened with `data-dialog-open="<id>"` on any element (close with `data-dialog-close`, Escape or the backdrop). Previously they were always-visible static mockups. Pass `open` to show one on page load. New props: `title`, `description` (modal and sheet), `variant` (`glass` | `solid` | `minimal`), `size` (`sm` | `md` | `lg`), `closeOnBackdrop`, `closeLabel`, `side` (drawer: `right` | `left`); new `footer` slot.

### Added
- **Copy components into your project**: `npx astro-component-kit add <component...> [--dir] [--force] [--dry-run]` copies a component plus the local files it imports and flags peer dependencies; `npx astro-component-kit list [category]` lists them.
- **Split stylesheets**: `astro-component-kit/tokens.css` (CSS variables only, no side effects), `base.css` (reset and page styles, layer-friendly) and `fonts.css` (Google Fonts). `global.css` still bundles all three.
- **Native attributes and `class` on buttons, forms and cards** (and the cookie drawer, feedback widget and image-compare slider): props extend `HTMLAttributes` and `...rest` is forwarded to the root element or, for form fields, to the native `<input>` / `<select>` / `<textarea>`. `className` keeps working.
- Buttons accept `target` and `rel` when rendering a link.
- `npm run registry:check` and a CI workflow (registry check, typecheck, build, pack) on every pull request.

### Fixed
- Docs and MCP code blocks for 188 components (buttons, cards, forms, navigation, overlays, feedback, data, typography, charts) were out of date copies; the registry now reads the shipped `.astro` files, so they always match.
- Disabled buttons rendered as links stayed clickable; they now drop `href` and set `aria-disabled`, styled like `:disabled`. `LoadingButton` sets `aria-busy` while loading.
- `NeonBorderButton`, `RippleButton` and `SlideRevealButton` had no `type`, so inside a form they submitted it; they now default to `type="button"`.
- Decorative layers (shimmers, glows, spinners, SVG filters, sliders) are hidden from screen readers with `aria-hidden`.
- The `FloatingFeedbackWidget` textarea had no visible keyboard focus.
- MCP server: reported the version and design tokens of the *current directory's* package when launched with `npx` from another project; it now resolves its own files. The token guide listed variables that don't exist and wrong radii.

## [0.6.1] - 2026-11-07

### Added — Futuristic-brutalist cyberpunk template ("NULL/SECTOR")
- **New template `templates/cyberpunk`**: six pages for a fictional decentralised GPU network — home, protocol, pricing, manifesto, logs (status + changelog) and terminal (contact). Orbitron + JetBrains Mono, zero radius, 2px ink rules, acid / magenta / cyan, CRT scanlines; NIGHT by default with a concrete DAY theme. Live preview at `/preview/cyberpunk/`.
- **New section category "Cyberpunk & Brutalist"** with 13 sections: `CyberHeader`, `CyberHero`, `CyberTicker`, `CyberBento`, `CyberNodeMap`, `CyberPageHero`, `CyberSpecTable`, `CyberPricing`, `CyberManifesto`, `CyberCrewGrid`, `CyberStatusBoard`, `CyberTerminalForm`, `CyberFooter`.
- Reuses `CyberpunkButton`, `NeonBorderButton`, `CyberFeatureCard`, `CyberGlitchAlert`, `CyberpunkCheckbox`, `HackerDecodeText`, `NeonSpinner`, `LogoWallGrid`, `StatsCounterBand`, `FaqTwoColumn`, `ChangelogSection` and `StatusTimelineFeed`.

### Added — Medical consultations SaaS template ("Pulso")
- **New template `templates/saas-clinic`**: eleven pages — marketing landing, the clinic's public booking page, sign-in and a practice app with dashboard, schedule, patients, patient record (`/app/patients/[id]`), consultation, video visits, reports and settings. Medical teal, Figtree, light by default with a dark mode; live preview at `/preview/saas-clinic/`. All people and records are fictional.
- **8 new App components**: `MedAgendaTimeline`, `MedWaitingRoom`, `MedScheduleCalendar`, `MedPatientSummary`, `MedConsultationNote` (SOAP, vitals flags, ICD-10 combobox, autosave, sign & lock), `MedPrescriptionPad` (allergy and duplicate-therapy checks), `MedVideoVisit` (telemedicine room UI) and `MedAvailabilityEditor`.
- **New section category "Healthcare"** with `MedHero`, `MedDoctorDirectory` and `MedBookingWizard` (four-step booking with an .ics calendar file; pre-select with `?doctor=` / `?specialty=`).
- 7 new app icons: `stethoscope`, `pulse`, `pill`, `video`, `clipboard`, `clock`, `heart`.

### Added — Toy store template ("Kapow")
- **New template `templates/toy-store`**: a six-page store for action figures and collectibles — home, shop, characters, character profile (`/characters/[id]`), product (`/product/[slug]`) and checkout. Comic "toy box" design (Russo One, ink outlines, hard shadows, halftone panels), light by default with a dark mode; live preview at `/preview/toy-store/`. All characters and universes are original.
- **New section category "Toy Store"** with 7 sections: `ToyHero`, `ToyCharacterRail` (links or filter mode), `ToyCharacterGrid`, `ToyCharacterHero`, `ToyAgeFinder`, `ToySpecSheet`, `ToyCollectorClub`.
- **New e-commerce components**: `ToyFigureCard` (trading-card product card with character, scale, age, articulation, pre-order and limited-edition notes) and `ToyFigureGrid`.
- **Facet filters**: `Product.facets` (e.g. `{ character: ['vex'], scale: '6in' }`) is exposed on product cards as `data-f-*`; `FilterSidebar` takes a `facets` prop that renders extra checkbox groups, filters on them and syncs each one with `?<name>=` in the URL. New helpers `facetAttrs` and `matchesFacets`.
- `FilterSidebar`: `categoryLabel` prop and `?max=` URL support (budget links).
- 9 new product illustrations: `figure`, `robot`, `dino`, `monster`, `ninja`, `rocket`, `mech`, `castle`, `mystery`.

### Fixed
- `HeatmapChart` mixed every cell with a hard-coded near-black, so light themes showed dark cells; the ramp now starts from `--chart-surface`. The strong value text colour can be themed with `--hm-strong-text`.
- `FilterSidebar` was always collapsed behind its "Filters" button on desktop, because its container query measured the (narrow) sidebar itself; it now collapses by viewport width (≤ 900px).

## [0.6.0] - 2026-11-07

### Added — Developer portfolio template ("Keycap")
- **New template `templates/portfolio`**: a six-page developer portfolio — home, projects, project case study (`/projects/[slug]`), blog, article (`/blog/[slug]`) and contact. Monochrome keyboard design originally made for konstantink.dev; light by default with a dark mode; live preview at `/preview/portfolio/`.
- **New section category "Developer Portfolio"** with 15 sections: `DevHeader`, `DevHero`, `DevProjectsShowcase`, `DevKeyboard`, `DevRepoList`, `DevContributions`, `DevMonitor`, `DevContact`, `DevFooter`, `DevPageHero`, `DevProjectGrid`, `DevProjectDetail`, `DevPostList`, `DevArticle`, `DevContactForm`.
- **3D sections** (optional `three` peer dependency): projects showcase with 7 data-driven card visuals, a typing mechanical keyboard, a GitHub-style contribution matrix whose cubes fly in and ripple like water, a CRT monitor and a dot-matrix hero background. Scenes live in framework-agnostic modules (`lib/three/*-scene.ts`), read the theme tokens and redraw when the theme changes, pause off-screen and respect reduced motion.
- Templates can declare optional peer dependencies (`peerDeps`); the template page shows them instead of "0 deps".

### Added — Marketing agency template ("Volta")
- **New template `templates/agency`**: an 8-page site for a performance marketing agency selling Paid Ads, SEO and web development — home, services, service detail (`/services/[slug]`), case studies, case study (`/work/[slug]`), pricing, about and contact. Dark by default with a light theme toggle; live preview at `/preview/agency/`.
- **New section category "Agency & Marketing"** with 19 sections: 12 new (`AgencyPageHero`, `AgencyServicePillars`, `AgencyResultsBand`, `AgencyPlatformsMarquee`, `AgencyProcessSteps`, `AgencyAuditCta`, `AgencyRoiCalculator`, `AgencyPricingPackages`, `AgencyServiceOverview`, `AgencyCaseStudyHero`, `AgencyCaseResults`, `AgencyQuotes`) plus the 7 agency sections that shipped in 0.4.1 but were never listed or exported (`AgencyHeader`, `AgencyHeroKinetic`, `AgencyServicesList`, `AgencyWorkGrid`, `AgencyTeamGrid`, `AgencyContactBrief`, `AgencyFooterCta`).
- Interactive lead magnets: free audit with animated scan and score gauge, and an ads ROI calculator with live ROAS.

### Changed
- The menu "Components" link opens the Installation page, which now shows the full docs sidebar.
- Template pages show the number of new sections next to pages and components.

### Fixed
- `AgencyHeader`: the mobile "Start a project" button was visible on desktop and lost its style inside the mobile menu.

## [0.5.1] - 2026-11-04

### Added — Model Context Protocol (MCP) Server & AI Integrations
- **Official Remote SSE MCP Server**: Live at `https://mcp.astrocomponents.dev/sse` with built-in rate-limiting (120 req/min), CORS protection, healthcheck monitoring, and Docker deployment configuration (`Dockerfile.mcp`).
- **Interactive MCP Landing Page**: Dedicated `/mcp` page (in English, Spanish `/es/mcp`, and Russian `/ru/mcp`) with 1-click install tabs, JSON previews, copy buttons, live stats, prompt examples, and tool catalog.
- **1-Click CLI Installer (`bin/cli.js`)**: Executable via `npx astro-component-kit mcp install <client>` with zero dependencies for **Cursor**, **Claude**, **Codex**, **Lovable**, and universal **MCP**.
- **8 Built-in MCP Tools**:
  - `search_components`: Search 340+ components by name, category, and tags.
  - `get_component`: Detailed props interface, accessibility guide, and usage examples.
  - `get_component_code`: Complete raw `.astro` source code.
  - `list_categories`: Browse 13 categories with real-time component counts.
  - `list_templates`: Overview of complete multi-page templates.
  - `get_template`: Template code, routing, and shared state architecture.
  - `get_design_tokens`: Complete CSS tokens, dark/light theme variables, and color schemes.
  - `get_library_info`: Total counts, versioning, and quickstart guide.
- **Dynamic Registry Adapter (`src/mcp/registry-adapter.ts`)**: Auto-discovers newly added components and templates with zero drift.

## [0.4.1] - 2026-11-04

### Added — Templates
- New **Templates** section on the site (`/templates/`, EN/ES/RU) with live, full-page previews.
- **E-commerce Store template** (`astro-component-kit/templates/ecommerce`): `StoreHomePage`, `StoreCategoryPage`, `StoreProductPage`, `StoreCheckoutPage` and `StoreLayout`, plus a demo catalogue (`demoStore`) and configurable routes. One persistent cart is shared across pages.

### Added — E-commerce components (`astro-component-kit/ecommerce`)
- 17 components: StoreHeader, PromoBar, CartDrawer, StoreHero, CategoryTiles, TrustBadges, StoreProductCard, ProductGrid, FilterSidebar, ProductToolbar, ProductGallery, VariantPicker, ProductBuyBox, OrderSummary, CheckoutForm, ProductMedia and ProductRating.
- `cart-store.ts`: framework-free cart (localStorage, cross-tab sync, `[data-add-to-cart]` binding, `formatMoney`), and 16 line-art product illustrations.

### Added — E-commerce 2 · Editorial template
- New template `astro-component-kit/templates/ecommerce-editorial` ("Forma Studio"): home, shop, product, bag and checkout pages with an editorial look (serif display type, square corners, terracotta accent), light by default with a dark mode toggle.
- 10 new sections in a new "E-commerce" section category: ShopHeaderEditorial, ShopHeroEditorial, ShopCollectionMosaic, ShopProductRail, ShopLookbook, ShopValuesMarquee, ShopReviewsEditorial, ShopNewsletterEditorial, ShopFooterWordmark and ShopCategoryHero.
- New components: ProductCardMinimal (quick-add sizes), FilterBar (horizontal filters) and CartPageList (full bag page), plus a shared `catalog-filter.ts`.
- VariantPicker exposes `--vp-active-bg`, `--vp-active-color`, `--vp-active-border`, `--vp-ring` and `--vp-radius` for theming.

### Added — Live notices (e-commerce)
- `CartToast` (add-to-cart and custom `ack:notify` notifications), `LiveActivityToast` (recent-purchase social proof), `CountdownBanner` (sale countdown) and `StockIndicator` (low stock + live viewers).
- Cart store emits `ack:cart-added`; cards and grids accept `openCart={false}` to show a toast instead of opening the drawer.

### Added — Light theme
- `[data-theme="light"]` token set in `global.css` (colors, `--ink-rgb`, `--paper-rgb`, `--c-on-primary`, status colors) plus light adapters for shared components.
- The e-commerce template supports `theme="dark|light|auto"` and a header toggle remembered per visitor.

### Changed
- Docs sidebar restructured into one list: search (with `/` shortcut, result count and empty state) → Get started → Components → Sections (now collapsible) → Templates. Removed the duplicated tab switcher and untranslated labels.
- Home page: new section introducing complete templates.
- `AnimatedInput` accepts an `autocomplete` prop (default `off`, unchanged).

### Fixed
- `CustomRadioGroup` radios were hidden with `display: none` and could not be reached by keyboard; they are now visually hidden with a visible focus ring.

## [0.4.0] - 2026-11-03

### Added — Charts & Stats (SVG, zero dependencies)
- 41 new pure-SVG charts and statistics rendered at build time: line, stacked area, range area, forecast, slope, bump, sparkline, grouped/stacked/horizontal/diverging bars, waterfall, histogram, lollipop, dumbbell, bullet, population pyramid, radial bar, segmented bar, pie/donut, gauge, waffle, treemap, funnel, sunburst, activity rings, scatter, bubble, box plot, heatmap, punch card, polar area, radar, sankey, candlestick, KPI stat tile, KPI trend grid, meter gauge, goal progress, retention cohort table and metric delta table.
- Shared `ChartFrame` shell (legend, hover/focus tooltip, "View data" table fallback), `chart-utils.ts` and `chart-tooltip.ts`.
- `--chart-1…8`, `--chart-pos`, `--chart-neg`, `--chart-grid`, `--chart-axis` and `--chart-surface` tokens in `global.css`.

### Added — Sections
- 24 new full sections: HeroMinimalCentered, HeroTerminal, HeroWaitlist, HeroDashboardPreview, FeatureIconGrid, FeatureAlternatingRows, FeatureTabsShowcase, HowItWorksSteps, IntegrationsGrid, PricingToggleCards, PricingSinglePlan, TestimonialCarousel, TestimonialFeatured, CtaNewsletterSection, CtaSplitImage, StatsCounterBand, StatsDashboardSection, CareersOpenings, FaqTwoColumn, ContactSplitMap, LogoWallGrid, BlogGridSection, ChangelogSection and FooterMegaSection.
- New section categories: "Blog & Content" and "Footers".

### Changed
- Registry `code` for the new entries is loaded from the component files (`?raw`), so docs never drift from the source.
- Section pages resolve any section component by file name; chart previews use the full stage width.
- ES/RU descriptions for every new component and section.

## [0.3.1] and earlier

### Added
- Initial release with 200+ accessible UI components
- npm package support (`npm install astro-component-kit`)
- FTP deployment script for astrocomponents.dev
- Component barrel export system for tree-shaking
- Design token system with global.css
- TypeScript declarations for all components
- Comprehensive documentation at astrocomponents.dev

### Categories
- **Buttons** (19 components): Glass, glow, neumorphic, animated styles
- **Cards** (19 components): Product, profile, pricing, weather widgets
- **Data** (20 components): Tables, timelines, charts, trees
- **Feedback** (20 components): Alerts, modals, toasts, spinners
- **Forms** (20 components): Inputs, selects, sliders, OTP, ratings
- **Layout** (20 components): Grids, sections, sidebars, footers
- **Navigation** (20 components): Navbars, breadcrumbs, tabs, pagination
- **Overlays** (20 components): Modals, drawers, lightboxes, popovers
- **Typography** (20 components): Headings, links, quotes, effects
- **Utilities** (20 components): Patterns, masks, reveals, a11y helpers

[Unreleased]: https://github.com/konstantinWDK/astro-components/releases/tag/v0.0.1
