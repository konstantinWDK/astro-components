---
title: 'New Template: Nexo, a UI for an AI-Agents Workspace'
description: 'Nexo is a new UI template for an AI-agents app: a general chat with openable tool calls, agent management, users and roles, a place to add APIs, keys and webhooks, and usage with spending limits. Interface only, with demo data.'
date: '2026-11-23'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Nexo: the interface of an AI-agents app, in six screens and nine components

Nexo (`templates/ai-agents`) is a UI template for the kind of app where a team talks to AI agents, decides who gets in and which API keys the agents use. It is **interface only**: nothing calls a model, stores a secret or sends a request, so you can wire it to your own backend. It has its own graphite and electric-lime look, no icon grids and no tag clouds, and it is built only from its own components (`reusedComponents: []`).

---

### Nexo · AI Agents Workspace (`templates/ai-agents`)

- **Live preview**: [/preview/ai-agents/](/preview/ai-agents/) · **Template docs**: [/templates/ai-agents/](/templates/ai-agents/)
- **Chat**: a conversation list, a message log where each tool call opens to show its input, result and milliseconds, an agent picker, and an inspector with the agent's model, tools and instructions. Sending runs a demo that streams a canned reply word by word, with a Stop button.
- **Agents**: every agent with status, model, tools and success rate, filters, pause/activate, and a native dialog to create or edit one (name, purpose, model, instructions, a creativity slider, tool checkboxes).
- **Users**: a searchable members table that turns into cards on phones, a role picker per member, suspend/reactivate and remove with confirmation, an invite dialog and a permissions matrix written as a real table.
- **Integrations**: provider cards to connect, a table of API keys that only shows masked values, rotate with a one-time reveal, revoke with confirmation, an add-key dialog with show/hide, webhooks with a send-test action and a copyable request example.
- **Usage**: token and spend meters, a daily chart switchable between 7 and 30 days with an equivalent table, the share per agent, and spending limits (budget slider and switches) that move the meters.
- **Accessible by default**: native dialogs, popovers, radios and `<details>`; statuses are words, never only colour; every change is announced in a live region; 44px targets, visible focus, `prefers-reduced-motion` support and light and dark themes.
- **Pages**: [Chat](/preview/ai-agents/) · [Agents](/preview/ai-agents/agentes/) · [Users](/preview/ai-agents/usuarios/) · [Integrations](/preview/ai-agents/integraciones/) · [Usage](/preview/ai-agents/uso/) · [Sign in](/preview/ai-agents/acceso/).
- **9 dedicated components**: [`AgtChat`](/docs/agt-chat/), [`AgtAgents`](/docs/agt-agents/), [`AgtUsers`](/docs/agt-users/), [`AgtIntegrations`](/docs/agt-integrations/), [`AgtUsage`](/docs/agt-usage/), [`AgtSidebar`](/docs/agt-sidebar/), [`AgtTopbar`](/docs/agt-topbar/), [`AgtHeading`](/docs/agt-heading/), [`AgtSignIn`](/docs/agt-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/ai-agents/" title="Nexo live preview (chat)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/ai-agents/integraciones/" title="Nexo live preview (integrations and API keys)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
