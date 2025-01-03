import React from "react";

const About = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

      <div className="md:flex items-center justify-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hi, I'm Pritom Chakma! I am currently a 3rd-year student at Port City International University, pursuing my degree in Computer Science and Engineering.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I have a deep passion for coding and web design. I love solving problems through code and creating beautiful, functional web applications.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As I continue my studies, I am eager to expand my knowledge and skills in software development and web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
