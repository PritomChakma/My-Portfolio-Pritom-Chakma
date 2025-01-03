import React from "react";
import pritom from "../../../assets/pritom.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero bg-base-200 flex flex-col-reverse md:flex-row items-center w-11/12 mx-auto py-8">
      {/* Text Section */}
      <div className="md:w-1/2 p-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Hi, I'm Pritom
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
          A Front-End Developer
        </h2>

        {/* Introduction Section */}
        <p className="text-gray-700 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          I am a passionate front-end developer with a knack for crafting user-friendly, 
          visually appealing, and highly responsive websites. I specialize in modern web 
          technologies like <span className="font-semibold">React.js</span>, 
          <span className="font-semibold"> Tailwind CSS</span>, and <span className="font-semibold">JavaScript</span>. 
          With a keen eye for detail and a love for problem-solving, I strive to deliver 
          seamless user experiences and create meaningful digital solutions.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          {/* Social Links */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="mt-6">
          {/* Resume Download Button */}
          <a
            href="/path-to-resume.pdf"
            download
            className="bg-[#ff4d05] text-white py-2 px-4 rounded-lg flex items-center gap-2 justify-center w-fit mx-auto md:mx-0"
          >
            <MdDownload />
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-content md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={pritom}
          alt="Pritom"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
