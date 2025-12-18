// import { getPostBySlug, getPosts } from '@/lib/contentful';
import { Post } from '@/types/contentful';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  // 方法二：暂时返回空数组
  const posts: Post[] = [];
  // 如果 Contentful 已配置，取消下面的注释
  // const posts: Post[] = await getPosts(100);
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  // 方法二：暂时返回 404
  notFound();
  
  // 如果 Contentful 已配置，取消下面的注释并删除上面的 notFound()
  // import { getPostBySlug } from '@/lib/contentful';
  // const post = await getPostBySlug(params.slug).catch(() => null);
  // if (!post) {
  //   notFound();
  // }
  // const { title, content, publishedAt, excerpt } = post.fields as any;
  //
  // // 简单的内容渲染（如果需要富文本，可以安装 @contentful/rich-text-react-renderer）
  // const renderContent = () => {
  //   if (!content) return null;
  //   if (typeof content === 'string') {
  //     return <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />;
  //   }
  //   return <p className="text-gray-600">内容加载中...</p>;
  // };
  //
  // return (
  //   <div className="py-20 bg-white">
  //     <div className="container mx-auto px-4">
  //       <div className="max-w-3xl mx-auto">
  //         <Link
  //           href="/news"
  //           className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
  //         >
  //           ← 返回新闻列表
  //         </Link>
  //
  //         <article>
  //           <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
  //
  //           {publishedAt && (
  //             <p className="text-gray-500 mb-6">
  //               {new Date(publishedAt).toLocaleDateString('zh-CN', {
  //                 year: 'numeric',
  //                 month: 'long',
  //                 day: 'numeric',
  //               })}
  //             </p>
  //           )}
  //
  //           {excerpt && (
  //             <p className="text-xl text-gray-600 mb-8 italic">{excerpt}</p>
  //           )}
  //
  //           <div className="prose prose-lg max-w-none text-gray-700">
  //             {renderContent()}
  //           </div>
  //         </article>
  //       </div>
  //     </div>
  //   </div>
  // );
}

