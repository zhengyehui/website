export default function ServicesPage() {
  const services = [
    {
      title: '服务一',
      description: '详细的服务描述，为客户提供专业、优质的服务体验。我们致力于满足客户的各种需求。',
      features: [' feature 1', ' feature 2', ' feature 3'],
      icon: '🎯',
    },
    {
      title: '服务二',
      description: '详细的服务描述，为客户提供专业、优质的服务体验。我们致力于满足客户的各种需求。',
      features: [' feature 1', ' feature 2', ' feature 3'],
      icon: '🚀',
    },
    {
      title: '服务三',
      description: '详细的服务描述，为客户提供专业、优质的服务体验。我们致力于满足客户的各种需求。',
      features: [' feature 1', ' feature 2', ' feature 3'],
      icon: '💡',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">我们的服务</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          我们提供专业的服务，满足您的各种需求
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            联系我们
          </a>
        </div>
      </div>
    </div>
  );
}

