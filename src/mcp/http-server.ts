// src/mcp/http-server.ts
// Production-ready SSE HTTP server for Astro Components Kit MCP on Coolify.
import express, { type Request, type Response, type NextFunction } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { createMcpServer } from './tools.js';
import { getLibraryStats } from './registry-adapter.js';

export interface HttpServerOptions {
  port?: number;
  host?: string;
  rateLimitMax?: number;
  rateLimitWindowMs?: number;
}

export function startHttpServer(options: HttpServerOptions = {}) {
  const port = options.port || Number(process.env.PORT) || 3000;
  const host = options.host || process.env.HOST || '0.0.0.0';
  const rateLimitMax = options.rateLimitMax || Number(process.env.RATE_LIMIT_MAX) || 120;
  const rateLimitWindowMs = options.rateLimitWindowMs || Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 1000;

  const app = express();

  // Trust reverse proxies (Coolify / Traefik / Caddy / Nginx) for proper IP rate limiting
  app.set('trust proxy', 1);

  // Disable identifying header
  app.disable('x-powered-by');

  // Security headers middleware
  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    next();
  });

  // CORS for public MCP client access
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    })
  );

  // Rate Limiting — protects Coolify container from abuse
  const limiter = rateLimit({
    windowMs: rateLimitWindowMs,
    max: rateLimitMax,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: 'Too Many Requests',
      message: `Rate limit of ${rateLimitMax} requests per minute exceeded. Please try again later.`,
    },
  });

  app.use(limiter);

  // Track active SSE transports by sessionId
  const transports = new Map<string, SSEServerTransport>();

  // 1. Healthcheck Endpoint (for Coolify / Docker health checks)
  app.get('/health', (_req: Request, res: Response) => {
    const stats = getLibraryStats();
    res.json({
      status: 'ok',
      service: 'astro-components-kit-mcp',
      version: stats.version,
      componentsCount: stats.totalComponents,
      templatesCount: stats.totalTemplates,
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    });
  });

  // 2. Human-friendly landing page
  app.get('/', (_req: Request, res: Response) => {
    const stats = getLibraryStats();
    const serverUrl = `https://${_req.get('host') || 'mcp.astrocomponents.dev'}`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Astro Components Kit — MCP Server</title>
  <style>
    :root {
      --bg: #090d16;
      --card-bg: rgba(255, 255, 255, 0.04);
      --border: rgba(255, 255, 255, 0.1);
      --primary: #f59e0b;
      --primary-glow: rgba(245, 158, 11, 0.25);
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --code-bg: #030712;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 2.5rem 1.25rem;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container {
      max-width: 760px;
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16px);
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--primary);
      background: var(--primary-glow);
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      margin-bottom: 1rem;
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; }
    h1 { font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
    p.lead { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 2rem; }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .stat-box {
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid var(--border);
      padding: 1rem;
      border-radius: 12px;
      text-align: center;
    }
    .stat-val { font-size: 1.6rem; font-weight: 800; color: var(--primary); }
    .stat-label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
    h2 { font-size: 1.25rem; margin-bottom: 0.8rem; }
    pre {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.25rem;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.9rem;
      color: #e2e8f0;
      margin-bottom: 1.5rem;
    }
    .endpoint {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 10px;
      color: #34d399;
      font-family: monospace;
      font-size: 0.95rem;
      margin-bottom: 2rem;
    }
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    footer a { color: var(--primary); text-decoration: none; }
    footer a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="badge"><span class="dot"></span> Online & Ready · v${stats.version}</div>
    <h1>Astro Components Kit MCP</h1>
    <p class="lead">Model Context Protocol server for Astro 5.x. Connect this endpoint to Cursor, Claude Desktop, Windsurf, or Antigravity to let your AI build directly with the library.</p>
    
    <div class="stats">
      <div class="stat-box">
        <div class="stat-val">${stats.totalComponents}+</div>
        <div class="stat-label">Components</div>
      </div>
      <div class="stat-box">
        <div class="stat-val">${stats.totalCategories}</div>
        <div class="stat-label">Categories</div>
      </div>
      <div class="stat-box">
        <div class="stat-val">${stats.totalTemplates}</div>
        <div class="stat-label">Templates</div>
      </div>
      <div class="stat-box">
        <div class="stat-val">WCAG AA</div>
        <div class="stat-label">Accessible</div>
      </div>
    </div>

    <h2>Connect via SSE URL</h2>
    <div class="endpoint">
      <strong>SSE Endpoint:</strong> ${serverUrl}/sse
    </div>

    <h2>Configuration (Cursor / Claude / Windsurf)</h2>
    <pre>{
  "mcpServers": {
    "astro-components": {
      "url": "${serverUrl}/sse"
    }
  }
}</pre>

    <footer>
      <span>Astro Components Kit v${stats.version}</span>
      <div>
        <a href="https://astrocomponents.dev" target="_blank">Docs</a> ·
        <a href="https://github.com/konstantinwdk/astro-components" target="_blank">GitHub</a> ·
        <a href="https://www.npmjs.com/package/astro-component-kit" target="_blank">npm</a>
      </div>
    </footer>
  </div>
</body>
</html>`);
  });

  // 3. SSE Transport Endpoint (Client establishes SSE connection)
  app.get('/sse', async (req: Request, res: Response) => {
    try {
      const server = createMcpServer();
      const transport = new SSEServerTransport('/message', res);
      const sessionId = transport.sessionId;

      transports.set(sessionId, transport);

      req.on('close', () => {
        transports.delete(sessionId);
      });

      await server.connect(transport);
    } catch (err: any) {
      console.error('[mcp] Error establishing SSE session:', err?.message || err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to establish SSE session' });
      }
    }
  });

  // 4. Message Endpoint (Client posts JSON-RPC calls)
  app.post('/message', express.json({ limit: '256kb' }), async (req: Request, res: Response) => {
    const sessionId = (req.query.sessionId as string) || '';
    if (!sessionId) {
      res.status(400).json({ error: 'Missing sessionId query parameter' });
      return;
    }

    const transport = transports.get(sessionId);
    if (!transport) {
      res.status(404).json({ error: 'Session not found or expired' });
      return;
    }

    try {
      // express.json() already consumed the request stream: hand the parsed body to the SDK
      await transport.handlePostMessage(req, res, req.body);
    } catch (err: any) {
      console.error(`[mcp] Error handling message for session ${sessionId}:`, err?.message || err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Internal server error processing message' });
      }
    }
  });

  // Start HTTP listener
  const serverInstance = app.listen(port, host, () => {
    const stats = getLibraryStats();
    console.log(`\n🚀 [Astro Components Kit MCP Server]`);
    console.log(`   Version:    v${stats.version}`);
    console.log(`   Components: ${stats.totalComponents}`);
    console.log(`   Templates:  ${stats.totalTemplates}`);
    console.log(`   HTTP/SSE:   http://${host}:${port}/sse`);
    console.log(`   Health:     http://${host}:${port}/health`);
    console.log(`   Rate limit: ${rateLimitMax} req/${rateLimitWindowMs / 1000}s\n`);
  });

  // Graceful shutdown
  const shutdown = () => {
    console.log('\n[mcp] Shutting down gracefully...');
    for (const [, t] of transports) {
      try {
        t.close();
      } catch {
        // ignore
      }
    }
    transports.clear();
    serverInstance.close(() => {
      console.log('[mcp] Server closed.');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  return serverInstance;
}
