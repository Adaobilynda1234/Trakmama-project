// src/components/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Dashheader from "../components/Dashheader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Dashheader />
        <main className="p-4 flex-1 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
