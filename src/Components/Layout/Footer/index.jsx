import React from "react";
import FooterLogo from "../../../assets/images/Footer-logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-[#3D246A]  p-4 mt-[100px] openSans    w-full pt-[94px] bottom-0 left-0"
      style={{ zIndex: 1000 }}>
      <div className=" ">
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
      <div className="mt-10 flex justify-between">
        {/* 1 */}
        <div>
          <div className="text-white mb-4">
            <h2 className="font-extrabold text-base ">Sürətli Menü</h2>
          </div>
          <div className="text-white">
            <p className="font-thin text-base">Ana Səhifə</p>
            <p className="font-thin text-base">Haqqımızda </p>
            <p className="font-thin text-base">Həll Yolları</p>
            <p className="font-thin text-base">Təkliflər</p>
            <p className="font-thin text-base">Əlaqə</p>
          </div>
        </div>
        {/* 1 */}
        {/* 2 */}
        <div>
          <div className="mb-4">
            <h2 className="font-extrabold text-base text-white">
              Əlaqə və Sosial media
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-[6px]">
              <FaInstagram className="text-[#E1DCE6] w-[24px] h-[24px]" />
              <p className="font-thin text-base text-[#E1DCE6]">@salex.az</p>
            </div>
            <div className="flex gap-[6px]">
              <FaLinkedin className="text-[#E1DCE6] w-[24px] h-[24px]" />
              <p className="font-thin text-base text-[#E1DCE6]">@salex</p>
            </div>
            <div className="flex gap-[6px]">
              <FaFacebook className="text-[#E1DCE6] w-[24px] h-[24px]" />
              <p className="font-thin text-base text-[#E1DCE6]">@salex.az</p>
            </div>
          </div>
          <div className="mt-[22px]">
            <div>
              <h2 className="font-extrabold text-base mb-[16px]  text-white">
                Məlumat
              </h2>
            </div>
            <div>
              <h2 className="font-thin text-base text-white ">
                Məxfilik Siyasəti
              </h2>
              <h2 className="font-thin text-base text-white ">
                İstifadə Şərtləri
              </h2>
            </div>
          </div>
        </div>
        {/* 2 */}
      </div>
    </div>
  );
};

export default Footer;
