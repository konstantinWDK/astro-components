#!/usr/bin/env node
// src/mcp/index.ts
// CLI and entry point for Astro Components Kit MCP Server.
import { startHttpServer } from './http-server.js';
import { startStdioServer } from './stdio-server.js';
import { installMcpForClient } from './installer.js';

const args = process.argv.slice(2);
const firstArg = args[0]?.toLowerCase();

async function main() {
  // 1. Install command: npx astro-component-kit mcp install <client>
  if (firstArg === 'install' || (firstArg === 'mcp' && args[1]?.toLowerCase() === 'install')) {
    const client = firstArg === 'install' ? args[1] : args[2];
    if (!client) {
      console.log(`\nUsage: npx astro-component-kit mcp install <cursor|claude|codex|lovable|mcp>`);
      console.log(`Example: npx astro-component-kit mcp install cursor\n`);
      process.exit(1);
    }
    const success = await installMcpForClient(client);
    process.exit(success ? 0 : 1);
  }

  // 2. HTTP Server command: npx astro-component-kit mcp serve
  if (firstArg === 'serve' || (firstArg === 'mcp' && args[1]?.toLowerCase() === 'serve')) {
    startHttpServer();
    return;
  }

  // 3. Stdio mode: if invoked with --stdio or piped
  if (args.includes('--stdio') || firstArg === 'stdio' || (firstArg === 'mcp' && args[1]?.toLowerCase() === 'stdio')) {
    startStdioServer().catch((err) => {
      console.error('[mcp-stdio] Fatal error:', err);
      process.exit(1);
    });
    return;
  }

  // 4. Default in production / Docker (PORT set): start HTTP server
  if (process.env.PORT || process.env.COOLIFY_APP_ID || process.env.NODE_ENV === 'production') {
    startHttpServer();
    return;
  }

  // 5. Help output when invoked in terminal
  console.log(`
🚀 Astro Components Kit — MCP Server (Model Context Protocol)

Usage:
  npx astro-component-kit mcp install <cursor|claude|codex|lovable|mcp>
    → Automatically configure your AI editor/agent to use Astro Components MCP

  npx astro-component-kit mcp serve
    → Start the remote SSE HTTP server locally (default port 3000)

  npx astro-component-kit mcp --stdio
    → Run in stdio mode for direct local MCP integration

Online Endpoint:
  https://mcp.astrocomponents.dev/sse
`);
}

main().catch((err) => {
  console.error('[mcp] Error:', err);
  process.exit(1);
});
