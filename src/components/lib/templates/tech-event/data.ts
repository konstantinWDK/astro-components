// src/components/lib/templates/tech-event/data.ts
// Mock data and types for the "Pulse Tech Summit" template.

export interface PulseRoutes {
  home: string;
  schedule: string;
  speakers: string;
  tickets: string;
  venue: string;
}

export const pulseRoutes: PulseRoutes = {
  home: '/',
  schedule: '/programa',
  speakers: '/ponentes',
  tickets: '/entradas',
  venue: '/sede',
};

export interface PulseTrack {
  id: string;
  name: string;
  short: string;
  color: string;
  accent: string;
  icon: string;
  description: string;
  topics: string[];
}

export const pulseTracks: PulseTrack[] = [
  {
    id: 'ai-cognitive',
    name: 'AI & Cognitive Systems',
    short: 'AI & ML',
    color: '#00f0ff',
    accent: 'rgba(0, 240, 255, 0.15)',
    icon: 'cpu',
    description: 'Modelos fundacionales, agentes autónomos, inferencia distribuida y arquitecturas LLM en producción.',
    topics: ['Agentic Workflows', 'Local LLMs & Ollama', 'Vector Databases', 'Fine-Tuning & LoRA', 'AI Safety & Evals'],
  },
  {
    id: 'cloud-edge',
    name: 'Cloud Native & Edge Computing',
    short: 'Cloud & Edge',
    color: '#8b5cf6',
    accent: 'rgba(139, 92, 246, 0.15)',
    icon: 'cloud',
    description: 'Orquestación serverless, WebAssembly en el edge, micro-frontends distribuidos y escalado global.',
    topics: ['Wasm & WASI', 'Kubernetes Zero-Ops', 'Multi-Region Databases', 'Observabilidad OpenTelemetry', 'Green Cloud'],
  },
  {
    id: 'frontend-perf',
    name: 'Next-Gen Frontend & Web Platform',
    short: 'Web & UI',
    color: '#ec4899',
    accent: 'rgba(236, 72, 153, 0.15)',
    icon: 'layout',
    description: 'Islas de arquitectura, compiladores web, WebGPU, accesibilidad de nueva generación y animaciones fluidas a 120 FPS.',
    topics: ['Astro Islands 5.x', 'WebGPU & 3D Web', 'CSS Anchor Positioning', 'Design Tokens Scale', 'Core Web Vitals INP'],
  },
  {
    id: 'cyber-quantum',
    name: 'Cybersecurity & Zero Trust',
    short: 'Sec & Zero-Trust',
    color: '#10b981',
    accent: 'rgba(16, 185, 129, 0.15)',
    icon: 'shield',
    description: 'Criptografía post-cuántica, seguridad en la cadena de suministro de software, identidad biométrica y pentesting con IA.',
    topics: ['Post-Quantum TLS', 'Passkeys & WebAuthn', 'SBOM & SLSA Level 3', 'Threat Modeling', 'Zero Trust Networks'],
  },
];

export interface PulseSpeaker {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  trackId: string;
  isKeynote: boolean;
  avatarSeed: string;
  color: string;
  bio: string;
  talkTitle: string;
  stage: string;
  timeSlot: string;
  socials: { github?: string; twitter?: string; linkedin?: string; web?: string };
}

export const pulseSpeakers: PulseSpeaker[] = [
  {
    id: 'elena-vazquez',
    name: 'Dra. Elena Vázquez',
    role: 'Principal Research Scientist',
    company: 'DeepMind Core',
    country: 'España',
    trackId: 'ai-cognitive',
    isKeynote: true,
    avatarSeed: 'EV',
    color: '#00f0ff',
    bio: 'Pionera en entrenamiento de agentes cognitivos multi-herramienta y sistemas de razonamiento distribuido.',
    talkTitle: 'Más allá de los LLMs: Orquestación de Agentes Autónomos con Memoria Semántica',
    stage: 'Auditorio Principal',
    timeSlot: 'Día 1 · 10:00 - 11:00',
    socials: { github: 'https://github.com', twitter: 'https://x.com', linkedin: 'https://linkedin.com' },
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'VP of Systems Architecture',
    company: 'CloudEdge Global',
    country: 'Singapur',
    trackId: 'cloud-edge',
    isKeynote: true,
    avatarSeed: 'MC',
    color: '#8b5cf6',
    bio: 'Diseñador de backends que procesan más de 400.000 peticiones por segundo en el borde con WebAssembly.',
    talkTitle: 'WebAssembly en el Edge: Ejecutando Lógica de Servidor en Menos de 2ms',
    stage: 'Auditorio Principal',
    timeSlot: 'Día 1 · 12:30 - 13:30',
    socials: { github: 'https://github.com', twitter: 'https://x.com' },
  },
  {
    id: 'sarah-lindqvist',
    name: 'Sarah Lindqvist',
    role: 'Design Systems Lead',
    company: 'Nordic Digital',
    country: 'Suecia',
    trackId: 'frontend-perf',
    isKeynote: true,
    avatarSeed: 'SL',
    color: '#ec4899',
    bio: 'Creadora de sistemas de diseño fluidos que combinan accesibilidad estricta WCAG AAA con shaders WebGPU interactivos.',
    talkTitle: 'Frontend de Alto Rendimiento: 120 FPS sin Comprometer la Accesibilidad',
    stage: 'Auditorio Principal',
    timeSlot: 'Día 2 · 10:00 - 11:00',
    socials: { github: 'https://github.com', twitter: 'https://x.com', web: 'https://example.com' },
  },
  {
    id: 'dr-karim-mansour',
    name: 'Dr. Karim Mansour',
    role: 'Head of Quantum Cryptography',
    company: 'CipherVault Labs',
    country: 'Suiza',
    trackId: 'cyber-quantum',
    isKeynote: true,
    avatarSeed: 'KM',
    color: '#10b981',
    bio: 'Experto en algoritmos de firma resistente a ataques cuánticos y migración de protocolos TLS críticos.',
    talkTitle: 'El Amanecer Post-Cuántico: Preparando tu Infraestructura para 2030',
    stage: 'Auditorio Principal',
    timeSlot: 'Día 2 · 16:30 - 17:30',
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com' },
  },
  {
    id: 'alicia-torres',
    name: 'Alicia Torres',
    role: 'Staff ML Engineer',
    company: 'Synthetix AI',
    country: 'España',
    trackId: 'ai-cognitive',
    isKeynote: false,
    avatarSeed: 'AT',
    color: '#00f0ff',
    bio: 'Especialista en cuantización extrema (1.5-bit y 2-bit) y despliegue de modelos de visión en dispositivos edge.',
    talkTitle: 'Modelos de 7B Parámetros Corriendo en el Navegador con WebGPU y WASM',
    stage: 'Sala Turing (Track AI)',
    timeSlot: 'Día 1 · 15:00 - 15:45',
    socials: { github: 'https://github.com', twitter: 'https://x.com' },
  },
  {
    id: 'diego-navarro',
    name: 'Diego Navarro',
    role: 'Principal Infrastructure Architect',
    company: 'KubeCraft',
    country: 'México',
    trackId: 'cloud-edge',
    isKeynote: false,
    avatarSeed: 'DN',
    color: '#8b5cf6',
    bio: 'Consultor de resiliencia y disaster recovery para bancos y fintechs en plataformas multi-nube.',
    talkTitle: 'Zero-Ops Kubernetes: De Despliegues Frágiles a Auto-Curación con eBPF',
    stage: 'Sala Lovelace (Track Cloud)',
    timeSlot: 'Día 1 · 16:00 - 16:45',
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com' },
  },
  {
    id: 'camille-dupont',
    name: 'Camille Dupont',
    role: 'Frontend Architect',
    company: 'Atelier Web',
    country: 'Francia',
    trackId: 'frontend-perf',
    isKeynote: false,
    avatarSeed: 'CD',
    color: '#ec4899',
    bio: 'Investigadora de nuevas APIs del W3C, CSS Anchor Positioning y State Transitions en SPA y MPA.',
    talkTitle: 'View Transitions Multi-Página en Astro: Experiencia Nativa sin Sobrecarga JS',
    stage: 'Sala Hopper (Track Web)',
    timeSlot: 'Día 2 · 11:30 - 12:15',
    socials: { github: 'https://github.com', twitter: 'https://x.com' },
  },
  {
    id: 'mateo-rossi',
    name: 'Mateo Rossi',
    role: 'Senior AppSec Specialist',
    company: 'RedTeam Operations',
    country: 'Italia',
    trackId: 'cyber-quantum',
    isKeynote: false,
    avatarSeed: 'MR',
    color: '#10b981',
    bio: 'Hacker ético centrado en vectores de inyección en pipelines CI/CD y envenenamiento de paquetes npm/PyPI.',
    talkTitle: 'Secuestrando el Pipeline: Ataques a la Cadena de Suministro y Cómo Mitigarlos',
    stage: 'Sala Shannon (Track Sec)',
    timeSlot: 'Día 2 · 15:00 - 15:45',
    socials: { github: 'https://github.com', twitter: 'https://x.com' },
  },
  {
    id: 'yuki-tanaka',
    name: 'Yuki Tanaka',
    role: 'AI Robotics Researcher',
    company: 'Tokyo Tech Lab',
    country: 'Japón',
    trackId: 'ai-cognitive',
    isKeynote: false,
    avatarSeed: 'YT',
    color: '#00f0ff',
    bio: 'Desarrolladora de software de control visual-motor en tiempo real para brazos robóticos asistenciales.',
    talkTitle: 'Robótica Guiada por Modelos de Lenguaje-Visión: Del Código al Mundo Físico',
    stage: 'Sala Turing (Track AI)',
    timeSlot: 'Día 3 · 10:30 - 11:15',
    socials: { github: 'https://github.com', twitter: 'https://x.com' },
  },
  {
    id: 'nuria-font',
    name: 'Nuria Font',
    role: 'Head of Developer Experience',
    company: 'Veloce Platforms',
    country: 'España',
    trackId: 'frontend-perf',
    isKeynote: false,
    avatarSeed: 'NF',
    color: '#ec4899',
    bio: 'Obsesionada con tiempos de feedback de compilación inferiores a 50ms y testing end-to-end sin flaky tests.',
    talkTitle: 'Developer Experience en Monorepos Gigantes: Cómo Compilar 1M LOC en 3 Segundos',
    stage: 'Sala Hopper (Track Web)',
    timeSlot: 'Día 3 · 12:00 - 12:45',
    socials: { github: 'https://github.com', twitter: 'https://x.com' },
  },
  {
    id: 'liam-o-connor',
    name: 'Liam O’Connor',
    role: 'Lead Site Reliability Engineer',
    company: 'Dublin Cloud Systems',
    country: 'Irlanda',
    trackId: 'cloud-edge',
    isKeynote: false,
    avatarSeed: 'LO',
    color: '#8b5cf6',
    bio: 'Especialista en latencia de cola p99.9 y orquestación de bases de datos distribuidas con consenso Raft.',
    talkTitle: 'Bases de Datos Planetarias: Cómo Sobrevivir a la Caída Simultánea de Dos Regiones',
    stage: 'Sala Lovelace (Track Cloud)',
    timeSlot: 'Día 3 · 14:00 - 14:45',
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com' },
  },
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    role: 'Identity & Access Architect',
    company: 'TrustMatrix',
    country: 'India',
    trackId: 'cyber-quantum',
    isKeynote: false,
    avatarSeed: 'AS',
    color: '#10b981',
    bio: 'Líder en transición global hacia Passkeys FIDO2 y eliminación definitiva de contraseñas.',
    talkTitle: 'Muerte a las Contraseñas: Implementando Passkeys FIDO2 a Escala de Millones',
    stage: 'Sala Shannon (Track Sec)',
    timeSlot: 'Día 3 · 15:15 - 16:00',
    socials: { github: 'https://github.com', twitter: 'https://x.com' },
  },
];

export interface PulseSession {
  id: string;
  day: number;
  time: string;
  title: string;
  speakerId: string;
  trackId: string;
  stage: string;
  room: string;
  level: 'Introductorio' | 'Intermedio' | 'Avanzado';
  description: string;
  tags: string[];
}

export const pulseSessions: PulseSession[] = [
  // Day 1
  {
    id: 's-101',
    day: 1,
    time: '09:00 - 09:45',
    title: 'Apertura Oficial & Estado de la Tecnología 2027',
    speakerId: 'elena-vazquez',
    trackId: 'ai-cognitive',
    stage: 'Auditorio Principal',
    room: 'Auditorio',
    level: 'Introductorio',
    description: 'Bienvenida institucional, tendencias macrotecnológicas y las claves que definirán la cumbre.',
    tags: ['Keynote', 'State of Tech', 'Bienvenida'],
  },
  {
    id: 's-102',
    day: 1,
    time: '10:00 - 11:00',
    title: 'Más allá de los LLMs: Orquestación de Agentes Autónomos con Memoria Semántica',
    speakerId: 'elena-vazquez',
    trackId: 'ai-cognitive',
    stage: 'Auditorio Principal',
    room: 'Auditorio',
    level: 'Avanzado',
    description: 'Patrones de arquitectura para agentes reactivos con planificación jerárquica y validación formal de respuestas.',
    tags: ['AI Agents', 'Memory', 'Orchestration'],
  },
  {
    id: 's-103',
    day: 1,
    time: '11:30 - 12:15',
    title: 'WebAssembly en el Edge: Ejecutando Lógica de Servidor en Menos de 2ms',
    speakerId: 'marcus-chen',
    trackId: 'cloud-edge',
    stage: 'Auditorio Principal',
    room: 'Auditorio',
    level: 'Avanzado',
    description: 'Arquitectura de tiempo de ejecución ultra-ligera en el borde sin arranques en frío.',
    tags: ['Wasm', 'Serverless', 'Edge Computing'],
  },
  {
    id: 's-104',
    day: 1,
    time: '14:00 - 14:45',
    title: 'Modelos de 7B Parámetros Corriendo en el Navegador con WebGPU y WASM',
    speakerId: 'alicia-torres',
    trackId: 'ai-cognitive',
    stage: 'Sala Turing (Track AI)',
    room: 'Sala Turing',
    level: 'Avanzado',
    description: 'Técnicas de cuantización y shaders WGSL para inferencia 100% privada y offline en el cliente.',
    tags: ['WebGPU', 'On-Device AI', 'WASM'],
  },
  {
    id: 's-105',
    day: 1,
    time: '15:15 - 16:00',
    title: 'Zero-Ops Kubernetes: De Despliegues Frágiles a Auto-Curación con eBPF',
    speakerId: 'diego-navarro',
    trackId: 'cloud-edge',
    stage: 'Sala Lovelace (Track Cloud)',
    room: 'Sala Lovelace',
    level: 'Intermedio',
    description: 'Inspección de tráfico a nivel de kernel de Linux sin proxies sidecar para enrutamiento inteligente.',
    tags: ['Kubernetes', 'eBPF', 'Observabilidad'],
  },
  // Day 2
  {
    id: 's-201',
    day: 2,
    time: '10:00 - 11:00',
    title: 'Frontend de Alto Rendimiento: 120 FPS sin Comprometer la Accesibilidad',
    speakerId: 'sarah-lindqvist',
    trackId: 'frontend-perf',
    stage: 'Auditorio Principal',
    room: 'Auditorio',
    level: 'Avanzado',
    description: 'Cómo construir interfaces de usuario ricas con shaders WebGL/WebGPU preservando el árbol de accesibilidad del DOM.',
    tags: ['Performance', 'Accessibility', 'WebGPU'],
  },
  {
    id: 's-202',
    day: 2,
    time: '11:30 - 12:15',
    title: 'View Transitions Multi-Página en Astro: Experiencia Nativa sin Sobrecarga JS',
    speakerId: 'camille-dupont',
    trackId: 'frontend-perf',
    stage: 'Sala Hopper (Track Web)',
    room: 'Sala Hopper',
    level: 'Intermedio',
    description: 'Aprovechando la especificación View Transitions API en MPAs para transiciones fluidas con 0kb de framework cliente.',
    tags: ['Astro', 'View Transitions', 'MPA'],
  },
  {
    id: 's-203',
    day: 2,
    time: '14:00 - 14:45',
    title: 'Secuestrando el Pipeline: Ataques a la Cadena de Suministro y Cómo Mitigarlos',
    speakerId: 'mateo-rossi',
    trackId: 'cyber-quantum',
    stage: 'Sala Shannon (Track Sec)',
    room: 'Sala Shannon',
    level: 'Avanzado',
    description: 'Demostración práctica de inyección maliciosa en paquetes dependientes y verificación con atestaciones Sigstore.',
    tags: ['Supply Chain', 'AppSec', 'Sigstore'],
  },
  {
    id: 's-204',
    day: 2,
    time: '16:00 - 17:00',
    title: 'El Amanecer Post-Cuántico: Preparando tu Infraestructura para 2030',
    speakerId: 'dr-karim-mansour',
    trackId: 'cyber-quantum',
    stage: 'Auditorio Principal',
    room: 'Auditorio',
    level: 'Avanzado',
    description: 'Impacto de Shor en RSA y curvas elípticas: implementación de CRYSTALS-Kyber y Dilithium en sistemas críticos.',
    tags: ['Post-Quantum', 'Cryptography', 'Zero-Trust'],
  },
  // Day 3
  {
    id: 's-301',
    day: 3,
    time: '10:30 - 11:15',
    title: 'Robótica Guiada por Modelos de Lenguaje-Visión: Del Código al Mundo Físico',
    speakerId: 'yuki-tanaka',
    trackId: 'ai-cognitive',
    stage: 'Sala Turing (Track AI)',
    room: 'Sala Turing',
    level: 'Avanzado',
    description: 'Integrando VLM en tiempo real con microcontroladores embebidos para robótica cooperativa.',
    tags: ['Robotics', 'VLM', 'Embedded'],
  },
  {
    id: 's-302',
    day: 3,
    time: '12:00 - 12:45',
    title: 'Developer Experience en Monorepos Gigantes: Cómo Compilar 1M LOC en 3 Segundos',
    speakerId: 'nuria-font',
    trackId: 'frontend-perf',
    stage: 'Sala Hopper (Track Web)',
    room: 'Sala Hopper',
    level: 'Intermedio',
    description: 'Estrategias de caché remota, compiladores en Rust y grafos de dependencia optimizados.',
    tags: ['DevEx', 'Monorepo', 'Rust Tools'],
  },
  {
    id: 's-303',
    day: 3,
    time: '14:00 - 14:45',
    title: 'Bases de Datos Planetarias: Cómo Sobrevivir a la Caída Simultánea de Dos Regiones',
    speakerId: 'liam-o-connor',
    trackId: 'cloud-edge',
    stage: 'Sala Lovelace (Track Cloud)',
    room: 'Sala Lovelace',
    level: 'Avanzado',
    description: 'Protocolos de consenso multi-pax y particionamiento activo-activo sin split-brain.',
    tags: ['Distributed DB', 'Raft', 'High Availability'],
  },
  {
    id: 's-304',
    day: 3,
    time: '15:15 - 16:00',
    title: 'Muerte a las Contraseñas: Implementando Passkeys FIDO2 a Escala de Millones',
    speakerId: 'ananya-sharma',
    trackId: 'cyber-quantum',
    stage: 'Sala Shannon (Track Sec)',
    room: 'Sala Shannon',
    level: 'Intermedio',
    description: 'Casos reales de migración de credenciales tradicionales a WebAuthn y gestión de llaves sincronizadas.',
    tags: ['Passkeys', 'WebAuthn', 'Identity'],
  },
];

export interface PulseTicket {
  id: string;
  name: string;
  badge: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
  remaining: number;
}

export const pulseTickets: PulseTicket[] = [
  {
    id: 'virtual',
    name: 'Pase Streaming Virtual',
    badge: 'Online Global',
    price: 99,
    currency: '€',
    period: 'por persona',
    description: 'Sigue todas las ponencias de los 4 tracks en directo en 4K con acceso a los canales interactivos de preguntas y Discord VIP.',
    features: [
      'Acceso streaming en directo a los 4 tracks (4K)',
      'Canales de chat y Q&A en tiempo real con speakers',
      'Acceso a grabaciones bajo demanda durante 1 año',
      'Certificado digital verificable en blockchain',
      'Acceso al canal virtual de networking',
    ],
    cta: 'Elegir Pase Virtual',
    remaining: 450,
  },
  {
    id: 'conference',
    name: 'Pase Conferencia Presencial',
    badge: 'Más Elegido',
    price: 349,
    currency: '€',
    period: 'por persona',
    isPopular: true,
    description: 'La experiencia completa de la cumbre en persona: 3 días de ponencias, catering de autor, feria de empresas y fiesta networking oficial.',
    features: [
      'Acceso presencial los 3 días a todas las salas y stages',
      'Almuerzos gourmet y coffee breaks incluidos los 3 días',
      'Welcome pack oficial de la edición 2027 (camiseta, badge NFC)',
      'Acceso a la Fiesta Oficial de Networking (Día 2)',
      'Grabaciones completas en vídeo bajo demanda de por vida',
      'Acceso prioritario a stands de reclutamiento y demos',
    ],
    cta: 'Comprar Entrada Presencial',
    remaining: 85,
  },
  {
    id: 'vip-pass',
    name: 'Pase VIP All-Access & Workshops',
    badge: 'Acceso Exclusivo',
    price: 699,
    currency: '€',
    period: 'por persona',
    description: 'Para líderes técnicos y directores: incluye acceso a los talleres hands-on reducidos, sala VIP con speakers y cena privada.',
    features: [
      'Todo lo incluido en el Pase Conferencia Presencial',
      'Elección de 2 Workshops prácticos hands-on (máx. 25 pers.)',
      'Acceso exclusivo al VIP Speaker Lounge con catering premium',
      'Asientos reservados en primera fila en el Auditorio Principal',
      'Invitación a la Cena Privada de Ponentes y Patrocinadores',
      'Reuniones 1-a-1 de 20 minutos con ponentes invitados',
    ],
    cta: 'Adquirir Pase VIP',
    remaining: 18,
  },
];

export interface PulseSponsor {
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Community';
  tagline: string;
  logo: string;
  href: string;
}

export const pulseSponsors: PulseSponsor[] = [
  { name: 'Vortex Cloud', tier: 'Platinum', tagline: 'Infraestructura edge ultrarrápida para aplicaciones globales', logo: 'vortex', href: '#' },
  { name: 'NeuroScale AI', tier: 'Platinum', tagline: 'Entrenamiento de modelos fundacionales a gran escala', logo: 'neuro', href: '#' },
  { name: 'Aether Security', tier: 'Gold', tagline: 'Defensa de perímetro y detección de anomalías autónoma', logo: 'aether', href: '#' },
  { name: 'OmniDB', tier: 'Gold', tagline: 'Base de datos distribuida multi-modelo y multi-nube', logo: 'omnidb', href: '#' },
  { name: 'HyperDev Studio', tier: 'Silver', tagline: 'Herramientas de ingeniería y observabilidad continua', logo: 'hyperdev', href: '#' },
  { name: 'Astro Community', tier: 'Community', tagline: 'Framework web moderno orientado a contenido y rendimiento', logo: 'astro', href: 'https://astro.build' },
];

export interface PulseVenueInfo {
  name: string;
  city: string;
  address: string;
  dates: string;
  capacity: string;
  coordinates: { lat: number; lng: number };
  transport: Array<{ type: string; title: string; desc: string }>;
  hotels: Array<{ name: string; stars: number; distance: string; discountCode: string }>;
  stages: Array<{ id: string; name: string; capacity: number; focus: string; coords: { x: number; y: number } }>;
}

export const pulseVenue: PulseVenueInfo = {
  name: 'Madrid Tech Arena · Palacio de Convenciones',
  city: 'Madrid, España',
  address: 'Av. de las Tecnologías 42, 28042 Madrid',
  dates: '14 - 16 de Octubre, 2027',
  capacity: '3.000 asistentes simultáneos',
  coordinates: { lat: 40.4531, lng: -3.6883 },
  transport: [
    { type: 'Metro', title: 'Línea 8 (Estación Feria / Tech)', desc: 'Conexión directa en 12 minutos desde el Aeropuerto Madrid-Barajas y en 15 minutos desde Nuevos Ministerios.' },
    { type: 'Tren AVE', title: 'Estación Chamartín - Clara Campoamor', desc: 'A 10 minutos en Cercanías C-1 o taxi. Conexiones de alta velocidad con toda la península.' },
    { type: 'Coche / Parking', title: 'Parking Subterráneo Propio', desc: 'Más de 1.200 plazas disponibles con 60 cargadores ultra-rápidos de vehículo eléctrico.' },
  ],
  hotels: [
    { name: 'Hotel Silken Puerta América', stars: 5, distance: '1.2 km', discountCode: 'PULSE27VIP' },
    { name: 'Novotel Madrid Center Tech', stars: 4, distance: '0.6 km', discountCode: 'PULSE27SUMMIT' },
    { name: 'Ibis Styles Madrid City', stars: 3, distance: '0.4 km', discountCode: 'PULSE27ECO' },
  ],
  stages: [
    { id: 'auditorio', name: 'Auditorio Principal', capacity: 1600, focus: 'Keynotes, paneles plenarios y aperturas', coords: { x: 50, y: 35 } },
    { id: 'sala-turing', name: 'Sala Turing (AI)', capacity: 450, focus: 'Agentes inteligentes, LLMs y robótica', coords: { x: 22, y: 70 } },
    { id: 'sala-lovelace', name: 'Sala Lovelace (Cloud)', capacity: 450, focus: 'WebAssembly, Kubernetes y DevOps', coords: { x: 42, y: 70 } },
    { id: 'sala-hopper', name: 'Sala Hopper (Web)', capacity: 350, focus: 'Frontend, arquitecturas UI y rendimiento', coords: { x: 62, y: 70 } },
    { id: 'sala-shannon', name: 'Sala Shannon (Sec)', capacity: 300, focus: 'Criptografía, Zero Trust y ciberdefensa', coords: { x: 82, y: 70 } },
  ],
};

export interface PulseFaq {
  question: string;
  answer: string;
}

export const pulseFaqs: PulseFaq[] = [
  {
    question: '¿Puedo transferir mi entrada a un compañero si no puedo asistir?',
    answer: 'Sí, las entradas son transferibles sin coste adicional hasta 7 días antes del inicio del evento desde el enlace recibido en tu confirmación o contactando a registro@pulsetechsummit.dev.',
  },
  {
    question: '¿Se graban las ponencias de todos los tracks?',
    answer: 'Absolutamente. Todas las ponencias de las 5 salas son grabadas en resolución 4K por un equipo audiovisual profesional y estarán disponibles para los poseedores de pases en un plazo máximo de 48 horas tras el evento.',
  },
  {
    question: '¿Hay descuentos para grupos de empresas o estudiantes?',
    answer: 'Sí. Grupos de 5 o más personas obtienen un 15% de descuento automático en cualquier pase presencial. Disponemos también de 100 becas del 100% para estudiantes y colectivos subrepresentados a través del programa Diversity in Tech.',
  },
  {
    question: '¿Se contemplan opciones alimentarias especiales en los almuerzos?',
    answer: 'Por supuesto. Nuestro servicio de catering ofrece opciones claramente identificadas: veganas, vegetarianas, sin gluten (celiaquía certificada) y sin lactosa. Podrás indicar tus requerimientos en el formulario de registro.',
  },
  {
    question: '¿Qué idioma se utiliza en las presentaciones?',
    answer: 'Aproximadamente el 65% de las charlas son en español y el 35% en inglés (indicado en la ficha de cada ponencia). Se dispone de traducción simultánea mediante auriculares inalámbricos en el Auditorio Principal.',
  },
];

