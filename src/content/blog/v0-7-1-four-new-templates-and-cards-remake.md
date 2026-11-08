---
title: 'v0.7.1: Four New Templates (Dental, Logistics, Food Delivery, Construction) + Cards Remake'
description: 'astro-component-kit 0.7.1 adds 4 major multi-page production templates ("Dentis", "Muvr", "BiteFlow", and "Strukto"), bringing the catalog to 12 complete templates, plus a full cards remake with native SVG icons and zero runtime dependencies.'
date: '2026-11-08'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Four new full-stack production templates

**astro-component-kit 0.7.1** expands the collection with four comprehensive, multi-page industry templates and a major component redesign, bringing the library to **12 complete production templates** and **over 400 components**.

---

### 🦷 Dentis: Dental Practice & Clinic OS

A complete solution for dental clinics and dental group practices: modern public patient portal, treatment catalog, and practice management backoffice.

- **Interactive Visual Odontogram**: clickable adult dental chart tracking treatments, restorations, endodontics, and pending procedures by quadrant
- **Before / After Comparison**: interactive slider comparing aesthetic dentistry and orthodontic cases
- **Multi-step Booking Wizard**: four-step appointment scheduling with doctor and operatory assignment
- **Treatments & Team Directory**: full service pricing breakdown, guarantees, and medical credentials
- 6 new sections in **Sections → Healthcare & Dental**
- Live preview: [/preview/dental/](/preview/dental/)

---

### 🚚 Muvr: Moving, Logistics & Fleet Dispatch

Turnkey digital platform for moving companies, logistics providers, and freight van operators.

- **$m^3$ Volume Estimator**: interactive room-by-room inventory calculator estimating total cubic meters and vehicle sizing
- **Fleet Dispatch Dashboard**: real-time vehicle availability, route allocation, and maintenance status tracking
- **Driver Hiring & Carrier Portal**: digital driver onboarding form with license tier verification and instant application review
- **Dynamic Pricing Tiers**: transparent pricing by van volume, distance, and extra movers
- 6 new sections in **Sections → Logistics & Moving**
- Live preview: [/preview/moving/](/preview/moving/)

---

### 🍕 BiteFlow: Food Delivery & Kitchen OS

End-to-end digital ordering system for restaurant chains, dark kitchens, and food delivery networks.

- **Interactive Food Category Rail**: smooth category navigation with dietary pills (vegan, gluten-free, chef pick)
- **Menu Grid & Modifiers**: customizable dish items with ingredient extras, portion sizing, and spice level indicators
- **Express Checkout Wizard**: streamlined order summary, delivery slot selector, and custom tip calculation
- **Kitchen Display System (KDS)**: real-time live kitchen ticket board tracking incoming, prep, and dispatched orders
- 6 new sections in **Sections → Food & Delivery**
- Live preview: [/preview/food-delivery/](/preview/food-delivery/)

---

### 🏗️ Strukto: Construction, Developments & Site OS

Flagship corporate storefront and operational backoffice for general contractors, engineering firms, and real estate developers.

- **Interactive Floorplan Dossier**: architectural unit viewer with floorplan selector, surface breakdown, and room dimensions
- **Technical CTE Budget Estimator**: real-time cost calculator covering PEM, PEC, architect fees, and license permits
- **Daily Site Journal (Cuaderno de Bitácora)**: inspection log with weather records, workforce headcounts, safety incidents, and sign-off seals
- **Promotions & Units Inventory CMS**: live development inventory tracking unit status (Available, Reserved, Sold)
- 6 new sections in **Sections → Construction & Real Estate**
- Live preview: [/preview/construction/](/preview/construction/)

---

## 🎨 Complete Cards Category Remake

The **Cards** category has received a ground-up redesign:

- **WeatherCard**: reconstructed with clean atmospheric gradients, 24-hour forecast rail, UV index, humidity, wind velocity, and air quality metrics.
- **TestimonialCardClean**: polished glassmorphic elevation, verified buyer badges, and native SVG star ratings.
- **EcommerceProductCard & NotificationCard**: refactored with native SVGs, eliminating raw unicode emojis and ensuring high contrast across light and dark modes.

---

## ⚡ Pure Zero-Dependencies Architecture & MCP v0.7.1

- **Zero Runtime Dependencies**: all build-time and website tooling packages moved to devDependencies, keeping the published npm package pure Astro + Vanilla CSS.
- **Model Context Protocol (MCP)**: updated to protocol version `2024-11-05` and server release `v0.7.1` on [/mcp](/mcp), with 8 AI tools for Cursor, Claude, Codex, and Lovable.

---

## 📦 Upgrade to v0.7.1

```bash
npm install astro-component-kit@0.7.1
```

