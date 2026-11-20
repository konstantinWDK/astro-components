// src/components/lib/templates/food-delivery/food-art.ts
// Flat "sticker" illustrations for BiteFlow dishes (viewBox 0 0 120 120), so the template
// needs no photos. Colours come from the `.bf-art` classes in food-theme.css.
import type { FoodArt } from './data';

const plate = '<circle class="a-plate" cx="60" cy="62" r="50"/><circle class="a-plate-in" cx="60" cy="62" r="40"/>';

const art: Record<FoodArt, string> = {
  burger:
    plate +
    '<path class="a-bun" d="M28 56c0-17 14-27 32-27s32 10 32 27z"/>' +
    '<g class="a-seed"><ellipse cx="48" cy="40" rx="2.4" ry="1.4"/><ellipse cx="62" cy="36" rx="2.4" ry="1.4"/><ellipse cx="74" cy="43" rx="2.4" ry="1.4"/><ellipse cx="56" cy="47" rx="2.4" ry="1.4"/></g>' +
    '<path class="a-leaf" d="M24 60c4-4 8 2 12-2s8 2 12-2 8 2 12-2 8 2 12-2 8 2 12-2 8 2 12 2v4H24z"/>' +
    '<path class="a-cheese" d="M27 62h66l-10 10-8-6-10 8-8-7-9 7-8-6-7 5z"/>' +
    '<rect class="a-patty" x="26" y="66" width="68" height="11" rx="5.5"/>' +
    '<path class="a-bun" d="M28 80h64c0 8-8 13-18 13H46c-10 0-18-5-18-13z"/>',
  pizza:
    plate +
    '<circle class="a-crust" cx="60" cy="62" r="38"/><circle class="a-sauce" cx="60" cy="62" r="32"/>' +
    '<path class="a-cheese" d="M38 52c6-10 22-14 34-8s16 20 10 30-20 14-30 10-20-20-14-32z" opacity=".85"/>' +
    '<g class="a-pep"><circle cx="48" cy="54" r="5"/><circle cx="70" cy="50" r="5"/><circle cx="64" cy="72" r="5"/><circle cx="46" cy="72" r="4.2"/><circle cx="78" cy="66" r="4.2"/></g>' +
    '<g class="a-cut"><path d="M60 24v76M27 43l66 38M27 81l66-38"/></g>' +
    '<g class="a-leaf"><ellipse cx="58" cy="60" rx="4" ry="2.4" transform="rotate(-30 58 60)"/><ellipse cx="74" cy="78" rx="4" ry="2.4" transform="rotate(20 74 78)"/></g>',
  ramen:
    '<path class="a-steam" d="M44 30c-4-6 4-10 0-16M60 28c-4-6 4-10 0-16M76 30c-4-6 4-10 0-16"/>' +
    '<ellipse class="a-broth" cx="60" cy="58" rx="44" ry="14"/>' +
    '<path class="a-noodle" d="M24 58c6-4 10 4 16 0s10 4 16 0 10 4 16 0 10 4 16 0 8 3 8 3"/>' +
    '<circle class="a-egg" cx="46" cy="55" r="8"/><circle class="a-yolk" cx="46" cy="55" r="4"/>' +
    '<rect class="a-nori" x="68" y="44" width="12" height="16" rx="2" transform="rotate(12 74 52)"/>' +
    '<path class="a-bowl" d="M16 60h88c0 24-20 40-44 40S16 84 16 60z"/>' +
    '<path class="a-chop" d="M80 22l26 34M88 18l24 36"/>',
  taco:
    plate +
    '<path class="a-shell" d="M20 84a40 40 0 0 1 80 0z"/>' +
    '<path class="a-leaf" d="M30 70c6-12 14-18 30-20s26 6 32 18c-8-4-14 2-20-2s-10 4-16 0-12 4-16 0-6 4-10 4z"/>' +
    '<g class="a-pep"><circle cx="44" cy="62" r="4"/><circle cx="66" cy="58" r="4"/><circle cx="78" cy="66" r="3.5"/></g>' +
    '<g class="a-onion"><circle cx="54" cy="56" r="2.4"/><circle cx="72" cy="52" r="2.4"/><circle cx="60" cy="64" r="2"/></g>' +
    '<path class="a-shell-line" d="M28 84a32 32 0 0 1 64 0"/>',
  poke:
    '<circle class="a-bowl" cx="60" cy="62" r="50"/><circle class="a-rice" cx="60" cy="62" r="40"/>' +
    '<path class="a-salmon" d="M60 62L60 22a40 40 0 0 1 34.6 20z"/>' +
    '<path class="a-avo" d="M60 62l34.6-20a40 40 0 0 1 0 40z"/>' +
    '<path class="a-mango" d="M60 62l34.6 20A40 40 0 0 1 60 102z"/>' +
    '<g class="a-edamame"><circle cx="40" cy="76" r="4"/><circle cx="34" cy="66" r="4"/><circle cx="46" cy="86" r="4"/></g>' +
    '<g class="a-seed"><ellipse cx="44" cy="44" rx="2" ry="1.2"/><ellipse cx="52" cy="38" rx="2" ry="1.2"/><ellipse cx="38" cy="52" rx="2" ry="1.2"/></g>',
  salad:
    '<circle class="a-bowl" cx="60" cy="62" r="50"/>' +
    '<g class="a-leaf"><ellipse cx="44" cy="50" rx="18" ry="10" transform="rotate(-30 44 50)"/><ellipse cx="76" cy="52" rx="18" ry="10" transform="rotate(30 76 52)"/><ellipse cx="58" cy="78" rx="20" ry="10"/></g>' +
    '<g class="a-leaf-2"><ellipse cx="62" cy="44" rx="14" ry="8"/><ellipse cx="40" cy="72" rx="12" ry="7" transform="rotate(40 40 72)"/></g>' +
    '<g class="a-crouton"><rect x="52" y="56" width="9" height="9" rx="2"/><rect x="72" y="70" width="9" height="9" rx="2" transform="rotate(20 76 74)"/></g>' +
    '<g class="a-pep"><circle cx="82" cy="40" r="5"/><circle cx="36" cy="88" r="4"/></g>',
  dessert:
    plate +
    '<circle class="a-dough" cx="60" cy="62" r="32"/><path class="a-glaze" d="M30 58c2-16 14-26 30-26s28 10 30 26c-4 4-8-2-12 2s-8-2-12 2-8-2-12 2-8-2-12 2-8-2-12-8z"/>' +
    '<circle class="a-hole" cx="60" cy="60" r="10"/>' +
    '<g class="a-sprinkle"><rect x="42" y="44" width="7" height="2.4" rx="1.2" transform="rotate(30 45 45)"/><rect x="70" y="42" width="7" height="2.4" rx="1.2" transform="rotate(-20 73 43)"/><rect x="78" y="56" width="7" height="2.4" rx="1.2" transform="rotate(60 81 57)"/><rect x="48" y="70" width="7" height="2.4" rx="1.2"/></g>',
  drink:
    '<path class="a-straw" d="M66 10l-6 30"/>' +
    '<path class="a-cup" d="M34 38h52l-6 66H40z"/>' +
    '<path class="a-juice" d="M37 54h46l-4.6 48H41.6z"/>' +
    '<g class="a-ice"><rect x="46" y="60" width="11" height="11" rx="2" transform="rotate(12 51 65)"/><rect x="62" y="68" width="11" height="11" rx="2" transform="rotate(-10 67 73)"/></g>' +
    '<circle class="a-lemon" cx="84" cy="40" r="12"/><circle class="a-lemon-in" cx="84" cy="40" r="8"/>' +
    '<rect class="a-lid" x="30" y="32" width="60" height="8" rx="4"/>',
};

/** Returns the inner SVG markup for a dish illustration (use with viewBox="0 0 120 120"). */
export function foodArt(kind: FoodArt): string {
  return art[kind] ?? art.burger;
}
