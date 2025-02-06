import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the right arrow icon
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  return (
    <section className="w-11/12  mx-auto py-16" id="projects">
      <h2 className="text-4xl font-bold text-center mb-8 ">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {/* Project 1 */}
        <div className=" p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl bg-gray-800">
          <img
            src={project1} // Replace with your project image
            alt="Project One"
            className="w-full h-40 object-cover rounded-t-lg mb-4 transition-transform transform hover:scale-110"
          />
          <h3 className="text-2xl font-semibold mb-4">Coffee Store</h3>
          <p className="text-lg  mb-4">
            A brief description of the project goes here. Talk about the key
            features, technologies used, and any challenges you overcame.
          </p>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="https://github.com/PritomChakma/coffee-store"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              GitHub Client
            </Link>
            <Link
              to="https://github.com/PritomChakma/coffee-store-server"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              GitHub Server
            </Link>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="https://coffee-store-48e62.web.app"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </Link>
            <Link
              to="/project-one-details"
              className="bg-[#ff4d05] text-white btn btn-sm"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className=" p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl bg-gray-800">
          <img
            src={project2} // Replace with your project image
            alt="Project Two"
            className="w-full h-40 object-cover rounded-t-lg mb-4 transition-transform transform hover:scale-110"
          />
          <h3 className="text-2xl font-semibold mb-4 ">Volunteer Management</h3>
          <p className="text-lg mb-4">
            A brief description of the project goes here. Talk about the key
            features, technologies used, and any challenges you overcame.
          </p>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="https://github.com/PritomChakma/PH-Assignment-11"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              GitHub Client
            </Link>
            <Link
              to="https://github.com/PritomChakma/PH-Assignment-11-server"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              GitHub Server
            </Link>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="https://ph-assignment-11-f2153.web.app"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </Link>
            <Link
              to="/project-two-details"
              className="bg-[#ff4d05] text-white btn btn-sm"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className=" p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl bg-gray-800">
          <img
            src={project3}
            alt="Project Three"
            className="w-full h-40 object-cover rounded-t-lg mb-4 transition-transform transform hover:scale-110"
          />
          <h3 className="text-2xl font-semibold mb-4 ">Gaming Review</h3>
          <p className="text-lg  mb-4">
            A brief description of the project goes here. Talk about the key
            features, technologies used, and any challenges you overcame.
          </p>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="https://github.com/PritomChakma/PH-Assignment-10"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              GitHub Client
            </Link>
            <Link
              to="https://github.com/PritomChakma/PH-Assignment-10-Server"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              GitHub Server
            </Link>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="https://ph-assignment-10-22d95.web.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </Link>
            <Link to="/project-three-details" className="bg-[#ff4d05] text-white btn btn-sm">
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link
          to="/"
          className="bg-[#ff4d05] text-white btn btn-wide py-2 px-4 rounded-lg hover:bg-[#e14b05] transition-all duration-200 flex items-center justify-center gap-2"
        >
          View More Projects <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
