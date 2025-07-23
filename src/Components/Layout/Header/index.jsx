import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Headerlogo from "../../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="w-full  h-[152px] flex items-center">
      <div className="w-full flex justify-between items-center border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]  bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 p-[18px] rounded-[12px] mx-4">
        {/* Logo */}
        <div>
          <img src={Headerlogo} alt="Headerlogo" />
        </div>

        <div className="flex items-center gap-2">
          <div>
            <button className="bg-[#3D246A] font-semibold text-base montserrat text-white px-[24px] py-3 rounded-[24px]">
              Daxil ol
            </button>
          </div>
          <div className="   cursor-pointer">
            <RxHamburgerMenu className="text-2xl   text-[#3D246A] font-extrabold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
