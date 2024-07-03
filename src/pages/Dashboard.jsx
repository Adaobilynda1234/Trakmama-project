// src/components/Dashboard.jsx
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Dashheader from "../components/Dashheader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "666d699b63e4e9ccf97588d5" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
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
