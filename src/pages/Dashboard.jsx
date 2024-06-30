// src/components/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Dashheader from "../components/Dashheader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Dashheader />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
