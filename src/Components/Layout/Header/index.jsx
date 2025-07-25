import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import Headerlogo from "../../../assets/images/logo.svg";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky z-50 p-4 openSans mb-[24px] transition-all duration-300 ${
        isAtTop ? "top-4" : "top-0"
      }`}>
      <div
        className={`w-full flex items-start transition-all duration-500
          border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150
          p-[18px] rounded-[12px] relative overflow-visible
          ${collapsed ? "h-[300px]" : "h-[86px]"}
          ${collapsed ? "-translate-x-[200px]" : "translate-x-0"}
        `}>
        {/* Logo */}
        <div
          className={`transition-opacity duration-500 ${
            collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}>
          <img src={Headerlogo} alt="Headerlogo" />
        </div>

        {/* Sağ tərəf */}
        <div className="ml-auto flex items-center gap-4 relative">
          <button className="bg-[#3D246A] font-semibold text-base montserrat text-white px-[24px] py-3 rounded-[24px]">
            Daxil ol
          </button>

          {collapsed && (
            <div className="absolute top-full left-0 w-full mt-4 font-normal text-[18px] px-6 py-[18px] text-[#3D246A]  ">
              <h2 className="mb-2 font-semibold">Haqqımızda</h2>
              <p className="mb-1 cursor-pointer hover:underline">
                Həll Yolları
              </p>
              <p className="mb-1 cursor-pointer hover:underline">Təkliflər</p>
              <p className="cursor-pointer hover:underline">Əlaqə</p>
            </div>
          )}

          {/* Hamburger + "AZ" + ox eyni sətirdə */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setCollapsed(!collapsed)}>
            {collapsed && (
              <div className="flex items-center gap-1 text-[#3D246A] font-semibold">
                <h2>AZ</h2>
                <GoChevronDown size={20} />
              </div>
            )}
            {/* Hamburger həmişə görünür */}
            <RxHamburgerMenu className="text-3xl text-[#3D246A] font-extrabold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;