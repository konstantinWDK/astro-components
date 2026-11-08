---
title: 'v0.7.1: Cuatro nuevas plantillas (Dental, Mudanzas, Delivery, Construcción) + Remake de Cards'
description: 'astro-component-kit 0.7.1 añade 4 grandes plantillas completas de producción ("Dentis", "Muvr", "BiteFlow" y "Strukto"), alcanzando 12 plantillas en total, además de un remake completo de cards con iconos SVG nativos y cero dependencias en runtime.'
date: '2026-11-08'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cuatro nuevas plantillas completas de producción

**astro-component-kit 0.7.1** amplía el catálogo con cuatro completas plantillas multipágina para sectores clave y un rediseño integral de componentes, elevando la colección a **12 plantillas de producción** y **más de 400 bloques modulares**.

---

### 🦷 Dentis: Clínica Odontológica & Dental OS

Solución digital completa para clínicas dentales y policlínicas: portal público de pacientes, catálogo de especialidades y backoffice clínico.

- **Odontograma visual interactivo**: mapa dental de piezas adultas interactivo con registro de empastes, endodoncias, prótesis y piezas pendientes por cuadrante.
- **Comparador Antes y Después**: slider interactivo para visualizar resultados clínicos de estética dental, carillas e implantología.
- **Asistente de Cita Online**: wizard en cuatro pasos con asignación de especialista y gabinete médico.
- **Directorio médico y tratamientos**: desglose transparente de coberturas, garantías clínicas y titulaciones del equipo.
- 6 nuevas secciones en **Secciones → Salud y Odontología**.
- Vista previa: [/preview/dental/](/preview/dental/)

---

### 🚚 Muvr: Mudanzas, Logística & Despacho de Flota

Plataforma operativa para empresas de mudanzas, operadores de portes y flotas de transporte ligero.

- **Estimador de volumen en $m^3$**: calculadora interactiva estancia por estancia que calcula el cubicaje total y recomienda el vehículo óptimo.
- **Panel de despacho de flota (Fleet Dispatch)**: monitorización en tiempo real del estado de cada furgoneta, rutas y mantenimiento.
- **Portal de captación de conductores**: formulario de postulación digital con verificación de carnets y tipo de vehículo propio.
- **Tarifas dinámicas y presupuestos transparentes**: desglose por volumen, kilometraje y operarios de carga adicionales.
- 6 nuevas secciones en **Secciones → Logística y Mudanzas**.
- Vista previa: [/preview/moving/](/preview/moving/)

---

### 🍕 BiteFlow: Delivery de Comida & Kitchen OS

Sistema integral de pedidos y gestión gastronómica para cadenas de restaurantes, dark kitchens y servicios de comida a domicilio.

- **Carril de categorías gastronómicas**: navegación táctil con filtros dietéticos rápidos (vegano, celíaco, destacado del chef).
- **Catálogo de platos y personalización**: tarjetas de producto con selector de ingredientes extra, niveles de picante y raciones.
- **Checkout exprés en varios pasos**: resumen de cesta, franja horaria de entrega y cálculo interactivo de propinas.
- **Kitchen Display System (KDS)**: panel de comandas en tiempo real para cocinas con estados de preparación y salida.
- 6 nuevas secciones en **Secciones → Restauración y Delivery**.
- Vista previa: [/preview/food-delivery/](/preview/food-delivery/)

---

### 🏗️ Strukto: Constructora, Promociones & Site OS

Portal corporativo y sistema operativo de obra para constructoras, promotoras inmobiliarias y estudios de arquitectura técnica.

- **Visor interactivo de planos y memorias**: selector de tipologías residenciales con superficies útiles/construidas y especificaciones técnicas.
- **Calculadora de costes conforme al CTE**: estimador técnico que calcula PEM, PEC, honorarios facultativos y licencias municipales.
- **Cuaderno de bitácora digital (Daily Log)**: partes de obra diarios con registro meteorológico, plantilla de operarios, incidencias de seguridad y firma digital.
- **CMS de inventario de promociones**: catálogo en tiempo real del estado de cada vivienda o local (Disponible, Reservada, Vendida).
- 6 nuevas secciones en **Secciones → Construcción e Inmobiliaria**.
- Vista previa: [/preview/construction/](/preview/construction/)

---

## 🎨 Remake completo de la categoría Cards

La categoría de tarjetas (**Cards**) se ha renovado desde cero:

- **WeatherCard**: reconstruida con gradientes atmosféricos, previsión de 24 horas, índice UV, humedad, viento y calidad del aire.
- **TestimonialCardClean**: nuevo acabado en cristal esmerilado, distintivo de comprador verificado y sistema de valoración con estrellas SVG nativas.
- **EcommerceProductCard y NotificationCard**: modernizadas con iconos vectoriales SVG accesibles, eliminando emojis unicode y garantizando contraste perfecto en modos claro y oscuro.

---

## ⚡ Arquitectura 100% Zero-Dependencies & Protocolo MCP v0.7.1

- **Cero dependencias en runtime**: todos los paquetes de desarrollo y tooling web se aislaron como devDependencies, garantizando que el paquete npm `astro-component-kit` conserve 0 dependencias en producción.
- **Servidor MCP actualizado**: adaptado a la especificación oficial `2024-11-05` y versión `v0.7.1` en [/mcp](/mcp), con 8 herramientas de IA para Cursor, Claude, Codex y Lovable.

---

## 📦 Actualiza a v0.7.1

```bash
npm install astro-component-kit@0.7.1
```

