import React from "react";
import { Link as ScrollLink } from "react-scroll";
import image from "../../assets/meBlack.jpeg";
import { FaGraduationCap, FaCode, FaRocket, FaLightbulb, FaArrowRight, FaFire } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const About = () => {
  const stats = [
    { number: "4th", label: "Year CSE", icon: <FaGraduationCap />, color: "from-cyan-500 to-blue-500" },
    { number: "30+", label: "Projects", icon: <FaCode />, color: "from-orange-500 to-red-500" },
    { number: "1.5+", label: "Years Exp", icon: <FaRocket />, color: "from-green-500 to-emerald-500" },
    { number: "100%", label: "Passionate", icon: <FaLightbulb />, color: "from-purple-500 to-pink-500" },
  ];

  const techStack = [
    { icon: <SiReact />, name: "React", level: 92 },
    { icon: <SiNodedotjs />, name: "Node.js", level: 88 },
    { icon: <SiMongodb />, name: "MongoDB", level: 85 },
    { icon: <SiTailwindcss />, name: "Tailwind", level: 95 },
    { icon: <SiExpress />, name: "Express", level: 90 },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-950 overflow-hidden" id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tech Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-float"
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
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Get To Know</span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
              About Me
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate Developer • Problem Solver • Tech Enthusiast
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with Floating Elements */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Outer Glow Rings */}
              <div className="absolute -inset-8">
                <div className="absolute inset-0 border-2 border-cyan-500/10 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-2 border-orange-500/10 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute inset-8 border-2 border-purple-500/10 rounded-full animate-spin-slow"></div>
              </div>

              {/* Glow Effects */}
              <div className="absolute -inset-12 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-600/5 via-red-600/5 to-pink-600/5 rounded-full blur-2xl animate-pulse delay-700"></div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
                <img
                  src={image}
                  alt="Pritom Chakma"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Badge - University */}
              <div className="absolute -top-6 -right-6 animate-float">
                <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl border border-cyan-700/30 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <FaGraduationCap className="text-2xl text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Port City</div>
                      <div className="text-sm text-gray-400">University</div>
                      <div className="text-xs text-cyan-400 mt-1">4th Year CSE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 text-center group-hover:border-gray-700/50 transition-all duration-500 group-hover:-translate-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-cyan-400">
                        {stat.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <FaFire className="text-3xl text-orange-500 animate-pulse" />
                <h2 className="text-4xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                    Pritom Chakma
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate <span className="font-semibold text-cyan-400">MERN Stack Developer</span> and 
                  4th-year Computer Science student. I transform complex problems into elegant, 
                  efficient solutions through code.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Specializing in <span className="font-semibold text-orange-400">modern web technologies</span>, 
                  I create applications that are not just visually stunning but also 
                  performant, scalable, and user-centric.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey is driven by continuous learning and the desire to create 
                  meaningful digital experiences that make a difference.
                </p>
              </div>
            </div>

            {/* Tech Stack Progress */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">
                Tech Stack Expertise
              </h3>
              <div className="space-y-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <span className="font-medium text-gray-300">{tech.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-cyan-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Highlights */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Key Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Full-Stack Development",
                  "Responsive UI/UX",
                  "REST API Design",
                  "Database Architecture",
                  "Performance Optimization",
                  "Code Maintainability",
                  "Agile Methodology",
                  "Problem Solving"
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-3 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <span className="relative">Let's Build Something Amazing</span>
                <FaArrowRight className="relative group-hover:translate-x-2 transition-transform duration-300" />
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-32 text-center relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="text-8xl text-cyan-500/10">"</div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-300 italic mb-8 leading-relaxed">
              The best way to predict the future is to create it. I code today to build 
              the digital experiences of tomorrow.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
              <span className="text-lg font-semibold text-cyan-400">Pritom Chakma</span>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
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
            transform: translateY(-15px) rotate(1deg);
          }
          66% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;