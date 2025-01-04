import React from "react";
import html from "../../assets/Html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import JavaScript from "../../assets/JavaScript.png";
import ReactJs from "../../assets/React.png";
import NodeJs from "../../assets/NodeJs.png";
import ExpressJs from "../../assets/ExpressJs.png";
import MongoDB from "../../assets/MongoDB.png";

const Skills = () => {
  return (
    <section className="py-16 bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold mb-8 text-white">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          These are the tools, technologies, and skills I work with to bring
          your ideas to life:
        </p>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "HTML5", image: html },
            { name: "CSS3", image: css },
            { name: "Tailwind CSS", image: tailwind },
            { name: "JavaScript", image: JavaScript },
            { name: "React", image: ReactJs },
            { name: "Node.js", image: NodeJs },
            { name: "Express.js", image: ExpressJs },
            { name: "MongoDB", image: MongoDB },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Skill Icon */}
              <div className="mb-4">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              {/* Skill Name */}
              <h3 className="text-xl font-medium text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
