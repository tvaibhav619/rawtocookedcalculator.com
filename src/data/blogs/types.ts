export interface BlogPostQuickStat {
  label: string;
  value: string;
  note?: string;
}

export interface BlogPostSection {
  id: string;
  title: string;
  content: string; // rich HTML string
}

export interface BlogPostTable {
  caption: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface BlogPostFaq {
  question: string;
  answer: string;
}

export interface BlogPostCalculatorCta {
  title: string;
  description: string;
  buttonText: string;
  targetUrl: string;
}

export type BlogCategory =
  | 'Weight Conversions'
  | 'Portion & Visual Guides'
  | 'Protein & Macros'
  | 'Food Safety & Storage';

export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: BlogCategory;
  readTime: string;
  publishedDate: string;
  modifiedDate: string;
  keywords: string[];
  summary: string;
  quickAnswer: {
    headline: string;
    text: string;
    keyStats: BlogPostQuickStat[];
  };
  keyTakeaways: string[];
  sections: BlogPostSection[];
  tableData?: BlogPostTable;
  faqs: BlogPostFaq[];
  calculatorCta: BlogPostCalculatorCta;
  relatedSlugs: string[];
}
