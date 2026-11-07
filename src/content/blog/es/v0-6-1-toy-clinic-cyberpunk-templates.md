---
title: 'v0.6.1: Plantillas de juguetería, SaaS de clínica y cyberpunk'
description: 'Tres nuevas plantillas multipágina en astro-component-kit 0.6.1: "Kapow" para jugueterías, "Pulso" para consultas médicas y "NULL/SECTOR", una web cyberpunk brutalista futurista, además de 35 bloques nuevos.'
date: '2026-11-07'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Tres plantillas nuevas

**astro-component-kit 0.6.1** añade tres plantillas completas de varias páginas y **35 bloques nuevos**. El catálogo llega a **8 plantillas**.

### 🦸 Kapow: juguetería de figuras de acción

Una tienda de seis páginas (inicio, tienda, personajes, ficha de personaje, producto y checkout) con estilo de «caja de juguetes» de cómic, en claro y oscuro.

- **Compra por personaje**: pulsa un héroe o villano en el carril de avatares, o combina personaje, universo, edad, escala y precio en el lateral; todos los filtros quedan en la URL
- Páginas de personaje con niveles de poder, buscador de regalos por edad y presupuesto, ficha de figura con aviso de seguridad y club de coleccionistas
- 7 secciones en **Secciones → Juguetería**, además de `ToyFigureCard` y `ToyFigureGrid`
- `FilterSidebar` admite ahora facetas personalizadas para cualquier catálogo
- Vista previa: [/preview/toy-store/](/preview/toy-store/)

### 🩺 Pulso: SaaS de consultas médicas

Software para clínicas: landing, página pública de reservas, acceso y una app de ocho pantallas.

- Reserva online en cuatro pasos con archivo `.ics` para el calendario
- Agenda semanal y diaria, agenda del profesional y sala de espera en vivo
- Notas SOAP con aviso de constantes, búsqueda CIE-10, autoguardado y firma
- Recetas electrónicas que bloquean medicamentos a los que el paciente es alérgico, e interfaz de videoconsulta
- 8 componentes de app nuevos y 3 secciones en **Secciones → Salud**
- Vista previa: [/preview/saas-clinic/](/preview/saas-clinic/)

### ⚡ NULL/SECTOR: brutalismo futurista

Una web de seis páginas para un producto tecnológico con Orbitron, reglas de tinta, neón ácido, glitch y scanlines CRT, en tema NOCHE y DÍA de hormigón.

- Hero con telemetría HUD en vivo, mapa del mundo en matriz de puntos, ficha técnica clasificada que se descifra y precios con calculadora de uso
- Manifiesto que se ilumina al hacer scroll, credenciales del equipo, panel de uptime de 60 días y formulario de contacto tipo línea de comandos
- 13 secciones en **Secciones → Cyberpunk y brutalista**
- Vista previa: [/preview/cyberpunk/](/preview/cyberpunk/)

### 🛠 Correcciones

- `FilterSidebar` ya no se queda plegado tras el botón «Filters» en escritorio.
- `HeatmapChart` funciona ahora en temas claros.

---

## 📦 Actualiza a v0.6.1

```bash
npm install astro-component-kit@0.6.1
```
