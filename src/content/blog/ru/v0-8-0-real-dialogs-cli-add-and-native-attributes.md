---
title: 'v0.8.0: настоящие диалоги, CLI для копирования компонентов и нативные HTML-атрибуты'
description: 'В astro-component-kit 0.8.0 модальное окно, боковая панель и нижний лист переписаны на нативном <dialog>, добавлена команда `npx astro-component-kit add`, CSS разделён на tokens/base/fonts, а кнопки, формы и карточки принимают class и любые HTML-атрибуты.'
date: '2026-11-20'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Релиз о том, как пользоваться китом, а не только смотреть на него

**astro-component-kit 0.8.0** — это в первую очередь доработка существующих компонентов, чтобы они вели себя так, как вы ожидаете в реальном проекте: настоящие диалоги, атрибуты, которые доходят до DOM, CSS, который можно подключать по частям, и примеры кода, всегда совпадающие с опубликованным. Кроме того, в релиз вошли два новых шаблона — **Nido** (недвижимость + CRM для агентов) и **Forja** (фитнес-клуб + кабинет участника), а также полный редизайн **BiteFlow** и **Strukto**.

---

### 🪟 Модальное окно, боковая панель и нижний лист стали настоящими диалогами

`OverlayModal`, `SideDrawerRight` и `BottomSheetMobile` переписаны на нативном элементе `<dialog>`. Браузер сам удерживает фокус внутри, закрывает окно по Escape, выводит его в верхний слой и возвращает фокус на кнопку, которая его открыла, — без дополнительного JavaScript.

```astro
<GlassButton data-dialog-open="delete-project">Удалить проект</GlassButton>

<OverlayModal id="delete-project" size="sm" title="Удалить проект?">
  <Fragment slot="footer">
    <GlassButton variant="ghost" data-dialog-close="cancel">Отмена</GlassButton>
    <GlassButton data-dialog-close="confirm">Удалить</GlassButton>
  </Fragment>
</OverlayModal>
```

- Открываются через `data-dialog-open="<id>"` на любом элементе, закрываются через `data-dialog-close`, Escape или клик по фону
- `variant` (`glass`, `solid`, `minimal`), `size` (`sm`, `md`, `lg`), `title`, `description` и слот `footer`
- Панель выезжает справа (`right`) или слева (`left`); нижний лист занимает всю ширину на телефоне и парит на десктопе
- Анимации появления через `@starting-style`, отключаются при уменьшенном движении

> **Несовместимое изменение:** этим трём компонентам теперь нужен `id`, и они остаются закрытыми, пока их не откроют. Если вы использовали их как статичные блоки, добавьте `id` и кнопку-триггер или передайте `open`, чтобы показать их при загрузке.

---

### ⌨️ Копируйте компоненты в свой проект

Хотите владеть кодом? CLI копирует компонент и все локальные файлы, которые он импортирует:

```bash
npx astro-component-kit add glass-button animated-input --dir src/components/ui
npx astro-component-kit list overlays
```

Он предупреждает, если компоненту нужен `three` или `apexcharts`, и подсказывает названия при опечатке.

---

### 🏷️ `class` и нативные атрибуты там, где они нужны

Кнопки, поля форм и карточки теперь принимают `class` и любые HTML-атрибуты, например `aria-*`, `data-*`, `target`, `rel` или `autocomplete`. Компоненты форм передают их нативному `<input>`, `<select>` или `<textarea>`, поэтому валидация и автозаполнение работают.

```astro
<GlassButton href="/docs" target="_blank" rel="noopener" class="hero-cta">Docs</GlassButton>
<AnimatedInput id="email" label="Email" type="email" autocomplete="email" required />
```

---

### 🎨 CSS, который можно подключать по частям

`global.css` по-прежнему работает, а теперь разделён на три файла:

- `astro-component-kit/tokens.css`: только CSS-переменные, безопасно для любого существующего сайта
- `astro-component-kit/base.css`: сброс и стили страницы; подключайте его в слое, чтобы ваши стили оставались главными
- `astro-component-kit/fonts.css`: Inter и JetBrains Mono

---

### 🏗️ Два новых шаблона и два редизайна

В 0.8.0 добавлены **Nido** (агентство недвижимости + CRM, `templates/real-estate`) и **Forja** (фитнес-клуб + кабинет участника, `templates/gym`), а **BiteFlow** (`templates/food-delivery`) и **Strukto** (`templates/construction`) переписаны с нуля. Каждый шаблон использует только собственные компоненты (`reusedComponents: []`): всего 62 компонента, у каждого есть страница документации и живое превью.

| Шаблон | Живое превью | Компоненты |
|---|---|---|
| Nido · недвижимость + CRM | [/preview/real-estate/](/preview/real-estate/) | [`EstateHero`](/ru/sections/estate-hero/), [`EstateListingsGrid`](/ru/sections/estate-listings-grid/), [`EstateMortgageCalculator`](/ru/docs/estate-mortgage-calculator/), [`EstateLeadsPipeline`](/ru/docs/estate-leads-pipeline/) и ещё 12 |
| Forja · фитнес-клуб + кабинет | [/preview/gym/](/preview/gym/) | [`GymHero`](/ru/sections/gym-hero/), [`GymSchedule`](/ru/sections/gym-schedule/), [`GymClassBooking`](/ru/docs/gym-class-booking/), [`GymOccupancyMeter`](/ru/docs/gym-occupancy-meter/) и ещё 11 |
| BiteFlow · доставка еды + Kitchen OS | [/preview/food-delivery/](/preview/food-delivery/) | [`FoodHeroPlate`](/ru/sections/food-hero-plate/), [`FoodCartDrawer`](/ru/docs/food-cart-drawer/), [`FoodOrderMap`](/ru/docs/food-order-map/), [`FoodKitchenBoard`](/ru/docs/food-kitchen-board/) и ещё 12 |
| Strukto · строительство + Site OS | [/preview/construction/](/preview/construction/) | [`ConstructionBlueprintHero`](/ru/sections/construction-blueprint-hero/), [`ConstructionIsoUnitPicker`](/ru/docs/construction-iso-unit-picker/), [`ConstructionGanttBoard`](/ru/docs/construction-gantt-board/) и ещё 12 |

MCP-сервер тоже знает о них (`get_template` со slug `real-estate` и `gym`). Полные списки компонентов и живые превью — в заметке [Новые шаблоны и редизайны](/ru/notes/new-templates-nido-forja-biteflow-strukto/).

---

### 🐛 Исправления

- Блоки кода в документации и на MCP-сервере теперь читают реальные файлы компонентов. 188 из них расходились с опубликованным кодом.
- Отключённые кнопки-ссылки больше не нажимаются, а `LoadingButton` сообщает о состоянии загрузки
- Три кнопки, которые по умолчанию отправляли формы, теперь используют `type="button"`
- Декоративные слои скрыты от программ чтения с экрана, а у текстового поля виджета отзывов виден фокус клавиатуры
- MCP-сервер сообщает свою версию и токены, даже если запущен через `npx` из другого проекта

Все подробности — в [changelog](https://github.com/konstantinWDK/astro-components/blob/main/CHANGELOG.md).
