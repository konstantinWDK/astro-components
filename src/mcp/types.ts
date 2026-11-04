// src/mcp/types.ts
export interface ComponentSearchResult {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  importPath: string;
  featured: boolean;
}

export interface ComponentDetail {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  importStatement: string;
  usageExample: string;
  installationGuide?: string;
  codeSnippet: string;
}

export interface CategorySummary {
  id: string;
  name: string;
  description: string;
  count: number;
}

export interface TemplateSummary {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  importPath: string;
  previewUrl: string;
  pageCount: number;
  pages: Array<{ id: string; name: string; path: string; file: string }>;
}

export interface LibraryStats {
  name: string;
  version: string;
  description: string;
  totalComponents: number;
  totalCategories: number;
  totalTemplates: number;
  homepage: string;
  npm: string;
  categories: CategorySummary[];
}
