// src/mcp/tools.ts
// MCP Tools definition for Astro Components Kit.
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
  searchComponents,
  getComponent,
  getComponentCode,
  listCategories,
  listTemplates,
  getTemplate,
  getDesignTokens,
  getLibraryStats,
} from './registry-adapter.js';

/**
 * Creates and registers all tools on a new McpServer instance.
 */
export function createMcpServer(): McpServer {
  const stats = getLibraryStats();
  const server = new McpServer({
    name: 'astro-components-kit-mcp',
    version: stats.version,
  });

  // 1. search_components
  server.tool(
    'search_components',
    'Search for Astro UI components by keyword, category, or tag (e.g. "button", "pricing", "kpi chart", "cart", "modal"). Returns matching components with description and import paths.',
    {
      query: z.string().optional().describe('Keyword to search in name, description, slug, or tags'),
      category: z
        .string()
        .optional()
        .describe(
          'Filter by category: buttons, cards, forms, feedback, navigation, layout, overlays, data, typography, charts, ecommerce, app, sections'
        ),
      tag: z.string().optional().describe('Filter by specific tag, e.g. "glass", "chart", "hero", "table"'),
      limit: z.number().int().min(1).max(50).optional().describe('Max results to return (default: 20)'),
    },
    async (args) => {
      const results = searchComponents(args);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                totalFound: results.length,
                components: results,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  // 2. get_component
  server.tool(
    'get_component',
    'Get full details, props interface, usage example, and import statement for a specific Astro component by its slug (e.g. "product-buy-box", "glass-button", "feature-bento-grid").',
    {
      slug: z.string().describe('The kebab-case slug of the component (e.g. "kpi-stat-tile", "cart-drawer", "data-table")'),
    },
    async ({ slug }) => {
      const detail = getComponent(slug);
      if (!detail) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Component with slug "${slug}" not found in astro-component-kit. Use the "search_components" tool to find valid slugs.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(detail, null, 2),
          },
        ],
      };
    }
  );

  // 3. get_component_code
  server.tool(
    'get_component_code',
    'Get the complete, raw .astro source code of a component ready to be copy-pasted directly into a project without npm.',
    {
      slug: z.string().describe('The kebab-case slug of the component (e.g. "line-chart", "glass-button")'),
    },
    async ({ slug }) => {
      const result = getComponentCode(slug);
      if (!result || !result.code) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Could not retrieve source code for component "${slug}". Check the slug using "search_components".`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: 'text',
            text: result.code,
          },
        ],
      };
    }
  );

  // 4. list_categories
  server.tool(
    'list_categories',
    'List all available component and section categories in Astro Components Kit with their descriptions and component counts.',
    {},
    async () => {
      const categories = listCategories();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ categories }, null, 2),
          },
        ],
      };
    }
  );

  // 5. list_templates
  server.tool(
    'list_templates',
    'List all multi-page production templates (e.g. E-Commerce Store, Editorial Shop, SaaS Hotel PMS, Marketing Agency, Developer Portfolio, Toy Store, Clinic SaaS, Cyberpunk, Dental Practice, Moving & Logistics) with page lists and features.',
    {},
    async () => {
      const templates = listTemplates();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ templates }, null, 2),
          },
        ],
      };
    }
  );

  // 6. get_template
  server.tool(
    'get_template',
    'Get the complete multi-page template specification, architecture, pages, code, and routing instructions (e.g. "ecommerce", "ecommerce-editorial", "saas-hotel", "agency", "portfolio", "toy-store", "saas-clinic", "cyberpunk", "dental", "moving").',
    {
      slug: z
        .string()
        .describe('Template slug: "ecommerce" (Nova Store), "ecommerce-editorial" (Forma Studio), "saas-hotel" (The Lobby), "agency" (Volta marketing agency), "portfolio" (Keycap developer portfolio), "toy-store" (Kapow action-figure store), "saas-clinic" (Pulso medical consultations SaaS), "cyberpunk" (NULL/SECTOR futuristic-brutalist site), "dental" (Dentis dental clinic & practice OS), or "moving" (Muvr moving, logistics & van fleet)'),
    },
    async ({ slug }) => {
      const template = getTemplate(slug);
      if (!template) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Template "${slug}" not found. Valid slugs are: "ecommerce", "ecommerce-editorial", "saas-hotel", "agency", "portfolio", "toy-store", "saas-clinic", "cyberpunk", "dental", "moving". Use "list_templates" to inspect them.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(template, null, 2),
          },
        ],
      };
    }
  );

  // 7. get_design_tokens
  server.tool(
    'get_design_tokens',
    'Get CSS design tokens, color palette, spacing scale, radii, and dark/light theme switching guide for Astro Components Kit.',
    {},
    async () => {
      const tokens = getDesignTokens();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(tokens, null, 2),
          },
        ],
      };
    }
  );

  // 8. get_library_info
  server.tool(
    'get_library_info',
    'Get general library overview: active version, total component count, npm install commands, and quickstart guide for Astro developers.',
    {},
    async () => {
      const stats = getLibraryStats();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                ...stats,
                quickStart: {
                  install: 'npm install astro-component-kit',
                  cssImport: "import 'astro-component-kit/global.css';",
                  recommendedCategoryImports: [
                    "import { StoreProductCard, CartDrawer } from 'astro-component-kit/ecommerce';",
                    "import { DataTable, AppSidebar } from 'astro-component-kit/app';",
                    "import { LineChart, KpiStatTile } from 'astro-component-kit/charts';",
                    "import { GlassButton } from 'astro-component-kit/buttons';",
                    "import { FeatureBentoGrid } from 'astro-component-kit/sections';",
                  ],
                },
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  return server;
}

