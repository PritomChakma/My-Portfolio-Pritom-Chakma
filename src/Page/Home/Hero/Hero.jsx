import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import pritom from "../../../assets/MyImage.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero flex flex-col-reverse md:flex-row items-center md:w-11/12 mx-auto py-12 px-6 md:px-0 mt-10">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 ">
          Hi, I'm <span className="text-[#ff4d05]">Pritom</span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
          A Professional Front-End Developer
        </h2>

        <p className=" mt-4 text-base sm:text-lg leading-relaxed">
          I am a passionate front-end developer with a knack for crafting
          user-friendly, visually appealing, and highly responsive websites. I
          specialize in modern web technologies like{" "}
          <span className="font-medium ">React.js</span>,{" "}
          <span className="font-medium ">Tailwind CSS</span>, and{" "}
          <span className="font-medium ">JavaScript</span>. I
          strive to deliver seamless user experiences and create meaningful
          digital solutions.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          {/* Social Links */}
          <Link
            to="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#ff4d05] text-2xl transition-colors duration-200"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#ff4d05] text-2xl transition-colors duration-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#ff4d05] text-2xl transition-colors duration-200"
          >
            <FaTwitter />
          </Link>
        </div>

        <div className="mt-8">
          {/* Resume Download Button */}
          <Link
            to="/path-to-resume.pdf"
            target="_blank"
            download
            className="bg-[#ff4d05] hover:bg-[#d83d04] text-white py-3 px-6 rounded-lg flex items-center gap-2 justify-center w-fit shadow-lg transition-all duration-200"
          >
            <MdDownload className="text-xl" />
            Download Resume
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={pritom}
          alt="Pritom"
          className="max-w-full h-auto rounded-full shadow-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
