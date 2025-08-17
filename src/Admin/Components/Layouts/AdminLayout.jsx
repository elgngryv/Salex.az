import React from "react";
import { Outlet } from "react-router-dom"; // <-- Outlet lazımdır
import { Sidebar } from "./Sidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-4">
          <Outlet /> {/* nested route-lər burada render olunacaq */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
