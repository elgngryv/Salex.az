import React, { useEffect } from "react";
import SelnazHome from "../../../assets/images/selnazHome.svg";
import Vector from "../../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../../assets/images/selnazHomeHuge.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SelnazMsg = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full flex items-center justify-center relative">
      <div
        className="w-[290px] md:w-[477px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10"
        data-aos="zoom-out-down"
        data-aos-delay="500">
        <div className="flex flex-col items-start gap-[14px] md:px-[24px] md:py-[24px]">
          {/* Salam mesajı */}
          <div
            className="flex items-center openSans italic w-fit h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-[8px]"
            data-aos="fade-up"
            data-aos-delay="300">
            <span className="text-[12px] md:text-xl font-normal md:font-thin italic leading-[140%]">
              Salam mən Selnazam
            </span>
          </div>

          {/* Satış mesajı */}
          <div
            className="flex items-center w-fit md:w-[429px] md:h-[68px] h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-[8px]"
            data-aos="fade-up"
            data-aos-delay="500">
            <span className="text-[12px] md:text-xl font-normal md:font-thin italic leading-[140%]">
              Şirkətlər mənimlə satışlarını 30% artırır, sən də
              <br className="hidden md:inline" />
              artırmaq istəyərsən? 🤩
            </span>
          </div>

          {/* Düymələr */}
          <div
            className="flex w-full openSans md:items-center md:text-center gap-2 mt-2"
            data-aos="fade-up"
            data-aos-delay="700">
            <button className="w-full md:bg-[#3D246A] md:text-white md:text-sm md:w-[178px] flex items-center md:h-[42px] h-[26px] md:px-[30px] md:py-2.5 px-3 border font-normal text-[10px] text-[#3D246A] py-[6px] bg-[#E1DCE6] rounded-[20px]">
              Bəli, istərdim! 😄
            </button>
            <button className="w-full md:bg-[#3D246A] md:text-white md:w-[208px] md:text-sm md:h-[42px] md:px-[30px] md:py-2.5 flex h-[26px] items-center px-3 border font-normal text-[10px] text-[#3D246A] py-[6px] bg-[#E1DCE6] rounded-[20px]">
              Bəli, çox istərdim! 😄
            </button>
          </div>
        </div>

        {/* Şəkillər və button */}
        <div className="fixed z-50" style={{ bottom: "0px", right: "0px" }}>
          <div className="relative" style={{ width: "150px", height: "180px" }}>
            {/* Mobil üçün */}
            <img
              src={SelnazHome}
              alt="Selnaz"
              style={{ bottom: "-108px", right: "-64px", position: "absolute" }}
              className="absolute z-20 block md:hidden"
              data-aos="fade-right"
              data-aos-delay="100"
            />

            {/* Desktop üçün böyük şəkil */}
            <img
              src={SelnazHomeHuge}
              alt="Selnaz Huge"
              className="absolute bottom-[-164px] hidden md:block right-[-85px] z-20"
              data-aos="fade-right"
              data-aos-delay="100"
            />

            {/* Button */}
            <button
              className="absolute md:w-[110px] md:h-[110px] z-10 flex justify-center items-center rounded-full shadow-md w-[60px] h-[60px] bottom-[-126px] right-[-32px] md:bottom-[-220px] md:right-[-64px]"
              style={{ backgroundColor: "#5B2E91" }}
              data-aos="fade-left"
              data-aos-delay="250">
              <img
                src={Vector}
                alt="Vector"
                className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelnazMsg;
