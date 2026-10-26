// src/data/registry/forms.ts
import type { ComponentDoc } from './types';

export const forms: ComponentDoc[] = [
  {
    slug: 'animated-input',
    name: 'Animated Input',
    description: 'Input with floating label animation.',
    category: 'forms',
    tags: ["input","animated"],
    featured: true,
    code: `---
/**
 * AnimatedInput — A form input with a floating label animation and focus glow effect.
 * 
 * @param {string} label - The visible indicator for the input field.
 * @param {string} id - The HTML id and for attribute linkage.
 * @param {string} type - Input element type. Default is 'text'.
 * @param {string} placeholder - Passed placeholder. Default is ' '. (Space is needed for CSS :placeholder-shown to work).
 * @param {boolean} required - HTML required attribute parameter. Default is false.
 * @param {string} name - HTML input name binding.
 */
interface Props { 
  label: string; 
  id: string; 
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'; 
  placeholder?: string; 
  required?: boolean; 
  name?: string; 
}

const { label, id, type = 'text', placeholder = ' ', required = false, name } = Astro.props;
---

<div class="anim-input-wrap">
  <input {id} {name} {type} {placeholder} {required} class="anim-input" autocomplete="off" />
  <label for={id} class="anim-input-label">{label}</label>
</div>

<style>
  .anim-input-wrap { position: relative; width: 100%; }
  .anim-input { 
    width: 100%; 
    padding: 1.1rem 1rem 0.5rem; 
    font-family: inherit; font-size: 0.95rem; 
    color: var(--c-text-1, #e2e8f0); 
    background: var(--c-bg-elev, rgba(255, 255, 255, 0.04)); 
    border: 1px solid var(--c-border, rgba(255, 255, 255, 0.1)); 
    border-radius: var(--r-md, 12px); box-sizing: border-box; 
    outline: none; transition: border-color 0.25s ease, background 0.25s ease; 
  }
  .anim-input::placeholder { color: transparent; }
  .anim-input:focus { 
    background: rgba(99, 102, 241, 0.06); 
    border-color: rgba(99, 102, 241, 0.5); 
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12); 
  }
  .anim-input-label { 
    position: absolute; top: 0.9rem; left: 1rem; 
    font-size: 0.9rem; color: var(--c-text-2, #64748b); 
    pointer-events: none; transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease; 
  }
  .anim-input:focus ~ .anim-input-label, 
  .anim-input:not(:placeholder-shown) ~ .anim-input-label { 
    top: 0.28rem; font-size: 0.68rem; 
    color: var(--c-primary-light, #818cf8); 
    font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; 
  }
</style>
`,
    usage: `---
import { AnimatedInput } from 'astro-component-kit';
---

<form class="stack-v gap-6">
  <AnimatedInput 
    id="email" 
    name="email"
    label="Email Address" 
    type="email" 
    required 
  />
  
  <AnimatedInput 
    id="user" 
    name="username"
    label="Username" 
    required 
  />
</form>`,
  },
  {
    slug: 'chip-input',
    name: 'Chip/Tag Input',
    description: 'Interactive tag management control.',
    category: 'forms',
    tags: ["input","chips"],
    featured: true,
    code: `---
/**
 * ChipInput — An interactive input for managing a list of tags or chips.
 * 
 * @param {string} label - Input labeling title.
 * @param {string[]} initialChips - Optional array of strings to pre-populate.
 * @param {string} name - HTML name for form submission.
 * @param {string} placeholder - Placeholder text for the input area.
 */
interface Props {
  label?: string;
  initialChips?: string[];
  name?: string;
  placeholder?: string;
}

const { label, initialChips = [], name, placeholder = "Add tag..." } = Astro.props;
---

<div class="chip-input-container">
  {label && <label class="chip-input-label">{label}</label>}
  <div class="chip-input" data-chip-input>
    <div class="chip-input__list" data-chip-list>
      {initialChips.map(chip => (
        <span class="chip">
          {chip}
          <button type="button" aria-label={\`Remove \${chip}\`} data-remove-chip>×</button>
          <input type="hidden" name={\`\${name}[]\`} value={chip} />
        </span>
      ))}
    </div>
    <input 
      type="text" 
      class="chip-input__field" 
      placeholder={initialChips.length > 0 ? "" : placeholder} 
      data-chip-field
    />
  </div>
</div>

<style>
  .chip-input-container { display: flex; flex-direction: column; gap: var(--sp-2, 0.5rem); width: 100%; }
  .chip-input-label { font-size: 0.85rem; font-weight: 600; color: var(--c-text-2, #94a3b8); margin-left: 0.5rem; }
  
  .chip-input { 
    display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.5rem; 
    background: var(--c-bg-elev, rgba(0,0,0,0.1)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-md, 10px); 
    transition: border-color 0.2s;
  }
  .chip-input:focus-within { border-color: var(--c-primary, #6366f1); }
  
  .chip-input__list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  
  .chip { 
    background: var(--c-primary, #6366f1); 
    color: #fff; 
    padding: 0.2rem 0.6rem; 
    border-radius: var(--r-sm, 6px); 
    font-size: 0.8rem; 
    display: flex; align-items: center; gap: 0.4rem; 
  }
  .chip button { 
    background: none; border: none; color: #fff; cursor: pointer; 
    font-size: 1.1rem; line-height: 1; padding: 0; 
    opacity: 0.8; transition: opacity 0.2s;
  }
  .chip button:hover { opacity: 1; }
  
  .chip-input__field { 
    background: none; border: none; outline: none; 
    color: var(--c-text-1, #fff); flex: 1; min-width: 100px;
    padding: 0.2rem; font-family: inherit; font-size: 0.9rem;
  }
</style>

<script>
  // Simplified client-side logic for adding/removing chips
  document.querySelectorAll('[data-chip-input]').forEach(container => {
    const list = container.querySelector('[data-chip-list]');
    const input = container.querySelector('[data-chip-field]') as HTMLInputElement;
    const name = "tags"; // Should ideally be passed from props but hidden inputs solve this for now

    const addChip = (value: string) => {
      if (!value.trim() || !list) return;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.innerHTML = \`\${value}<button type="button" aria-label="Remove \${value}" data-remove-chip>×</button>\`;
      
      const hidden = document.createElement('input');
      hidden.type = 'hidden';
      hidden.name = 'chips[]';
      hidden.value = value;
      chip.appendChild(hidden);
      
      list.appendChild(chip);
      input.value = '';
      input.placeholder = '';
    };

    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addChip(input.value);
      }
      if (e.key === 'Backspace' && !input.value && list?.lastElementChild) {
        list.removeChild(list.lastElementChild);
        if (list.children.length === 0) input.placeholder = "Add tag...";
      }
    });

    container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.hasAttribute('data-remove-chip')) {
        target.closest('.chip')?.remove();
        if (list?.children.length === 0) input.placeholder = "Add tag...";
      }
    });
  });
</script>
`,
    usage: `<ChipInput label="Product Tags" initialChips={["New", "Sale"]} placeholder="Add tag..." />`,
  },
  {
    slug: 'color-picker-input',
    name: 'Color Picker',
    description: 'Custom hex color selector with preview.',
    category: 'forms',
    tags: ["input","color"],
    featured: true,
    code: `---
/**
 * ColorPickerInput — A specialized input for selecting hex colors with a circular preview.
 * 
 * @param {string} label - Input labeling title.
 * @param {string} id - HTML ID for the picker.
 * @param {string} value - Default starting color value (hex). Default is '#6366f1'.
 * @param {string} name - HTML name binding.
 */
interface Props {
  label: string;
  id: string;
  value?: string;
  name?: string;
}

const { label, id, value = "#6366f1", name } = Astro.props;
---

<div class="color-picker-wrap">
  <div class="color-input-container">
    <input type="color" class="color-input" {id} {name} {value} />
    <label for={id} class="color-label">{label}</label>
  </div>
  <span class="color-value" data-color-value>{value}</span>
</div>

<style>
  .color-picker-wrap { display: flex; align-items: center; justify-content: space-between; gap: 1rem; background: var(--c-bg-elev, rgba(255,255,255,0.03)); padding: var(--sp-3, 0.75rem) var(--sp-4, 1rem); border-radius: var(--r-md, 12px); border: 1px solid var(--c-border, rgba(255,255,255,0.1)); }
  .color-input-container { display: flex; align-items: center; gap: 1rem; }
  
  .color-input { 
    -webkit-appearance: none; 
    border: none; 
    width: 38px; height: 38px; 
    border-radius: var(--r-full, 50%); 
    cursor: pointer; 
    background: transparent;
    padding: 0;
  }
  .color-input::-webkit-color-swatch-wrapper { padding: 0; }
  .color-input::-webkit-color-swatch { 
    border: 2px solid rgba(255,255,255,0.2); 
    border-radius: 50%; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
  
  .color-label { font-size: 0.9rem; color: var(--c-text-1, #e2e8f0); font-weight: 500; cursor: pointer; }
  .color-value { font-size: 0.8rem; color: var(--c-text-2, #64748b); font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em; }
</style>

<script>
  document.querySelectorAll('.color-input').forEach(input => {
    const parent = input.closest('.color-picker-wrap');
    const display = parent?.querySelector('[data-color-value]');
    input.addEventListener('input', (e) => {
      if (display) display.textContent = (e.target as HTMLInputElement).value;
    });
  });
</script>
`,
    usage: `<ColorPickerInput id="theme" label="Brand Color" value="#6366f1" />`,
  },
  {
    slug: 'currency-input',
    name: 'Currency Input',
    description: 'Numeric input with currency prefix.',
    category: 'forms',
    tags: ["input","currency"],
    featured: true,
    code: `---
/**
 * CurrencyInput — A numeric input prefixed with a currency symbol for financial data entry.
 * 
 * @param {string} label - Input labeling title.
 * @param {string} id - HTML ID for attribution.
 * @param {string} symbol - Currency symbol to display (e.g. "$", "€"). Default is "$".
 * @param {number} value - Pre-filled numeric value.
 * @param {string} name - HTML name binding.
 * @param {number} step - Numeric increment. Default is 0.01.
 */
interface Props {
  label: string;
  id: string;
  symbol?: string;
  value?: number;
  name?: string;
  step?: number;
}

const { label, id, symbol = "$", value = 0.00, name, step = 0.01 } = Astro.props;
---

<div class="curr-input-container">
  <label for={id} class="curr-label">{label}</label>
  <div class="curr-wrap">
    <span class="curr-symbol">{symbol}</span>
    <input type="number" {id} {name} {step} value={value.toFixed(2)} class="curr-field" />
  </div>
</div>

<style>
  .curr-input-container { display: flex; flex-direction: column; gap: var(--sp-2, 0.5rem); width: 100%; }
  .curr-label { font-size: 0.85rem; font-weight: 600; color: var(--c-text-2, #94a3b8); margin-left: 0.5rem; }
  
  .curr-wrap { 
    display: flex; align-items: center; 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    border-radius: var(--r-md, 12px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    overflow: hidden; 
    transition: border-color 0.2s;
  }
  .curr-wrap:focus-within { border-color: var(--c-primary, #6366f1); }
  
  .curr-symbol { 
    padding: 0.8rem 1rem; 
    background: rgba(255,255,255,0.05); 
    color: var(--c-text-2, #94a3b8); 
    font-weight: 700; border-right: 1px solid var(--c-border, rgba(255,255,255,0.1));
  }
  
  .curr-field { 
    background: none; border: none; 
    padding: 0.8rem 1rem; 
    color: var(--c-text-1, #fff); 
    font-size: 1.1rem; width: 100%; outline: none; 
    font-family: inherit; font-weight: 600;
  }
  
  /* Remove number spins */
  .curr-field::-webkit-inner-spin-button, 
  .curr-field::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
</style>
`,
    usage: `<CurrencyInput id="price" label="Product Price" symbol="$" value={29.99} />`,
  },
  {
    slug: 'custom-radio-group',
    name: 'Custom Radio Group',
    description: 'Styled radio button collection.',
    category: 'forms',
    tags: ["radio","group"],
    featured: true,
    code: `---
/**
 * CustomRadioGroup — A group of styled radio buttons for vertical or horizontal options.
 * 
 * @param {string} label - Optional title for the fieldset.
 * @param {string} name - Common HTML name for the radio group.
 * @param {Array<{label: string, value: string, checked?: boolean}>} options - List of choices.
 * @param {boolean} horizontal - Layout orientation. Default is false (vertical).
 */
interface Props {
  label?: string;
  name: string;
  options: Array<{ label: string; value: string; checked?: boolean }>;
  horizontal?: boolean;
}

const { label, name, options = [], horizontal = false } = Astro.props;
---

<fieldset class:list={["radio-group", { "radio-group--horizontal": horizontal }]}>
  {label && <legend class="radio-group-legend">{label}</legend>}
  <div class="radio-items">
    {options.map((opt, i) => (
      <label class="radio-item">
        <input type="radio" name={name} value={opt.value} checked={opt.checked} />
        <span class="radio-circle" aria-hidden="true"></span>
        <span class="radio-label">{opt.label}</span>
      </label>
    ))}
  </div>
</fieldset>

<style>
  .radio-group { border: none; padding: 0; margin: 0; width: 100%; }
  .radio-group-legend { font-size: 0.85rem; font-weight: 600; color: var(--c-text-2, #94a3b8); margin-bottom: var(--sp-3, 0.75rem); margin-left: 0.5rem; }
  
  .radio-items { display: flex; flex-direction: column; gap: var(--sp-3, 0.8rem); }
  .radio-group--horizontal .radio-items { flex-direction: row; flex-wrap: wrap; gap: var(--sp-6, 1.5rem); }
  
  .radio-item { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; color: var(--c-text-2, #94a3b8); transition: 0.2s; user-select: none; }
  
  .radio-item input { appearance: none; display: none; }
  
  .radio-circle { 
    width: 20px; height: 20px; 
    border: 2px solid var(--c-border, #334155); 
    border-radius: var(--r-full, 50%); 
    position: relative; cursor: pointer; transition: 0.2s;
    background: var(--c-bg-elev, rgba(255,255,255,0.02));
  }
  
  .radio-item:hover .radio-circle { border-color: var(--c-primary-light, #818cf8); }
  
  .radio-circle::after { 
    content: ''; position: absolute; inset: 4px; 
    background: var(--c-primary, #6366f1); 
    border-radius: 50%; opacity: 0; transform: scale(0.5); transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .radio-item input:checked + .radio-circle { border-color: var(--c-primary, #6366f1); box-shadow: 0 0 10px rgba(99, 102, 241, 0.2); }
  .radio-item input:checked + .radio-circle::after { opacity: 1; transform: scale(1); }
  
  .radio-label { font-size: 0.95rem; }
  .radio-item input:checked ~ .radio-label { color: var(--c-text-1, #fff); font-weight: 600; }
</style>
`,
    usage: `---
import { CustomRadioGroup } from 'astro-component-kit';
---

<CustomRadioGroup 
  label="Select your billing cycle" 
  name="billing" 
  options={[
    { label: "Monthly", value: "monthly" },
    { label: "Yearly (Save 20%)", value: "yearly", checked: true },
    { label: "Lifetime", value: "life" }
  ]} 
/>`,
  },
  {
    slug: 'cyberpunk-checkbox',
    name: 'Cyberpunk Checkbox',
    description: 'Neon themed bold checkbox.',
    category: 'forms',
    tags: ["checkbox","cyberpunk"],
    featured: true,
    code: `---
/**
 * CyberpunkCheckbox — A bold, neon-themed checkbox with angular borders and glitch-toggle effect.
 * 
 * @param {string} label - Text label displayed alongside the checkbox.
 * @param {string} id - HTML ID for the checkbox.
 * @param {string} name - HTML name binding.
 * @param {boolean} checked - Initial toggle state.
 */
interface Props {
  label: string;
  id: string;
  name?: string;
  checked?: boolean;
}

const { label, id, name, checked = false } = Astro.props;
---

<label class="cyber-check" for={id}>
  <input type="checkbox" {id} {name} {checked} />
  <span class="checkmark" aria-hidden="true"></span>
  <span class="cyber-text">{label}</span>
</label>

<style>
  .cyber-check { 
    display: flex; align-items: center; gap: var(--sp-4, 1rem); 
    cursor: pointer; 
    color: var(--c-primary-light, #00e0ff); 
    font-family: 'Courier New', Courier, monospace; 
    font-weight: 800; 
    text-transform: uppercase;
    user-select: none;
    padding: var(--sp-2, 0.5rem);
    transition: 0.2s;
  }
  
  .cyber-check:hover .checkmark { border-color: var(--c-primary-light); }
  
  .cyber-check input { display: none; }
  
  .checkmark { 
    width: 20px; height: 20px; 
    border: 2px solid var(--c-primary, #ff003c); 
    position: relative; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    flex-shrink: 0;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  }
  
  .cyber-check input:checked + .checkmark { 
    background: var(--c-primary, #ff003c); 
    box-shadow: 0 0 15px var(--c-primary, #ff003c); 
    transform: rotate(5deg) scale(1.1);
  }
  
  .checkmark::after { 
    content: ''; position: absolute; display: none; 
    left: 7px; top: 2px; width: 4px; height: 10px; 
    border: solid #fff; border-width: 0 3px 3px 0; 
    transform: rotate(45deg); 
  }
  
  .cyber-check input:checked + .checkmark::after { display: block; }
  
  .cyber-text { letter-spacing: 0.05em; font-size: 0.9rem; }
  
  .cyber-check input:checked ~ .cyber-text {
    text-shadow: 0 0 8px var(--c-primary-light);
  }
</style>
`,
    usage: `<CyberpunkCheckbox id="accept" label="Accept Protocols" checked />`,
  },
  {
    slug: 'drag-drop-upload',
    name: 'Drag & Drop Upload',
    description: 'Large interactive file upload zone.',
    category: 'forms',
    tags: ["upload","file"],
    featured: true,
    code: `---
/**
 * DragDropUpload — A prominent file upload zone with drag-and-drop support and visual feedback.
 * 
 * @param {string} label - Primary instruction text. Default is "Drag files here or browse".
 * @param {string} id - HTML ID for the file input.
 * @param {string} name - HTML name binding.
 * @param {string} accept - Allowed file types (e.g. "image/*").
 * @param {boolean} multiple - Enable multiple file selection.
 */
interface Props {
  label?: string;
  id: string;
  name?: string;
  accept?: string;
  multiple?: boolean;
}

const { label = "Drag files here or browse", id, name, accept, multiple = false } = Astro.props;
---

<div class="upload-zone" data-upload-zone>
  <div class="upload-zone__icon" aria-hidden="true">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  </div>
  <p class="upload-zone__text">
    {label.split('browse').map((part, i) => (
      i === 0 ? <span>{part} <span class="upload-zone__link">browse</span></span> : part
    ))}
  </p>
  <input type="file" {id} {name} {accept} {multiple} hidden class="upload-zone__input" data-upload-input />
</div>

<style>
  .upload-zone { 
    border: 2px dashed var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-xl, 20px); 
    padding: var(--sp-12, 3rem); 
    text-align: center; 
    background: var(--c-bg-elev, rgba(255,255,255,0.02)); 
    cursor: pointer; 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
    color: var(--c-text-2, #94a3b8); 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sp-4, 1rem);
  }
  
  .upload-zone:hover, .upload-zone--dragging { 
    border-color: var(--c-primary, #6366f1); 
    background: rgba(99, 102, 241, 0.05); 
    color: var(--c-text-1, #fff); 
    transform: translateY(-2px);
  }
  
  .upload-zone__icon { color: var(--c-primary, #6366f1); transition: transform 0.3s; }
  .upload-zone:hover .upload-zone__icon { transform: translateY(-5px); }
  
  .upload-zone__text { font-size: 1rem; margin: 0; }
  .upload-zone__link { color: var(--c-primary, #6366f1); font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
</style>

<script>
  document.querySelectorAll('[data-upload-zone]').forEach(zone => {
    const input = zone.querySelector('[data-upload-input]') as HTMLInputElement;

    zone.addEventListener('click', () => input.click());

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('upload-zone--dragging');
    });

    ['dragleave', 'drop'].forEach(evt => {
      zone.addEventListener(evt, () => zone.classList.remove('upload-zone--dragging'));
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      if ((e as DragEvent).dataTransfer?.files) {
        input.files = (e as DragEvent).dataTransfer!.files;
        // Trigger change
        input.dispatchEvent(new Event('change'));
      }
    });
  });
</script>
`,
    usage: `<DragDropUpload id="files" accept="image/*" multiple />`,
  },
  {
    slug: 'error-input',
    name: 'Error Input',
    description: 'Input styled for validation error states.',
    category: 'forms',
    tags: ["input","validation"],
    featured: true,
    code: `---
/**
 * ErrorInput — A styled input strictly formatted to demonstrate error or invalid validation states.
 * 
 * @param {string} id - The ID for the input form element.
 * @param {string} errorMessage - The message text presented below the input field.
 * @param {string} value - Default starting value mimicking failed data.
 * @param {string} placeholder - Optional standard placeholder.
 * @param {string} name - HTML name binding.
 */
interface Props {
  id: string;
  errorMessage: string;
  value?: string;
  placeholder?: string;
  name?: string;
}

const { id, errorMessage, value = '', placeholder, name } = Astro.props;
---

<div class="error-wrap">
  <input type="text" {id} {name} {value} {placeholder} class="input-error" aria-invalid="true" aria-describedby={\`\${id}-error\`} />
  <span id={\`\${id}-error\`} class="error-msg" aria-live="polite">{errorMessage}</span>
</div>

<style>
  .error-wrap { display: flex; flex-direction: column; gap: 0.4rem; width: 100%; box-sizing: border-box; }
  .input-error { 
    border: 1px solid var(--c-error, #ef4444) !important; 
    background: rgba(239, 68, 68, 0.05) !important; 
    padding: var(--sp-3, 0.8rem); 
    color: var(--c-text-1, #fff); 
    border-radius: var(--r-sm, 10px); outline: none; 
    font-family: inherit; font-size: 0.95rem; box-sizing: border-box;
  }
  .error-msg { font-size: 0.75rem; color: #f87171; font-weight: 500; }
</style>
`,
    usage: `<ErrorInput id="user" errorMessage="Username is already taken" value="konstantin" />`,
  },
  {
    slug: 'floating-password',
    name: 'Password Toggle',
    description: 'Password field with reveal toggle.',
    category: 'forms',
    tags: ["input","password"],
    featured: true,
    code: `---
/**
 * FloatingPassword — A password input field featuring a reveal/hide toggle inside the frame.
 * 
 * @param {string} id - Unique identifier linking toggle state securely.
 * @param {string} placeholder - Default text visible when empty. Default is "Password".
 * @param {string} name - HTML name binding.
 * @param {boolean} required - HTML required indicator.
 */
interface Props {
  id: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

const { id, placeholder = "Password", name, required = false } = Astro.props;
---

<div class="pass-wrap">
  <input type="password" {id} {name} {placeholder} {required} class="pass-input" data-pwd-input />
  <button type="button" class="toggle-pass" aria-label="Toggle password visibility" data-pwd-toggle>👁️</button>
</div>

<style>
  .pass-wrap { position: relative; width: 100%; }
  .pass-input { 
    width: 100%; box-sizing: border-box;
    padding: 0.8rem 3rem 0.8rem 1rem; 
    background: var(--c-bg-elev, rgba(0,0,0,0.2)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-sm, 10px); 
    color: var(--c-text-1, #fff); outline: none; 
    font-family: inherit; transition: 0.2s;
  }
  .pass-input:focus { border-color: var(--c-primary, #6366f1); }
  .toggle-pass { 
    position: absolute; right: 10px; top: 50%; transform: translateY(-50%); 
    background: none; border: none; cursor: pointer; opacity: 0.5; transition: 0.2s;
  }
  .toggle-pass:hover { opacity: 1; }
</style>

<script>
  // Setup functional toggle without polluting global namespaces or clashing IDs
  document.querySelectorAll('.pass-wrap').forEach(wrap => {
    const btn = wrap.querySelector('[data-pwd-toggle]');
    const pass = wrap.querySelector('[data-pwd-input]') as HTMLInputElement;
    
    if (btn && pass) {
      btn.addEventListener('click', () => {
        const isPass = pass.type === 'password';
        pass.type = isPass ? 'text' : 'password';
        btn.textContent = isPass ? '🙈' : '👁️';
      });
    }
  });
</script>
`,
    usage: `<FloatingPassword id="pass" placeholder="Enter Secure Password" />`,
  },
  {
    slug: 'form-group-vertical',
    name: 'Form Group',
    description: 'Wrapper for labeling and help text.',
    category: 'forms',
    tags: ["layout","group"],
    featured: true,
    code: `---
/**
 * FormGroupVertical — A structural wrapper component for grouping an input with its label and validation messaging.
 * 
 * @param {string} label - The descriptive title for the field.
 * @param {string} forId - The target ID of the child input (for label association).
 * @param {string} helpText - Optional secondary guidance text below the input.
 * @param {string} error - Optional error message that applies error styling.
 * @param {boolean} required - Displays a required indicator if true.
 */
interface Props {
  label: string;
  forId: string;
  helpText?: string;
  error?: string;
  required?: boolean;
}

const { label, forId, helpText, error, required = false } = Astro.props;
---

<div class:list={["form-group", { "form-group--error": error }]}>
  <div class="form-group__header">
    <label for={forId} class="form-group__label">
      {label},
      {required && <span class="form-group__req" aria-hidden="true">*</span>}
    </label>
  </div>
  
  <div class="form-group__content">
    <slot />
  </div>
  
  {error ? (
    <p class="form-group__error" id={\`\${forId}-error\`} role="alert">{error}</p>
  ) : helpText ? (
    <p class="form-group__help" id={\`\${forId}-help\`}>{helpText}</p>
  ) : null}
</div>

<style>
  .form-group { display: flex; flex-direction: column; gap: var(--sp-2, 0.5rem); width: 100%; margin-bottom: var(--sp-4, 1rem); }
  
  .form-group__label { 
    font-size: 0.8rem; font-weight: 700; 
    color: var(--c-text-1, #e2e8f0); 
    text-transform: uppercase; 
    letter-spacing: 0.05em; 
    margin-left: 0.5rem;
    cursor: pointer;
  }
  
  .form-group__req { color: var(--c-error, #f87171); margin-left: 2px; }
  
  .form-group__content { width: 100%; }
  
  .form-group__help { font-size: 0.75rem; color: var(--c-text-2, #64748b); margin: 0 0 0 0.5rem; }
  
  .form-group__error { font-size: 0.75rem; color: var(--c-error, #f87171); font-weight: 600; margin: 0 0 0 0.5rem; }
  
  /* Deep selector to style any input nested inside the group content if it's in an error state */
  .form-group--error :global(input), 
  .form-group--error :global(textarea), 
  .form-group--error :global(select) { 
    border-color: var(--c-error, #ef4444) !important; 
    background-color: rgba(239, 68, 68, 0.03) !important;
  }
</style>
`,
    usage: `<FormGroupVertical label="Username" forId="u" helpText="Characters only."><input id="u" class="custom-input" /></FormGroupVertical>`,
  },
  {
    slug: 'glass-slider',
    name: 'Glass Slider',
    description: 'Translucent range slider with glow.',
    category: 'forms',
    tags: ["input","range"],
    featured: true,
    code: `---
/**
 * GlassSlider — A translucent range slider with a glowing thumb and backdrop-blur track.
 * 
 * @param {string} label - Optional descriptive text title.
 * @param {string} id - HTML ID for the range input.
 * @param {string} name - HTML name binding.
 * @param {number} min - Minimum value. Default is 0.
 * @param {number} max - Maximum value. Default is 100.
 * @param {number} value - Initial starting value. Default is 50.
 * @param {number} step - Step increment. Default is 1.
 */
interface Props {
  label?: string;
  id: string;
  name?: string;
  min?: number;
  max?: number;
  value?: number;
  step?: number;
}

const { label, id, name, min = 0, max = 100, value = 50, step = 1 } = Astro.props;
---

<div class="slider-container">
  {label && <div class="slider-header"><label for={id}>{label}</label> <span data-slider-value>{value}</span></div>}
  <input 
    type="range" 
    class="glass-slider" 
    {id}, 
    {name} 
    {min} 
    {max} 
    {step} 
    {value}
    data-slider-input
  />
</div>

<style>
  .slider-container { width: 100%; display: flex; flex-direction: column; gap: var(--sp-3, 0.75rem); }
  .slider-header { display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; color: var(--c-text-2, #94a3b8); padding: 0 0.5rem; }
  
  .glass-slider { 
    -webkit-appearance: none; 
    width: 100%; height: 8px; 
    background: var(--c-bg-elev, rgba(255,255,255,0.1)); 
    border-radius: var(--r-full, 10px); 
    outline: none; 
    backdrop-filter: blur(5px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.05));
    cursor: pointer;
  }
  
  /* Thumb Styling - Webkit */
  .glass-slider::-webkit-slider-thumb { 
    -webkit-appearance: none; 
    width: 22px; height: 22px; 
    border-radius: 50%; 
    background: var(--c-primary, #6366f1); 
    cursor: pointer; 
    border: 3px solid rgba(255,255,255,0.6); 
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4); 
    transition: transform 0.2s;
  }
  
  .glass-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
  
  /* Thumb Styling - Firefox */
  .glass-slider::-moz-range-thumb { 
    width: 18px; height: 18px; 
    border-radius: 50%; 
    background: var(--c-primary, #6366f1); 
    cursor: pointer; 
    border: 3px solid rgba(255,255,255,0.6); 
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4); 
  }
</style>

<script>
  document.querySelectorAll('[data-slider-input]').forEach(slider => {
    const display = slider.closest('.slider-container')?.querySelector('[data-slider-value]');
    slider.addEventListener('input', (e) => {
      if (display) display.textContent = (e.target as HTMLInputElement).value;
    });
  });
</script>
`,
    usage: `<GlassSlider id="volume" label="Speaker Volume" min={0} max={100} value={75} />`,
  },
  {
    slug: 'glass-textarea',
    name: 'Glass Textarea',
    description: 'Glassmorphism styled multiline input.',
    category: 'forms',
    tags: ["textarea","glass"],
    featured: true,
    code: `---
/**
 * GlassTextarea — A multiline text input with glassmorphism surface styling.
 * 
 * @param {string} label - Input grouping label title.
 * @param {string} id - The ID mapping the label to the textbox.
 * @param {number} rows - Starting HTML rows count height. Default is 4.
 * @param {string} placeholder - Displayed placeholder within the box when empty.
 * @param {string} name - Form data extraction name binding.
 * @param {boolean} required - HTML required indicator.
 */
interface Props { 
  label: string; 
  id: string; 
  rows?: number;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

const { label, id, rows = 4, placeholder = "Start typing...", name, required = false } = Astro.props;
---

<div class="glass-textarea-wrap">
  <label for={id} class="glass-label">{label}</label>
  <textarea {id} {name} {rows} {placeholder} {required} class="glass-textarea"></textarea>
</div>

<style>
  .glass-textarea-wrap { display: flex; flex-direction: column; gap: 0.5rem; width: 100%; }
  .glass-label { font-size: 0.85rem; font-weight: 600; color: var(--c-text-2, #94a3b8); margin-left: 0.5rem; }
  .glass-textarea { 
    width: 100%; padding: var(--sp-4, 1rem); 
    background: var(--c-bg-elev, rgba(255, 255, 255, 0.03)); 
    backdrop-filter: blur(10px); 
    border: 1px solid var(--c-border, rgba(255, 255, 255, 0.1)); 
    border-radius: var(--r-md, 16px); 
    color: var(--c-text-1, #fff); 
    font-family: inherit; font-size: 0.9rem; 
    outline: none; transition: 0.3s; resize: vertical; 
  }
  .glass-textarea:focus { 
    border-color: rgba(99, 102, 241, 0.4); 
    background: rgba(255, 255, 255, 0.06); 
  }
  .glass-textarea::placeholder { color: var(--c-text-muted, #475569); }
</style>
`,
    usage: `<GlassTextarea id="bio" label="Your Biography" rows={5} placeholder="Tell us about yourself..." />`,
  },
  {
    slug: 'modern-select',
    name: 'Modern Select',
    description: 'Custom styled dropdown selector.',
    category: 'forms',
    tags: ["select","modern"],
    featured: true,
    code: `---
/**
 * ModernSelect — A styled dropdown selector with a custom arrow and glassmorphism styling.
 * 
 * @param {string} label - Input labeling title.
 * @param {string} id - HTML ID for the select element.
 * @param {string} name - HTML name binding.
 * @param {Array<{label: string, value: string, disabled?: boolean}>} options - List of select options.
 * @param {boolean} required - HTML required attribute.
 */
interface Props {
  label: string;
  id: string;
  name?: string;
  options: Array<{ label: string; value: string; disabled?: boolean }>;
  required?: boolean;
}

const { label, id, name, options = [], required = false } = Astro.props;
---

<div class="select-container">
  <label for={id} class="select-label">{label}</label>
  <div class="select-wrap">
    <select class="custom-select" {id} {name} {required}>
      {options.map(opt => (
        <option value={opt.value} disabled={opt.disabled}>{opt.label}</option>
      ))}
    </select>
    <div class="select-arrow" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </div>
  </div>
</div>

<style>
  .select-container { display: flex; flex-direction: column; gap: var(--sp-2, 0.5rem); width: 100%; }
  .select-label { font-size: 0.85rem; font-weight: 600; color: var(--c-text-2, #94a3b8); margin-left: 0.5rem; }
  
  .select-wrap { position: relative; width: 100%; }
  
  .custom-select { 
    width: 100%; 
    padding: 0.8rem 2.5rem 0.8rem 1rem; 
    background: var(--c-bg-elev, rgba(255,255,255,0.04)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-md, 12px); 
    color: var(--c-text-1, #fff); 
    appearance: none; cursor: pointer; outline: none; 
    font-family: inherit; font-size: 0.95rem;
    transition: border-color 0.2s, background 0.2s;
  }
  
  .custom-select:focus { 
    border-color: var(--c-primary, #6366f1); 
    background: rgba(255,255,255,0.06);
  }
  
  .select-arrow { 
    position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); 
    color: var(--c-text-2, #64748b); 
    pointer-events: none; transition: transform 0.2s;
    display: flex; align-items: center; justify-content: center;
  }
  
  .custom-select:focus + .select-arrow { 
    transform: translateY(-50%) rotate(180deg); 
    color: var(--c-primary, #6366f1); 
  }
</style>
`,
    usage: `<ModernSelect id="role" label="Project Role" options={[{label: "Developer", value: "dev"}, {label: "Designer", value: "dsign"}]} />`,
  },
  {
    slug: 'neumorphic-switch',
    name: 'Neumorphic Switch',
    description: 'Soft-UI toggle switch.',
    category: 'forms',
    tags: ["switch","neumorphism"],
    featured: true,
    code: `---
/**
 * NeumorphicSwitch — A soft-UI checkbox toggle with realistic inset and outset shadow states.
 * 
 * @param {string} label - Optional descriptive text suffix.
 * @param {string} id - HTML ID for input linkage.
 * @param {string} name - HTML name binding.
 * @param {boolean} checked - Initial toggle state. Default is false.
 */
interface Props {
  label?: string;
  id: string;
  name?: string;
  checked?: boolean;
}

const { label, id, name, checked = false } = Astro.props;
---

<div class="neu-switch-wrapper">
  <label class="neu-switch">
    <input type="checkbox" {id} {name} {checked} />
    <span class="slider"></span>
  </label>
  {label && <label for={id} class="neu-label">{label}</label>}
</div>

<style>
  .neu-switch-wrapper { display: flex; align-items: center; gap: var(--sp-3, 0.75rem); }
  
  .neu-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 32px;
    flex-shrink: 0;
  }
  
  .neu-label { font-size: 0.9rem; color: var(--c-text-2, #94a3b8); cursor: pointer; }
  
  .neu-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: var(--c-bg, #1a1f2e);
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 34px;
    border: 1px solid var(--c-border, rgba(255, 255, 255, 0.05));
    box-shadow:
      inset 2px 2px 5px rgba(0, 0, 0, 0.5),
      inset -2px -2px 5px rgba(255, 255, 255, 0.04);
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background: #374151;
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  input:checked + .slider {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.2);
  }
  
  input:checked + .slider:before {
    transform: translateX(28px);
    background: var(--c-primary, #818cf8);
    box-shadow: 0 0 15px rgba(129, 140, 248, 0.5);
  }
</style>
`,
    usage: `<NeumorphicSwitch id="notify" label="Enable Notifications" checked />`,
  },
  {
    slug: 'otp-input',
    name: 'OTP Input',
    description: 'Professional form control.',
    category: 'forms',
    tags: ["form"],
    featured: true,
    code: `---
/**
 * OTPInput — A specialized input group for One-Time Password verification codes.
 * 
 * @param {string} label - Optional grouping label title.
 * @param {string} id - Base HTML ID for the inputs.
 * @param {number} length - Number of OTP digits. Default is 4.
 * @param {string} name - Base name for form submission (will be indexed).
 */
interface Props {
  label?: string;
  id: string;
  length?: number;
  name?: string;
}

const { label, id, length = 4, name = "otp" } = Astro.props;
---

<div class="otp-container">
  {label && <label class="otp-label">{label}</label>}
  <div class="otp-wrap" data-otp-group>
    {Array.from({ length }).map((_, i) => (
      <input 
        type="text" 
        inputmode="numeric"
        maxlength="1" 
        pattern="[0-9]*"
        autocomplete="one-time-code"
        id={\`\${id}-\${i}\`}
        name={\`\${name}[]\`}
        class="otp-field"
        data-otp-index={i}
      />
    ))}
  </div>
</div>

<style>
  .otp-container { display: flex; flex-direction: column; align-items: center; gap: var(--sp-4, 1rem); }
  .otp-label { font-size: 0.9rem; font-weight: 600; color: var(--c-text-2, #94a3b8); }
  
  .otp-wrap { display: flex; gap: 0.75rem; justify-content: center; }
  
  .otp-field { 
    width: 50px; height: 60px; 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-md, 12px); 
    text-align: center; color: var(--c-text-1, #fff); 
    font-size: 1.75rem; font-weight: 800; 
    outline: none; transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1); 
  }
  
  .otp-field:focus { 
    border-color: var(--c-primary, #6366f1); 
    background: rgba(99, 102, 241, 0.1); 
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.3), 0 0 0 3px rgba(99, 102, 241, 0.15); 
    transform: translateY(-2px);
  }
</style>

<script>
  document.querySelectorAll('[data-otp-group]').forEach(group => {
    const inputs = group.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    
    inputs.forEach((input, idx) => {
      // Auto-advance
      input.addEventListener('input', (e) => {
        const val = (e.target as HTMLInputElement).value;
        if (val && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
        }
      });

      // Backspace logic
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && idx > 0) {
          inputs[idx - 1].focus();
        }
      });

      // Paste logic
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const data = e.clipboardData?.getData('text').slice(0, inputs.length).split('') || [];
        data.forEach((val, i) => {
          if (inputs[i]) inputs[i].value = val;
        });
        if (inputs[data.length - 1]) inputs[data.length - 1].focus();
      });
    });
  });
</script>
`,
    usage: `<OTPInput />`,
  },
  {
    slug: 'rating-stars',
    name: 'Star Rating',
    description: 'Classic star-based feedback input.',
    category: 'forms',
    tags: ["input","rating"],
    featured: true,
    code: `---
/**
 * RatingStars — A classic star-rating input for user reviews and feedback.
 * 
 * @param {string} name - HTML name for form submission. Default is "rating".
 * @param {number} maxRating - Maximum number of stars. Default is 5.
 * @param {string} idPrefix - Prefix used to generate unique IDs for radio buttons.
 * @param {number} initialValue - Currently selected rating.
 */
interface Props {
  name?: string;
  maxRating?: number;
  idPrefix?: string;
  initialValue?: number;
}

const { name = "rating", maxRating = 5, idPrefix = "star", initialValue = 0 } = Astro.props;
---

<div class="rating-stars" data-rating-group>
  {Array.from({ length: maxRating }).map((_, i) => {
    const val = maxRating - i;
    return (
      <>
        <input 
          type="radio" 
          name={name} 
          id={\`\${idPrefix}-\${val}\`} 
          value={val} 
          checked={initialValue === val}
          class="rating-stars__input"
        />
        <label for={\`\${idPrefix}-\${val}\`} class="rating-stars__star" aria-label={\`\${val} stars\`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </label>
      </>
    );
  })}
</div>

<style>
  .rating-stars { display: flex; flex-direction: row-reverse; gap: 4px; width: fit-content; }
  
  .rating-stars__input { display: none; }
  
  .rating-stars__star { 
    width: 32px; height: 32px; 
    cursor: pointer; transition: all 0.2s ease; 
    color: var(--c-border, #334155);
  }
  
  .rating-stars__star svg { width: 100%; height: 100%; fill: transparent; transition: all 0.2s; }
  
  /* Hover and check logic using sibling selectors (requires row-reverse) */
  .rating-stars__star:hover, 
  .rating-stars__star:hover ~ .rating-stars__star,
  .rating-stars__input:checked ~ .rating-stars__star { 
    color: #fbbf24; 
  }
  
  .rating-stars__star:hover svg, 
  .rating-stars__star:hover ~ .rating-stars__star svg,
  .rating-stars__input:checked ~ .rating-stars__star svg { 
    fill: #fbbf24;
    filter: drop-shadow(0 0 5px rgba(251, 191, 36, 0.4));
  }
  
  .rating-stars__star:active { transform: scale(0.9); }
</style>
`,
    usage: `<RatingStars name="quality" initialValue={4} />`,
  },
  {
    slug: 'search-reveal',
    name: 'Search Reveal',
    description: 'Minimal search that expands on hover.',
    category: 'forms',
    tags: ["input","search"],
    featured: true,
    code: `---
/**
 * SearchReveal — A dynamic minimal search pod that expands smoothly into a full input field on hover or focus.
 * 
 * @param {string} id - Standard HTML ID property.
 * @param {string} placeholder - Default placeholder ("Search...").
 * @param {string} name - Standard HTML name grouping.
 */
interface Props {
  id: string;
  placeholder?: string;
  name?: string;
}

const { id, placeholder = "Search...", name } = Astro.props;
---

<div class="search-box">
  <input type="search" {id} {name} {placeholder} class="search-input" aria-label="Search content" />
  <button type="button" aria-label="Submit search" class="search-btn">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </button>
</div>

<style>
  .search-box { position: relative; width: 44px; height: 44px; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  .search-box:hover, .search-box:focus-within { width: 250px; }
  .search-input { 
    width: 100%; height: 100%; box-sizing: border-box;
    background: var(--c-bg-elev, #1e293b); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-full, 100px); 
    padding: 0 45px 0 20px; 
    color: var(--c-text-1, #fff); outline: none; opacity: 0; transition: 0.3s; 
  }
  .search-box:hover .search-input, .search-box:focus-within .search-input { opacity: 1; }
  .search-input::placeholder { color: var(--c-text-muted, #64748b); }
  
  .search-btn { 
    position: absolute; right: 0; top: 0;
    width: 44px; height: 44px; 
    background: var(--c-primary, #6366f1); border: none; 
    border-radius: 50%; color: #fff; cursor: pointer; 
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .search-btn:hover { background: var(--c-primary-light, #818cf8); }
</style>
`,
    usage: `<SearchReveal id="site-search" placeholder="Search components..." />`,
  },
  {
    slug: 'segmented-control',
    name: 'Segmented Control',
    description: 'Radio-based mode switcher.',
    category: 'forms',
    tags: ["segmented","switch"],
    featured: true,
    code: `---
/**
 * SegmentedControl — A horizontal group of button-like radio choices for switching views or modes.
 * 
 * @param {string} name - Shared HTML name for the internal radio inputs.
 * @param {Array<{label: string, value: string, checked?: boolean}>} options - Selectable segments.
 * @param {string} idPrefix - Prefix for auto-generating input IDs.
 */
interface Props {
  name: string;
  options: Array<{ label: string; value: string; checked?: boolean }>;
  idPrefix?: string;
}

const { name, options = [], idPrefix = "seg" } = Astro.props;
---

<div class="segmented">
  {options.map((opt, i) => (
    <div class="segmented-item">
      <input 
        type="radio" 
        name={name} 
        id={\`\${idPrefix}-\${i}\`} 
        value={opt.value} 
        checked={opt.checked} 
        class="segmented-input"
      />
      <label for={\`\${idPrefix}-\${i}\`} class="segmented-label">{opt.label}</label>
    </div>
  ))}
</div>

<style>
  .segmented { 
    display: flex; position: relative; 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    padding: 4px; border-radius: var(--r-md, 12px); 
    width: fit-content; border: 1px solid var(--c-border, rgba(255,255,255,0.05));
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .segmented-item { display: flex; }
  
  .segmented-label { 
    padding: 0.5rem 1.4rem; cursor: pointer; z-index: 1; 
    font-size: 0.85rem; transition: all 0.25s ease; 
    color: var(--c-text-2, #94a3b8); 
    border-radius: var(--r-sm, 8px);
    font-weight: 500;
    user-select: none;
  }
  
  .segmented-input { display: none; }
  
  .segmented-input:checked + .segmented-label { 
    color: var(--c-text-1, #fff); 
    font-weight: 700; 
    background: var(--c-primary, #6366f1); 
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }
  
  .segmented-label:hover:not(.segmented-input:checked + .segmented-label) {
    color: var(--c-text-1);
    background: rgba(255,255,255,0.03);
  }
</style>
`,
    usage: `<SegmentedControl name="view" options={[{label: "Day", value: "d", checked: true}, {label: "Week", value: "w"}]} />`,
  },
  {
    slug: 'simple-file-input',
    name: 'Simple File Input',
    description: 'Minimalist file upload button.',
    category: 'forms',
    tags: ["input","file"],
    featured: true,
    code: `---
/**
 * SimpleFileInput — A minimalist file upload button that masks the native browser input.
 * 
 * @param {string} label - The text displayed on the button. Default is "Choose File".
 * @param {string} id - HTML ID for the file input.
 * @param {string} name - HTML name binding.
 * @param {string} accept - Allowed file formats.
 */
interface Props {
  label?: string;
  id: string;
  name?: string;
  accept?: string;
}

const { label = "Choose File", id, name, accept } = Astro.props;
---

<label class="file-btn" for={id}>
  <input type="file" {id} {name} {accept} class="file-btn__input" />
  <span class="file-btn__label">{label}</span>
</label>

<style>
  .file-btn { 
    position: relative; 
    overflow: hidden; 
    display: inline-block; 
    cursor: pointer; 
  }
  
  .file-btn__input { 
    position: absolute; 
    left: 0; top: 0; 
    width: 100%; height: 100%;
    opacity: 0; cursor: pointer; 
    font-size: 0;
  }
  
  .file-btn__label { 
    background: var(--c-primary, #6366f1); 
    color: #fff; 
    padding: 0.8rem 1.6rem; 
    border-radius: var(--r-md, 10px); 
    font-weight: 700; 
    display: inline-block; 
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
    font-size: 0.95rem;
  }
  
  .file-btn:hover .file-btn__label { 
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
  }
  
  .file-btn:active .file-btn__label {
    transform: translateY(0);
  }
</style>
`,
    usage: `<SimpleFileInput id="avatar" label="Upload Profile Picture" accept="image/*" />`,
  },
  {
    slug: 'stepper-input',
    name: 'Numeric Stepper',
    description: 'Input with +/- increment buttons.',
    category: 'forms',
    tags: ["input","stepper"],
    featured: true,
    code: `---
/**
 * StepperInput — A numeric input with increment and decrement buttons for precise control.
 * 
 * @param {string} label - Optional input label.
 * @param {string} id - HTML ID for the number input.
 * @param {string} name - HTML name binding.
 * @param {number} value - Initial default value. Default is 1.
 * @param {number} min - Minimum allowed value.
 * @param {number} max - Maximum allowed value.
 * @param {number} step - Numeric increment step. Default is 1.
 */
interface Props {
  label?: string;
  id: string;
  name?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
}

const { label, id, name, value = 1, min, max, step = 1 } = Astro.props;
---

<div class="stepper-container">
  {label && <label class="stepper-label" for={id}>{label}</label>}
  <div class="stepper" data-stepper>
    <button type="button" class="stepper-btn stepper-btn--minus" data-step-minus aria-label="Decrease value">−</button>
    <input 
      type="number" 
      {id}, 
      {name} 
      {min} 
      {max} 
      {step} 
      value={value} 
      class="stepper-input"
      data-step-input
    />
    <button type="button" class="stepper-btn stepper-btn--plus" data-step-plus aria-label="Increase value">+</button>
  </div>
</div>

<style>
  .stepper-container { display: flex; flex-direction: column; gap: var(--sp-2, 0.5rem); }
  .stepper-label { font-size: 0.85rem; font-weight: 600; color: var(--c-text-2, #94a3b8); margin-left: 0.5rem; }
  
  .stepper { 
    display: flex; align-items: center; 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    border-radius: var(--r-md, 12px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    overflow: hidden; 
    width: fit-content;
  }
  
  .stepper-btn { 
    width: 40px; height: 40px; 
    background: var(--c-primary, #6366f1); 
    border: none; color: #fff; 
    font-size: 1.25rem; font-weight: 600; 
    cursor: pointer; transition: all 0.2s; 
    display: grid; place-items: center;
  }
  
  .stepper-btn:hover { background: var(--c-primary-light, #818cf8); }
  .stepper-btn:active { transform: scale(0.95); }
  
  .stepper-input { 
    width: 60px; height: 40px; 
    background: transparent; 
    border: none; text-align: center; 
    color: var(--c-text-1, #fff); 
    font-size: 1rem; font-weight: 700;
    outline: none; -moz-appearance: textfield; 
    font-family: inherit;
  }
  
  .stepper-input::-webkit-inner-spin-button,
  .stepper-input::-webkit-outer-spin-button { display: none; }
</style>

<script>
  document.querySelectorAll('[data-stepper]').forEach(wrapper => {
    const input = wrapper.querySelector('[data-step-input]') as HTMLInputElement;
    const minus = wrapper.querySelector('[data-step-minus]');
    const plus = wrapper.querySelector('[data-step-plus]');
    
    if (!input || !minus || !plus) return;

    const step = parseFloat(input.step) || 1;
    const min = input.min !== "" ? parseFloat(input.min) : -Infinity;
    const max = input.max !== "" ? parseFloat(input.max) : Infinity;

    minus.addEventListener('click', () => {
      const current = parseFloat(input.value) || 0;
      if (current - step >= min) input.value = (current - step).toString();
    });

    plus.addEventListener('click', () => {
      const current = parseFloat(input.value) || 0;
      if (current + step <= max) input.value = (current + step).toString();
    });
  });
</script>
`,
    usage: `<StepperInput id="qty" label="Quantity" value={1} min={1} max={10} />`,
  },
  {
    slug: 'password-strength-input',
    name: 'Password Strength Input',
    description: 'Interactive password input with dynamic real-time entropy calculation, strength meter bar, and visibility toggle.',
    category: 'forms',
    tags: ["form","input","password","security","validation"],
    featured: true,
    code: `---
/**
 * PasswordStrengthInput — Secure password input field with visual strength estimator bar and eye toggle.
 * 
 * @param {string} id - HTML ID for the password input.
 * @param {string} label - Input label text. Default is 'Password'.
 * @param {string} name - Form field name. Default is 'password'.
 * @param {string} placeholder - Placeholder text. Default is 'Enter secure password'.
 * @param {boolean} required - HTML required field attribute.
 */
interface Props {
  id: string;
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}

const {
  id,
  label = 'Password',
  name = 'password',
  placeholder = 'Enter secure password',
  required = false,
} = Astro.props;
---

<div class="pwd-group" data-pwd-group>
  <div class="pwd-group__header">
    <label for={id} class="pwd-group__label">{label}</label>
    <span class="pwd-group__status" data-pwd-status>Too weak</span>
  </div>

  <div class="pwd-group__field">
    <input
      type="password"
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      class="pwd-group__input"
      data-pwd-input
      autocomplete="new-password"
    />
    <button
      type="button"
      class="pwd-group__toggle"
      aria-label="Toggle password visibility"
      data-pwd-toggle
    >
      <svg class="eye-open" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <svg class="eye-closed" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <line x1="2" x2="22" y1="2" y2="22" />
      </svg>
    </button>
  </div>

  <!-- 4-segment strength meter -->
  <div class="pwd-group__meter" aria-hidden="true">
    <div class="pwd-group__segment" data-seg="1"></div>
    <div class="pwd-group__segment" data-seg="2"></div>
    <div class="pwd-group__segment" data-seg="3"></div>
    <div class="pwd-group__segment" data-seg="4"></div>
  </div>
</div>

<style>
  .pwd-group {
    display: flex;
    flex-direction: column;
    gap: var(--sp-2, 0.5rem);
    width: 100%;
    max-width: 360px;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .pwd-group__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
  }

  .pwd-group__label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--c-text-1, #ffffff);
  }

  .pwd-group__status {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #ef4444;
    transition: color 0.3s ease;
  }

  .pwd-group__field {
    position: relative;
    width: 100%;
  }

  .pwd-group__input {
    width: 100%;
    padding: 0.75rem 2.8rem 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-md, 12px);
    color: var(--c-text-1, #ffffff);
    font-size: 0.92rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .pwd-group__input:focus {
    border-color: rgba(184, 134, 11, 0.5);
    box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.15);
  }

  .pwd-group__input::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .pwd-group__toggle {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--c-text-3, #737373);
    cursor: pointer;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--r-sm, 6px);
    transition: color 0.2s ease;
  }

  .pwd-group__toggle:hover {
    color: var(--c-text-1, #ffffff);
  }

  .pwd-group__meter {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    height: 4px;
    margin-top: 4px;
  }

  .pwd-group__segment {
    height: 100%;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.08);
    transition: background 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Dynamic levels */
  .pwd-group[data-level="1"] .pwd-group__segment[data-seg="1"] {
    background: #ef4444;
  }
  .pwd-group[data-level="1"] .pwd-group__status {
    color: #ef4444;
  }

  .pwd-group[data-level="2"] .pwd-group__segment[data-seg="1"],
  .pwd-group[data-level="2"] .pwd-group__segment[data-seg="2"] {
    background: #f59e0b;
  }
  .pwd-group[data-level="2"] .pwd-group__status {
    color: #f59e0b;
  }

  .pwd-group[data-level="3"] .pwd-group__segment[data-seg="1"],
  .pwd-group[data-level="3"] .pwd-group__segment[data-seg="2"],
  .pwd-group[data-level="3"] .pwd-group__segment[data-seg="3"] {
    background: #3b82f6;
  }
  .pwd-group[data-level="3"] .pwd-group__status {
    color: #3b82f6;
  }

  .pwd-group[data-level="4"] .pwd-group__segment {
    background: #10b981;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
  }
  .pwd-group[data-level="4"] .pwd-group__status {
    color: #10b981;
  }
</style>

<script>
  function initPasswordGroups() {
    document.querySelectorAll('[data-pwd-group]').forEach((group) => {
      const input = group.querySelector('[data-pwd-input]') as HTMLInputElement;
      const toggle = group.querySelector('[data-pwd-toggle]') as HTMLButtonElement;
      const status = group.querySelector('[data-pwd-status]') as HTMLElement;
      if (!input || !toggle) return;

      const eyeOpen = toggle.querySelector('.eye-open') as HTMLElement;
      const eyeClosed = toggle.querySelector('.eye-closed') as HTMLElement;

      toggle.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        if (eyeOpen && eyeClosed) {
          eyeOpen.style.display = isPassword ? 'none' : 'block';
          eyeClosed.style.display = isPassword ? 'block' : 'none';
        }
      });

      input.addEventListener('input', () => {
        const val = input.value;
        let score = 0;
        if (val.length >= 6) score++;
        if (val.length >= 10) score++;
        if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        group.setAttribute('data-level', String(score));

        const labels = ['Too weak', 'Weak', 'Fair', 'Strong', 'Secure & Robust'];
        if (status) {
          status.textContent = labels[score] || 'Too weak';
        }
      });
    });
  }

  initPasswordGroups();
  document.addEventListener('astro:page-load', initPasswordGroups);
</script>
`,
    usage: `<PasswordStrengthInput id="user-password" label="Create Password" minLength={8} />`,
  },
  {
    slug: 'tags-autocomplete-input',
    name: 'Tags Autocomplete Input',
    description: 'Multi-tag pill input component with keyboard tag addition, pill removal, and suggestion dropdown.',
    category: 'forms',
    tags: ["form","tags","input","autocomplete","pills"],
    featured: true,
    code: `---
/**
 * TagsAutocompleteInput — Tag entry field with pill badges, keyboard deletion, and suggestion dropdown.
 * 
 * @param {string} id - HTML ID for the tag input.
 * @param {string} label - Input label. Default is 'Tags'.
 * @param {string[]} initialTags - Pre-populated list of tags. Default is ['Astro', 'TypeScript'].
 * @param {string[]} suggestions - Autocomplete candidate options.
 * @param {string} placeholder - Input placeholder. Default is 'Add tag & press Enter...'.
 */
interface Props {
  id: string;
  label?: string;
  initialTags?: string[];
  suggestions?: string[];
  placeholder?: string;
}

const {
  id,
  label = 'Tags',
  initialTags = ['Astro', 'TypeScript'],
  suggestions = ['React', 'Tailwind', 'Three.js', 'SSR', 'Vite', 'GraphQL'],
  placeholder = 'Add tag & press Enter...',
} = Astro.props;
---

<div class="tags-field" data-tags-root>
  <label for={id} class="tags-field__label">{label}</label>

  <div class="tags-field__box" data-tags-box>
    <div class="tags-field__list" data-tags-list>
      {initialTags.map((tag) => (
        <span class="tag-pill" data-tag={tag}>
          <span class="tag-pill__name">{tag}</span>
          <button type="button" class="tag-pill__remove" aria-label={\`Remove tag \${tag}\`} data-tag-remove>×</button>
        </span>
      ))}
    </div>

    <input
      type="text"
      id={id}
      placeholder={placeholder}
      class="tags-field__input"
      data-tags-input
      autocomplete="off"
    />
  </div>

  <div class="tags-field__suggestions" data-tags-suggestions hidden>
    {suggestions.map((sug) => (
      <button type="button" class="sug-item" data-sug-val={sug}>
        + {sug}
      </button>
    ))}
  </div>
</div>

<style>
  .tags-field {
    display: flex;
    flex-direction: column;
    gap: var(--sp-2, 0.5rem);
    width: 100%;
    max-width: 440px;
    font-family: var(--font-sans, system-ui, sans-serif);
    position: relative;
  }

  .tags-field__label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--c-text-1, #ffffff);
  }

  .tags-field__box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    padding: 0.5rem 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-md, 12px);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    min-height: 44px;
  }

  .tags-field__box:focus-within {
    border-color: rgba(184, 134, 11, 0.5);
    box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.15);
  }

  .tags-field__list {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0.25rem 0.65rem;
    background: rgba(184, 134, 11, 0.15);
    border: 1px solid rgba(184, 134, 11, 0.35);
    border-radius: var(--r-full, 9999px);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--c-accent, #fef3c7);
    user-select: none;
    animation: pill-pop 0.2s ease-out;
  }

  @keyframes pill-pop {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  .tag-pill__remove {
    background: transparent;
    border: none;
    color: var(--c-accent, #fef3c7);
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    padding: 0 2px;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .tag-pill__remove:hover {
    opacity: 1;
    color: #ef4444;
  }

  .tags-field__input {
    flex: 1;
    min-width: 140px;
    background: transparent;
    border: none;
    color: var(--c-text-1, #ffffff);
    font-size: 0.88rem;
    outline: none;
    padding: 0.2rem 0;
  }

  .tags-field__input::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .tags-field__suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
    padding: 0.4rem;
    background: rgba(12, 12, 16, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-sm, 8px);
  }

  .sug-item {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-full, 9999px);
    color: var(--c-text-2, #a3a3a3);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .sug-item:hover {
    background: rgba(184, 134, 11, 0.2);
    border-color: rgba(184, 134, 11, 0.4);
    color: var(--c-text-1, #ffffff);
  }
</style>

<script>
  function setupTagsFields() {
    document.querySelectorAll('[data-tags-root]').forEach((root) => {
      const input = root.querySelector('[data-tags-input]') as HTMLInputElement;
      const list = root.querySelector('[data-tags-list]') as HTMLElement;
      const suggestions = root.querySelector('[data-tags-suggestions]') as HTMLElement;
      if (!input || !list) return;

      function addTag(text: string) {
        const clean = text.trim();
        if (!clean) return;

        // Check duplicate
        const exists = Array.from(list.querySelectorAll('.tag-pill__name')).some(
          (el) => el.textContent?.toLowerCase() === clean.toLowerCase()
        );
        if (exists) return;

        const pill = document.createElement('span');
        pill.className = 'tag-pill';
        pill.setAttribute('data-tag', clean);
        pill.innerHTML = \`
          <span class="tag-pill__name">\${clean}</span>
          <button type="button" class="tag-pill__remove" aria-label="Remove tag \${clean}" data-tag-remove>×</button>
        \`;
        list.appendChild(pill);
        input.value = '';
      }

      list.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.matches('[data-tag-remove]')) {
          const pill = target.closest('.tag-pill');
          if (pill) pill.remove();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          addTag(input.value);
        } else if (e.key === 'Backspace' && !input.value) {
          const last = list.querySelector('.tag-pill:last-child');
          if (last) last.remove();
        }
      });

      input.addEventListener('focus', () => {
        if (suggestions) suggestions.hidden = false;
      });

      if (suggestions) {
        suggestions.addEventListener('click', (e) => {
          const btn = (e.target as HTMLElement).closest('[data-sug-val]') as HTMLElement;
          if (btn) {
            const val = btn.getAttribute('data-sug-val');
            if (val) addTag(val);
          }
        });
      }
    });
  }

  setupTagsFields();
  document.addEventListener('astro:page-load', setupTagsFields);
</script>
`,
    usage: `<TagsAutocompleteInput id="article-tags" label="Article Tags" initialTags={['astro', 'design']} />`,
  },
  {
    slug: 'glass-inline-toggle-group',
    name: 'Glass Inline Toggle Group',
    description: 'An iOS/macOS styled segmented control toggle group with glass sliding indicator and keyboard navigation.',
    category: 'forms',
    tags: ["form","toggle","segmented","control","switch"],
    featured: false,
    code: `---
/**
 * GlassInlineToggleGroup — Segmented glassmorphism pill toggle for multi-option selection.
 * 
 * @param {string} name - HTML radio group name.
 * @param {Array<{label: string, value: string, icon?: string}>} options - Selectable options list.
 * @param {string} defaultValue - Value of the active option.
 * @param {'sm' | 'md' | 'lg'} size - Pill size scale. Default is 'md'.
 */
interface Props {
  name: string;
  options?: Array<{ label: string; value: string; icon?: string }>;
  defaultValue?: string;
  size?: 'sm' | 'md' | 'lg';
}

const {
  name,
  options = [
    { label: 'Weekly', value: 'week' },
    { label: 'Monthly', value: 'month' },
    { label: 'Yearly', value: 'year' },
  ],
  defaultValue = 'month',
  size = 'md',
} = Astro.props;
---

<div class:list={['glass-toggle-group', \`glass-toggle-group--\${size}\`]} role="radiogroup" data-toggle-group>
  <div class="glass-toggle-group__slider" data-toggle-slider aria-hidden="true"></div>
  {options.map((opt) => {
    const isChecked = opt.value === defaultValue;
    return (
      <label class="glass-toggle-group__item">
        <input
          type="radio"
          name={name}
          value={opt.value}
          checked={isChecked}
          class="glass-toggle-group__radio"
          data-toggle-radio
        />
        <span class="glass-toggle-group__label">
          {opt.icon && <span class="glass-toggle-group__icon" set:html={opt.icon} />},
          {opt.label}
        </span>
      </label>
    );
  })}
</div>

<style>
  .glass-toggle-group {
    position: relative;
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-full, 9999px);
    padding: 4px;
    user-select: none;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .glass-toggle-group--sm {
    padding: 3px;
  }
  .glass-toggle-group--sm .glass-toggle-group__label {
    padding: 0.35rem 0.8rem;
    font-size: 0.78rem;
  }

  .glass-toggle-group--md .glass-toggle-group__label {
    padding: 0.5rem 1.15rem;
    font-size: 0.88rem;
  }

  .glass-toggle-group--lg .glass-toggle-group__label {
    padding: 0.7rem 1.6rem;
    font-size: 1rem;
  }

  .glass-toggle-group__item {
    position: relative;
    z-index: 2;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .glass-toggle-group__radio {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .glass-toggle-group__label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-sans, system-ui, sans-serif);
    font-weight: 600;
    color: var(--c-text-2, #a3a3a3);
    border-radius: var(--r-full, 9999px);
    transition: color 0.25s ease;
  }

  .glass-toggle-group__item:hover .glass-toggle-group__label {
    color: var(--c-text-1, #ffffff);
  }

  .glass-toggle-group__radio:checked + .glass-toggle-group__label {
    color: #050505;
  }

  /* Sliding backdrop element */
  .glass-toggle-group__slider {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    border-radius: var(--r-full, 9999px);
    background: linear-gradient(135deg, #d4a017, #b8860b);
    box-shadow: 0 4px 16px rgba(184, 134, 11, 0.4);
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }
</style>

<script>
  function setupGlassToggleGroups() {
    document.querySelectorAll('[data-toggle-group]').forEach((group) => {
      const slider = group.querySelector('[data-toggle-slider]') as HTMLElement;
      const radios = group.querySelectorAll('[data-toggle-radio]') as NodeListOf<HTMLInputElement>;
      if (!slider || radios.length === 0) return;

      function updateSlider() {
        const checked = group.querySelector('[data-toggle-radio]:checked') as HTMLInputElement;
        if (!checked) return;
        const label = checked.closest('.glass-toggle-group__item') as HTMLElement;
        if (!label) return;

        const groupRect = group.getBoundingClientRect();
        const labelRect = label.getBoundingClientRect();

        const offsetLeft = labelRect.left - groupRect.left;
        slider.style.width = \`\${labelRect.width}px\`;
        slider.style.transform = \`translateX(\${offsetLeft - 4}px)\`;
      }

      radios.forEach((r) => r.addEventListener('change', updateSlider));
      updateSlider();
      window.addEventListener('resize', updateSlider);
    });
  }

  setupGlassToggleGroups();
  document.addEventListener('astro:page-load', setupGlassToggleGroups);
</script>
`,
    usage: `<GlassInlineToggleGroup name="billing" options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }]} defaultValue="monthly" />`,
  },
  {
    slug: 'phone-country-input',
    name: 'Phone Country Input',
    description: 'Clean phone number input featuring a country dial code selector and auto-formatting.',
    category: 'forms',
    tags: ["form","phone","input","country-code","international"],
    featured: false,
    code: `---
/**
 * PhoneCountryInput — Accessible phone input with country dial code selector and dark glass styling.
 * 
 * @param {string} id - HTML ID for the phone input.
 * @param {string} label - Input label text. Default is 'Phone Number'.
 * @param {string} name - Form field name. Default is 'phone'.
 * @param {string} placeholder - Phone placeholder. Default is '612 345 678'.
 * @param {boolean} required - HTML required field attribute.
 */
interface Props {
  id: string;
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}

const {
  id,
  label = 'Phone Number',
  name = 'phone',
  placeholder = '612 345 678',
  required = false,
} = Astro.props;

const countries = [
  { code: '+34', flag: '🇪🇸', name: 'ES' },
  { code: '+1', flag: '🇺🇸', name: 'US' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+49', flag: '🇩🇪', name: 'DE' },
  { code: '+33', flag: '🇫🇷', name: 'FR' },
  { code: '+52', flag: '🇲🇽', name: 'MX' },
  { code: '+54', flag: '🇦🇷', name: 'AR' },
];
---

<div class="phone-group">
  <label for={id} class="phone-group__label">{label}</label>

  <div class="phone-group__wrap">
    <div class="phone-group__prefix">
      <select class="phone-group__select" aria-label="Country calling code" name={\`\${name}_country\`}>
        {countries.map((c) => (
          <option value={c.code}>
            {c.flag} {c.code}
          </option>
        ))}
      </select>
      <span class="phone-group__arrow" aria-hidden="true">▾</span>
    </div>

    <input
      type="tel"
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      class="phone-group__input"
      autocomplete="tel-national"
    />
  </div>
</div>

<style>
  .phone-group {
    display: flex;
    flex-direction: column;
    gap: var(--sp-2, 0.5rem);
    width: 100%;
    max-width: 380px;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .phone-group__label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--c-text-1, #ffffff);
  }

  .phone-group__wrap {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-md, 12px);
    overflow: hidden;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .phone-group__wrap:focus-within {
    border-color: rgba(184, 134, 11, 0.5);
    box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.15);
  }

  .phone-group__prefix {
    position: relative;
    display: flex;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.02);
  }

  .phone-group__select {
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    color: var(--c-text-1, #ffffff);
    font-size: 0.88rem;
    font-weight: 600;
    padding: 0.75rem 1.6rem 0.75rem 0.85rem;
    cursor: pointer;
    outline: none;
  }

  .phone-group__select option {
    background: #111116;
    color: #ffffff;
  }

  .phone-group__arrow {
    position: absolute;
    right: 0.5rem;
    font-size: 0.7rem;
    color: var(--c-text-3, #737373);
    pointer-events: none;
  }

  .phone-group__input {
    flex: 1;
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    color: var(--c-text-1, #ffffff);
    font-size: 0.92rem;
    font-family: inherit;
    outline: none;
  }

  .phone-group__input::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
</style>
`,
    usage: `<PhoneCountryInput id="phone-number" label="Mobile Number" defaultCountry="+34" />`,
  },
];
