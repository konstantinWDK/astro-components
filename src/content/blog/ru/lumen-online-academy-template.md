---
title: 'Новый шаблон: Lumen — онлайн-академия с кабинетом ученика и студией преподавателя'
description: 'Lumen — новый полный шаблон для онлайн-курсов и академий: каталог с фильтрами, страницы курсов, тарифы, заявка преподавателя, кабинет с плеером уроков и тестом и студия с аналитикой, всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Lumen: платформа курсов «учись делая» на девяти страницах

Появится в следующем релизе. **Lumen** (`templates/academy`) — полный шаблон для онлайн-академии, буткемпа или маркетплейса курсов. У него собственный визуальный язык — чернильно-синий и янтарный «свет лампы» с засечным шрифтом, и он собран только из собственных компонентов (`reusedComponents: []`).

---

### 💡 Lumen · Онлайн-академия, кабинет ученика и студия преподавателя (`templates/academy`)

- **Превью**: [/preview/academy/](/preview/academy/) · **Описание**: [/ru/templates/academy/](/ru/templates/academy/)
- **Публичный сайт (5 страниц)**: главная с поиском курсов, направлениями, популярными курсами, преподавателями, отзывами и тарифами; каталог с фильтрами по поиску, категории, уровню и сортировке (открывается уже отфильтрованным через `?q=` и `?cat=`); страница курса с закреплённой карточкой записи и программой-аккордеоном; тарифы с переключателем помесячно или за год и FAQ; заявка преподавателя.
- **Кабинет и студия (4 страницы)**: вход с переключателем ученик/преподаватель, панель ученика (кольцо недельной цели, серия, курсы в процессе), плеер уроков с перемоткой, скоростью, отметками о завершении и заметками в браузере плюс тест, и студия преподавателя с KPI, графиком за 12 месяцев и сортируемым менеджером курсов.
- **Доступность из коробки**: нативные `<details>` и popover, текстовые альтернативы для каждого графика и кольца, цели касания 44px, видимый фокус и поддержка reduced-motion. Есть тёмная и светлая темы.
- **Страницы**: [Главная](/preview/academy/) · [Каталог](/preview/academy/cursos/) · [Страница курса](/preview/academy/cursos/diseno-de-interfaces-desde-cero/) · [Тарифы](/preview/academy/precios/) · [Преподавайте](/preview/academy/ensena/) · [Вход](/preview/academy/acceso/) · [Панель ученика](/preview/academy/aula/) · [Плеер урока](/preview/academy/aula/clase/) · [Студия преподавателя](/preview/academy/aula/estudio/).
- **19 собственных компонентов**: [`AcademyHero`](/ru/sections/academy-hero/), [`AcademyTracks`](/ru/sections/academy-tracks/), [`AcademyCourseGrid`](/ru/sections/academy-course-grid/), [`AcademyCourseHero`](/ru/sections/academy-course-hero/), [`AcademyCurriculum`](/ru/sections/academy-curriculum/), [`AcademyPricingPlans`](/ru/sections/academy-pricing-plans/), [`AcademyInstructors`](/ru/sections/academy-instructors/), [`AcademyReviews`](/ru/sections/academy-reviews/), [`AcademyTeachForm`](/ru/sections/academy-teach-form/), [`AcademyFooter`](/ru/sections/academy-footer/), [`AcademyLessonPlayer`](/ru/docs/academy-lesson-player/), [`AcademyProgressBoard`](/ru/docs/academy-progress-board/), [`AcademyQuiz`](/ru/docs/academy-quiz/), [`AcademyStudioStats`](/ru/docs/academy-studio-stats/), [`AcademyCoursesTable`](/ru/docs/academy-courses-table/), [`AcademyAreaNav`](/ru/docs/academy-area-nav/), [`AcademyAreaTopbar`](/ru/docs/academy-area-topbar/), [`AcademyAreaHeading`](/ru/docs/academy-area-heading/) и [`AcademySignIn`](/ru/docs/academy-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/academy/" title="Превью Lumen (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/academy/aula/clase/" title="Превью Lumen (player)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
