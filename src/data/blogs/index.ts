import type { BlogPost, BlogCategory } from './types';
import { CONVERSION_BLOGS } from './conversions';
import { TRACKING_SAFETY_BLOGS } from './tracking-safety';
import { PORTIONS_VISUALS_BLOGS } from './portions-visuals';
import { PROTEIN_NUTRITION_BLOGS } from './protein-nutrition';

export * from './types';

export const ALL_BLOG_POSTS: BlogPost[] = [
  ...CONVERSION_BLOGS,
  ...TRACKING_SAFETY_BLOGS,
  ...PORTIONS_VISUALS_BLOGS,
  ...PROTEIN_NUTRITION_BLOGS,
];

export function getAllBlogPosts(): BlogPost[] {
  return ALL_BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return ALL_BLOG_POSTS.filter((p) => p.category === category);
}

export function getBlogCategories(): { category: BlogCategory; count: number }[] {
  const map = new Map<BlogCategory, number>();
  for (const post of ALL_BLOG_POSTS) {
    map.set(post.category, (map.get(post.category) || 0) + 1);
  }
  return Array.from(map.entries()).map(([category, count]) => ({ category, count }));
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  if (post.relatedSlugs && post.relatedSlugs.length > 0) {
    const directRelated = post.relatedSlugs
      .map((slug) => getBlogPostBySlug(slug))
      .filter((p): p is BlogPost => p !== undefined);
    if (directRelated.length >= limit) {
      return directRelated.slice(0, limit);
    }
    // Fill remainder with same category
    const sameCategory = ALL_BLOG_POSTS.filter(
      (p) => p.slug !== post.slug && p.category === post.category && !directRelated.some((r) => r.slug === p.slug)
    );
    return [...directRelated, ...sameCategory].slice(0, limit);
  }

  return ALL_BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, limit);
}
