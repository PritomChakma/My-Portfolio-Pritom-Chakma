import React, { useState } from "react";
import { FaEnvelope, FaTools, FaUser } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown
  };

  const navOptions = (
    <>
      <li>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer flex items-center gap-2"
        >
          <FaUser /> About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer flex items-center gap-2"
        >
          <FaTools /> My Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer flex items-center gap-2"
        >
          <FaEnvelope /> Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center justify-between w-full px-4 py-2">
        {/* Dropdown for Mobile */}
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost p-1 focus:outline-none transition-colors rounded-md"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {isDropdownOpen && ( // Show dropdown only when `isDropdownOpen` is true
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-gray-900 text-white p-2 shadow-lg"
            >
              {navOptions}
            </ul>
          )}
        </div>
        {/* Logo and Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 w-auto lg:h-10 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-lg lg:text-xl font-bold text-white">Pritom</p>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6">{navOptions}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4 px-4">
        <Link
          to="/"
          className="btn btn-sm bg-[#ff4d05] text-white flex items-center gap-2 py-2 px-4 rounded-lg transition-all hover:bg-[#e14b05]"
        >
          <span className="hidden sm:block">Download Resume</span>
          <MdDownload className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
