// src/data/registry/forms.ts
import type { ComponentDoc } from './types';
import { source } from './sources';

export const forms: ComponentDoc[] = [
  {
    slug: 'animated-input',
    name: 'Animated Input',
    description: 'Input with floating label animation.',
    category: 'forms',
    tags: ["input","animated"],
    featured: true,
    code: source('forms/AnimatedInput.astro'),
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
    code: source('forms/ChipInput.astro'),
    usage: `<ChipInput label="Product Tags" initialChips={["New", "Sale"]} placeholder="Add tag..." />`,
  },
  {
    slug: 'color-picker-input',
    name: 'Color Picker',
    description: 'Custom hex color selector with preview.',
    category: 'forms',
    tags: ["input","color"],
    featured: true,
    code: source('forms/ColorPickerInput.astro'),
    usage: `<ColorPickerInput id="theme" label="Brand Color" value="#6366f1" />`,
  },
  {
    slug: 'currency-input',
    name: 'Currency Input',
    description: 'Numeric input with currency prefix.',
    category: 'forms',
    tags: ["input","currency"],
    featured: true,
    code: source('forms/CurrencyInput.astro'),
    usage: `<CurrencyInput id="price" label="Product Price" symbol="$" value={29.99} />`,
  },
  {
    slug: 'custom-radio-group',
    name: 'Custom Radio Group',
    description: 'Styled radio button collection.',
    category: 'forms',
    tags: ["radio","group"],
    featured: true,
    code: source('forms/CustomRadioGroup.astro'),
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
    code: source('forms/CyberpunkCheckbox.astro'),
    usage: `<CyberpunkCheckbox id="accept" label="Accept Protocols" checked />`,
  },
  {
    slug: 'drag-drop-upload',
    name: 'Drag & Drop Upload',
    description: 'Large interactive file upload zone.',
    category: 'forms',
    tags: ["upload","file"],
    featured: true,
    code: source('forms/DragDropUpload.astro'),
    usage: `<DragDropUpload id="files" accept="image/*" multiple />`,
  },
  {
    slug: 'error-input',
    name: 'Error Input',
    description: 'Input styled for validation error states.',
    category: 'forms',
    tags: ["input","validation"],
    featured: true,
    code: source('forms/ErrorInput.astro'),
    usage: `<ErrorInput id="user" errorMessage="Username is already taken" value="konstantin" />`,
  },
  {
    slug: 'floating-password',
    name: 'Password Toggle',
    description: 'Password field with reveal toggle.',
    category: 'forms',
    tags: ["input","password"],
    featured: true,
    code: source('forms/FloatingPassword.astro'),
    usage: `<FloatingPassword id="pass" placeholder="Enter Secure Password" />`,
  },
  {
    slug: 'form-group-vertical',
    name: 'Form Group',
    description: 'Wrapper for labeling and help text.',
    category: 'forms',
    tags: ["layout","group"],
    featured: true,
    code: source('forms/FormGroupVertical.astro'),
    usage: `<FormGroupVertical label="Username" forId="u" helpText="Characters only."><input id="u" class="custom-input" /></FormGroupVertical>`,
  },
  {
    slug: 'glass-slider',
    name: 'Glass Slider',
    description: 'Translucent range slider with glow.',
    category: 'forms',
    tags: ["input","range"],
    featured: true,
    code: source('forms/GlassSlider.astro'),
    usage: `<GlassSlider id="volume" label="Speaker Volume" min={0} max={100} value={75} />`,
  },
  {
    slug: 'glass-textarea',
    name: 'Glass Textarea',
    description: 'Glassmorphism styled multiline input.',
    category: 'forms',
    tags: ["textarea","glass"],
    featured: true,
    code: source('forms/GlassTextarea.astro'),
    usage: `<GlassTextarea id="bio" label="Your Biography" rows={5} placeholder="Tell us about yourself..." />`,
  },
  {
    slug: 'modern-select',
    name: 'Modern Select',
    description: 'Custom styled dropdown selector.',
    category: 'forms',
    tags: ["select","modern"],
    featured: true,
    code: source('forms/ModernSelect.astro'),
    usage: `<ModernSelect id="role" label="Project Role" options={[{label: "Developer", value: "dev"}, {label: "Designer", value: "dsign"}]} />`,
  },
  {
    slug: 'neumorphic-switch',
    name: 'Neumorphic Switch',
    description: 'Soft-UI toggle switch.',
    category: 'forms',
    tags: ["switch","neumorphism"],
    featured: true,
    code: source('forms/NeumorphicSwitch.astro'),
    usage: `<NeumorphicSwitch id="notify" label="Enable Notifications" checked />`,
  },
  {
    slug: 'otp-input',
    name: 'OTP Input',
    description: 'Professional form control.',
    category: 'forms',
    tags: ["form"],
    featured: true,
    code: source('forms/OTPInput.astro'),
    usage: `<OTPInput />`,
  },
  {
    slug: 'rating-stars',
    name: 'Star Rating',
    description: 'Classic star-based feedback input.',
    category: 'forms',
    tags: ["input","rating"],
    featured: true,
    code: source('forms/RatingStars.astro'),
    usage: `<RatingStars name="quality" initialValue={4} />`,
  },
  {
    slug: 'search-reveal',
    name: 'Search Reveal',
    description: 'Minimal search that expands on hover.',
    category: 'forms',
    tags: ["input","search"],
    featured: true,
    code: source('forms/SearchReveal.astro'),
    usage: `<SearchReveal id="site-search" placeholder="Search components..." />`,
  },
  {
    slug: 'segmented-control',
    name: 'Segmented Control',
    description: 'Radio-based mode switcher.',
    category: 'forms',
    tags: ["segmented","switch"],
    featured: true,
    code: source('forms/SegmentedControl.astro'),
    usage: `<SegmentedControl name="view" options={[{label: "Day", value: "d", checked: true}, {label: "Week", value: "w"}]} />`,
  },
  {
    slug: 'simple-file-input',
    name: 'Simple File Input',
    description: 'Minimalist file upload button.',
    category: 'forms',
    tags: ["input","file"],
    featured: true,
    code: source('forms/SimpleFileInput.astro'),
    usage: `<SimpleFileInput id="avatar" label="Upload Profile Picture" accept="image/*" />`,
  },
  {
    slug: 'stepper-input',
    name: 'Numeric Stepper',
    description: 'Input with +/- increment buttons.',
    category: 'forms',
    tags: ["input","stepper"],
    featured: true,
    code: source('forms/StepperInput.astro'),
    usage: `<StepperInput id="qty" label="Quantity" value={1} min={1} max={10} />`,
  },
  {
    slug: 'password-strength-input',
    name: 'Password Strength Input',
    description: 'Interactive password input with dynamic real-time entropy calculation, strength meter bar, and visibility toggle.',
    category: 'forms',
    tags: ["form","input","password","security","validation"],
    featured: true,
    code: source('forms/PasswordStrengthInput.astro'),
    usage: `<PasswordStrengthInput id="user-password" label="Create Password" minLength={8} />`,
  },
  {
    slug: 'tags-autocomplete-input',
    name: 'Tags Autocomplete Input',
    description: 'Multi-tag pill input component with keyboard tag addition, pill removal, and suggestion dropdown.',
    category: 'forms',
    tags: ["form","tags","input","autocomplete","pills"],
    featured: true,
    code: source('forms/TagsAutocompleteInput.astro'),
    usage: `<TagsAutocompleteInput id="article-tags" label="Article Tags" initialTags={['astro', 'design']} />`,
  },
  {
    slug: 'glass-inline-toggle-group',
    name: 'Glass Inline Toggle Group',
    description: 'An iOS/macOS styled segmented control toggle group with glass sliding indicator and keyboard navigation.',
    category: 'forms',
    tags: ["form","toggle","segmented","control","switch"],
    featured: false,
    code: source('forms/GlassInlineToggleGroup.astro'),
    usage: `<GlassInlineToggleGroup name="billing" options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }]} defaultValue="monthly" />`,
  },
  {
    slug: 'phone-country-input',
    name: 'Phone Country Input',
    description: 'Clean phone number input featuring a country dial code selector and auto-formatting.',
    category: 'forms',
    tags: ["form","phone","input","country-code","international"],
    featured: false,
    code: source('forms/PhoneCountryInput.astro'),
    usage: `<PhoneCountryInput id="phone-number" label="Mobile Number" defaultCountry="+34" />`,
  },
];
