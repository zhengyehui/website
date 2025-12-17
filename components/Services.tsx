export default function Services() {
  const services = [
    {
      title: '服务一',
      description: '专业的服务描述，为客户提供优质体验',
      icon: '🎯',
    },
    {
      title: '服务二',
      description: '专业的服务描述，为客户提供优质体验',
      icon: '🚀',
    },
    {
      title: '服务三',
      description: '专业的服务描述，为客户提供优质体验',
      icon: '💡',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          我们的服务
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/services"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            查看所有服务 →
          </a>
        </div>
      </div>
    </section>
  );
}

