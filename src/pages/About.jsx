const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-6xl font-bold">AW</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Full-Stack Developer</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about building web applications that solve real problems. My journey into software development 
              started with curiosity about how websites work, and it's evolved into a love for creating complete systems 
              from the ground up.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in both frontend and backend development, with a focus on writing clean, maintainable code. 
              Whether it's crafting responsive user interfaces with React or building robust APIs with Flask and FastAPI, 
              I enjoy every aspect of the development process.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">My Journey</h3>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Currently, I'm studying Software Engineering at Moringa School, where I'm deepening my understanding 
              of data structures, algorithms, and software design patterns. This structured learning, combined with 
              my ICDL certification from Computer Pride, has given me a solid technical foundation.
            </p>
            <p className="text-lg leading-relaxed">
              What excites me most about development is the ability to bring ideas to life. I've worked on projects 
              ranging from art galleries to restaurant ordering systems, and I'm currently building a hospital management 
              system and an e-commerce platform for dates and spices. Each project teaches me something new and pushes 
              me to grow as a developer.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in continuous learning and staying updated with modern technologies. My experience spans across 
              multiple tech stacks - React for dynamic frontends, Flask and FastAPI for Python backends, and Node.js 
              for JavaScript-based services. This versatility allows me to choose the right tools for each project.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or thinking 
              about how to make the web more accessible and user-friendly. I'm always open to new opportunities and 
              collaborations that challenge me to grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
