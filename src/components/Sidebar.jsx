// src/components/Sidebar.jsx
// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaBaby,
  FaChartLine,
  FaUsers,
  FaQuestionCircle,
  FaClipboardList,
  FaBookmark,
  FaCogs,
} from "react-icons/fa";
import Dashboardlogo from "../assets/TRAK MAMA 4 (1).png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-[#dd7dd5] text-white p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-[#dd7dd5] rounded-tr-[20px] rounded-br-[20px] text-white w-64 min-h-screen p-4`}
      >
        <div className=" flex text-center mb-4">
          <img src={Dashboardlogo} className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Trakmama</h1>
        </div>
        <nav>
          <ul>
            <li className="my-2">
              <Link
                to="/dashboard/profile"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaUser className="mr-2" /> Profile
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/chat"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaCalendarAlt className="mr-2" /> chat with a doctor
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/baby-tracker"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaBaby className="mr-2" /> Baby Tracker
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/progress"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaChartLine className="mr-2" /> Progress
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/community"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaUsers className="mr-2" /> Community
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/expert-advice"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaQuestionCircle className="mr-2" /> Expert Advice
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/pregnancy-plan"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaClipboardList className="mr-2" /> Pregnancy Plan
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/names"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaBookmark className="mr-2" /> Names
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/dashboard/settings"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <FaCogs className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
