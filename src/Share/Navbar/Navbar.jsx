import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Portfolio</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
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

      {/* Navbar End */}
      <div className="navbar-end">
        <Link to="/resume" className="btn bg-[#ff4d05] text-white">
          Download Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
