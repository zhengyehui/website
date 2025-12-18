import { getPosts } from '@/lib/contentful';
import Link from 'next/link';
import { Post } from '@/types/contentful';

export default async function NewsPage() {
  // 从 Contentful 获取所有新闻
  const posts: Post[] = await getPosts(10);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">新闻动态</h1>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">暂无新闻，请稍后再来查看。</p>
            <p className="text-sm text-gray-500 mt-4">
              提示：在 Contentful 中创建 Post 内容类型并添加内容后，这里会显示新闻。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post, index: number) => (
              <Link
                key={index}
                href={`/news/${post.fields.slug}`}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow block"
              >
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {post.fields.title}
                </h2>
                {post.fields.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.fields.excerpt}
                  </p>
                )}
                {post.fields.publishedAt && (
                  <p className="text-sm text-gray-400">
                    {new Date(post.fields.publishedAt).toLocaleDateString('zh-CN')}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

