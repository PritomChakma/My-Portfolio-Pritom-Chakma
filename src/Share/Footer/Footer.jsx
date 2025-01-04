import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaArrowUp, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa"; // Social Media and Quick Link Icons
import { Link as ScrollLink } from "react-scroll";

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
            <a href="https://github.com/PritomChakma" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-[#333]" />
            </a>
            <a href="https://www.linkedin.com/in/pritomchakma/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-[#0077b5]" />
            </a>
            <a href="https://web.facebook.com/pritom.chakma.716/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-[#3b5998]" />
            </a>
            <a href="https://wa.me/01613776556" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-[#25D366]" />
            </a>
          </div>
        </div>

        {/* Right Side - Quick Links Section */}
        <div className="flex flex-col items-center lg:items-end">
          <h4 className="text-2xl font-semibold text-[#ff4d05] mb-4">Quick Links</h4>
          <div className="space-y-2">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff4d05] cursor-pointer"
            >
              <FaUser /> About Me
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff4d05] cursor-pointer"
            >
              <FaProjectDiagram /> My Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff4d05] cursor-pointer"
            >
              <FaEnvelope /> Contact Me
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Bottom Section - Scroll to Top and Copyright */}
      <div className="mt-8 text-center">
        <ScrollLink
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center justify-center w-fit mx-auto bg-[#ff4d05] text-white py-2 px-4 rounded-lg cursor-pointer transition-all hover:bg-[#e14b05]"
        >
          <FaArrowUp className="mr-2" />
          Back to Top
        </ScrollLink>
        <p className="mt-4 text-gray-400">&copy; 2025 Pritom Chakma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
