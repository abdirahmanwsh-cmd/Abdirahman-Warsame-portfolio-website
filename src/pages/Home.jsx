import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Abdirahman Warsame
          </h1>
          <h2 className="text-3xl md:text-4xl mb-8 text-blue-300">
            Full-Stack Developer
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            React | Node.js | Flask | FastAPI
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-400">
            I build scalable and maintainable web applications across frontend and backend systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              View Projects
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-12 text-gray-900">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-bold mb-3">Frontend Development</h4>
              <p className="text-gray-600">Building responsive and interactive user interfaces with React</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">⚙️</div>
              <h4 className="text-xl font-bold mb-3">Backend Development</h4>
              <p className="text-gray-600">Creating robust APIs with Flask, FastAPI, and Node.js</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🗄️</div>
              <h4 className="text-xl font-bold mb-3">Database Management</h4>
              <p className="text-gray-600">Designing and implementing efficient database solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/src/assets/profile.jpg"
                alt="Abdirahman Warsame"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-500"
              />
            </div>
            <div className="space-y-6">
              <h4 className="text-3xl font-bold text-gray-900">Full-Stack Developer</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in building both frontend and backend systems with a focus on clean architecture and scalability. 
                My experience spans across REST API development, Python and JavaScript backend environments, and modern frontend frameworks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a structured technical foundation backed by professional certifications, I bring adaptability and system thinking 
                to every project I work on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-6 text-gray-900">Skills & Technologies</h3>
          <p className="text-center text-gray-600 mb-16 text-lg">Technologies I work with</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Frontend', icon: '🎨', skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
              { title: 'Backend (Python)', icon: '🐍', skills: ['Flask', 'FastAPI', 'Python', 'RESTful APIs'] },
              { title: 'Backend (JavaScript)', icon: '⚡', skills: ['Node.js', 'Express.js', 'API Development'] },
              { title: 'Database', icon: '🗄️', skills: ['SQL', 'PostgreSQL', 'MySQL'] },
              { title: 'Tools', icon: '🛠️', skills: ['Git', 'GitHub', 'VS Code', 'Postman'] },
              { title: 'Soft Skills', icon: '💡', skills: ['Problem Solving', 'Team Work', 'Adaptability'] }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h4 className="text-2xl font-bold mb-6 text-gray-900">{category.title}</h4>
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
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-6 text-gray-900">Featured Projects</h3>
          <p className="text-center text-gray-600 mb-16 text-lg">A showcase of my work</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Restaurant Ordering System', type: 'Full-Stack', color: 'from-orange-500 to-red-500' },
              { title: 'Beauty Shop Platform', type: 'Full-Stack', color: 'from-purple-500 to-indigo-500' },
              { title: 'Hospital Management System', type: 'In Development', color: 'from-blue-500 to-cyan-500' }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h4>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-xl mb-8 text-gray-300">Have a project in mind? Let's discuss how I can help bring it to life.</p>
          <Link to="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
