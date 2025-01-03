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
    <section className="dark:bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          These are the tools, technologies, and skills I work with to bring your ideas to life:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Skill Cards */}
          {[
            { name: "HTML5", image: html },
            { name: "CSS3", image: css },
            { name: "Tailwind CSS", image: tailwind },
            { name: "JavaScript", image: JavaScript },
            { name: "React", image: ReactJs },
            { name: "Node.js", image: NodeJs },
            { name: "Express.js", image: ExpressJs },
            { name: "MongoDB", image: MongoDB }
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">
                <img src={skill.image} alt={skill.name} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
