import React, { useEffect, useState, useRef } from "react";
import SugSel from "../../assets/images/Sugsel.svg";
import SugselHuge from "../../assets/images/SugselHUge.svg";
import Vector from "../../assets/images/Vector.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../Widgets/RobotChat";

const Suggestions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
        <div
          className="w-[290px] md:w-[477px] openSans mt-[10px] border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10"
          data-aos="zoom-out-down"
          data-aos-delay="500">
          <div className="flex flex-col items-start gap-[14px] md:px-[24px] md:py-[24px]">
            <div
              className="flex items-center openSans w-fit h-fit px-[8px] py-[6px] gap-[10px] rounded-[8px]"
              data-aos="fade-up"
              data-aos-delay="300">
              <span className="text-[14px] dark:text-[#E1DCE6] text-[#3D246A] md:text-xl font-normal md:font-thin leading-[140%]">
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
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899498/Sugsel_hufr6k.svg"
                alt="Selnaz"
                style={{
                  bottom: "-150px",
                  right: "-64px",
                  position: "absolute",
                  pointerEvents: "none",
                }}
                className="absolute z-20 block md:hidden"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              <img
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899498/SugselHUge_dkplvk.svg"
                alt="Selnaz Huge"
                className="absolute bottom-[-164px] w-[200px] h-[299px] hidden md:block right-[-85px] z-20"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              {/* BUTTON yalnız isChatOpen false olanda göstərilsin */}
              {!isChatOpen && (
                <button
                  onClick={toggleChat}
                  className="absolute md:w-[110px] md:h-[110px] z-30 flex justify-center items-center rounded-full shadow-md w-[60px] h-[60px] bottom-[-122px] right-[-40px] md:bottom-[-170px] md:right-[-68px]"
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
              )}

              {/* RobotChat açıq olanda */}
              {isChatOpen && (
                <div
                  ref={chatRef}
                  className="fixed z-50 md:bottom-[-490px] md:right-[-140px] bottom-[-500px] right-[-30px]"
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
      <div className="p-4">
        <div className="flex items-start mt-[50px] justify-start w-[256px]">
          <h2 className="text-[#3D246A] dark:text-[#E1DCE6] text-[26px] font-bold montserrat">
            Ağıllı Həllər
            <br className="dark:text-[#E1DCE6]" />
            Şəffaf Qiymətlər
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
