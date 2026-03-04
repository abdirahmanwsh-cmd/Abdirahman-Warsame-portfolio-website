const Pricing = () => {
  const packages = [
    {
      name: 'Landing Page',
      price: 'KSh 15,000 - 30,000',
      description: 'Perfect for small businesses and personal brands',
      features: ['Single page design', 'Responsive layout', 'Contact form', 'Basic SEO', '1 week delivery', '1 month support'],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Business Website',
      price: 'KSh 40,000 - 80,000',
      description: 'Ideal for growing businesses and startups',
      features: ['5-10 pages', 'Custom design', 'CMS integration', 'Contact forms', 'SEO optimization', 'Mobile responsive', '2-3 weeks delivery', '3 months support'],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'E-commerce Platform',
      price: 'KSh 100,000 - 250,000',
      description: 'Complete online store solution',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'User accounts', 'Admin dashboard', 'Inventory management', 'Order tracking', '4-8 weeks delivery', '6 months support'],
      color: 'from-orange-500 to-red-500',
      popular: false
    },
    {
      name: 'Custom Web Application',
      price: 'KSh 150,000+',
      description: 'Full-stack custom solutions',
      features: ['Custom functionality', 'Database design', 'API development', 'User authentication', 'Admin panel', 'Third-party integrations', 'Scalable architecture', 'Timeline varies', 'Extended support'],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Pricing</h1>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          Transparent pricing for quality web development services. All packages include responsive design and modern technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 ${pkg.popular ? 'ring-4 ring-purple-500' : ''}`}>
              {pkg.popular && (
                <div className="bg-purple-500 text-white text-center py-2 font-semibold">Most Popular</div>
              )}
              <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-bold text-lg mb-2">Maintenance</h4>
              <p className="text-gray-600">KSh 3,000-10,000/month</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-lg mb-2">Hosting Setup</h4>
              <p className="text-gray-600">KSh 5,000-15,000</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-bold text-lg mb-2">Mobile App</h4>
              <p className="text-gray-600">Custom Quote</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg">
          All prices are estimates. Final cost depends on specific requirements. Contact me for a detailed quote.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
