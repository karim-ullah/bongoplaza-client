import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container flex flex-col md:flex-row min-h-screen gap-6">
      <Sidebar />

      <main className="md:flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
