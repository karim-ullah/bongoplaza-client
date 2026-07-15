import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container flex min-h-screen gap-6">
      <Sidebar />

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
