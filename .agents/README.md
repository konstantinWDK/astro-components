# 🤖 Agent Workflows & Development Procedures

Este directorio contiene los flujos de trabajo, guías de rol y habilidades especializadas para el desarrollo continuo de componentes y secciones en **Astro Components Kit**.

---

## 📂 Estructura

```
.agents/
├── skills/
│   └── threejs-guide/
│       └── SKILL.md                 # Habilidad/Referencia técnica para Three.js r160+
├── workflows/
│   ├── component-creator.md         # Procedimiento para crear nuevos componentes UI
│   ├── component-reviewer.md        # Checklist estricto de code review
│   ├── documentation-agent.md       # Guía para documentar y registrar en src/data/registry/
│   ├── qa-accessibility.md          # Auditoría de accesibilidad (a11y), responsive y WCAG AA
│   ├── refactoring-agent.md         # Reglas para refactorizar sin romper compatibilidad
│   └── sections-creator.md          # Procedimiento para crear secciones completas de página
└── README.md                        # Índice de procedimientos
```

---

## 🎯 Resumen de Procedimientos

| Procedimiento | Archivo | Cuándo usarlo |
| :--- | :--- | :--- |
| **Component Creator** | [`workflows/component-creator.md`](./workflows/component-creator.md) | Al diseñar e implementar un nuevo componente `.astro` desde cero. |
| **Component Reviewer** | [`workflows/component-reviewer.md`](./workflows/component-reviewer.md) | Para revisar calidad de código, BEM, tokens CSS y consistencia. |
| **QA & Accessibility** | [`workflows/qa-accessibility.md`](./workflows/qa-accessibility.md) | Para auditar accesibilidad (teclado, ARIA, contraste) y responsive (320px+). |
| **Documentation** | [`workflows/documentation-agent.md`](./workflows/documentation-agent.md) | Al añadir o actualizar entradas en `src/data/registry/` y páginas de docs. |
| **Sections Creator** | [`workflows/sections-creator.md`](./workflows/sections-creator.md) | Al crear secciones de página completa (heroes, grids, pricing, etc.). |
| **Refactoring** | [`workflows/refactoring-agent.md`](./workflows/refactoring-agent.md) | Para estandarizar componentes antiguos manteniendo su diseño y funcionalidad. |

---

## 🛠️ Habilidades Disponibles

- **Three.js Guide**: [`skills/threejs-guide/SKILL.md`](./skills/threejs-guide/SKILL.md) — Referencia técnica para escenas 3D, partículas, shaders, carga de modelos GLB y optimización de rendimiento en Astro.
