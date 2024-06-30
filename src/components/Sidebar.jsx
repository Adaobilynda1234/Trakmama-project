// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#DD7DD5] rounded-tr-[20px] rounded-br-[20px] text-white w-64 min-h-screen p-4">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">Trakmama</h1>
      </div>
      <nav>
        <ul>
          <li className="my-2">
            <Link
              to="/dashboard/profile"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Profile
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/appointments"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Appointments
            </Link>
          </li>
          {/* Add more links as needed */}
          <li className="my-2">
            <Link
              to="/dashboard/baby-tracker"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Baby Tracker
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/progress"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Progress
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/appointments"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Appointments
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/community"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Community
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/expert-advice"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Expert Advice
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/pregnancy-plan"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Pregnancy Plan
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/names"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Names
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/blog"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Blog
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/dashboard/settings"
              className="block py-2 px-4 rounded hover:bg-purple-700"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
