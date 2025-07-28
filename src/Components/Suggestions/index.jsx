import React from "react";
import SelnazHome from "../../assets/images/SelnazSuggestions.svg";
import Vector from "../../assets/images/Vector.svg";

const Suggestions = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center relative">
        {/* Mesaj qutusu */}
        <div className="w-[290px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] relative z-10">
          <div className="flex flex-col items-start gap-[14px]">
            <div className="flex items-center w-fit h-fit text-[#3D246A] px-[8px] py-[6px] gap-[10px] rounded-[8px]">
              <span className="text-[14px] font-normal italic leading-[140%]">
                Ehtiyacına uyğun planı seç — gizli ödənişlər yoxdur, yalnız
                ağıllı funksiyalar və şəffaf qiymətlər
              </span>
            </div>
          </div>

          <div className="fixed z-50" style={{ bottom: "0px", right: "0px" }}>
            <div
              className="relative"
              style={{ width: "150px", height: "180px" }}>
              <img
                src={SelnazHome}
                alt="Selnaz"
                style={{
                  bottom: "-164px",
                  right: "-64px",
                  position: "absolute",
                }}
                className="absolute z-20"
              />

              <button
                className="absolute z-30"
                style={{
                  bottom: "-140px",
                  right: "-36px",
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
      <div className="p-4">
        <div className="flex items-start mt-[50px] justify-start w-[256px]">
          <h2 className="text-[#3D246A]  text-[26px] font-bold  montserrat">
            Ağıllı Həllər
            <br />
            Şəffaf Qiymətlər
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
