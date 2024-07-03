// src/components/Header.jsx
import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import Profileppic from "../assets/Memoji (3).png";

const Dashheader = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="md:flex justify-between bg-[#dd7dd5] text-white rounded-tl-sm rounded-br-sm   md:rounded-tl-full md:rounded-br-full md:p-6">
        <h2 className="text-xl font-semibold">Welcome, {user?.username}</h2>
        <img src={Profileppic} className="ml-2" />
      </div>
      <button
        onClick={logout}
        className="bg-[#DD7DD5] text-white py-2 px-4 rounded"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashheader;
