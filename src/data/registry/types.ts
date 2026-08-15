// src/data/registry/types.ts
export interface ComponentDoc {
  slug: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
  code: string;
  usage: string;
  installation?: {
    command?: string;
    manual?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
