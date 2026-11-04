#!/usr/bin/env node
// src/mcp/index.ts
// Entry point for Astro Components Kit MCP Server.
// Supports both Remote HTTP/SSE mode (Coolify) and Local Stdio mode (CLI/npx).
import { startHttpServer } from './http-server.js';
import { startStdioServer } from './stdio-server.js';

const isStdio = process.argv.includes('--stdio');

if (isStdio) {
  startStdioServer().catch((err) => {
    console.error('[mcp-stdio] Fatal error:', err);
    process.exit(1);
  });
} else {
  startHttpServer();
}
