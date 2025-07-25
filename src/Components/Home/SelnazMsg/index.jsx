import React from "react";
import SelnazHome from "../../../assets/images/selnazHome.svg";
import Vector from "../../../assets/images/Vector.svg";

const SelnazMsg = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      {/* Mesaj qutusu */}
      <div className="w-[290px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] relative z-10">
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
            {/* Şəkil - sağ küncdə (z-20 ilə ön planda) */}
            <img
              src={SelnazHome}
              alt="Selnaz"
              style={{ bottom: "-108px", right: "-64px", position: "absolute" }}
              className="absolute z-20"
            />

            {/* Button - şəkilin altında (z-10 ilə) */}
            <button
              className="absolute z-30"
              style={{
                bottom: "-126px",
                right: "-32px",
                backgroundColor: "#5B2E91",
                width: "60px",
                height: "60px",
                borderRadius: "9999px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}>
              <img
                src={Vector}
                alt="Vector"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelnazMsg;
