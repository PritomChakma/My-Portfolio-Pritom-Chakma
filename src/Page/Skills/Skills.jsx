import React from "react";
import html from "../../assets/Html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import JavaScript from "../../assets/JavaScript.png";
import ReactJs from "../../assets/React.png";
import NodeJs from "../../assets/NodeJs.png";
import Express from "../../assets/Express.png";
const Skills = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          The skills, tools, and technologies I am proficient in:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

            {/* Skill Icon */}
            {/* Html */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
              <img src={html} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              Html5
            </h3>
          </div>
            {/* CSS */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
              <img src={css} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              CSS
            </h3>
          </div>
            {/* tailwind */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
              <img src={tailwind} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              Tailwind
            </h3>
          </div>
            {/* JavaScript */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
              <img src={JavaScript} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            JavaScript
            </h3>
          </div>
            {/* React */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
              <img src={ReactJs} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            React
            </h3>
          </div>
            {/* Node.js */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
              <img src={NodeJs} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Node.Js
            </h3>
          </div>

            {/* Express.js */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
              <img src={ExpressJs} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Express.Js
            </h3>
          </div>











          
        </div>
      </div>
    </section>
  );
};

export default Skills;
