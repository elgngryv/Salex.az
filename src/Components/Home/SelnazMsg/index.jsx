import React, { useEffect, useState } from "react";
import SelnazHome from "../../../assets/images/selnazHome.svg";
import Vector from "../../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../../assets/images/selnazHomeHuge.png";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../../Widgets/RobotChat";

const SelnazMsg = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex items-center justify-center relative ">
      <div
        className="w-[290px] md:w-[477px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10"
        data-aos="zoom-out-down"
        data-aos-delay="500">
        {/* Mesaj hissələri */}
        <div className="flex flex-col items-start gap-[14px] md:px-[24px] md:py-[24px]">
          <div
            className="flex items-center italic w-fit h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-[8px]"
            data-aos="fade-up"
            data-aos-delay="300">
            <span className="text-[12px] md:text-xl font-normal italic leading-[140%]">
              Salam mən Selnazam
            </span>
          </div>

          <div
            className="flex items-center w-fit md:w-[429px] md:h-[68px] h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-[8px]"
            data-aos="fade-up"
            data-aos-delay="500">
            <span className="text-[12px] md:text-xl font-normal italic leading-[140%]">
              Şirkətlər mənimlə satışlarını 30% artırır, sən də
              <br className="hidden md:inline" />
              artırmaq istəyərsən? 🤩
            </span>
          </div>

          <div
            className="flex w-full gap-2 mt-2"
            data-aos="fade-up"
            data-aos-delay="700">
            <button className="w-full md:bg-[#3D246A] md:text-white text-[10px] bg-[#E1DCE6] text-[#3D246A] rounded-[20px] px-3 py-[6px]">
              Bəli, istərdim! 😄
            </button>
            <button className="w-full md:bg-[#3D246A] md:text-white text-[10px] bg-[#E1DCE6] text-[#3D246A] rounded-[20px] px-3 py-[6px]">
              Bəli, çox istərdim! 😄
            </button>
          </div>
        </div>

        {/* Selnaz şəkilləri və Button */}
        <div className="fixed z-50 bottom-0 right-0 ">
          <div className="relative w-[150px] h-[180px]">
            {/* Mobil */}
            <img
              src={SelnazHome}
              alt="Selnaz"
              className="absolute z-20 block md:hidden cursor-auto"
              style={{
                bottom: "-108px",
                right: "-64px",
                pointerEvents: "none",
              }}
              data-aos="fade-right"
              data-aos-delay="100"
            />
            {/* Desktop */}
            <img
              src={SelnazHomeHuge}
              alt="Selnaz Huge"
              className="absolute bottom-[-164px] hidden md:block right-[-85px] z-20"
              data-aos="fade-right"
              data-aos-delay="100"
            />

            {/* Dairəvi Button */}
            <button
              onClick={toggleChat}
              className="absolute md:w-[110px] md:h-[110px] w-[60px] h-[60px] bottom-[-126px] right-[-32px] md:bottom-[-220px] md:right-[-64px] z-10 flex justify-center items-center rounded-full shadow-md"
              style={{ backgroundColor: "#5B2E91" }}
              data-aos="fade-left"
              data-aos-delay="250">
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
                className="fixed z-50 bottom-[550px]  md:bottom-[-650px] md:right-[-170px] right-[-30px] "
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
                <RobotChat />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelnazMsg;
