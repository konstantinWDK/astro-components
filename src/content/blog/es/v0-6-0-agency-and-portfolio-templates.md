---
title: 'v0.6.0: Plantillas de agencia de marketing y portfolio de desarrollador'
description: 'Dos nuevas plantillas multipágina en astro-component-kit 0.6.0: "Volta" para agencias de marketing y "Keycap", un portfolio de desarrollador en 3D, además de 34 secciones nuevas.'
date: '2026-11-07'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Dos plantillas nuevas

**astro-component-kit 0.6.0** añade dos plantillas completas de varias páginas y **34 secciones reutilizables**. El catálogo llega a **5 plantillas**.

### 📣 Volta: agencia de marketing

Una web de 8 páginas para una agencia que vende **Paid Ads, SEO y desarrollo web**: inicio, servicios, detalle de servicio, casos de éxito, caso, precios, sobre nosotros y contacto. Oscura por defecto con tema claro, hero cinético, calculadora de ROI, CTA de auditoría gratuita y paquetes de precios.

- 19 secciones en **Secciones → Agencia y Marketing**
- Vista previa: [/preview/agency/](/preview/agency/)

### ⌨️ Keycap: portfolio de desarrollador

Una web personal monocroma inspirada en un teclado, con seis páginas (inicio, proyectos, caso de proyecto, blog, artículo y contacto) y **secciones 3D** reales:

- Un escaparate de proyectos cuyas tarjetas animan código, terminales o un lienzo de pintura a partir de tus datos
- Un teclado mecánico que escribe tu stack
- Una matriz de contribuciones estilo GitHub cuyos cubos llegan volando y ondulan como agua
- Un monitor CRT y un hero con matriz de puntos que respira

Las escenas 3D siguen el tema claro/oscuro, se pausan fuera de pantalla y respetan «reducir movimiento». Necesitan la dependencia opcional `three`.

- 15 secciones en **Secciones → Portfolio de desarrollador**
- Vista previa: [/preview/portfolio/](/preview/portfolio/)

---

## 📦 Actualizar a v0.6.0

```bash
npm install astro-component-kit@0.6.0
# solo para las secciones 3D de Keycap
npm install three
```
