#!/usr/bin/env node
// bin/cli.js
// Direct CLI runner for astro-component-kit.
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { installMcpForClient } from './installer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const first = args[0]?.toLowerCase();

async function main() {
  // 1. Fast-path: 1-click install command runs natively in pure Node.js
  if (first === 'install' || (first === 'mcp' && args[1]?.toLowerCase() === 'install')) {
    const client = first === 'install' ? args[1] : args[2];
    if (!client) {
      console.log(`\n🚀 Astro Components Kit — 1-Click MCP Installer\n`);
      console.log(`Usage:`);
      console.log(`  npx astro-component-kit mcp install <cursor|claude|codex|lovable|mcp>\n`);
      console.log(`Example:`);
      console.log(`  npx astro-component-kit mcp install cursor\n`);
      process.exit(1);
    }

    const success = await installMcpForClient(client);
    process.exit(success ? 0 : 1);
  }

  // 2. Help command
  if (!first || first === 'help' || first === '--help' || first === '-h') {
    console.log(`
🚀 Astro Components Kit (astro-component-kit)

Usage:
  npx astro-component-kit mcp install <cursor|claude|codex|lovable|mcp>
    → Automatically configure your AI editor/agent to connect to the MCP server

  npx astro-component-kit mcp serve
    → Start local HTTP/SSE MCP server (default port 3000)

  npx astro-component-kit mcp --stdio
    → Run in stdio mode for local MCP integrations

Remote SSE Endpoint:
  https://mcp.astrocomponents.dev/sse
`);
    process.exit(0);
  }

  // 3. For serve / stdio modes, invoke MCP runner
  const tsxPath = path.resolve(rootDir, 'node_modules/.bin/tsx');
  const mcpEntry = path.resolve(rootDir, 'src/mcp/index.ts');
  const proc = spawn(process.execPath, [tsxPath, mcpEntry, ...args], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
  proc.on('exit', (code) => process.exit(code || 0));
}

main().catch((err) => {
  console.error('[cli] Error:', err);
  process.exit(1);
});
