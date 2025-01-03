import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"; // Social Media Icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - About Me Section */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h3 className="text-3xl font-bold text-[#ff4d05] mb-4">Pritom Chakma</h3>
          <p className="text-lg text-gray-400 mb-4">
            A passionate Front-End Developer. Let's create something amazing together!
          </p>
          <div className="flex space-x-6 mt-4">
            {/* Social Media Icons */}
            <Link to="https://github.com/PritomChakma" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-[#333]" />
            </Link>
            <Link to="https://www.linkedin.com/in/pritomchakma/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-[#0077b5]" />
            </Link>
            <Link  to="https://web.facebook.com/pritom.chakma.716/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-[#3b5998]" />
            </Link>
            
            <Link to="https://wa.me/01613776556" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-[#25D366]" />
            </Link>
          </div>
        </div>

        {/* Right Side - Quick Links Section */}
        <div className="flex flex-col items-center lg:items-end">
          <h4 className="text-2xl font-semibold text-[#ff4d05] mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/about" className="text-gray-400 hover:text-[#ff4d05]">
              About Me
            </Link>
            <Link to="/projects" className="text-gray-400 hover:text-[#ff4d05]">
              My Projects
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-[#ff4d05]">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 Pritom Chakma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
