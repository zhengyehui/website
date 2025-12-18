import { createClient, Entry } from 'contentful';
import { Post, transformContentfulPost } from '@/types/contentful';

// 只在有配置时才创建客户端（避免构建时错误）
let contentfulClient: ReturnType<typeof createClient> | null = null;

function getContentfulClient() {
  if (!contentfulClient) {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    
    if (!spaceId || !accessToken) {
      return null;
    }
    
    contentfulClient = createClient({
      space: spaceId,
      accessToken: accessToken,
    });
  }
  return contentfulClient;
}

// 获取所有页面
export async function getPages() {
  const client = getContentfulClient();
  if (!client) return [];
  
  const entries = await client.getEntries({
    content_type: 'page',
    order: ['fields.order'],
  });
  return entries.items;
}

// 根据 slug 获取页面
export async function getPageBySlug(slug: string) {
  const client = getContentfulClient();
  if (!client) return null;
  
  const entries = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0];
}

// 获取所有文章（返回 Post[] 类型）
export async function getPosts(limit = 10): Promise<Post[]> {
  const client = getContentfulClient();
  if (!client) {
    // 如果没有配置 Contentful，返回空数组
    return [];
  }
  
  try {
    const res = await client.getEntries({
      content_type: 'post',
      order: ['-fields.publishedAt'],
      limit,
    });
    
    // 转换数据格式以匹配 Post 类型
    const posts: Post[] = res.items.map((item: Entry<any>) => {
      const fields = item.fields as any;
      return {
        fields: {
          title: fields?.title || '',
          slug: fields?.slug || '',
          excerpt: fields?.excerpt || undefined,
          publishedAt: fields?.publishedAt || undefined,
        },
      };
    });
    
    return posts;
  } catch (error) {
    console.error('获取文章失败:', error);
    return [];
  }
}

// 根据 slug 获取文章
export async function getPostBySlug(slug: string) {
  const client = getContentfulClient();
  if (!client) return null;
  
  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0];
}

// 获取网站配置
export async function getSiteConfig() {
  const client = getContentfulClient();
  if (!client) return null;
  
  const entries = await client.getEntries({
    content_type: 'siteConfig',
    limit: 1,
  });
  return entries.items[0]?.fields;
}

