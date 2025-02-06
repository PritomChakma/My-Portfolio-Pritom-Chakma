import { useState } from "react";
import { Link } from "react-router-dom";
import project1 from "../../assets/Project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import DiscountPro from "../../assets/DiscountPro.png";
import Coffee_Store from "../../assets/Coffee_Store.png";
import Gadget_Haven from "../../assets/Gadget_Haven.png";
import Cricket_tounament from "../../assets/Cricket_tounament.png";
import Daily_News from "../../assets/Daily_News.png";

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Medical Camp Management",
      description:
        "A responsive MERN stack platform for managing medical camps with authentication, participant registration, payment integration, and dynamic dashboards for users and organizers.",
      image: project1,
      github: "https://github.com/PritomChakma/PH-Assignment-12",
      demo: "https://ph-assignment-112.web.app/",
      details: "/project-one-details",
    },
    {
      id: 2,
      name: "Volunteer Management",
      description:
        "A brief description of the project goes here. Talk about the key features, technologies used, and any challenges you overcame.",
      image: project2,
      github: "https://github.com/PritomChakma/PH-Assignment-11",
      demo: "https://ph-assignment-11-f2153.web.app",
      details: "/project-two-details",
    },
    {
      id: 3,
      name: "Gaming Review",
      description:
        "A brief description of the project goes here. Talk about the key features, technologies used, and any challenges you overcame.",
      image: project3,
      github: "https://github.com/PritomChakma/PH-Assignment-10",
      demo: "https://ph-assignment-10-22d95.web.app/",
      details: "/project-three-details",
    },
    {
      id: 4,
      name: "Discount PRO",
      description:
        "Discount PRO: A Bangladeshi platform to find, explore, and use e-commerce discount coupons by brand, category, or expiry date",
      image: DiscountPro,
      github: "https://github.com/PritomChakma/PH-Assignment-9",
      demo: "https://ph-assignment-9-626ca.web.app/",
      details: "/",
    },
    {
      id: 5,
      name: "Coffee Store",
      description:
        "Coffee Store: A sleek platform for coffee lovers to browse, shop, and manage their favorite coffee products effortlessly.",
      image: Coffee_Store,
      github: "https://github.com/PritomChakma/PH-Assignment-9",
      demo: "https://ph-assignment-9-626ca.web.app/",
      details: "/",
    },
    {
      id: 6,
      name: "Gadget Haven",
      description:
        "React eCommerce site with cart, wishlist, and filters. Uses LocalStorage, Context API, and useEffect. Features a dynamic navbar, product pages, and a 404 page",
      image: Gadget_Haven,
      github: "https://github.com/PritomChakma/PH-Assignment-8",
      demo: "https://possessive-ordepritomr.surge.sh/",
      details: "/",
    },
    {
      id: 7,
      name: "Cricket T20 Tounament",
      description:
        "A websit where users can view, select, and manage a roster of T20 cricket players for a tournament. Users can earn coins to hire players, see available and selected players, and manage selections with a budget and validation features",
      image: Cricket_tounament,
      github: "https://github.com/PritomChakma/PH-Assignment-7",
      demo: "https://cricket-tounament.surge.sh/",
      details: "/",
    },
    {
      id: 8,
      name: "Cricket T20 Tounament",
      description:
        "The Dragon News is a responsive, user-friendly news website that provides the latest updates across various categories. This project showcases a simple yet dynamic news portal with user authentication and categorized news content.",
      image: Daily_News,
      github: "https://github.com/PritomChakma/the-dragon-news?tab=readme-ov-file",
      demo: "https://dragon-news-9385b.web.app/category/01",
      details: "/",
    },

  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination
  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination buttons
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <section className="w-11/12 mx-auto py-16" id="projects">
        <h2 className="text-4xl font-bold text-center mb-8">My All Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl bg-gray-800"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-t-lg mb-4 transition-transform transform hover:scale-110"
              />
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={project.github}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Client
                </Link>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={project.demo}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </Link>
                <Link
                  to={project.details}
                  className="bg-[#ff4d05] text-white btn btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-4">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => handlePagination(number)}
                  className={`${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } px-4 py-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
