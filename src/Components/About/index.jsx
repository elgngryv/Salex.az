import React, { useState } from "react";
import SelnazHome from "../../assets/images/selnazHome.svg";
import Vector from "../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../assets/images/selnazHomeHuge.png";
import RobotChat from "../../Widgets/RobotChat";
const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="w-full flex items-center justify-center relative">
        <div className="w-[290px] md:w-[477px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10">
          <div className="flex flex-col items-start gap-[14px] md:px-[24px] md:py-[24px]">
            {/* Salam mesajı */}
            <div className="flex items-center openSans   w-fit h-fit  px-[8px] py-[6px] gap-[10px] rounded-[8px]">
              <span className="text-[14px] text-[#3D246A] dark:text-[#E1DCE6] md:text-xl font-normal md:font-thin  leading-[140%]">
                Artıq təxminlər yox, dəqiq analiz və real nəticələr dövrüdür
              </span>
            </div>
          </div>

          {/* Şəkillər və button */}
          <div className="fixed z-50" style={{ bottom: "0px", right: "0px" }}>
            <div
              className="relative"
              style={{ width: "150px", height: "180px" }}>
              {/* Mobil üçün */}
              <img
                src={SelnazHome}
                alt="Selnaz"
                style={{
                  bottom: "-108px",
                  right: "-64px",
                  position: "absolute",
                  pointerEvents: "none",
                }}
                className="absolute z-20 block md:hidden"
              />

              {/* Desktop üçün böyük şəkil */}
              <img
                src={SelnazHomeHuge}
                alt="Selnaz Huge"
                className="absolute bottom-[-164px] hidden md:block right-[-85px] z-20"
              />

              {/* Button */}
              <button
                onClick={toggleChat}
                className="absolute md:w-[110px] md:h-[110px] z-10 flex justify-center items-center rounded-full shadow-md w-[60px] h-[60px] bottom-[-126px] right-[-32px] md:bottom-[-220px] md:right-[-64px]"
                style={{ backgroundColor: "#5B2E91" }}>
                <img
                  src={Vector}
                  alt="Vector"
                  className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]"
                  style={{ pointerEvents: "none" }}
                />
              </button>
              {/* RobotChat Pəncərəsi */}
              {isChatOpen && (
                <div
                  className="fixed z-50 md:bottom-[-300px] md:right-[60px] right-[30px] "
                  style={{
                    bottom: "-500px",
                    width: "320px",
                    height: "420px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    borderRadius: "16px",
                    backgroundColor: "white",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <RobotChat />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-[74px] md:p-[54px] ">
        <div className="md:flex md:flex-col md:gap-[24px] md:mb-[24px]">
          <div className="flex items-start  justify-start  md:w-[775px] w-[256px]">
            <h2 className="text-[#3D246A] text-[22px] md:text-[40px] font-bold montserrat flex flex-col md:flex-row md:items-center md:justify-center md:gap-2 text-center">
              <span className="text-[#5B2E91] dark:text-[#E1DCE6] text-[26px] md:text-[46px]">
                Biznesə
              </span>
              <span className="md:ml-2 dark:text-[#E1DCE6]">Yeni Baxış</span>
            </h2>
          </div>
          <div className="flex items-start mt-3  justify-start ">
            <h2 className="font-normal dark:text-[#E1DCE6] md:w-[1013px] md:h-[155px] openSans md:text-[22px] w-[358px] text-base md:leading-[140%] text-[#3D246A] openSans">
              Selnaz — süni intellekt əsaslı rəqəmsal satış meneceridir. Müştəri
              mesajlarını toplayır, sualları cavablandırır, ehtiyacları təhlil
              edir və onları satış fürsətlərinə çevirir. Real vaxtda çalışan
              Selnaz, bizneslərin onlayn mühitdə müştəri ilə effektiv əlaqə
              qurmasını və satışlarını artırmasını təmin edir. Selnaz, SaleX
              komandası tərəfindən inkişaf etdirilib və müasir satış
              yanaşmalarını süni intellektlə birləşdirərək bizneslərə 24/7 satış
              dəstəyi təqdim edir.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
