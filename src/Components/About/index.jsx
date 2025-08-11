import React, { useState, useRef, useEffect } from "react";
import SelnazHome from "../../assets/images/selnazHome.svg";
import Vector from "../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../assets/images/selnazHomeHuge.png";
import RobotChat from "../../Widgets/RobotChat";

const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isChatOpen &&
        chatRef.current &&
        !chatRef.current.contains(event.target)
      ) {
        closeChat();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  return (
    <div>
      <div className="w-full flex items-center justify-center relative">
        <div className="w-[290px] md:w-[477px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10">
          <div className="flex flex-col items-start gap-[14px] md:px-[24px] md:py-[24px]">
            <div className="flex items-center openSans w-fit h-fit px-[8px] py-[6px] gap-[10px] rounded-[8px]">
              <span className="text-[14px] text-[#3D246A] dark:text-[#E1DCE6] md:text-xl font-normal md:font-thin leading-[140%]">
                Artıq təxminlər yox, dəqiq analiz və real nəticələr dövrüdür
              </span>
            </div>
          </div>

          <div className="fixed z-50" style={{ bottom: 20, right: 20 }}>
            <div
              className="relative"
              style={{ width: "150px", height: "180px" }}>
              {/* Mobile image */}
              <img
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899492/selnazHome_qfd76w.svg"
                alt="Selnaz"
                style={{
                  bottom: "-108px",
                  right: "-64px",
                  position: "absolute",
                  pointerEvents: "none",
                }}
                className="absolute z-20 block md:hidden"
              />

              {/* Desktop image */}
              <img
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899404/selnazHomeHuge_ykxu2u.png"
                alt="Selnaz Huge"
                className="absolute bottom-[-164px] hidden md:block right-[-85px] z-20"
              />

              {/* Button */}
              {!isChatOpen && (
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
              )}

              {/* RobotChat window */}
              {isChatOpen && (
                <div
                  ref={chatRef}
                  className="fixed z-[9999] md:bottom-[-550px] md:right-[-140px] bottom-[-500px] right-[-30px]"
                  style={{
                    width: "320px",
                    height: "420px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    borderRadius: "16px",
                    backgroundColor: "white",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <div
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={closeChat}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <RobotChat />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-[74px] md:p-[54px] ">
        <div className="md:flex md:flex-col md:gap-[24px] md:mb-[24px]">
          <div className="flex items-start justify-start md:w-[775px] w-[256px]">
            <h2 className="text-[#3D246A] text-[22px] md:text-[40px] font-bold montserrat flex flex-col md:flex-row md:items-center md:justify-center md:gap-2 text-center">
              <span className="text-[#5B2E91] dark:text-[#E1DCE6] text-[26px] md:text-[46px]">
                Biznesə
              </span>
              <span className="md:ml-2 dark:text-[#E1DCE6]">Yeni Baxış</span>
            </h2>
          </div>
          <div className="flex items-start mt-3 justify-start">
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
