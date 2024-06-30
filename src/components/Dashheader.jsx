// src/components/Header.jsx
import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth";

const Dashheader = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Welcome, {user?.username}</h2>
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
