---
title: 'v0.6.1: Toy Store, Clinic SaaS & Cyberpunk Templates'
description: 'Three new multi-page templates in astro-component-kit 0.6.1: "Kapow" for toy shops, "Pulso" for medical practices and "NULL/SECTOR", a futuristic-brutalist cyberpunk site — plus 35 new blocks.'
date: '2026-11-07'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Three new templates

**astro-component-kit 0.6.1** adds three complete, multi-page templates and **35 new blocks**, bringing the catalog to **8 templates**.

### 🦸 Kapow: toy store for action figures

A six-page store (home, shop, characters, character profile, product and checkout) with a comic "toy box" look in light and dark.

- **Shop by character**: tap a hero or villain in the avatar rail, or combine character, universe, age group, scale and price in the sidebar — every filter lives in the URL
- Character pages with power levels, a gift finder by age and budget, a figure spec sheet with safety warning and a collector club
- 7 sections in **Sections → Toy Store**, plus `ToyFigureCard` and `ToyFigureGrid`
- `FilterSidebar` now supports custom facets for any catalogue
- Live preview: [/preview/toy-store/](/preview/toy-store/)

### 🩺 Pulso: medical consultations SaaS

Practice software for clinics: landing page, the clinic's public booking page, sign-in and an eight-screen app.

- Four-step online booking with an `.ics` calendar file
- Week/day schedule, agenda and a live waiting room
- SOAP consultation notes with vitals flags, ICD-10 search, autosave and sign & lock
- e-Prescriptions that block medicines the patient is allergic to, and a telemedicine room UI
- 8 new app components and 3 sections in **Sections → Healthcare**
- Live preview: [/preview/saas-clinic/](/preview/saas-clinic/)

### ⚡ NULL/SECTOR: futuristic brutalist

A six-page site for a tech product with Orbitron, hard ink rules, acid neon, glitch and CRT scanlines — in NIGHT and a concrete DAY theme.

- Hero with live HUD telemetry, a dot-matrix world map of nodes, a classified spec sheet that decrypts, pricing with a live usage calculator
- A manifesto that lights up on scroll, crew access badges, a 60-day uptime board and a contact form you drive like a command line
- 13 sections in **Sections → Cyberpunk & Brutalist**
- Live preview: [/preview/cyberpunk/](/preview/cyberpunk/)

### 🛠 Fixes

- `FilterSidebar` no longer stays collapsed behind its "Filters" button on desktop.
- `HeatmapChart` now works in light themes.

---

## 📦 Upgrade to v0.6.1

```bash
npm install astro-component-kit@0.6.1
```
