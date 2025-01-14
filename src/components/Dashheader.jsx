import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import Profileppic from "../assets/Memoji (3).png";

const Dashheader = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-white shadow p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
      <div className="w-full sm:w-auto flex items-center justify-between bg-[#dd7dd5] text-white rounded-tl-sm rounded-br-sm md:rounded-tl-full md:rounded-br-full p-3 md:p-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl font-semibold truncate max-w-[200px] sm:max-w-none">
            Welcome, {user?.username}
          </h2>
          <img
            src={Profileppic}
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
          />
        </div>
      </div>
      <button
        onClick={logout}
        className="w-full sm:w-auto bg-[#DD7DD5] text-white py-2 px-4 rounded hover:bg-[#c66cbe] transition-colors duration-200 text-sm sm:text-base"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashheader;
