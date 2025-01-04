import React from "react";
import { MdDownload } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <ScrollLink
          to="about" 
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
          className="cursor-pointer"
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="skills" 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          My Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact" 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar  shadow-md fixed top-0 left-0 w-full z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            role="button"
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        {/* Branding/Logo */}
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          MyPortfolio
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
  <Link
    to="/"
    className="btn btn-sm md:btn bg-[#ff4d05] text-white flex items-center gap-2 md:gap-3 py-2 px-4 rounded-lg transition-all hover:bg-[#e14b05] md:bg-[#ff4d05] md:text-white"
  >
    <span className="hidden sm:block">Download Resume</span>
    <MdDownload className="text-lg" />
  </Link>
</div>


    </div>
  );
};

export default Navbar;
