// src/mcp/installer.ts
// Automated 1-click CLI installer for Cursor, Claude Desktop, Windsurf, and Cline.
// Similar to 21st.dev/mcp installation experience.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

export type SupportedClient = 'cursor' | 'claude' | 'windsurf' | 'cline';

const MCP_SERVER_URL = 'https://mcp.astrocomponents.dev/sse';

const SERVER_CONFIG = {
  url: MCP_SERVER_URL,
};

function getHomeDir(): string {
  return os.homedir();
}

/**
 * Returns the candidate configuration paths for each supported client.
 */
function getClientConfigPaths(client: SupportedClient): { primary: string; fallback?: string } {
  const home = getHomeDir();
  const platform = os.platform();

  switch (client) {
    case 'cursor': {
      // Prioritize workspace-level .cursor/mcp.json, fallback to global
      const localCursor = path.resolve(process.cwd(), '.cursor/mcp.json');
      const globalCursor = path.resolve(home, '.cursor/mcp.json');
      return { primary: localCursor, fallback: globalCursor };
    }
    case 'claude': {
      if (platform === 'darwin') {
        return { primary: path.resolve(home, 'Library/Application Support/Claude/claude_desktop_config.json') };
      }
      if (platform === 'win32') {
        const appData = process.env.APPDATA || path.resolve(home, 'AppData/Roaming');
        return { primary: path.resolve(appData, 'Claude/claude_desktop_config.json') };
      }
      return { primary: path.resolve(home, '.config/Claude/claude_desktop_config.json') };
    }
    case 'windsurf': {
      return { primary: path.resolve(home, '.codeium/windsurf/mcp_config.json') };
    }
    case 'cline': {
      if (platform === 'darwin') {
        return {
          primary: path.resolve(
            home,
            'Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json'
          ),
        };
      }
      if (platform === 'win32') {
        const appData = process.env.APPDATA || path.resolve(home, 'AppData/Roaming');
        return {
          primary: path.resolve(
            appData,
            'Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json'
          ),
        };
      }
      return {
        primary: path.resolve(
          home,
          '.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json'
        ),
      };
    }
  }
}

/**
 * Installs or updates the astro-components MCP server in the target client's configuration.
 */
export async function installMcpForClient(targetClient: string): Promise<boolean> {
  const client = targetClient.toLowerCase().trim() as SupportedClient;
  const validClients: SupportedClient[] = ['cursor', 'claude', 'windsurf', 'cline'];

  if (!validClients.includes(client)) {
    console.error(`\n❌ Unknown client "${targetClient}".`);
    console.log(`   Supported clients: ${validClients.join(', ')}`);
    console.log(`\nExample:`);
    console.log(`   npx astro-component-kit mcp install cursor\n`);
    return false;
  }

  const { primary } = getClientConfigPaths(client);
  const targetDir = path.dirname(primary);

  console.log(`\n📦 Configuring Astro Components Kit MCP for [${client}]...`);
  console.log(`   Target config: ${primary}`);

  try {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    let config: any = {};
    if (fs.existsSync(primary)) {
      try {
        const raw = fs.readFileSync(primary, 'utf8');
        config = JSON.parse(raw);
      } catch {
        config = {};
      }
    }

    if (!config || typeof config !== 'object') {
      config = {};
    }

    if (!config.mcpServers || typeof config.mcpServers !== 'object') {
      config.mcpServers = {};
    }

    // Add or update astro-components server
    config.mcpServers['astro-components'] = SERVER_CONFIG;

    fs.writeFileSync(primary, JSON.stringify(config, null, 2) + '\n', 'utf8');

    console.log(`\n✅ Successfully installed!`);
    console.log(`   Server name: "astro-components"`);
    console.log(`   Endpoint:    ${MCP_SERVER_URL}`);
    console.log(`\n💡 What to do next:`);
    console.log(`   Restart ${client.toUpperCase()} (or reload MCP servers), then prompt your AI:`);
    console.log(`   > "Search astro-components for ecommerce cards and buy box"`);
    console.log(`   > "Insert a KPI stat tile chart from astro-components"\n`);
    return true;
  } catch (err: any) {
    console.error(`\n❌ Failed to write configuration: ${err?.message || err}`);
    console.log(`\nYou can configure it manually by adding this JSON:`);
    console.log(
      JSON.stringify(
        {
          mcpServers: {
            'astro-components': SERVER_CONFIG,
          },
        },
        null,
        2
      )
    );
    return false;
  }
}

