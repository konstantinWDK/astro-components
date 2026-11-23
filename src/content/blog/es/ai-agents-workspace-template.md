---
title: 'Nueva plantilla: Nexo, la interfaz de un espacio de agentes de IA'
description: 'Nexo es una nueva plantilla de UI para una app de agentes de IA: un chat general con herramientas desplegables, gestión de agentes, usuarios y roles, un lugar para añadir APIs, claves y webhooks, y consumo con límites de gasto. Solo interfaz, con datos de demostración.'
date: '2026-11-23'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Nexo: la interfaz de una app de agentes de IA, en seis pantallas y nueve componentes

Nexo (`templates/ai-agents`) es una plantilla de UI para el tipo de app donde un equipo habla con agentes de IA, decide quién entra y qué claves de API usan los agentes. Es **solo interfaz**: nada llama a un modelo, guarda un secreto ni envía una petición, así que puedes conectarla a tu propio backend. Tiene su propio aspecto grafito y lima eléctrico, sin cuadrículas de iconos ni nubes de etiquetas, y está hecha solo con componentes propios (`reusedComponents: []`).

---

### Nexo · Espacio de agentes de IA (`templates/ai-agents`)

- **Vista previa en vivo**: [/preview/ai-agents/](/preview/ai-agents/) · **Documentación**: [/templates/ai-agents/](/templates/ai-agents/)
- **Chat**: lista de conversaciones, un registro de mensajes donde cada herramienta se abre para mostrar su entrada, resultado y milisegundos, selector de agente e inspector con el modelo, las herramientas y las instrucciones del agente. Al enviar, una demo emite una respuesta de ejemplo palabra a palabra, con botón de detener.
- **Agentes**: cada agente con estado, modelo, herramientas y tasa de éxito, filtros, pausar/activar y un diálogo nativo para crear o editar (nombre, utilidad, modelo, instrucciones, deslizador de creatividad y casillas de herramientas).
- **Usuarios**: tabla de miembros con búsqueda que pasa a tarjetas en móvil, selector de rol por miembro, suspender/reactivar y quitar con confirmación, diálogo de invitación y una matriz de permisos escrita como tabla real.
- **Integraciones**: tarjetas de servicios para conectar, tabla de claves de API que solo muestra valores enmascarados, rotar con revelado único, revocar con confirmación, diálogo para añadir clave con mostrar/ocultar, webhooks con envío de prueba y un ejemplo de petición copiable.
- **Consumo**: medidores de tokens y gasto, un gráfico diario conmutable entre 7 y 30 días con su tabla equivalente, el reparto por agente y límites de gasto (deslizador de presupuesto e interruptores) que mueven los medidores.
- **Accesible por defecto**: diálogos, popovers, radios y `<details>` nativos; los estados son palabras, nunca solo color; cada cambio se anuncia en una región en vivo; objetivos de 44px, foco visible, soporte de `prefers-reduced-motion` y temas claro y oscuro.
- **Páginas**: [Chat](/preview/ai-agents/) · [Agentes](/preview/ai-agents/agentes/) · [Usuarios](/preview/ai-agents/usuarios/) · [Integraciones](/preview/ai-agents/integraciones/) · [Consumo](/preview/ai-agents/uso/) · [Acceso](/preview/ai-agents/acceso/).
- **9 componentes propios**: [`AgtChat`](/docs/agt-chat/), [`AgtAgents`](/docs/agt-agents/), [`AgtUsers`](/docs/agt-users/), [`AgtIntegrations`](/docs/agt-integrations/), [`AgtUsage`](/docs/agt-usage/), [`AgtSidebar`](/docs/agt-sidebar/), [`AgtTopbar`](/docs/agt-topbar/), [`AgtHeading`](/docs/agt-heading/), [`AgtSignIn`](/docs/agt-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/ai-agents/" title="Vista previa en vivo de Nexo (chat)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/ai-agents/integraciones/" title="Vista previa en vivo de Nexo (integraciones y claves de API)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
