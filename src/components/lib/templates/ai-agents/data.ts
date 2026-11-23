// src/components/lib/templates/ai-agents/data.ts
// Demo data and types for "Nexo" · AI-agents workspace (UI only, nothing here calls a model).

export interface AgtRoutes {
  home: string;
  chat: string;
  agents: string;
  users: string;
  integrations: string;
  usage: string;
  signIn: string;
}

export const agtRoutes: AgtRoutes = {
  home: '/',
  chat: '/chat',
  agents: '/agentes',
  users: '/usuarios',
  integrations: '/integraciones',
  usage: '/uso',
  signIn: '/acceso',
};

export type AgtRole = 'Propietaria' | 'Administrador' | 'Editor' | 'Lector';

export interface AgtAgent {
  id: string;
  name: string;
  role: string;
  model: string;
  hue: number;
  status: 'Activo' | 'En pausa' | 'Borrador';
  prompt: string;
  tools: string[];
  runs: number;
  successRate: number;
  lastRun: string;
}

export interface AgtMessage {
  id: string;
  from: 'user' | 'agent';
  agent?: string;
  text: string;
  time: string;
  tool?: { name: string; input: string; output: string; ms: number };
}

export interface AgtThread {
  id: string;
  title: string;
  agent: string;
  updated: string;
  preview: string;
  messages: AgtMessage[];
}

export interface AgtUser {
  id: string;
  name: string;
  email: string;
  role: AgtRole;
  status: 'Activo' | 'Invitado' | 'Suspendido';
  lastSeen: string;
  agents: number;
}

export interface AgtProvider {
  id: string;
  name: string;
  kind: 'Modelo' | 'Herramienta' | 'Datos' | 'Mensajería';
  description: string;
  connected: boolean;
  scopes: string[];
}

export interface AgtKey {
  id: string;
  name: string;
  provider: string;
  preview: string;
  created: string;
  lastUsed: string;
  scope: string;
  status: 'Activa' | 'Revocada';
}

export interface AgtWebhook {
  id: string;
  url: string;
  events: string[];
  status: 'Activo' | 'Fallando';
  lastDelivery: string;
}

export const agtAgents: AgtAgent[] = [
  {
    id: 'soporte',
    name: 'Soporte',
    role: 'Atiende tickets y propone respuestas',
    model: 'claude-sonnet-5-5',
    hue: 92,
    status: 'Activo',
    prompt: 'Eres el primer nivel de soporte de Nexo. Responde en el idioma del cliente, cita siempre el artículo del centro de ayuda que uses y escala a una persona si hay un cobro duplicado.',
    tools: ['Centro de ayuda', 'Zendesk', 'Stripe (lectura)'],
    runs: 4210,
    successRate: 96,
    lastRun: 'hace 3 min',
  },
  {
    id: 'analista',
    name: 'Analista',
    role: 'Responde preguntas sobre los datos del negocio',
    model: 'claude-opus-5-5',
    hue: 262,
    status: 'Activo',
    prompt: 'Traduce la pregunta a SQL de solo lectura sobre el almacén, muestra la consulta y resume el resultado en tres frases. Nunca ejecutes escrituras.',
    tools: ['Almacén SQL', 'Hojas de cálculo', 'Gráficos'],
    runs: 1388,
    successRate: 91,
    lastRun: 'hace 12 min',
  },
  {
    id: 'redactor',
    name: 'Redactor',
    role: 'Escribe boletines y descripciones con la voz de la marca',
    model: 'claude-sonnet-5-5',
    hue: 18,
    status: 'Activo',
    prompt: 'Escribe con frases cortas y sin exclamaciones. Sigue la guía de estilo adjunta y entrega siempre dos variantes.',
    tools: ['Guía de estilo', 'CMS'],
    runs: 902,
    successRate: 94,
    lastRun: 'hace 1 h',
  },
  {
    id: 'revisor',
    name: 'Revisor de código',
    role: 'Revisa pull requests y señala riesgos',
    model: 'claude-opus-5-5',
    hue: 205,
    status: 'En pausa',
    prompt: 'Revisa el diff, busca fallos de lógica y de seguridad, y comenta solo lo que merezca atención. No propongas cambios de estilo.',
    tools: ['GitHub', 'Búsqueda en el repositorio'],
    runs: 655,
    successRate: 89,
    lastRun: 'ayer',
  },
  {
    id: 'agenda',
    name: 'Agenda',
    role: 'Coordina reuniones y envía recordatorios',
    model: 'claude-haiku-5-5',
    hue: 160,
    status: 'Borrador',
    prompt: 'Propón tres huecos en el calendario de los participantes y confirma por correo.',
    tools: ['Calendario', 'Correo'],
    runs: 0,
    successRate: 0,
    lastRun: 'nunca',
  },
];

export const agtThreads: AgtThread[] = [
  {
    id: 't1',
    title: 'Ingresos de octubre por región',
    agent: 'analista',
    updated: 'Hoy, 10:42',
    preview: 'Norte lidera con 38 % del total…',
    messages: [
      { id: 'm1', from: 'user', text: '¿Cuánto facturamos en octubre por región y cómo se compara con septiembre?', time: '10:40' },
      {
        id: 'm2',
        from: 'agent',
        agent: 'analista',
        time: '10:41',
        text: 'Voy a consultar el almacén de datos con una consulta de solo lectura.',
        tool: {
          name: 'Almacén SQL',
          input: 'SELECT region, SUM(total) AS ingresos\nFROM pedidos\nWHERE mes IN (\'2026-09\', \'2026-10\')\nGROUP BY region, mes;',
          output: '4 filas · Norte 182 400 € · Sur 121 900 € · Este 96 300 € · Oeste 79 800 €',
          ms: 412,
        },
      },
      {
        id: 'm3',
        from: 'agent',
        agent: 'analista',
        time: '10:42',
        text: 'En octubre facturasteis **480 400 €**, un 7,4 % más que en septiembre. La región Norte lidera con el 38 % del total y es también la que más crece (+11 %). Oeste es la única que baja (−2 %). Si quieres, desgloso Oeste por producto.',
      },
    ],
  },
  {
    id: 't2',
    title: 'Respuesta a cobro duplicado',
    agent: 'soporte',
    updated: 'Ayer, 17:05',
    preview: 'He preparado la respuesta y la he marcado…',
    messages: [
      { id: 'm1', from: 'user', text: 'Una clienta dice que le hemos cobrado dos veces la suscripción de noviembre. ¿Puedes mirarlo?', time: '17:01' },
      {
        id: 'm2',
        from: 'agent',
        agent: 'soporte',
        time: '17:02',
        text: 'Compruebo los cobros de la clienta en Stripe.',
        tool: { name: 'Stripe (lectura)', input: 'charges.list(customer="cus_Q8…", since="2026-11-01")', output: '2 cobros de 29,00 € con 4 minutos de diferencia (pi_3Qx…, pi_3Qy…)', ms: 288 },
      },
      { id: 'm3', from: 'agent', agent: 'soporte', time: '17:05', text: 'Es un cobro duplicado real. He preparado una respuesta con disculpas y plazos de reembolso, y la he marcado para que una persona la apruebe antes de enviarla, como indica el protocolo.' },
    ],
  },
  {
    id: 't3',
    title: 'Boletín de diciembre',
    agent: 'redactor',
    updated: 'Lun, 09:12',
    preview: 'Aquí tienes dos variantes del asunto…',
    messages: [
      { id: 'm1', from: 'user', text: 'Necesito el boletín de diciembre: novedades de la versión 4 y un recordatorio del cierre de año.', time: '09:10' },
      { id: 'm2', from: 'agent', agent: 'redactor', time: '09:12', text: 'Aquí tienes dos variantes del asunto: «La versión 4 ya está aquí» y «Cierra el año con tus agentes al día». El cuerpo sigue la guía de estilo: tres novedades, una sola llamada a la acción.' },
    ],
  },
];

export const agtUsers: AgtUser[] = [
  { id: 'u1', name: 'Marta Olivares', email: 'marta@nexo.example', role: 'Propietaria', status: 'Activo', lastSeen: 'ahora', agents: 5 },
  { id: 'u2', name: 'Iván Ledesma', email: 'ivan@nexo.example', role: 'Administrador', status: 'Activo', lastSeen: 'hace 8 min', agents: 3 },
  { id: 'u3', name: 'Noa Berenguer', email: 'noa@nexo.example', role: 'Editor', status: 'Activo', lastSeen: 'hace 2 h', agents: 2 },
  { id: 'u4', name: 'Pablo Reyes', email: 'pablo@nexo.example', role: 'Editor', status: 'Activo', lastSeen: 'ayer', agents: 1 },
  { id: 'u5', name: 'Lucía Marín', email: 'lucia@nexo.example', role: 'Lector', status: 'Invitado', lastSeen: 'sin acceso aún', agents: 0 },
  { id: 'u6', name: 'Hugo Salas', email: 'hugo@nexo.example', role: 'Lector', status: 'Suspendido', lastSeen: 'hace 3 semanas', agents: 0 },
];

export const agtRoleHelp: Record<AgtRole, string> = {
  Propietaria: 'Controla la facturación, los usuarios y las claves.',
  Administrador: 'Gestiona agentes, usuarios e integraciones.',
  Editor: 'Crea y edita agentes y conversa con todos.',
  Lector: 'Conversa con los agentes que se le compartan.',
};

export const agtProviders: AgtProvider[] = [
  { id: 'anthropic', name: 'Anthropic', kind: 'Modelo', description: 'Modelos de lenguaje para los agentes.', connected: true, scopes: ['messages', 'tools'] },
  { id: 'openai', name: 'OpenAI', kind: 'Modelo', description: 'Modelos alternativos y embeddings.', connected: false, scopes: ['responses', 'embeddings'] },
  { id: 'github', name: 'GitHub', kind: 'Herramienta', description: 'Pull requests, incidencias y código.', connected: true, scopes: ['repo:read', 'pull_requests:write'] },
  { id: 'stripe', name: 'Stripe', kind: 'Datos', description: 'Cobros y suscripciones, en solo lectura.', connected: true, scopes: ['charges:read', 'customers:read'] },
  { id: 'postgres', name: 'Almacén SQL', kind: 'Datos', description: 'Consultas de solo lectura sobre tu base de datos.', connected: true, scopes: ['select'] },
  { id: 'slack', name: 'Slack', kind: 'Mensajería', description: 'Avisos y conversaciones en canales.', connected: false, scopes: ['chat:write', 'channels:read'] },
  { id: 'zendesk', name: 'Zendesk', kind: 'Herramienta', description: 'Tickets y centro de ayuda.', connected: true, scopes: ['tickets:read', 'tickets:write'] },
  { id: 'notion', name: 'Notion', kind: 'Datos', description: 'Páginas y bases de conocimiento.', connected: false, scopes: ['pages:read'] },
];

export const agtKeys: AgtKey[] = [
  { id: 'k1', name: 'Producción · agentes', provider: 'Anthropic', preview: 'sk-ant-••••••••••••9fK2', created: '12 sep 2026', lastUsed: 'hace 1 min', scope: 'Todos los agentes', status: 'Activa' },
  { id: 'k2', name: 'Pruebas', provider: 'Anthropic', preview: 'sk-ant-••••••••••••c71A', created: '3 mar 2026', lastUsed: 'hace 4 días', scope: 'Solo borradores', status: 'Activa' },
  { id: 'k3', name: 'Lectura de cobros', provider: 'Stripe', preview: 'rk_live_••••••••••••Qm8d', created: '20 jun 2026', lastUsed: 'hace 3 min', scope: 'Soporte', status: 'Activa' },
  { id: 'k4', name: 'Repositorios', provider: 'GitHub', preview: 'ghp_••••••••••••••4tXe', created: '8 ene 2026', lastUsed: 'ayer', scope: 'Revisor de código', status: 'Activa' },
  { id: 'k5', name: 'Clave antigua', provider: 'OpenAI', preview: 'sk-••••••••••••••bB30', created: '2 feb 2025', lastUsed: 'hace 5 meses', scope: 'Sin asignar', status: 'Revocada' },
];

export const agtWebhooks: AgtWebhook[] = [
  { id: 'w1', url: 'https://api.nexo.example/hooks/agent-run', events: ['run.completed', 'run.failed'], status: 'Activo', lastDelivery: 'hace 2 min · 200' },
  { id: 'w2', url: 'https://hooks.slack.example/T0/B0/xxxx', events: ['run.failed'], status: 'Fallando', lastDelivery: 'hace 1 h · 410' },
];

export const agtModels = ['claude-opus-5-5', 'claude-sonnet-5-5', 'claude-haiku-5-5', 'gpt-modelo-externo'];

export const agtCannedReplies = [
  'Entendido. Lo reviso con las herramientas que tengo conectadas y te cuento en un momento.',
  'He mirado los datos disponibles. Esto es lo que veo: el patrón es estable salvo un pico el jueves. ¿Quieres que lo desglose?',
  'Hecho. Dejo el resultado en esta conversación y no cambio nada en tus sistemas sin que lo apruebes.',
];

export const agtUsage = {
  period: 'Noviembre 2026',
  tokens: 18_420_000,
  tokensLimit: 25_000_000,
  runs: 7155,
  spend: 412.6,
  budget: 600,
  daily: [310, 420, 380, 450, 520, 280, 190, 460, 540, 610, 580, 640, 330, 240, 590, 650, 700, 680, 720, 400, 260, 640, 710, 760, 740, 790, 420, 300, 690, 730],
  byAgent: [
    { agent: 'Soporte', share: 46 },
    { agent: 'Analista', share: 27 },
    { agent: 'Redactor', share: 14 },
    { agent: 'Revisor de código', share: 13 },
  ],
};

export const agtWorkspace = {
  name: 'Nexo · Equipo producto',
  plan: 'Equipo',
  seats: 6,
  member: { name: 'Marta Olivares', role: 'Propietaria', id: 'NX-001' },
};

export const agtData = {
  workspace: agtWorkspace,
  agents: agtAgents,
  threads: agtThreads,
  users: agtUsers,
  providers: agtProviders,
  keys: agtKeys,
  webhooks: agtWebhooks,
  usage: agtUsage,
  models: agtModels,
};
