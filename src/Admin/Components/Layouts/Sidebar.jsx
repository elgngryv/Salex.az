import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { ChevronDown, ChevronUp } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-[#3D246A] p-4 h-screen flex flex-col text-white shadow-md border-r border-gray-700">
      {/* Başlıq */}
      <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>

      {/* Ana səhifəyə link */}
      <Link
        to="/"
        className="flex items-center gap-3 text-gray-300 hover:text-white transition duration-200 mb-4">
        <IoHomeOutline size={25} />
        <p className="text-lg">Ana səhifəyə dön</p>
      </Link>

      {/* Naviqasiya */}
      <nav className="flex flex-col gap-3 overflow-y-auto">
        <NavLink
          to="/admin/package"
          className={({ isActive }) =>
            `py-3 px-5 rounded-md transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white shadow-md"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          Paketlər
        </NavLink>
            <NavLink
          to="/admin/MessagesUser"
          className={({ isActive }) =>
            `py-3 px-5 rounded-md transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          Mesajlar
        </NavLink>
        <NavLink
          to="/admin/company/datamanagement"
          className={({ isActive }) =>
            `py-3 px-5 rounded-md transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          Qeydiyyat
        </NavLink>
        <NavLink
          to="/admin/company/Company"
          className={({ isActive }) =>
            `py-3 px-5 rounded-md transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          Şirkətlər
        </NavLink>
     
        <NavLink
          to="/admin/company/dashboard"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md text-sm transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/company/AnalyticsDashboard"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md text-sm transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          Analitika
        </NavLink>
        <NavLink
          to="/admin/company/UserMessage"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md text-sm transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          İstifadəçi Mesajları
        </NavLink>
        <NavLink
          to="/admin/company/SelnazMessage"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md text-sm transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
          Selnazın Mesajları
        </NavLink>
        <NavLink
          to="/admin/company/Buttons"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md text-sm transition duration-200 ${
              isActive
                ? "bg-[#5B2E91] text-white"
                : "hover:bg-[#5B2E91] hover:text-white"
            }`
          }>
         Buttons
        </NavLink>
      </nav>
    </aside>
  );
};
