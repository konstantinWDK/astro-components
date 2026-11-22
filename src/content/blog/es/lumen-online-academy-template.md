---
title: 'Nueva plantilla: Lumen, academia online con aula del alumno y estudio del instructor'
description: 'Lumen es una plantilla completa para cursos y academias online: catálogo filtrable, fichas de curso, planes, solicitud de instructores, un aula con reproductor de clases y test, y un estudio con analítica, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Lumen: plataforma de cursos para aprender haciendo, en nueve páginas

Disponible en la próxima versión. **Lumen** (`templates/academy`) es una plantilla completa para una academia online, bootcamp o marketplace de cursos. Tiene su propio lenguaje visual azul tinta y ámbar "luz de lectura" con tipografía serif, y se construye únicamente con sus propios componentes (`reusedComponents: []`).

---

### 💡 Lumen · Academia online, aula del alumno y estudio del instructor (`templates/academy`)

- **Vista previa**: [/preview/academy/](/preview/academy/) · **Ficha**: [/es/templates/academy/](/es/templates/academy/)
- **Web pública (5 páginas)**: home con buscador de cursos, rutas de aprendizaje, cursos destacados, instructores, opiniones y planes; catálogo que filtra por búsqueda, categoría, nivel y orden (y se abre ya filtrado con `?q=` y `?cat=`); ficha de curso con tarjeta de matrícula fija y temario desplegable; planes con interruptor mensual o anual y preguntas frecuentes; y solicitud para ser instructor.
- **Aula y estudio (4 páginas)**: acceso con selector alumno o instructor, panel del alumno (anillo de meta semanal, racha, cursos en curso), reproductor de clases con barra de posición, velocidad, clases completadas y apuntes guardados en el navegador más un test, y estudio del instructor con KPIs, gráfico de 12 meses y gestor de cursos ordenable.
- **Accesible de serie**: `<details>` y popovers nativos, alternativas de texto para cada gráfico y anillo, objetivos táctiles de 44px, foco visible y soporte de movimiento reducido. El tema tiene variantes oscura y clara.
- **Páginas**: [Inicio](/preview/academy/) · [Catálogo](/preview/academy/cursos/) · [Ficha de curso](/preview/academy/cursos/diseno-de-interfaces-desde-cero/) · [Planes](/preview/academy/precios/) · [Enseña](/preview/academy/ensena/) · [Acceso](/preview/academy/acceso/) · [Panel del alumno](/preview/academy/aula/) · [Reproductor](/preview/academy/aula/clase/) · [Estudio del instructor](/preview/academy/aula/estudio/).
- **19 componentes propios**: [`AcademyHero`](/es/sections/academy-hero/), [`AcademyTracks`](/es/sections/academy-tracks/), [`AcademyCourseGrid`](/es/sections/academy-course-grid/), [`AcademyCourseHero`](/es/sections/academy-course-hero/), [`AcademyCurriculum`](/es/sections/academy-curriculum/), [`AcademyPricingPlans`](/es/sections/academy-pricing-plans/), [`AcademyInstructors`](/es/sections/academy-instructors/), [`AcademyReviews`](/es/sections/academy-reviews/), [`AcademyTeachForm`](/es/sections/academy-teach-form/), [`AcademyFooter`](/es/sections/academy-footer/), [`AcademyLessonPlayer`](/es/docs/academy-lesson-player/), [`AcademyProgressBoard`](/es/docs/academy-progress-board/), [`AcademyQuiz`](/es/docs/academy-quiz/), [`AcademyStudioStats`](/es/docs/academy-studio-stats/), [`AcademyCoursesTable`](/es/docs/academy-courses-table/), [`AcademyAreaNav`](/es/docs/academy-area-nav/), [`AcademyAreaTopbar`](/es/docs/academy-area-topbar/), [`AcademyAreaHeading`](/es/docs/academy-area-heading/) y [`AcademySignIn`](/es/docs/academy-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/academy/" title="Vista previa de Lumen (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/academy/aula/clase/" title="Vista previa de Lumen (player)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
