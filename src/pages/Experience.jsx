const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Course',
      organization: 'Moringa School',
      type: 'Education',
      period: 'Completed',
      description: 'This is where everything clicked for me. Moringa gave me a structured, hands-on environment to grow from writing basic scripts to building full-stack applications. It was intense, challenging, and honestly one of the best decisions I made.',
      highlights: ['Full-stack web development', 'Data structures and algorithms', 'Agile methodologies', 'Real-world project development'],
      icon: '🎓',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'ICDL Certification',
      organization: 'Computer Pride',
      type: 'Certification',
      period: 'Completed',
      description: 'Before I wrote my first line of code, ICDL gave me a solid foundation in how computers and digital systems work. It built the discipline and technical awareness that I still carry into every project today.',
      highlights: ['Computer fundamentals', 'Digital literacy', 'Professional development', 'Technical discipline'],
      icon: '📜',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Hospital Management System',
      organization: 'Personal Project',
      type: 'Development',
      period: 'In Progress',
      description: 'This one is close to my heart. I am building a system that could genuinely help healthcare workers manage patients, appointments, and records more efficiently. It is pushing me to think about scalability and real-world impact.',
      highlights: ['System architecture design', 'Database modeling', 'API development', 'Frontend implementation'],
      icon: '🏥',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Dates & Spices E-commerce',
      organization: 'Personal Project',
      type: 'Development',
      period: 'In Progress',
      description: 'A passion project that combines my love for good food and clean code. I am building a full e-commerce experience for selling premium dates and spices, handling everything from product listings to order management.',
      highlights: ['E-commerce functionality', 'Payment integration', 'Inventory management', 'User authentication'],
      icon: '🛒',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Experience & Education</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">Here's the path that got me to where I am today — the courses, certifications, and projects that shaped me as a developer.</p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="text-4xl">{exp.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-gray-600">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold mb-2 ${
                      exp.type === 'Education' ? 'bg-blue-100 text-blue-800' :
                      exp.type === 'Certification' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {exp.type}
                    </span>
                    <span className="text-gray-500 font-semibold">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-500 mr-3 text-xl">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
