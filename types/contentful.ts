import { Entry } from 'contentful';

// Post 字段接口定义
export interface PostFields {
  title?: string;
  slug?: string;
  excerpt?: string;
  publishedAt?: string;
  content?: any;
}

// 简化的 Post 类型（用于组件）
export interface Post {
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
  };
}

// 转换工具函数：将 Contentful Entry 转换为 Post
export function transformContentfulPost(entry: Entry<any>): Post {
  const fields = entry.fields as any;
  
  return {
    fields: {
      title: fields?.title || '',
      slug: fields?.slug || '',
      excerpt: fields?.excerpt || undefined,
      publishedAt: fields?.publishedAt || undefined,
    },
  };
}

