const Projects = () => {
  const projects = [
    {
      title: 'Art Gallery Website',
      type: 'Frontend',
      description: 'A responsive art gallery showcasing UI/UX design and component-based architecture with React.',
      tech: ['React', 'CSS3', 'Responsive Design'],
      status: 'Completed',
      color: 'from-pink-500 to-rose-500',
      github: 'https://github.com/abdirahmanwsh-cmd/art-explorer'
    },
    {
      title: 'Restaurant Ordering System',
      type: 'Full-Stack',
      description: 'Complete ordering system with frontend, backend API, and database integration for seamless order management.',
      tech: ['React', 'Flask', 'PostgreSQL', 'REST API'],
      status: 'Completed',
      color: 'from-orange-500 to-red-500',
      frontend: 'https://github.com/abdirahmanwsh-cmd/phase-4-project-order-flow-frontend',
      backend: 'https://github.com/abdirahmanwsh-cmd/phase-4-project-order-flow-backend'
    },
    {
      title: 'Beauty Shop Platform',
      type: 'Full-Stack',
      description: 'E-commerce platform with product management, shopping cart, and business logic implementation.',
      tech: ['React', 'FastAPI', 'SQL', 'Payment Integration'],
      status: 'Completed',
      color: 'from-purple-500 to-indigo-500',
      frontend: 'https://github.com/AbbyMoraa/beauty-shop-frontend',
      backend: 'https://github.com/AbbyMoraa/beauty-shop-backend'
    },
    {
      title: 'Hospital Management System',
      type: 'Full-Stack',
      description: 'A larger-scale system focused on improving structure, scalability, and modular architecture for healthcare management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'RESTful API'],
      status: 'In Development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Dates & Spices E-commerce',
      type: 'Full-Stack',
      description: 'E-commerce platform for selling premium dates and spices with inventory management and order processing.',
      tech: ['React', 'Flask', 'PostgreSQL', 'Payment Gateway'],
      status: 'In Development',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">My Projects</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">A showcase of my full-stack development work</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                  {project.type}
                </span>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.frontend && project.backend ? (
                  <div className="flex gap-2">
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Frontend
                    </a>
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Backend
                    </a>
                  </div>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                ) : (
                  <div className="text-center text-gray-500 py-2 text-sm">Coming Soon</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
