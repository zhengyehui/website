import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is not set');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is not set');
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// 获取所有页面
export async function getPages() {
  const entries = await contentfulClient.getEntries({
    content_type: 'page',
    order: 'fields.order',
  });
  return entries.items;
}

// 根据 slug 获取页面
export async function getPageBySlug(slug: string) {
  const entries = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0];
}

// 获取所有文章
export async function getPosts(limit = 10) {
  const entries = await contentfulClient.getEntries({
    content_type: 'post',
    order: '-fields.publishedAt',
    limit,
  });
  return entries.items;
}

// 根据 slug 获取文章
export async function getPostBySlug(slug: string) {
  const entries = await contentfulClient.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0];
}

// 获取网站配置
export async function getSiteConfig() {
  const entries = await contentfulClient.getEntries({
    content_type: 'siteConfig',
    limit: 1,
  });
  return entries.items[0]?.fields;
}

