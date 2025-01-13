import React from "react";
import logo2 from "../assets/logo2.png";
import { AiFillFacebook } from "react-icons/ai";
import { LuYoutube } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d0f3cc] text-black w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <img
              src={logo2}
              alt="logo-ct"
              className="w-32 h-24 object-contain"
            />
            <p className="text-center lg:text-left font-sans">
              <span className="block">We are dedicated to</span>
              <span className="block">simplifying your pregnancy </span>
              <span className="block">journey with amazing features.</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {/* About Us Links */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium text-gray-700 mb-4">
                About Us
              </h3>
              <ul className="space-y-2">
                {[
                  "Advertisement",
                  "Careers",
                  "Privacy Policy",
                  "Terms Of Use",
                  "Contact Us",
                  "Customer Care",
                  "Newsletter",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block font-sans text-sm text-gray-700 hover:text-[#7eb97d] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pregnancy Links */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium text-gray-700 mb-4">
                Pregnancy
              </h3>
              <ul className="space-y-2">
                {[
                  "PostNatalCare",
                  "CustomerCare",
                  "Appointments",
                  "Queries",
                  "Community",
                  "Library",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block font-sans text-sm text-gray-700 hover:text-[#7eb97d] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-[#64748b]">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Company Name */}
            <p className="font-sans text-sm text-blue-gray-900">
              Trakmama, Inc
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-[#f44336] hover:opacity-80 transition-opacity"
              >
                <FaInstagramSquare className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#b71c1c] hover:opacity-80 transition-opacity"
              >
                <ImPinterest2 className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#b71c1c] hover:opacity-80 transition-opacity"
              >
                <LuYoutube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#5c6bc0] hover:opacity-80 transition-opacity"
              >
                <AiFillFacebook className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-sans text-sm text-blue-gray-900 opacity-40">
              Copyright © 2025 Trakmama
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
