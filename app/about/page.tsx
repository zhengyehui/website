export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">关于我们</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">公司简介</h2>
              <p className="text-gray-600 mb-4">
                我们是一家专业的公司，致力于为客户提供优质的服务。多年来，
                我们始终坚持客户至上的理念，不断创新和完善我们的服务。
              </p>
              <p className="text-gray-600">
                我们的团队由经验丰富的专业人士组成，拥有丰富的行业经验和
                专业知识，能够为客户提供最优质的服务体验。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">我们的使命</h2>
              <p className="text-gray-600">
                为客户创造价值，为员工提供发展平台，为社会做出贡献。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">我们的优势</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>专业的团队和丰富的经验</li>
                <li>优质的服务和客户满意度</li>
                <li>创新的解决方案</li>
                <li>诚信经营，值得信赖</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

