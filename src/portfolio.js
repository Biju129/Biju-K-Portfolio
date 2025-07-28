import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Users, Award, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 45, color: 'from-blue-400 to-blue-600' },
    { name: 'HTML CSS', level: 70, color: 'from-yellow-400 to-yellow-600' },
    { name: 'JAVA Core', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'MySQL', level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', level: 50, color: 'from-green-500 to-green-700' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack application , real-time inventory, and admin dashboard.',
      tech: ['SQL','HTML', 'CSS', 'JavaScript'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#'
    },
    {
      title: 'IoT Based Perish Prevention System',
      description: 'IoT solution for monitoring and preventing spoilage of perishable goods.',
      tech: ['Arduino', 'IoT', 'Embedded C', 'ThingSpeak'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#'
    },
    // {
    //   title: 'AI Chat Application',
    //   description: 'Intelligent chatbot with natural language processing and context-aware responses.',
    //   tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
    //   image: '/api/placeholder/400/250',
    //   github: '#',
    //   live: '#'
    // }
  ];

  const experiences = [
    {
      title: 'Graphic Design Associate',
      company: 'Knacklads',
      period: '2024 - Present',
      description: 'Collaborated with clients to create visually appealing designs, managed multiple projects simultaneously, and ensured timely delivery of high-quality graphics.'
    },
    {
      title: 'JAVA Full Stack Developer',
      company: 'TAP Academy',
      period: '2025 Feb - 2025 Aug',
      description: 'Developed and maintained web applications using Java, Spring Boot, and React, implemented RESTful APIs, and optimized application performance.'
    },
    // {
    //   title: 'Junior Developer',
    //   company: 'StartUp Hub',
    //   period: '2020 - 2021',
    //   description: 'Developed responsive websites, optimized database queries, and participated in agile development processes.'
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10 + 'px',
            top: mousePosition.y / 10 + 'px',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Biju Krishnan
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code size={48} className="text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
              DEVELOP RUN DEBUG REPEAT
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with modern technologies and creative solutions
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
              <span className="flex items-center space-x-2">
                <a href="/biju k.pdf" download="biju k.pdf">
                <span>Download CV</span>
                </a>
                <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
              </span>
            </button> 
                     
          </div>
          
          <ChevronDown size={32} className="mx-auto animate-bounce text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-6">Passionate Developer & Problem Solver</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  With a strong foundation in Core Java, SQL, and a growing interest in data science and networking, I am an enthusiastic and fast-learning fresher eager to contribute to impactful projects.
                  My curiosity about how systems interact and data flows has driven me to explore backend logic, database management, and emerging technologies.
                  I’m passionate about solving problems, writing clean code, and continuously expanding my skill set to build efficient and meaningful applications.
                </p>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  I thrive in collaborative environments and love mentoring fellow developers. When I'm not coding, 
                  you'll find me exploring new technologies, contributing to open-source projects, or sharing 
                  knowledge through technical blogs and community events.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Award className="mx-auto mb-2 text-yellow-400" size={32} />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-gray-400">Graphic Design Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Users className="mx-auto mb-2 text-green-400" size={32} />
                    <div className="text-2xl font-bold">30+</div>
                    <div className="text-sm text-gray-400">Leetcode Submissions</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 text-purple-400" size={48} />
                    <div className="text-xl font-semibold">Located In</div>
                    <div className="text-gray-300">Tamilnadu, India</div>
                    <div className="mt-6 flex justify-center space-x-4">
                      <Github className="hover:text-purple-400 cursor-pointer transition-colors" size={24} />
                      <Linkedin className="hover:text-purple-400 cursor-pointer transition-colors" size={24} />
                      <Mail className="hover:text-purple-400 cursor-pointer transition-colors" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                      style={{ 
                        width: isVisible.skills ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <Code className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400">React, Tailwind CSS, HTML</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <Zap className="mx-auto mb-4 text-yellow-400 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p className="text-gray-400">Node.js, Python</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <Palette className="mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold mb-2">Tools</h3>
                <p className="text-gray-400">Figma, Jupyter, Eclipse, Wireshark, Anaconda Navigator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={project.title} className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                    <Code size={48} className="text-purple-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.github} className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a href={project.live} className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400" />
              
              {experiences.map((exp, index) => (
                <div key={exp.title} className="relative flex items-start mb-12 last:mb-0">
                  <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900" />
                  <div className="ml-16 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                      <span className="text-purple-400 font-medium">{exp.period}</span>
                    </div>
                    <h4 className="text-gray-300 font-medium mb-3">{exp.company}</h4>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring your ideas to life? Let's discuss your next project!
              </p>
              
              <div className="flex justify-center space-x-8 mb-12">
                <a href="mailto:bijuvinayak129@gmail.com" className="group flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <Mail className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
                  <span>bijuvinayak129@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/biju-k-b40b41375/" className="group flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <Linkedin className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
                  <span>LinkedIn</span>
                </a>
              </div>
              <a
                href="https://join.slack.com/t/letsconnect-q2z7865/shared_invite/zt-3a6hk9o12-DiWj4kHxWf9RhxZgpINV2Q"  // or channel URL
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-12 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Hope to keep up with the latest trends and technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;