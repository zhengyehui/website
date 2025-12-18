import { getPosts } from '@/lib/contentful';
import { Post } from '@/types/contentful';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import News from '@/components/News';

export default async function Home() {
  // 从 Contentful 获取新闻
  const posts: Post[] = await getPosts(3);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <News posts={posts} />
    </div>
  );
}

