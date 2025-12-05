import React, { useState, useEffect } from "react";
import { 
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home", offset: -100 },
    { id: "about", icon: <FaUser />, label: "About", offset: -80 },
    { id: "skills", icon: <FaTools />, label: "Skills", offset: -80 },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects", offset: -80 },
    { id: "contact", icon: <FaEnvelope />, label: "Contact", offset: -80 },
  ];

  return (
    <nav className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl py-3' 
        : 'bg-gray-900 py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Home Link */}
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-20 animate-pulse"></div>
              <img
                src={Logo}
                alt="Pritom Chakma"
                className="relative h-12 w-12 rounded-full border-2 border-gray-700 shadow-lg"
              />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Pritom <span className="text-orange-500">Chakma</span>
              </h1>
              <p className="text-xs text-gray-400 font-medium tracking-wider">
                MERN Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.id === "home" ? (
                    // Home button with Link
                    <Link
                      to="/"
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                      onClick={() => setActiveSection("home")}
                    >
                      <span className={`text-lg transition-transform duration-300 ${
                        activeSection === item.id ? 'scale-110 text-orange-400' : ''
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium text-sm tracking-wide">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    // Other navigation items with ScrollLink
                    <ScrollLink
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                      onSetActive={() => setActiveSection(item.id)}
                    >
                      <span className={`text-lg transition-transform duration-300 ${
                        activeSection === item.id ? 'scale-110 text-orange-400' : ''
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium text-sm tracking-wide">
                        {item.label}
                      </span>
                    </ScrollLink>
                  )}
                </div>
              ))}
            </div>

            {/* Hire Me Button */}
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <button className="relative flex items-center gap-3 bg-gray-900 px-6 py-3 rounded-xl border border-gray-700 group-hover:border-orange-500/50 transition-all duration-300">
                <MdWork className="text-orange-400" />
                <span className="font-semibold text-white">Hire Me</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </button>
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-orange-500" />
            ) : (
              <FaBars className="text-2xl text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800/95 backdrop-blur-lg rounded-xl border border-gray-700 shadow-2xl animate-fadeIn">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.id === "home" ? (
                    // Mobile Home Link
                    <Link
                      to="/"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveSection("home");
                      }}
                      className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white'
                          : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      <span className={`text-xl ${
                        activeSection === item.id ? 'text-orange-400' : ''
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium flex-1">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  ) : (
                    // Mobile Other Items
                    <ScrollLink
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white'
                          : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      <span className={`text-xl ${
                        activeSection === item.id ? 'text-orange-400' : ''
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium flex-1">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      )}
                    </ScrollLink>
                  )}
                </div>
              ))}
              
              {/* Mobile Hire Button */}
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                <MdWork />
                Hire Me
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </ScrollLink>
            </div>
          </div>
        )}
      </div>

      {/* Active Section Indicator */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent">
        <div 
          className="h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 ease-out"
          style={{
            width: '20%',
            marginLeft: `${navItems.findIndex(item => item.id === activeSection) * 20}%`
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;