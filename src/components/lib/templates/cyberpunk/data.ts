// src/components/lib/templates/cyberpunk/data.ts
// Demo content for the futuristic-brutalist cyberpunk template ("NULL/SECTOR", a fictional
// decentralised GPU compute grid). Replace with your own product; every page reads from this shape.

export interface CyberRoutes {
  home: string;
  protocol: string;
  pricing: string;
  manifesto: string;
  logs: string;
  terminal: string;
}

export const cyberRoutes: CyberRoutes = {
  home: '/',
  protocol: '/protocol/',
  pricing: '/pricing/',
  manifesto: '/manifesto/',
  logs: '/logs/',
  terminal: '/terminal/',
};

export interface CyberNode {
  id: string;
  city: string;
  region: string;
  lat: number;
  lon: number;
  gpus: number;
  latency: number;
  status: 'online' | 'degraded' | 'offline';
}

export const nullSector = {
  brand: 'NULL/SECTOR',
  short: 'N/S',
  tagline: 'Compute without a centre. 41,000 GPUs in 38 cities, routed by the cheapest silence on the wire.',
  status: 'GRID NOMINAL · 99.982%',
  links: [
    { label: 'Protocol', key: 'protocol' as const },
    { label: 'Pricing', key: 'pricing' as const },
    { label: 'Manifesto', key: 'manifesto' as const },
    { label: 'Logs', key: 'logs' as const },
  ],
  ticker: [
    'NODE TYO-04 ONLINE', 'H200 SPOT ▼ 0.42 CR/H', 'BLOCK 18,204,113 SEALED', 'LAT AMS→NYC 71MS', 'NEW REGION: LAGOS',
    'JOBS IN FLIGHT 12,840', 'ZERO-LOG MODE ENFORCED', 'v4.2 «GHOSTWIRE» SHIPPED',
  ],
  hero: {
    eyebrow: 'SYS:// DECENTRALISED COMPUTE GRID',
    lines: ['RENT THE', 'DARK SIDE', 'OF THE GRID'],
    glitch: 1,
    subtitle: 'Spin up GPU clusters on idle hardware across 38 cities. No data centres, no lock-in, no logs — just raw compute, billed by the second.',
    primary: { label: 'Jack in' },
    secondary: { label: 'Read the protocol' },
    readout: [
      { label: 'NODES ONLINE', value: 2417, live: true },
      { label: 'GPUS IDLE', value: 8932, live: true },
      { label: 'AVG LATENCY', value: 38, suffix: 'MS', live: true },
      { label: 'COST VS CLOUD', value: -71, suffix: '%' },
    ],
  },
  partners: [
    { name: 'Helix Labs' }, { name: 'Ronin.ai' }, { name: 'Kaiju Render' }, { name: 'Moth Studio' }, { name: 'Oblique' }, { name: 'Vanta Bio' },
  ],
  features: [
    { code: '01', title: 'Spot clusters in 9 seconds', text: 'Request 8 or 800 GPUs. The scheduler stitches idle cards into one cluster over an encrypted mesh.', stat: '9S', span: 'wide' as const },
    { code: '02', title: 'Zero-log by design', text: 'Workloads run in sealed enclaves. Operators never see your weights, prompts or data.', stat: '0 LOGS' },
    { code: '03', title: 'Per-second billing', text: 'Pay for compute you burn, not for the hour you rounded up to.', stat: '1S' },
    { code: '04', title: 'Bring your container', text: 'Any OCI image, any framework. PyTorch, JAX, Blender, ComfyUI — if it runs in Docker, it runs here.', stat: 'OCI' },
    { code: '05', title: 'Self-healing jobs', text: 'Nodes drop. Jobs don’t. Checkpoints migrate to the next free card in under a second.', stat: '<1S', span: 'tall' as const },
    { code: '06', title: 'Paid in credits or crypto', text: 'Card, invoice or on-chain settlement. Operators are paid out every block.', stat: 'CR', span: 'wide' as const },
  ],
  stats: [
    { value: 41, suffix: 'K', label: 'GPUs on the grid' },
    { value: 38, label: 'cities' },
    { value: 71, prefix: '−', suffix: '%', label: 'vs hyperscaler cost' },
    { value: 99.98, suffix: '%', decimals: 2, label: 'job completion' },
  ],
  nodes: [
    { id: 'sfo', city: 'San Francisco', region: 'NA-WEST', lat: 37.7, lon: -122.4, gpus: 3120, latency: 42, status: 'online' },
    { id: 'nyc', city: 'New York', region: 'NA-EAST', lat: 40.7, lon: -74, gpus: 4480, latency: 36, status: 'online' },
    { id: 'mex', city: 'Mexico City', region: 'LATAM', lat: 19.4, lon: -99.1, gpus: 860, latency: 58, status: 'degraded' },
    { id: 'sao', city: 'São Paulo', region: 'LATAM', lat: -23.5, lon: -46.6, gpus: 1410, latency: 61, status: 'online' },
    { id: 'ams', city: 'Amsterdam', region: 'EU-WEST', lat: 52.4, lon: 4.9, gpus: 5260, latency: 22, status: 'online' },
    { id: 'mad', city: 'Madrid', region: 'EU-SOUTH', lat: 40.4, lon: -3.7, gpus: 2030, latency: 29, status: 'online' },
    { id: 'los', city: 'Lagos', region: 'AFRICA', lat: 6.5, lon: 3.4, gpus: 420, latency: 74, status: 'online' },
    { id: 'dxb', city: 'Dubai', region: 'MIDDLE-EAST', lat: 25.2, lon: 55.3, gpus: 1880, latency: 47, status: 'online' },
    { id: 'blr', city: 'Bengaluru', region: 'SOUTH-ASIA', lat: 12.9, lon: 77.6, gpus: 2640, latency: 53, status: 'online' },
    { id: 'sin', city: 'Singapore', region: 'SEA', lat: 1.35, lon: 103.8, gpus: 3390, latency: 33, status: 'online' },
    { id: 'tyo', city: 'Tokyo', region: 'APAC-NORTH', lat: 35.7, lon: 139.7, gpus: 4970, latency: 27, status: 'online' },
    { id: 'syd', city: 'Sydney', region: 'OCEANIA', lat: -33.9, lon: 151.2, gpus: 1190, latency: 66, status: 'offline' },
  ] as CyberNode[],
  connections: [['sfo', 'nyc'], ['nyc', 'ams'], ['ams', 'mad'], ['mad', 'los'], ['ams', 'dxb'], ['dxb', 'blr'], ['blr', 'sin'], ['sin', 'tyo'], ['tyo', 'sfo'], ['nyc', 'mex'], ['mex', 'sao'], ['sin', 'syd']] as Array<[string, string]>,
  breach: {
    message: 'ACCESS WINDOW OPEN',
    text: 'First 500 GPU-hours free for new operators of the grid. Window closes when the counter hits zero.',
  },
  specs: [
    { group: 'COMPUTE', rows: [
      { key: 'GPU classes', value: 'H200 · H100 · L40S · RTX 4090 · RTX 3090' },
      { key: 'Max cluster', value: '1,024 GPUs', unit: 'per job' },
      { key: 'Interconnect', value: 'WireGuard mesh · 25–100', unit: 'Gb/s' },
      { key: 'Cold start', value: '9.2', unit: 's (p50)' },
    ] },
    { group: 'SECURITY', rows: [
      { key: 'Isolation', value: 'Confidential VMs · AMD SEV-SNP / Intel TDX' },
      { key: 'Attestation', value: 'Remote, per job, verifiable on-chain' },
      { key: 'Key custody', value: 'Customer-held · HSM-backed', redacted: true },
      { key: 'Audit trail', value: 'Hash-chained, operator-blind', redacted: true },
    ] },
    { group: 'NETWORK', rows: [
      { key: 'Routing', value: 'Latency-weighted · cost-aware' },
      { key: 'Egress', value: '0.00', unit: 'CR/GB' },
      { key: 'Regions', value: '38 cities · 6 continents' },
      { key: 'Failover', value: '< 1 s checkpoint migration', redacted: true },
    ] },
  ],
  layers: [
    { title: 'L0 · Hardware', desc: 'Idle GPUs from studios, labs and gamers, benchmarked every hour.', time: 'BOOT', status: 'done' as const },
    { title: 'L1 · Enclave', desc: 'Confidential VM with remote attestation — the operator is blind.', time: '+1.4S', status: 'done' as const },
    { title: 'L2 · Mesh', desc: 'Encrypted WireGuard fabric stitches cards into one cluster.', time: '+3.9S', status: 'done' as const },
    { title: 'L3 · Scheduler', desc: 'Places, checkpoints and migrates jobs across the grid.', time: '+6.1S', status: 'active' as const },
    { title: 'L4 · Your container', desc: 'Any OCI image, mounted with your secrets and data.', time: '+9.2S', status: 'pending' as const },
  ],
  faqProtocol: [
    { q: 'Who owns the GPUs?', a: 'Independent operators: render farms, research labs and people with idle gaming rigs. They stake credits to join and are slashed for downtime or tampering.' },
    { q: 'Can an operator read my data?', a: 'No. Jobs run in confidential VMs with remote attestation. Memory is encrypted and keys never leave your control.' },
    { q: 'What happens if a node disappears?', a: 'The scheduler checkpoints every few minutes and migrates the job to another card, usually in under a second.' },
    { q: 'Is it legal to use for my company?', a: 'Yes. We sign DPAs, support EU-only routing and keep a hash-chained audit trail you can export.' },
  ],
  plans: [
    { id: 'ghost', name: 'GHOST', tagline: 'Hobbyists & tinkerers', monthly: 0, annual: 0, rate: 0.62, credits: 50, features: ['Spot GPUs up to RTX 4090', '1 concurrent job', 'Community support', 'Public regions only'], cta: 'Start free' },
    { id: 'runner', name: 'RUNNER', tagline: 'Indie studios & startups', monthly: 49, annual: 39, rate: 0.48, credits: 400, features: ['H100 & L40S access', '10 concurrent jobs', 'Per-second billing', 'Private registries', 'Priority queue'], cta: 'Jack in', featured: true },
    { id: 'syndicate', name: 'SYNDICATE', tagline: 'Labs & enterprises', monthly: 499, annual: 399, rate: 0.36, credits: 5000, features: ['H200 reserved pools', 'Unlimited jobs', 'EU-only routing', 'SSO, audit export, DPA', 'Dedicated operator'], cta: 'Contact ops' },
  ],
  faqPricing: [
    { q: 'What is a credit?', a: 'One credit (CR) equals one dollar of compute. Rates per GPU class are listed live in the console.' },
    { q: 'Do unused credits roll over?', a: 'Yes, for 12 months on paid plans.' },
    { q: 'Is there egress or storage fee?', a: 'Egress is free. Storage is 0.02 CR per GB per month.' },
  ],
  theses: [
    { title: 'Compute is a commons.', text: 'There are more idle GPUs in bedrooms and studios than in all the clouds combined. Leaving them dark is a choice.' },
    { title: 'No centre, no single kill switch.', text: 'A grid with no headquarters cannot be switched off by one company, one region or one bad quarter.' },
    { title: 'Privacy is not a premium tier.', text: 'Every job runs sealed. The operator is blind by default, not for an extra fee.' },
    { title: 'Pay for the second you burn.', text: 'Rounding up to the hour is a tax on experimentation. We bill like a utility, not a landlord.' },
    { title: 'Operators are people.', text: 'They get paid every block, see their earnings live and can leave whenever they want.' },
  ],
  crew: [
    { name: 'Mara Okonkwo', handle: 'm4ra', role: 'Founder · protocol', clearance: 5, location: 'Lagos' },
    { name: 'Teo Vasquez', handle: 'gh0stwire', role: 'Scheduler & mesh', clearance: 5, location: 'Madrid' },
    { name: 'Ren Takahashi', handle: 'r3n', role: 'Enclaves & attestation', clearance: 4, location: 'Tokyo' },
    { name: 'Ines Duarte', handle: 'n0de', role: 'Operator relations', clearance: 3, location: 'São Paulo' },
    { name: 'Felix Brandt', handle: 'fx', role: 'Interface & brand', clearance: 3, location: 'Amsterdam' },
    { name: 'Aaliyah Noor', handle: 'a.n', role: 'Security research', clearance: 4, location: 'Dubai' },
  ],
  regions: [
    { name: 'NA-WEST', city: 'San Francisco', uptime: 99.99, latency: 42 },
    { name: 'NA-EAST', city: 'New York', uptime: 99.98, latency: 36 },
    { name: 'LATAM', city: 'Mexico City · São Paulo', uptime: 99.61, latency: 59 },
    { name: 'EU-WEST', city: 'Amsterdam', uptime: 100, latency: 22 },
    { name: 'EU-SOUTH', city: 'Madrid', uptime: 99.97, latency: 29 },
    { name: 'APAC', city: 'Tokyo · Singapore', uptime: 99.95, latency: 30 },
    { name: 'OCEANIA', city: 'Sydney', uptime: 98.72, latency: 66 },
  ],
  incidents: [
    { title: 'OCEANIA · Node SYD-02 offline', desc: 'Power maintenance at operator site. Jobs migrated to SIN in 0.8 s.', time: '04:12 UTC', status: 'active' as const },
    { title: 'LATAM · Elevated latency', desc: 'Upstream fibre cut near Querétaro. Traffic re-routed via São Paulo.', time: 'YESTERDAY', status: 'done' as const },
    { title: 'Scheduled · Mesh key rotation', desc: 'Quarterly rotation of WireGuard keys, no downtime expected.', time: 'NOV 14', status: 'pending' as const },
  ],
  releases: [
    { version: 'v4.2', date: '2026-11-03', title: 'GHOSTWIRE', changes: [{ type: 'new' as const, text: 'Checkpoint migration under one second across regions' }, { type: 'new' as const, text: 'Lagos and Bengaluru regions' }, { type: 'improved' as const, text: 'Cold start p50 down from 14 s to 9.2 s' }] },
    { version: 'v4.1', date: '2026-10-12', title: 'BLACKBOX', changes: [{ type: 'new' as const, text: 'Remote attestation verifiable on-chain' }, { type: 'fixed' as const, text: 'Spot price spikes during block finalisation' }] },
    { version: 'v4.0', date: '2026-09-01', title: 'NEON RAIN', changes: [{ type: 'new' as const, text: 'Per-second billing for every plan' }, { type: 'improved' as const, text: 'Console rebuilt — keyboard first' }, { type: 'fixed' as const, text: 'Rare double charge on cancelled jobs' }] },
  ],
  terminal: {
    channels: [
      { label: 'OPS', value: 'ops@nullsector.example' },
      { label: 'SECURITY', value: 'pgp: 0x9F3A 7C21 · security@nullsector.example' },
      { label: 'PRESS', value: 'signal@nullsector.example' },
    ],
    topics: ['Enterprise / Syndicate plan', 'Become an operator', 'Security report', 'Press', 'Something else'],
  },
  footer: [
    { title: 'GRID', links: [{ label: 'Protocol', key: 'protocol' }, { label: 'Pricing', key: 'pricing' }, { label: 'Status', key: 'logs' }] },
    { title: 'SYNDICATE', links: [{ label: 'Manifesto', key: 'manifesto' }, { label: 'Changelog', key: 'logs' }, { label: 'Contact', key: 'terminal' }] },
    { title: 'LEGAL', links: [{ label: 'Privacy', key: '' }, { label: 'Terms', key: '' }, { label: 'DPA', key: '' }] },
  ],
};

export type CyberData = typeof nullSector;

/** Resolve a route key ('' → '#'). */
export function cyberHref(routes: CyberRoutes, key: string): string {
  return key ? (routes as unknown as Record<string, string>)[key] ?? '#' : '#';
}
