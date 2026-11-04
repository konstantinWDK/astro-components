#!/usr/bin/env node
// bin/cli.js
// CLI runner for astro-component-kit.
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const first = args[0]?.toLowerCase();

// Fast-path: if install command, run installer directly with node
if (first === 'install' || (first === 'mcp' && args[1]?.toLowerCase() === 'install')) {
  const tsxPath = path.resolve(rootDir, 'node_modules/.bin/tsx');
  const mcpEntry = path.resolve(rootDir, 'src/mcp/index.ts');
  const proc = spawn(process.execPath, [tsxPath, mcpEntry, ...args], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
  proc.on('exit', (code) => process.exit(code || 0));
} else {
  // Otherwise forward to MCP runner
  const tsxPath = path.resolve(rootDir, 'node_modules/.bin/tsx');
  const mcpEntry = path.resolve(rootDir, 'src/mcp/index.ts');
  const proc = spawn(process.execPath, [tsxPath, mcpEntry, ...args], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
  proc.on('exit', (code) => process.exit(code || 0));
}
