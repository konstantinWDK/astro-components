---
title: 'Новые шаблоны и редизайны: Nido, Forja, BiteFlow и Strukto'
description: 'Два новых полнофункциональных шаблона (Nido для недвижимости и CRM, Forja для фитнес-клуба) и полный редизайн BiteFlow (доставка еды) и Strukto (строительство и Site OS) без общих базовых компонентов.'
date: '2026-11-20'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Четыре автономных шаблона с собственным визуальным языком

В этом обновлении добавлены два новых шаблона (**Nido** и **Forja**), а **BiteFlow** и **Strukto** переработаны с нуля. Каждый шаблон теперь строится исключительно на собственных компонентах (`reusedComponents: []`), отдельных дизайн-токенах и интерактивных сценариях бэк-офиса.

---

### 🏠 Nido · Агентство недвижимости и CRM (`templates/real-estate`)

- **Превью**: [/preview/real-estate/](/preview/real-estate/) · **Описание**: [/ru/templates/real-estate/](/ru/templates/real-estate/)
- **Публичный портал**: поиск покупки/аренды, фильтруемый каталог с сохранением избранного и картой районов, карточка объекта с галереей, записью на просмотр, ипотечным калькулятором и 3-шаговой оценкой жилья для собственников.
- **CRM для агентов**: вход, обзорная панель, таблица объектов и воронка лидов.
- **16 собственных компонентов**: [`EstateHero`](/ru/sections/estate-hero/), [`EstateListingsGrid`](/ru/sections/estate-listings-grid/), `EstateNeighborhoods`, `EstatePropertyGallery`, `EstateAgentsGrid`, `EstateValuationCta`, `EstateFooter`, `EstateMortgageCalculator`, `EstateValuationWizard`, `EstateVisitScheduler`, `EstateLeadsPipeline`, `EstateCrmSidebar`, `EstateCrmTopbar`, `EstateCrmHeading`, `EstateListingsTable` и `EstateAgentSignIn`.

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/real-estate/" title="Превью Nido" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 🏋️ Forja · Фитнес-клуб и личный кабинет (`templates/gym`)

- **Превью**: [/preview/gym/](/preview/gym/) · **Описание**: [/ru/templates/gym/](/ru/templates/gym/)
- **Сайт клуба**: расписание на сегодня, направления с уровнем нагрузки, текущая загрузка зала, недельное расписание с вкладками и фильтрами, тарифы (помесячно или за год), команда тренеров и пробный визит.
- **Кабинет участника и персонала**: вход, трекер прогресса, запись на занятия с листом ожидания, таблица клиентов и контроль заполняемости.
- **15 собственных компонентов**: [`GymHero`](/ru/sections/gym-hero/), [`GymDisciplines`](/ru/sections/gym-disciplines/), `GymSchedule`, `GymMembershipPlans`, `GymTrainersGrid`, `GymTrialForm`, `GymFooter`, `GymClassBooking`, `GymProgressTracker`, `GymOccupancyMeter`, `GymAreaNav`, `GymAreaTopbar`, `GymAreaHeading`, `GymMembersTable` и `GymSignIn`.

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/gym/" title="Превью Forja" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 🍔 BiteFlow · Редизайн доставки еды и Kitchen OS (`templates/food-delivery`)

- **Превью**: [/preview/food-delivery/](/preview/food-delivery/) · **Экран кухни (KDS)**: [/preview/food-delivery/cocina/kds/](/preview/food-delivery/cocina/kds/) · **Описание**: [/ru/templates/food-delivery/](/ru/templates/food-delivery/)
- **Поп-стиль «стикер»**: кремовая бумага, плотные тёмные контуры, томатные и горчичные акценты и собственные SVG-иллюстрации.
- **Ключевые эффекты**: центрированный постер-hero, блюдо улетает в корзину при добавлении, анимированная карта маршрута курьера, скролл-история *«От огня до вашей двери»* и экран кухни (KDS) с переносом карточек через View Transitions.
- **16 собственных компонентов и 11 страниц**: [`FoodHeroPlate`](/ru/sections/food-hero-plate/), [`FoodMenuBoard`](/ru/sections/food-menu-board/), [`FoodScrollStory`](/ru/sections/food-scroll-story/), [`FoodPartnerPitch`](/ru/sections/food-partner-pitch/), `FoodFooter`, `FoodCartDrawer`, `FoodOrderMap`, `FoodKitchenBoard`, `FoodMenuManager`, `FoodRiderDispatch`, `FoodOrdersTable`, `FoodServicePulse`, `FoodOpsNav`, `FoodOpsTopbar`, `FoodOpsHeading` и `FoodCrewSignIn`.

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/food-delivery/" title="Превью BiteFlow" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 📐 Strukto · Редизайн строительной компании и Site OS (`templates/construction`)

- **Превью**: [/preview/construction/](/preview/construction/) · **Site OS**: [/preview/construction/app/sites/](/preview/construction/app/sites/) · **Описание**: [/ru/templates/construction/](/ru/templates/construction/)
- **Тема «синька» (чертёж)**: тёмно-синий чертёжный лист со светлой темой кальки, типографика `Archivo` + `IBM Plex Mono` и процедурный генератор фасадов.
- **Ключевые эффекты**: панорамный саморисующийся чертёж-hero с перекрестием координат и нижним штампом, поэтажный рост здания при скролле, 3D-изометрический выбор квартир (вращение и раздвижение этажей) и калькулятор сметы с растущим SVG-зданием.
- **15 собственных компонентов и 11 страниц**: [`ConstructionBlueprintHero`](/ru/sections/construction-blueprint-hero/), [`ConstructionProjectSheets`](/ru/sections/construction-project-sheets/), [`ConstructionBuildSequence`](/ru/sections/construction-build-sequence/), [`ConstructionTenderForm`](/ru/sections/construction-tender-form/), `ConstructionFooter`, `ConstructionCostEstimator`, `ConstructionIsoUnitPicker`, `ConstructionGanttBoard`, `ConstructionSitesBoard`, `ConstructionSiteLogbook`, `ConstructionUnitsLedger`, `ConstructionOsSidebar`, `ConstructionOsTopbar`, `ConstructionOsHeading` и `ConstructionSignIn`.

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/construction/" title="Превью Strukto" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

