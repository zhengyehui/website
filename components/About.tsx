export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">关于我们</h2>
          <p className="text-lg text-gray-600 mb-4">
            我们是一家专业的公司，致力于为客户提供优质的服务。多年来，
            我们始终坚持客户至上的理念，不断创新和完善我们的服务。
          </p>
          <p className="text-lg text-gray-600">
            我们的团队由经验丰富的专业人士组成，拥有丰富的行业经验和
            专业知识，能够为客户提供最优质的服务体验。
          </p>
          <div className="mt-8">
            <a
              href="/about"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              了解更多 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

