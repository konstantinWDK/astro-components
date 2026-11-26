---
title: 'Новый шаблон: Pulso — сайт музыкального фестиваля с билетами и личной программой'
description: 'Pulso — новый полный шаблон музыкального фестиваля: отсчёт, афиша, расписание с личной программой, билеты с живым итогом и цифровой пропуск на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Pulso: афиша, расписание, билеты и цифровой пропуск

Появится в следующем релизе. **Pulso** (`templates/festival`) — полный шаблон музыкального фестиваля или живого события. У него собственный глубокий фиолетовый стиль с коралловым и лаймовым акцентами и узким дисплейным шрифтом, светлая и тёмная версии; он собран только из собственных компонентов (`reusedComponents: []`).

---

### 🎪 Pulso · Музыкальный фестиваль & Билеты (`templates/festival`)

- **Живой просмотр**: [/preview/festival/](/preview/festival/) · **Документация**: [/ru/templates/festival/](/ru/templates/festival/)
- **Главная**: герой с живым отсчётом, афиша по дням с широкими карточками хедлайнеров, сцены, билеты и спонсоры.
- **Расписание**: вкладки по дням, фильтры сцен и кнопка «в мою программу» у каждого выступления; пересечения отмечаются. Программа хранится в браузере.
- **Билеты**: типы с выбором количества, дополнения (кемпинг, шаттл) и итог, обновляющийся при выборе. Распроданные помечены текстом.
- **Мой Pulso**: цифровой пропуск со сгенерированным QR-кодом, режим сканирования и печать рядом с сохранённой программой.
- **Информация**: план площадки, как добраться, входы, кемпинг, доступность и FAQ на нативных раскрывающихся элементах.
- **Доступность по умолчанию**: вкладки WAI-ARIA со стрелками, отсчёт озвучивается раз в минуту, цели 44px, видимый фокус и reduced-motion.
- **Страницы**: [Главная](/preview/festival/) · [Афиша](/preview/festival/cartel/) · [Расписание](/preview/festival/horarios/) · [Билеты](/preview/festival/entradas/) · [Инфо](/preview/festival/info/) · [Мой Pulso](/preview/festival/mi-pulso/)
- **11 собственных компонентов**: [`FestivalHero`](/ru/sections/festival-hero/), [`FestivalLineup`](/ru/sections/festival-lineup/), [`FestivalSchedule`](/ru/sections/festival-schedule/), [`FestivalStages`](/ru/sections/festival-stages/), [`FestivalTickets`](/ru/sections/festival-tickets/), [`FestivalVenueInfo`](/ru/sections/festival-venue-info/), [`FestivalSponsors`](/ru/sections/festival-sponsors/), [`FestivalFooter`](/ru/sections/festival-footer/), [`FestivalCountdown`](/ru/docs/festival-countdown/), [`FestivalAgendaPlanner`](/ru/docs/festival-agenda-planner/), [`FestivalTicketWallet`](/ru/docs/festival-ticket-wallet/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/festival/" title="Pulso live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/festival/horarios/" title="Pulso live preview (timetable)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
