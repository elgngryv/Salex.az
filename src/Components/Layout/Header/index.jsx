import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import Headerlogo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Sun from "../../../assets/Icons/Sun.svg";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode] = useState(false);

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
      className={`sticky z-50 p-4 md:px-[52px] openSans mb-[24px] transition-all duration-300 ${
        isAtTop ? "top-4" : "top-0"
      }`}>
      <div className="relative">
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
            <img src={Headerlogo} alt="Headerlogo" />
          </Link>

          {/* Desktop menu */}
          <nav
            className={`hidden lg:flex items-center montserrat justify-center gap-8 flex-1 text-[#3D246A] font-normal text-lg transition-opacity duration-300 ${
              collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}>
            <Link to="/AboutPage" className="hover:underline cursor-pointer">
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
              <button className="bg-[#3D246A] font-semibold text-base montserrat text-white px-6 py-3 rounded-[24px] whitespace-nowrap">
                Daxil ol
              </button>

              {/* AZ + Dropdown ox + Hamburger */}
              <div
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => setCollapsed(!collapsed)}>
                <span className="font-semibold text-[#3D246A]">AZ</span>
                <GoChevronDown
                  size={20}
                  className={`text-[#3D246A] transition-transform duration-300 ${
                    collapsed ? "rotate-180" : "rotate-0"
                  }`}
                />
                <RxHamburgerMenu className="text-3xl text-[#3D246A] font-extrabold" />
              </div>
            </div>

            {/* Desktop görünüş */}
            <button className="border-[4px] hidden lg:block rounded-full p-2 border-[#5B2E91]">
              <img src={Sun} alt="Dark Mode" />
            </button>
            <div className="hidden lg:flex items-center gap-1 cursor-pointer text-[#3D246A] font-semibold select-none">
              <span>AZ</span>
              <GoChevronDown size={20} />
            </div>
            <button className="hidden lg:block bg-[#3D246A] font-semibold text-base montserrat text-white px-[24px] py-3 rounded-[24px]">
              Daxil ol
            </button>
          </div>
        </div>

        {/* Alt menyu: mobilda collapsed olarkən görünür */}
        <div
          className={`lg:hidden w-[249px] overflow-hidden transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-[10px] rounded-b-[12px] mt-1 p-4 text-[#3D246A] font-medium montserrat
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
