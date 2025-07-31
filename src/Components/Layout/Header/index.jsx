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
      <div className="relative ">
        <div
          className={`w-full flex items-center justify-between transition-all duration-500
          border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150
          p-[18px] rounded-[12px] relative h-[86px]`}>
          {/* Logo */}
          <Link to="/">
            <img src={Headerlogo} alt="Headerlogo" />
          </Link>

          <nav className="hidden lg:flex items-center montserrat justify-center gap-8 flex-1 text-[#3D246A] font-normal text-lg">
            <Link className="hover:underline cursor-pointer">Haqqımızda</Link>
            <Link to="/SuggestionsPage" className="hover:underline">
              Təkliflər
            </Link>
            <Link to="/ContactPage" className="hover:underline">
              Əlaqə
            </Link>
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-4 lg:hidden">
              <button className="bg-[#3D246A] font-semibold text-base montserrat text-white px-6 py-3 rounded-[24px] whitespace-nowrap">
                Daxil ol
              </button>
              <div
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => setCollapsed(!collapsed)}>
                {collapsed && (
                  <div className="flex items-center gap-1 text-[#3D246A] font-semibold">
                    <h2>AZ</h2>
                    <GoChevronDown size={20} />
                  </div>
                )}
                <RxHamburgerMenu className="text-3xl text-[#3D246A] font-extrabold" />
              </div>
            </div>

            {/* Desktop görünüş: Dark Mode + Dil + Daxil ol */}
            <button className="border-[4px] hidden lg:block rounded-full p-2 border-[#5B2E91]">
              <img src={Sun} alt="Dark Mode" />
            </button>
            <div className="hidden lg:flex items-center gap-1 cursor-pointer text-[#3D246A] font-semibold select-none">
              <span>AZ</span>
              <GoChevronDown size={20} />
            </div>
            <button className="hidden  lg:block bg-[#3D246A] font-semibold text-base  montserrat text-white px-[24px] py-3 rounded-[24px]">
              Daxil ol
            </button>

            {/* Collapsed menyu mobil üçün */}
            {collapsed && (
              <div className="absolute top-full font-medium text-lg montserrat right-0 w-[250px] bg-white/10 rounded-[12px] shadow-md text-[#3D246A] mt-4 p-6 z-40 lg:hidden">
                <h2 className="mb-2 font-semibold">Haqqımızda</h2>
                <Link
                  to="/SuggestionsPage"
                  className="mb-1 block hover:underline">
                  Təkliflər
                </Link>
                <Link to="/ContactPage" className="block hover:underline">
                  Əlaqə
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
