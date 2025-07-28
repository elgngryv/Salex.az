import React from "react";
import SelnazHome from "../../../assets/images/selnazHome.svg";
import Vector from "../../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../../assets/images/selnazHomeHuge.png";

const SelnazMsg = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      {/* Mesaj qutusu */}
      <div className="w-[290px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10">
        <div className="flex flex-col items-start gap-[14px]">
          <div className="flex items-center w-fit h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-[8px]">
            <span className="text-[12px] font-normal italic leading-[140%]">
              Salam mən Selnazam
            </span>
          </div>

          <div className="flex items-center w-fit h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-[8px]">
            <span className="text-[12px] font-normal italic leading-[140%]">
              Şirkətlər mənimlə satışlarını 30% artırır, sən də artırmaq
              istəyərsən? 🤩
            </span>
          </div>

          <div className="flex w-full gap-2 mt-2">
            <button className="w-full flex items-center h-[26px]  px-3 border font-normal text-[10px] text-[#3D246A]  py-[6px] bg-[#E1DCE6] rounded-[20px]">
              Bəli,istərdim!😄
            </button>
            <button className="w-full flex h-[26px] items-center px-3 border font-normal text-[10px] text-[#3D246A]  py-[6px] bg-[#E1DCE6] rounded-[20px]">
              Bəli, çox istərdim! 😄
            </button>
          </div>
        </div>
        <div className="fixed z-50" style={{ bottom: "0px", right: "0px" }}>
          <div className="relative" style={{ width: "150px", height: "180px" }}>
            <img
              src={SelnazHome}
              alt="Selnaz"
              style={{ bottom: "-108px", right: "-64px", position: "absolute" }}
              className="absolute z-20 block md:hidden"
            />
            <img
              src={SelnazHomeHuge}
              alt="Selnaz Huge"
              className="absolute bottom-[-164px] hidden md:block right-[-85px] z-20 "
            />

            <button
              className="absolute md:w-[110px] md:h-[110px] z-10 flex justify-center items-center rounded-full shadow-md 
         w-[60px] h-[60px] 
         bottom-[-126px] right-[-32px] 
         md:bottom-[-220px] md:right-[-64px]"
              style={{
                backgroundColor: "#5B2E91",
              }}>
              <img
                src={Vector}
                alt="Vector"
                className="w-[24px] h-[24px]  md:w-[35px] md:h-[35px] "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelnazMsg;
