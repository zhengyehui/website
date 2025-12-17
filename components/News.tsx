import Link from 'next/link';

interface Post {
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
  };
}

interface NewsProps {
  posts: Post[];
}

export default function News({ posts }: NewsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          最新动态
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/news/${post.fields.slug}`}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {post.fields.title}
              </h3>
              {post.fields.excerpt && (
                <p className="text-gray-600 mb-4">{post.fields.excerpt}</p>
              )}
              {post.fields.publishedAt && (
                <p className="text-sm text-gray-400">
                  {new Date(post.fields.publishedAt).toLocaleDateString('zh-CN')}
                </p>
              )}
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/news"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            查看所有新闻 →
          </Link>
        </div>
      </div>
    </section>
  );
}

