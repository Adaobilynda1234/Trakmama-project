import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavBar = () => {
    setOpenNav(!openNav);
  };

  // Active link style
  const activeLinkStyle = "text-[#7eb97d] font-semibold";
  const normalLinkStyle =
    "text-gray-700 hover:text-[#7eb97d] transition-colors duration-300";

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12 w-auto" src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? activeLinkStyle : normalLinkStyle
                } text-sm font-medium`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `${
                  isActive ? activeLinkStyle : normalLinkStyle
                } text-sm font-medium`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `${
                  isActive ? activeLinkStyle : normalLinkStyle
                } text-sm font-medium`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/login"
              className="px-4 py-2 text-sm font-medium text-[#7eb97d] hover:bg-[#7eb97d] hover:text-white rounded-lg transition-colors duration-300"
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-[#7eb97d] hover:bg-[#6ca86b] rounded-lg transition-colors duration-300"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleNavBar}
              className="p-2 rounded-md text-gray-700 hover:text-[#7eb97d] focus:outline-none"
            >
              {openNav ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          openNav ? "translate-x-0" : "-translate-x-full"
        } fixed top-16 left-0 right-0 bg-white border-t border-gray-100 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive ? "bg-[#f3f9f3] text-[#7eb97d]" : "text-gray-700"
              } hover:bg-[#f3f9f3] hover:text-[#7eb97d]`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive ? "bg-[#f3f9f3] text-[#7eb97d]" : "text-gray-700"
              } hover:bg-[#f3f9f3] hover:text-[#7eb97d]`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive ? "bg-[#f3f9f3] text-[#7eb97d]" : "text-gray-700"
              } hover:bg-[#f3f9f3] hover:text-[#7eb97d]`
            }
          >
            Contact Us
          </NavLink>

          <div className="pt-4 space-y-2">
            <NavLink
              to="/login"
              className="block w-full px-4 py-2 text-center text-[#7eb97d] border border-[#7eb97d] rounded-md hover:bg-[#7eb97d] hover:text-white transition-colors duration-300"
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="block w-full px-4 py-2 text-center text-white bg-[#7eb97d] rounded-md hover:bg-[#6ca86b] transition-colors duration-300"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
