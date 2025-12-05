import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight, FaReact, FaCss3Alt, FaJs } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiRedux, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";
import pritom from "../../../assets/MyImage.png";

const Hero = () => {
  const techIcons = [
    { Icon: FaReact, color: "text-cyan-400", label: "React", delay: "delay-0" },
    { Icon: TbBrandNextjs, color: "text-white", label: "Next.js", delay: "delay-75" },
    { Icon: SiTypescript, color: "text-blue-400", label: "TypeScript", delay: "delay-150" },
    { Icon: FaJs, color: "text-yellow-400", label: "JavaScript", delay: "delay-225" },
    { Icon: TbBrandTailwind, color: "text-teal-400", label: "Tailwind", delay: "delay-300" },
    { Icon: SiRedux, color: "text-purple-400", label: "Redux", delay: "delay-375" }
  ];

  return (
    <div className="relative top-2  flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 px-4 sm:px-6 lg:px-8">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0">
        {/* Nebula Effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-900/10 to-red-900/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern with Glow */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-shimmer delay-1000"></div>
      </div>

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <div
            key={tech.label}
            className={`absolute text-4xl opacity-5 animate-float ${tech.delay}`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${index * 2}s`
            }}
          >
            <tech.Icon className={tech.color} />
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Content - Professional Intro */}
          <div className="lg:w-1/2 max-w-2xl">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 mb-10 animate-slideInDown shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse shadow-glow"></div>
                <span className="text-sm font-semibold text-emerald-300 tracking-wider">AVAILABLE FOR WORK</span>
              </div>
              <div className="w-px h-4 bg-gradient-to-b from-gray-600 to-transparent"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-ping"></div>
                <span className="text-xs font-medium text-gray-400">Remote • Full-time</span>
              </div>
            </div>

            {/* Main Title with Elegant Typography */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
                <span className="text-sm font-semibold text-gray-400 tracking-widest uppercase">HELLO, I'M</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-bold mb-2 leading-none">
                <span className="block text-gray-100">PRITOM</span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient">
                    CHAKMA
                  </span>
                </span>
              </h1>
              
              <div className="flex items-center gap-3 mt-4">
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                <span className="text-xl font-medium text-gray-400">/</span>
                <span className="text-xl font-semibold text-gray-300 tracking-wider">Frontend Architect</span>
              </div>
            </div>

            {/* Elegant Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 font-light tracking-wide">
              I specialize in creating <span className="font-semibold text-amber-300">immersive digital experiences</span> 
              through modern web technologies. With expertise in React ecosystem and pixel-perfect design implementation, 
              I build scalable, performant applications that delight users and drive business growth.
            </p>

            {/* Tech Stack Showcase */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-widest uppercase">Core Technologies</h3>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {techIcons.map((tech) => (
                  <div
                    key={tech.label}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex flex-col items-center justify-center group-hover:border-cyan-500/30 transition-all duration-300 group-hover:-translate-y-1">
                      <tech.Icon className={`text-3xl ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300">{tech.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Primary CTA */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
                <a
                  href="/Resume_Of_Pritom_Chakma.pdf"
                  download="Resume_Of_Pritom_Chakma"
                  className="relative flex items-center gap-4 bg-gradient-to-r from-gray-900 to-black px-8 py-4 rounded-xl border border-gray-700 group-hover:border-orange-500/50 transition-all duration-300 group-hover:-translate-y-0.5"
                >
                  <div className="relative">
                    <MdDownload className="text-2xl text-amber-400 group-hover:animate-bounce" />
                    <div className="absolute -inset-2 bg-amber-400/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-0.5">Download Resume</div>
                    <div className="text-xs text-gray-400">PDF • Updated Recently</div>
                  </div>
                  <FaArrowRight className="ml-4 text-amber-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </a>
              </div>

              {/* Social Links - Elegant */}
              <div className="flex items-center gap-1">
                <div className="w-px h-6 bg-gradient-to-b from-gray-700 to-transparent mx-2"></div>
                {[
                  { Icon: FaGithub, href: "https://github.com/PritomChakma", color: "hover:text-white hover:bg-gray-800", label: "GitHub" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/pritomchakma", color: "hover:text-blue-400 hover:bg-blue-900/20", label: "LinkedIn" },
                  { Icon: FaEnvelope, href: "mailto:chakmapritom1@gmail.com", color: "hover:text-red-400 hover:bg-red-900/20", label: "Email" }
                ].map((social) => (
                  <Link
                    key={social.label}
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:border-gray-600`}
                    title={social.label}
                  >
                    <social.Icon className="text-xl text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      <div className="px-2 py-1 bg-gray-900 text-xs font-medium rounded border border-gray-700">
                        {social.label}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image - Professional Showcase */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Orbital Rings */}
              <div className="absolute -inset-8">
                <div className="absolute inset-0 border-2 border-orange-500/10 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-2 border-cyan-500/10 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute inset-8 border-2 border-purple-500/10 rounded-full animate-spin-slow"></div>
              </div>

              {/* Glow Effects */}
              <div className="absolute -inset-12 bg-gradient-to-r from-orange-600/5 via-amber-600/5 to-red-600/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5 rounded-full blur-2xl animate-pulse delay-700"></div>

              {/* Main Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-2 border-gray-800 group">
                {/* Image with Professional Filter */}
                <img
                  src={pritom}
                  alt="Pritom Chakma - Professional Frontend Developer"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-cyan-600/5 mix-blend-overlay"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-6 -right-6 animate-float">
                <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">1.5+ Years</div>
                      <div className="text-xs text-gray-400">Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 animate-float-delayed">
                <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl border border-cyan-700/30 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <FaReact className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Expert</div>
                      <div className="text-xs text-gray-400">React Specialist</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code-like Elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-mono text-gray-400">frontend.jsx</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="text-xs font-medium text-gray-500 tracking-widest uppercase mb-4">
              Explore Portfolio
            </div>
            <div className="relative">
              <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full mt-2 animate-scroll"></div>
              </div>
              <div className="absolute -inset-4 border border-amber-500/10 rounded-full animate-ping-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Professional Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes scroll {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(12px);
            opacity: 0.5;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 2s;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 40s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .delay-0 { animation-delay: 0s; }
        .delay-75 { animation-delay: 0.75s; }
        .delay-150 { animation-delay: 1.5s; }
        .delay-225 { animation-delay: 2.25s; }
        .delay-300 { animation-delay: 3s; }
        .delay-375 { animation-delay: 3.75s; }

        /* Glow Effects */
        .shadow-glow {
          box-shadow: 0 0 15px rgba(52, 211, 153, 0.5);
        }

        /* Elegant Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ef4444);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Hero;