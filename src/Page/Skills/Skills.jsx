import React, { useState } from "react";
import html from "../../assets/Html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import JavaScript from "../../assets/JavaScript.png";
import ReactJs from "../../assets/React.png";
import NodeJs from "../../assets/NodeJs.png";
import ExpressJs from "../../assets/ExpressJs.png";
import MongoDB from "../../assets/MongoDB.png";
import { FaCode, FaServer, FaDatabase, FaLayerGroup, FaRocket, FaBrain } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <FaCode className="text-blue-400" />,
      description: "Creating beautiful, responsive user interfaces",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "HTML5", image: html, level: 98, color: "from-orange-500 to-red-500" },
        { name: "CSS3", image: css, level: 95, color: "from-blue-500 to-indigo-500" },
        { name: "Tailwind CSS", image: tailwind, level: 95, color: "from-teal-400 to-cyan-500" },
        { name: "JavaScript", image: JavaScript, level: 90, color: "from-yellow-500 to-amber-500" },
        { name: "React", image: ReactJs, level: 92, color: "from-cyan-400 to-blue-500" },
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: <FaServer className="text-green-400" />,
      description: "Building robust server-side architectures",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/20",
      skills: [
        { name: "Node.js", image: NodeJs, level: 88, color: "from-green-500 to-emerald-500" },
        { name: "Express.js", image: ExpressJs, level: 90, color: "from-gray-600 to-gray-800" },
        { name: "MongoDB", image: MongoDB, level: 85, color: "from-green-400 to-emerald-400" },
      ]
    },
    {
      id: "tools",
      title: "Tools & More",
      icon: <FaLayerGroup className="text-purple-400" />,
      description: "Development tools and additional skills",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "REST API", level: 88, color: "from-blue-400 to-indigo-400" },
        { name: "Next.js", level: 85, color: "from-gray-500 to-gray-700" },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "Firebase", level: 75, color: "from-yellow-500 to-orange-500" },
        { name: "Redux", level: 85, color: "from-purple-500 to-pink-500" },
      ]
    }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return skillCategories.flatMap(cat => cat.skills);
    }
    return skillCategories.find(cat => cat.id === activeCategory)?.skills || [];
  };

  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-gray-950 to-black overflow-hidden" id="skills">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Technical Arsenal</span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              Skills & Expertise
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mastering the tools and technologies that power modern web applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory("all")}
            className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-white"
                : "bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500/30"
            }`}
          >
            <div className="relative flex items-center gap-2">
              <FaBrain className={`${activeCategory === "all" ? 'text-blue-400' : 'text-gray-500'}`} />
              <span>All Skills</span>
            </div>
          </button>
          
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color}/20 border ${category.borderColor} text-white`
                  : "bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500/30"
              }`}
            >
              <div className="relative flex items-center gap-3">
                {category.icon}
                <span>{category.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 group-hover:border-blue-500/30 transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Skill Icon/Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="relative w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <FaRocket className="text-2xl text-blue-400" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Skill Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-400">Expertise</span>
                    <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Beginner</span>
                    <span className="text-xs text-gray-500">Expert</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Highlights */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose My Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Combining technical skills with strategic thinking</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modern Stack",
                description: "Using latest technologies for optimal performance",
                icon: "🚀",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Clean Code",
                description: "Maintainable and scalable code architecture",
                icon: "✨",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Fast Delivery",
                description: "Efficient development without compromising quality",
                icon: "⚡",
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Problem Solving",
                description: "Creative solutions for complex challenges",
                icon: "🎯",
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 group-hover:border-gray-700/50 transition-all duration-500 group-hover:-translate-y-1">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 group-hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Let's combine these skills to create exceptional digital experiences
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;