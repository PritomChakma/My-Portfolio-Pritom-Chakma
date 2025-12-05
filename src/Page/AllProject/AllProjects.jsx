import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaFire,
  FaHome,
  FaRocket,
  FaServer,
  FaStar,
} from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { Link } from "react-router-dom";

import Coffee_Store from "../../assets/Coffee_Store.png";
import Cricket_tounament from "../../assets/Cricket_tounament.png";
import Daily_News from "../../assets/Daily_News.png";
import DiscountPro from "../../assets/DiscountPro.png";
import Gadget_Haven from "../../assets/Gadget_Haven.png";
import project1 from "../../assets/Project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const AllProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projects = [
    {
      id: 1,
      name: "Medical Camp Management",
      description:
        "A comprehensive MERN stack platform for managing medical camps with real-time authentication, participant registration, payment integration, and dynamic dashboards for users and organizers.",
      image: project1,
      githubClient: "https://github.com/PritomChakma/PH-Assignment-12",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-12-Server",
      demo: "https://ph-assignment-112.web.app/",
      details: "/project-one-details",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Firebase",
        "JWT",
        "Express",
      ],
      category: "Full Stack",
      featured: true,
      icon: <SiReact className="text-cyan-400" />,
    },
    {
      id: 2,
      name: "Volunteer Management",
      description:
        "Modern platform for coordinating volunteer activities with task assignment, scheduling, progress tracking, and team communication tools.",
      image: project2,
      githubClient: "https://github.com/PritomChakma/PH-Assignment-11",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-11-Server",
      demo: "https://ph-assignment-11-f2153.web.app",
      details: "/project-two-details",
      technologies: ["React", "Express", "MongoDB", "JWT", "Axios", "Firebase"],
      category: "Full Stack",
      featured: true,
      icon: <SiNodedotjs className="text-green-500" />,
    },
    {
      id: 3,
      name: "Gaming Review Platform",
      description:
        "Interactive gaming review platform where users can rate, review, and discuss games with community engagement and content moderation.",
      image: project3,
      githubClient: "https://github.com/PritomChakma/PH-Assignment-10",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-10-Server",
      demo: "https://ph-assignment-10-22d95.web.app/",
      details: "/project-three-details",
      technologies: [
        "React",
        "Firebase",
        "Tailwind",
        "Context API",
        "Express",
        "MongoDB",
      ],
      category: "Full Stack",
      featured: true,
      icon: <SiMongodb className="text-green-400" />,
    },
    {
      id: 4,
      name: "Discount PRO",
      description:
        "Bangladeshi e-commerce platform to find, explore, and use discount coupons by brand, category, or expiry date with real-time validation.",
      image: DiscountPro,
      githubClient: "https://github.com/PritomChakma/PH-Assignment-9",
      demo: "https://ph-assignment-9-626ca.web.app/",
      details: "/project-four-details",
      technologies: ["React", "Tailwind", "Firebase", "API", "Vercel"],
      category: "Frontend",
      featured: false,
      icon: <SiTailwindcss className="text-teal-400" />,
    },
    {
      id: 5,
      name: "Coffee Store",
      description:
        "Sleek e-commerce platform for coffee lovers to browse, shop, and manage their favorite coffee products with cart and wishlist functionality.",
      image: Coffee_Store,
      githubClient: "https://github.com/PritomChakma/PH-Assignment-9",
      demo: "https://ph-assignment-9-626ca.web.app/",
      details: "/project-five-details",
      technologies: [
        "React",
        "Tailwind",
        "Firebase",
        "LocalStorage",
        "Context API",
      ],
      category: "Frontend",
      featured: false,
      icon: <SiFirebase className="text-yellow-500" />,
    },
    {
      id: 6,
      name: "Gadget Haven",
      description:
        "React eCommerce site with cart, wishlist, and filters. Uses LocalStorage, Context API, and useEffect with dynamic navbar and product pages.",
      image: Gadget_Haven,
      githubClient: "https://github.com/PritomChakma/PH-Assignment-8",
      demo: "https://possessive-ordepritomr.surge.sh/",
      details: "/project-six-details",
      technologies: [
        "React",
        "Context API",
        "LocalStorage",
        "Tailwind",
        "Surge",
      ],
      category: "Frontend",
      featured: false,
      icon: <FaCode className="text-blue-400" />,
    },
    {
      id: 7,
      name: "Cricket T20 Tournament",
      description:
        "Platform to view, select, and manage T20 cricket players roster. Users earn coins to hire players with budget management and validation features.",
      image: Cricket_tounament,
      githubClient: "https://github.com/PritomChakma/PH-Assignment-7",
      demo: "https://cricket-tounament.surge.sh/",
      details: "/project-seven-details",
      technologies: ["React", "JavaScript", "CSS3", "Surge", "LocalStorage"],
      category: "Frontend",
      featured: false,
      icon: <FaRocket className="text-orange-400" />,
    },
    {
      id: 8,
      name: "Dragon News Portal",
      description:
        "Responsive, user-friendly news website providing latest updates across various categories with authentication and categorized news content.",
      image: Daily_News,
      githubClient: "https://github.com/PritomChakma/the-dragon-news",
      demo: "https://dragon-news-9385b.web.app/category/01",
      details: "/project-eight-details",
      technologies: ["React", "Firebase", "Tailwind", "API", "Authentication"],
      category: "Full Stack",
      featured: false,
      icon: <FaDatabase className="text-purple-400" />,
    },
  ];

  const stats = [
    {
      number: projects.length,
      label: "Total Projects",
      icon: <FaCode />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "6+",
      label: "Technologies",
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "100%",
      label: "Success Rate",
      icon: <FaFire />,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "4+",
      label: "Full Stack",
      icon: <FaRocket />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Back to Home Button - Fixed at top */}
      {/* <div className="fixed top-50 left-4 z-50">
        <Link
          to="/"
          className="group flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-orange-500/50"
        >
          <FaHome className="group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div> */}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-500/50"
      >
        <FaArrowUp />
      </button>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">
              Portfolio
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
              All Projects
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Complete collection of my work showcasing full-stack and frontend
            development projects
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
                <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 text-center group-hover:border-gray-700/50 transition-all duration-500">
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-cyan-400">{stat.icon}</div>
                    <span className="text-sm font-medium text-gray-300">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentProjects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Card */}
              <div className="relative h-full bg-gradient-to-b from-gray-900/90 to-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden group-hover:border-cyan-500/30 transition-all duration-500 group-hover:-translate-y-2">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <FaStar className="text-yellow-300" size={10} />
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1 backdrop-blur-sm text-xs font-semibold rounded-full border ${
                      project.category === "Full Stack"
                        ? "bg-green-900/30 text-green-400 border-green-500/30"
                        : "bg-blue-900/30 text-blue-400 border-blue-500/30"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Project Icon */}
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-2">
                    {project.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Buttons - Client & Server */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-cyan-500/30 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <FaCode size={12} />
                      <span className="truncate">Client Code</span>
                    </a>

                    {project.githubServer ? (
                      <a
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-green-500/30 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <FaServer size={12} />
                        <span className="truncate">Server Code</span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 bg-gray-800/30 border border-gray-700/30 text-gray-500 px-3 py-2 rounded-lg text-sm">
                        <FaServer size={12} />
                        <span>Frontend Only</span>
                      </div>
                    )}
                  </div>

                  {/* Live Demo & Details */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>

                    <Link
                      to={project.details}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-orange-500/30 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center gap-8">
          {/* Page Info */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              Showing{" "}
              <span className="font-semibold text-white">
                {(currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, projects.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-white">
                {projects.length}
              </span>{" "}
              projects
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full mx-auto"></div>
          </div>

          {/* Pagination Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handlePagination(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-800/30 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/50 hover:border-cyan-500/30"
              }`}
            >
              <FaArrowLeft />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePagination(pageNumber)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      currentPage === pageNumber
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
                        : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800/70"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePagination(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-800/30 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/50 hover:border-cyan-500/30"
              }`}
            >
              Next
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
