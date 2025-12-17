import { getPages, getPosts } from '@/lib/contentful';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import News from '@/components/News';

export default async function Home() {
  const posts = await getPosts(3).catch(() => []);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <News posts={posts} />
    </div>
  );
}

