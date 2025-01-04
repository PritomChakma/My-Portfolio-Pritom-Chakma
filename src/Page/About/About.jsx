import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import image from "../../assets/meBlack.jpeg";

const About = () => {
  return (
    <section className="w-11/12 mx-auto py-16" id="about">
      <h2 className="text-4xl font-extrabold text-center mb-10 ">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={image}
            alt="Pritom Chakma"
            className="rounded-full border-4 border-[#ff4d05] shadow-lg w-48 h-48 md:w-60 md:h-60 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg  leading-relaxed mb-6">
            Hi, I'm{" "}
            <span className="font-bold text-[#ff4d05]">Pritom Chakma!</span> A
            3rd-year Computer Science and Engineering student at{" "}
            <span className="font-medium">
              Port City International University
            </span>
            . I'm passionate about coding, web design, and solving complex
            problems through innovative solutions.
          </p>
          <p className="text-lg  leading-relaxed mb-6">
            I specialize in creating responsive, user-friendly web applications
            using modern technologies. My focus is on building projects that
            are not just visually appealing but also efficient and scalable.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            I'm constantly learning new technologies to enhance my skills and
            keep up with the ever-evolving tech landscape.
          </p>

          {/* Skill Highlights */}
          <div className="grid grid-cols-2 gap-4  mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-[#ff4d05] font-bold">✔</span>
              <span>React.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#ff4d05] font-bold">✔</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#ff4d05] font-bold">✔</span>
              <span>MongoDB</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#ff4d05] font-bold">✔</span>
              <span>Responsive Design</span>
            </div>
          </div>

          {/* Contact Button */}
          <ScrollLink
            to="contact" // Ensure this ID exists in your Contact component
            spy={true}
            smooth={true}
            offset={-70} // Adjust based on the height of your navbar
            duration={500}
            className="inline-block bg-[#ff4d05] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#e14b05] transition-all font-medium cursor-pointer"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default About;
