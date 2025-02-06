import Marquee from "react-fast-marquee";
import { FaExternalLinkAlt, FaGithub, FaHome } from "react-icons/fa";
import ExpressJs from "../assets/ExpressJs.png";
import JavaScript from "../assets/JavaScript.png";
import MongoDB from "../assets/MongoDB.png";
import NodeJs from "../assets/NodeJs.png";
import medicalCamp from "../assets/Project1.png";
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

const Project_1 = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-gray-900 text-white">
      {/* Project Title */}
      <h1 className="text-xl md:text-4xl font-bold text-center mb-6">
        Medical Camp Management 
      </h1>

      {/* Project Image */}
      <img
        src={medicalCamp}
        alt="Medical Camp Management"
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Responsive Design:</strong> Optimized for mobile, tablet,
            and desktop.
          </li>
          <li>
            <strong>Authentication & Authorization:</strong> Social login, JWT
            authentication, persistent login.
          </li>
          <li>
            <strong>Home Page:</strong> Navbar, banner slider, featured camps.
          </li>
          <li>
            <strong>Camp Details:</strong> Includes images, fees, date,
            location, and more.
          </li>
          <li>
            <strong>Participant Dashboard:</strong> Recharts analytics, profile
            management, payment history.
          </li>
          <li>
            <strong>Organizer Dashboard:</strong> Manage profile,
            add/update/delete camps, approve payments.
          </li>
          <li>
            <strong>Feedback & Ratings:</strong> Participants can submit
            feedback after payment.
          </li>
          <li>
            <strong>Search & Sort:</strong> Search bar and sorting for easy
            navigation.
          </li>
          <li>
            <strong>Pagination:</strong> Tables with 10 rows per page.
          </li>
        </ul>
      </section>

      {/* Technical Highlights */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Data Fetching:</strong> TanStack Query for optimized API
            requests.
          </li>
          <li>
            <strong>Security:</strong> Firebase and MongoDB credentials secured
            via environment variables.
          </li>
          <li>
            <strong>Payment Integration:</strong> Stripe payment handling with
            transaction tracking.
          </li>
          <li>
            <strong>Form Validation:</strong> Implemented using React Hook
            Form/Formik.
          </li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="overflow-hidden mt-4">
          <Marquee gradient={true} gradientColor={[17, 24, 39]} speed={50}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md mx-4 w-40"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-12 h-12 mb-2"
                />
                <p className="font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Project Links */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="https://ph-assignment-112.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            <FaExternalLinkAlt /> Live Site
          </Link>
          <Link
            to="https://github.com/PritomChakma/PH-Assignment-12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub Client
          </Link>
          <Link
            to="https://github.com/PritomChakma/PH-Assignment-12-server"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub Server
          </Link>

          <Link to="/" className="flex items-center gap-2 bg-[#ff4d05] px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
          <FaHome />  Back To Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project_1;
