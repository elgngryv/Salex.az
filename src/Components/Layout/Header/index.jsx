import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import Headerlogo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme-provider";
import FooterDarkLogo from "../../../assets/images/Footer-logo.svg";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`sticky z-50 p-4 md:px-[52px]  openSans  transition-all duration-300 ${
        isAtTop ? "top-4" : "top-0"
      }`}>
      <div className="relative ">
        <div
          className={`flex items-center justify-between transition-all duration-500
          border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150
          p-[18px] rounded-[12px] relative h-[86px]
          ${collapsed ? "max-w-[249px]" : "max-w-full"}`}
          style={{ width: collapsed ? "249px" : "100%" }}>
          {/* Logo */}
          <Link
            to="/"
            className={`transition-opacity duration-300 ease-in-out ${
              collapsed ? "opacity-0" : "opacity-100"
            }`}
            style={{ pointerEvents: collapsed ? "none" : "auto" }}>
            <img
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899482/Footer-logo_j56opi.svg"
                  : "https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899485/logo_xzeulg.svg"
              }
              alt="Headerlogo"
            />
          </Link>

          {/* Desktop menu */}
          <nav
            className={`hidden lg:flex items-center dark:text-[#E1DCE6]  montserrat justify-center gap-8 flex-1 text-[#3D246A] font-normal text-lg transition-opacity duration-300 ${
              collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}>
            <Link to="/AboutPage" className="hover:underline  cursor-pointer">
              Haqqımızda
            </Link>

            <Link to="/SolutionsPage" className="hover:underline">
              Həll yolları
            </Link>
            <Link to="/SuggestionsPage" className="hover:underline">
              Təkliflər
            </Link>
            <Link to="/ContactPage" className="hover:underline">
              Əlaqə
            </Link>
          </nav>

          {/* Sağ düymələr */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Mobil görünüş */}
            <div className="flex items-center gap-4 lg:hidden">
              {/* Daxil ol düyməsi */}
              <button
                className="bg-[#3D246A] font-semibold text-base montserrat text-white px-6 py-3 rounded-[24px] whitespace-nowrap"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/1EusUYjYDL-9nf-LYiI2g_TlpM5ZyZEGwSfRaJXwejq8/edit",
                    "_blank"
                  )
                }>
                Qeydiyyat
              </button>

              <div
                className="flex dark:text-[#E1DCE6] items-center gap-2 cursor-pointer select-none"
                onClick={() => setCollapsed(!collapsed)}>
                <GoChevronDown
                  size={20}
                  className={`text-[#3D246A] transition-transform duration-300 ${
                    collapsed ? "rotate-180" : "rotate-0"
                  }`}
                />
                <RxHamburgerMenu className="text-3xl dark:text-[#E1DCE6] text-[#3D246A] font-extrabold" />
              </div>
            </div>

            {/* Desktop görünüş */}
            <div className="hidden dark:text-[#E1DCE6] lg:flex items-center gap-1 cursor-pointer text-[#3D246A] font-semibold select-none">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md border 
               bg-gradient-to-r from-gray-200 to-gray-300 text-black 
               dark:from-gray-800 dark:to-gray-900 dark:text-white
               hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:to-gray-800
               transition-all duration-300">
                {theme === "dark" ? "🌙 " : "☀️ "}
              </button>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1EusUYjYDL-9nf-LYiI2g_TlpM5ZyZEGwSfRaJXwejq8/edit",
                  "_blank"
                )
              }
              className="hidden dark:text-[#E1DCE6] lg:block bg-[#3D246A] font-semibold text-base montserrat text-white px-[24px] py-3 rounded-[24px]">
              Qeydiyyat
            </button>
          </div>
        </div>

        {/* Alt menyu: mobilda collapsed olarkən görünür */}
        <div
          className={`lg:hidden dark:text-[#E1DCE6]  w-[249px] overflow-hidden transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-[10px] rounded-b-[12px] mt-1 p-4 text-[#3D246A] font-medium montserrat
          ${collapsed ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ pointerEvents: collapsed ? "auto" : "none" }}>
          <Link
            to="/AboutPage"
            className="block mb-2 hover:underline cursor-pointer"
            onClick={() => setCollapsed(false)}>
            Haqqımızda
          </Link>
          <Link
            to="/SolutionsPage"
            className="block mb-2 hover:underline cursor-pointer"
            onClick={() => setCollapsed(false)}>
            Həll yolları
          </Link>
          <Link
            to="/SuggestionsPage"
            className="block mb-2 hover:underline cursor-pointer"
            onClick={() => setCollapsed(false)}>
            Təkliflər
          </Link>
          <Link
            to="/ContactPage"
            className="block hover:underline cursor-pointer"
            onClick={() => setCollapsed(false)}>
            Əlaqə
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
