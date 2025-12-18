import { Post } from '@/types/contentful';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import News from '@/components/News';

export default async function Home() {
  // 方法二：暂时返回空数组（等 Contentful 配置好后再启用）
  const posts: Post[] = [];
  
  // 如果 Contentful 已配置，取消下面的注释
  // import { getPosts } from '@/lib/contentful';
  // const posts: Post[] = await getPosts(3);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <News posts={posts} />
    </div>
  );
}

