const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend (Python)',
      icon: '🐍',
      skills: ['Flask', 'FastAPI', 'Python', 'RESTful APIs']
    },
    {
      title: 'Backend (JavaScript)',
      icon: '⚡',
      skills: ['Node.js', 'Express.js', 'API Development']
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite']
    },
    {
      title: 'Soft Skills',
      icon: '💡',
      skills: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Continuous Learning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Skills & Technologies</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">Here's what I bring to the table — tools and technologies I've worked with and genuinely enjoy using.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-3">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">How comfortable am I with each?</h3>
          <div className="space-y-6">
            {[
              { name: 'React & Frontend Development', level: 85 },
              { name: 'Python (Flask & FastAPI)', level: 80 },
              { name: 'Node.js & Backend APIs', level: 75 },
              { name: 'Database Management', level: 80 },
              { name: 'Version Control (Git)', level: 85 }
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
