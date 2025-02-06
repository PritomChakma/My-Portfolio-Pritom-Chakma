import Marquee from "react-fast-marquee";
import { FaExternalLinkAlt, FaGithub, FaHome } from "react-icons/fa";
import ExpressJs from "../assets/ExpressJs.png";
import JavaScript from "../assets/JavaScript.png";
import MongoDB from "../assets/MongoDB.png";
import NodeJs from "../assets/NodeJs.png";
import volunteer from "../assets/project2.png";
import ReactImg from "../assets/React.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";
import { Link } from "react-router-dom";

const technologies = [
  { name: "HTML5", img: html },
  { name: "CSS3", img: css },
  { name: "Tailwind CSS", img: tailwind },
  { name: "JavaScript", img: JavaScript },
  { name: "React", img: ReactImg },
  { name: "MongoDB", img: MongoDB },
  { name: "Node.js", img: NodeJs },
  { name: "Express.js", img: ExpressJs },
  { name: "Firebase", img: firebase },
];

const Project_2 = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-gray-900 text-white">
      <h1 className="text-xl md:text-4xl font-bold text-center mb-6">
        Volunteer Management Website
      </h1>
      
      <img
        src={volunteer}
        alt="Volunteer Management Website"
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-300 mb-4">
        The Volunteer Management Website is a user-friendly platform for recruiting and managing volunteers. Users can create, update, and delete volunteer posts, as well as sign up for opportunities shared by others. The platform features a responsive design, secure database integration, and dynamic functionalities to ensure a seamless user experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Authentication:</strong> Email/password login, social login, JWT authentication.</li>
          <li><strong>Volunteer Posts:</strong> Browse and search posts, "Be a Volunteer" option.</li>
          <li><strong>Responsive Design:</strong> Mobile, tablet, and desktop support.</li>
          <li><strong>Dynamic Features:</strong> Theme toggle, loading spinners, 404 page.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="overflow-hidden mt-4">
          <Marquee gradient={true} gradientColor={[17, 24, 39]} speed={50}>
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md mx-4 w-40">
                <img src={tech.img} alt={tech.name} className="w-12 h-12 mb-2" />
                <p className="font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="https://ph-assignment-11-f2153.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            <FaExternalLinkAlt /> Live Site
          </Link>
          <Link
            to="https://github.com/PritomChakma/PH-Assignment-11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub Client
          </Link>
          <Link
            to="https://github.com/PritomChakma/PH-Assignment-11-server"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub Server
          </Link>
          <Link to="/" className="flex items-center gap-2 bg-[#ff4d05] px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
            <FaHome /> Back To Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project_2;
