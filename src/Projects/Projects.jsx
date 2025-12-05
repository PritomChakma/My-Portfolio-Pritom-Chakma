import React from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaServer, FaCode, FaDatabase, FaFire, FaRocket, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Medical Camp Management",
      description: "A comprehensive MERN stack platform for managing medical camps with real-time authentication, participant registration, payment integration, and dynamic dashboards.",
      githubClient: "https://github.com/PritomChakma/PH-Assignment-12",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-12-Server",
      liveDemo: "https://ph-assignment-112.web.app/",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Firebase", "JWT"],
      type: "Full Stack",
      featured: true,
      backend: true
    },
    {
      id: 2,
      image: project2,
      title: "Volunteer Management",
      description: "Modern platform for coordinating volunteer activities with task assignment, scheduling, progress tracking, and team communication tools.",
      githubClient: "https://github.com/PritomChakma/PH-Assignment-11",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-11-Server",
      liveDemo: "https://ph-assignment-11-f2153.web.app",
      technologies: ["React", "Express", "MongoDB", "JWT", "Axios", "Firebase"],
      type: "Full Stack",
      featured: true,
      backend: true
    },
    {
      id: 3,
      image: project3,
      title: "Gaming Review Platform",
      description: "Interactive gaming review platform where users can rate, review, and discuss games with community engagement and content moderation.",
      githubClient: "https://github.com/PritomChakma/PH-Assignment-10",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-10-Server",
      liveDemo: "https://ph-assignment-10-22d95.web.app/",
      technologies: ["React", "Firebase", "Tailwind", "Context API", "Express", "MongoDB"],
      type: "Full Stack",
      featured: true,
      backend: true
    }
  ];

  const stats = [
    { number: "3", label: "Full Stack", icon: <FaCode />, color: "text-blue-400" },
    { number: "100%", label: "Success Rate", icon: <FaFire />, color: "text-orange-400" },
    { number: "MERN", label: "Technology", icon: <FaRocket />, color: "text-green-400" },
    { number: "6+", label: "Technologies", icon: <FaDatabase />, color: "text-purple-400" },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900 overflow-hidden" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Portfolio</span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-stack applications with complete client-server architecture
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className={stat.color}>
                  {stat.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative h-full bg-gradient-to-b from-gray-900/80 to-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden group-hover:border-blue-500/30 transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <FaStar className="text-yellow-300" size={10} />
                      Featured
                    </span>
                  </div>
                )}

                {/* Full Stack Badge */}
                {project.backend && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                      Full Stack
                    </span>
                  </div>
                )}

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Buttons - Client & Server */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/30 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <FaCode size={12} />
                      <span className="truncate">Client Code</span>
                    </a>
                    
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-green-500/30 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <FaServer size={12} />
                      <span className="truncate">Server Code</span>
                    </a>
                  </div>

                  {/* Live Demo Button */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <span className="text-gray-500 text-sm">More Projects Available</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>
          </div>

          <Link
            to="/allProject"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaGithub />
            <span>View All Projects on GitHub</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          
          <p className="text-gray-500 mt-4 text-sm">
            Complete client-server code available for all projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;