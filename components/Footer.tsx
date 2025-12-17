import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">公司名称</h3>
            <p className="text-gray-400">
              专业的服务，值得信赖的合作伙伴
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  服务
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  新闻
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li>电话：400-000-0000</li>
              <li>邮箱：info@company.com</li>
              <li>地址：XX省XX市XX区</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                微信
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                微博
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 公司名称. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}

