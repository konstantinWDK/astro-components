// src/mcp/stdio-server.ts
// Stdio transport for local execution (e.g. npx astro-component-kit mcp).
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createMcpServer } from './tools.js';

export async function startStdioServer() {
  const server = createMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

