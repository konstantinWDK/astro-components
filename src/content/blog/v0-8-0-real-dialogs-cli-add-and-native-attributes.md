---
title: 'v0.8.0: Real Dialogs, a CLI to Copy Components, and Native HTML Attributes'
description: 'astro-component-kit 0.8.0 rebuilds the modal, drawer and bottom sheet on the native <dialog>, adds `npx astro-component-kit add`, splits the CSS into tokens/base/fonts and lets buttons, forms and cards take class and any HTML attribute.'
date: '2026-11-20'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## A release about using the kit, not just browsing it

**astro-component-kit 0.8.0** is less about new components and more about making the existing ones work the way you expect inside a real project: real dialogs, attributes that reach the DOM, CSS you can adopt piece by piece, and code samples that always match what ships.

---

### 🪟 Modal, drawer and bottom sheet are now real dialogs

`OverlayModal`, `SideDrawerRight` and `BottomSheetMobile` are rebuilt on the native `<dialog>` element. The browser gives you focus trapping, Escape to close, top-layer rendering and focus return to the trigger, with no extra JavaScript to wire up.

```astro
<GlassButton data-dialog-open="delete-project">Delete project</GlassButton>

<OverlayModal id="delete-project" size="sm" title="Delete project?">
  <Fragment slot="footer">
    <GlassButton variant="ghost" data-dialog-close="cancel">Cancel</GlassButton>
    <GlassButton data-dialog-close="confirm">Delete</GlassButton>
  </Fragment>
</OverlayModal>
```

- Open with `data-dialog-open="<id>"` on any element, close with `data-dialog-close`, Escape or the backdrop
- `variant` (`glass`, `solid`, `minimal`), `size` (`sm`, `md`, `lg`), `title`, `description` and a `footer` slot
- The drawer slides from the `right` or the `left`; the sheet is full-width on phones and floats on desktop
- Entrance animations with `@starting-style`, disabled under reduced motion

> **Breaking:** these three components now need an `id` and stay closed until opened. If you used them as static blocks, add an `id` and a trigger, or pass `open` to show them on load.

---

### ⌨️ Copy components into your project

Prefer owning the code? The CLI copies a component and every local file it imports:

```bash
npx astro-component-kit add glass-button animated-input --dir src/components/ui
npx astro-component-kit list overlays
```

It warns when a component needs `three` or `apexcharts` and suggests names when you mistype one.

---

### 🏷️ `class` and native attributes everywhere you need them

Buttons, form fields and cards now accept `class` and any HTML attribute, such as `aria-*`, `data-*`, `target`, `rel` or `autocomplete`. Form components forward them to the native `<input>`, `<select>` or `<textarea>`, so validation attributes and autofill work.

```astro
<GlassButton href="/docs" target="_blank" rel="noopener" class="hero-cta">Docs</GlassButton>
<AnimatedInput id="email" label="Email" type="email" autocomplete="email" required />
```

---

### 🎨 CSS you can adopt piece by piece

`global.css` still works, and is now split into three files:

- `astro-component-kit/tokens.css`: CSS variables only, safe in any existing site
- `astro-component-kit/base.css`: reset and page styles; import it in a layer to keep your styles in control
- `astro-component-kit/fonts.css`: Inter and JetBrains Mono

---

### 🐛 Fixes

- Code blocks in the docs and the MCP server now read the real component files. 188 of them had drifted from the shipped code.
- Disabled link-buttons are no longer clickable, and `LoadingButton` announces its busy state
- Three buttons that defaulted to submitting forms now use `type="button"`
- Decorative layers are hidden from screen readers, and the feedback widget's textarea shows keyboard focus
- The MCP server reports its own version and tokens when launched with `npx` from another project

Full details are in the [changelog](https://github.com/konstantinWDK/astro-components/blob/main/CHANGELOG.md).
