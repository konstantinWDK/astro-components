---
title: 'v0.8.3: Three New Templates, Four New Components and a Shared Account Shell'
description: 'astro-component-kit 0.8.3 adds the Pulse tech summit, Veritas university and Sonora music festival templates, four new base components (Combobox, GlassCheckbox, DateInput, SortableTable) and replaces about 5,000 duplicated lines in the customer-area templates with a shared, themeable shell.'
date: '2026-11-26'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## What's new in 0.8.3

**astro-component-kit 0.8.3** adds three complete multi-page templates, four components for the base categories, and a cleanup that makes the customer-area templates much cheaper to maintain. Upgrading needs no code changes.

```bash
npm install astro-component-kit@0.8.3
```

## Three new templates

Each one is built only from its own components (`reusedComponents: []`), has a live preview, light and dark themes, translated copy and an entry in the MCP server.

### Pulse — tech summit

A conference site with a live countdown, four tracks, a multi-day schedule with track filters, search and a personal agenda saved in the browser, a speakers directory, tiered tickets with promo-code validation and an interactive SVG venue map.

- Live preview: [/preview/tech-event/](/preview/tech-event/)
- Read the full post: [Pulse](/blog/tech-event-template/)

### Veritas — university

A higher-education site with a degree finder, a programs catalog with faculty filters, an admissions guide in four steps, a tuition and merit-scholarship calculator, research institutes, campus life and open-day registration.

- Live preview: [/preview/university/](/preview/university/)
- Read the full post: [Veritas](/blog/university-template/)

### Sonora — music festival

A festival site with a countdown, line-up by day, a stage timetable with a personal agenda, ticket tiers with a live order total and a digital pass. It was prepared under the name "Pulso" and renamed before release so it does not clash with the clinic template.

- Live preview: [/preview/festival/](/preview/festival/)
- Read the full post: [Sonora](/blog/sonora-music-festival-template/)

## Four new base components

The base categories had not changed for a while, so 0.8.3 fills some gaps. All four follow the library rules: typed props, `class` and native attributes forwarded to the right element, variants, sizes, visible focus rings and dark-mode-first tokens.

- **Combobox** — a searchable select that follows the ARIA 1.2 combobox pattern: type to filter, arrow keys to move, Enter to choose, Escape to cancel. The value travels in a hidden input, so it works in any native form.
- **GlassCheckbox** — a real `<input type="checkbox">` restyled for dark interfaces, with a description, an indeterminate state and `primary`, `success` and `danger` variants.
- **DateInput** — a date, datetime-local or month field on the native picker, with hint and error states.
- **SortableTable** — columns that sort on click, announced through `aria-sort`, with natural ordering for text and numbers and a focusable scroll region on narrow screens.

## A shared account shell

The customer-area templates repeated the same sign-in, navigation, top bar and page heading in every template, with only the copy and a few typographic details changing. 0.8.3 moves that into four shared components, themed through a token prefix:

- `AccountSignIn`, `AccountNav`, `AccountTopbar` and `AccountHeading`.
- The components of Fish, Thea, Wine, Moto, Rest, Perf and Arch are now thin wrappers over them: 28 files and about 5,000 fewer lines.
- We compared the rendered HTML of 59 pages before and after the change. The markup is identical, apart from randomly generated ids.

If you copy these components into your own project with the CLI, the shared files are copied along with the wrapper.

## Safer releases

- `npm run audit` now takes `AUDIT_BASE_URL`, `AUDIT_SAMPLE`, `AUDIT_TIMEOUT` and `AUDIT_CONCURRENCY`, skips images and fonts, and exits with an error when a page or preview fails.
- Continuous integration now builds the site, serves it and audits a sample of the component pages on every pull request.

## Try it

Browse the [templates](/templates/), the [components](/components/) and the [changelog](https://github.com/konstantinWDK/astro-components/blob/main/CHANGELOG.md).
