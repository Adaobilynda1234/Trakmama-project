// src/components/Sidebar.jsx
// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Dashboardlogo from "../assets/TRAK MAMA 4 (1).png";
import Profileimg from "../assets/Vector (7).png";
import Medicalinfoimg from "../assets/Vector (8).png";
import Pregnancyimg from "../assets/Vector (9).png";
import Healthtrackerimg from "../assets/Vector (10).png";
import Community from "../assets/Vector (11).png";
import Todolistimg from "../assets/Vector (12).png";
import Paymentimg from "../assets/Vector (13).png";
import Gamesimg from "../assets/Vector (14).png";
import Notesimg from "../assets/Vector (15).png";
import Settingimg from "../assets/Vector (16).png";

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
        <div className=" flex text-center mb-8">
          <img src={Dashboardlogo} className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Trakmama</h1>
        </div>
        <nav>
          <ul>
            <li className="my-6">
              <Link
                to="/dashboard/medical"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Medicalinfoimg} className="mr-2" /> Medical Info
              </Link>
            </li>
            <li className="my-6">
              <Link
                to="/dashboard/todolist"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Todolistimg} className="mr-2" /> Todolist
              </Link>
            </li>
            <li className="my-6">
              <Link
                to="/dashboard/payment"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Paymentimg} className="mr-2" /> Payment Plan
              </Link>
            </li>
            <li className="my-6">
              <Link
                to="/dashboard/pregnancytracker"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Healthtrackerimg} className="mr-2" />
                Pregnancy Tracker
              </Link>
            </li>
            <li className="my-6">
              <Link
                to="/dashboard/healthtracker"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Healthtrackerimg} className="mr-2" />
                Health Tracker
              </Link>
            </li>
            <li className="my-6">
              <Link
                to="/dashboard/community"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Community} className="mr-2" /> Community
              </Link>
            </li>
            <li className="my-6">
              <Link
                to="/dashboard/profile"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Profileimg} className="mr-2" />
                Profile
              </Link>
            </li>
            <li className="my-6">
              <Link
                to="/dashboard/pregnancy"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Pregnancyimg} className="mr-2" /> Pregnancy
              </Link>
            </li>

            <li className="my-8">
              <Link
                to="/dashboard/games"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Gamesimg} className="mr-2" /> Games
              </Link>
            </li>
            <li className="my-8">
              <Link
                to="/dashboard/notes"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Notesimg} className="mr-2" /> Notes
              </Link>
            </li>
            <li className="my-8">
              <Link
                to="/dashboard/settings"
                className="flex items-center py-2 px-4 rounded hover:bg-pink-700"
              >
                <img src={Settingimg} className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
