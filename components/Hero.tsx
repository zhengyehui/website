import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          欢迎来到我们的公司
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-100">
          专业、可靠、值得信赖的服务
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            联系我们
          </Link>
          <Link
            href="/services"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
          >
            了解服务
          </Link>
        </div>
      </div>
    </section>
  );
}

