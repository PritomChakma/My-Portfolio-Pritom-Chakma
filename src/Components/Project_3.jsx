import Marquee from "react-fast-marquee";
import { FaExternalLinkAlt, FaGithub, FaHome } from "react-icons/fa";
import ExpressJs from "../assets/ExpressJs.png";
import JavaScript from "../assets/JavaScript.png";
import MongoDB from "../assets/MongoDB.png";
import NodeJs from "../assets/NodeJs.png";
import GameReview from "../assets/project3.png";
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

const Project_3 = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-gray-900 text-white">
      <h1 className="text-xl md:text-4xl font-bold text-center mb-6">
        Chill Gamer
      </h1>
      
      <img
        src={GameReview}
        alt="Chill Gamer"
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-300 mb-4">
          A chill, user-friendly game review platform where users can explore and share their thoughts on their favorite games. Designed with simplicity and functionality to provide a seamless experience for gamers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Game Reviews Management:</strong> Add, update, and delete game reviews.</li>
          <li><strong>Display:</strong> Shows the top-rated games.</li>
          <li><strong>Authentication:</strong> Secure login with email/password and Google login.</li>
          <li><strong>Dynamic Watchlist:</strong> Save favorite games, accessible to logged-in users only.</li>
          <li><strong>Responsive Design:</strong> Works on mobile, tablet, and desktop with dark/light mode.</li>
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
            to="https://ph-assignment-10-22d95.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            <FaExternalLinkAlt /> Live Site
          </Link>
          <Link
            to="https://github.com/PritomChakma/PH-Assignment-10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub Client
          </Link>
          <Link
            to="https://github.com/PritomChakma/PH-Assignment-10-server"
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

export default Project_3;
