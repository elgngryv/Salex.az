import React, { useEffect, useState, useRef } from "react";
import SelnazHome from "../../assets/images/solutionssel.svg";
import Vector from "../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../assets/images/HellyollarıHuge.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../Widgets/RobotChat";

const Solutions = () => {
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
              className="flex items-center openSans  w-fit h-fit  px-[8px] py-[6px] gap-[10px] rounded-[8px]"
              data-aos="fade-up"
              data-aos-delay="300">
              <span className="text-[14px] text-[#3D246A] md:text-xl font-normal md:font-thin  dark:text-[#E1DCE6] leading-[140%]">
                Problemləri analiz etdik və onları aradan qaldırmaq üçün ağıllı
                və effektiv yollar yaratdıq
              </span>
            </div>
          </div>

          <div className="fixed z-50" style={{ bottom: "0px", right: "0px" }}>
            <div
              className="relative"
              style={{ width: "150px", height: "180px" }}>
              <img
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899485/Hellyollar%C4%B1_tdyhek.svg"
                alt="Selnaz"
                style={{
                  bottom: "-108px",
                  right: "-64px",
                  position: "absolute",
                }}
                className="absolute z-20 block md:hidden"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              <img
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899484/Hellyollar%C4%B1Huge_zhvpne.svg"
                alt="Selnaz Huge"
                className="absolute bottom-[-138px] hidden md:block right-[-75px] z-20"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              {!isChatOpen && (
                <button
                  onClick={toggleChat}
                  className="absolute md:w-[110px] md:h-[110px] z-30 flex justify-center items-center rounded-full shadow-md w-[60px] h-[60px] bottom-[-122px] right-[-40px] md:bottom-[-220px] md:right-[-64px]"
                  style={{ backgroundColor: "#5B2E91" }}
                  data-aos="fade-left"
                  data-aos-delay="250">
                  <img
                    src={Vector}
                    alt="Vector"
                    className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]"
                  />
                </button>
              )}

              {isChatOpen && (
                <div
                  ref={chatRef}
                  className="fixed z-50 md:bottom-[-550px] md:right-[-140px] bottom-[-500px] right-[-30px]"
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
                  <div className="flex justify-between items-center p-2 bg-[#5B2E91]">
                    <div className="text-white font-semibold px-2">Selnaz</div>
                    <div
                      className="cursor-pointer p-1 rounded-full hover:bg-purple-700"
                      onClick={closeChat}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                  </div>
                  <RobotChat />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-[74px] md:p-[54px]">
        <div className="md:flex  md:flex-col md:gap-[24px] md:mb-[24px]">
          <div
            className="flex items-start mb-[24px] justify-start  md:w-[775px] w-[256px]"
            data-aos="fade-up"
            data-aos-delay="500">
            <h2 className="text-[#3D246A] md:text-[40px] dark:text-[#E1DCE6] text-[22px] font-bold  montserrat">
              <span className="text-[#3D246A]  dark:text-[#E1DCE6] text-[26px] md:text-[46px]">
                Problemlər
              </span>{" "}
            </h2>
          </div>
          <div className="openSans flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-5">
              {/* Kart 1 */}
              <div className="px-[32px] md:w-[422px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Yönləndirmə yoxdur
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Canlı satış meneceri olmadığından <br /> müştəri nə alacağını
                  bilmir
                </p>
              </div>

              {/* Kart 2 */}
              <div className="px-[32px] md:w-[513px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Zamanında geri dönüş yoxdur
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Bayram, kampaniya və ad günləri{" "}
                  <br className="dark:text-[#E1DCE6]" /> unudulur, müştəri
                  münasibəti zəifləyir
                </p>
              </div>

              {/* Kart 3 */}
              <div className="px-[32px] md:w-[427px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Parçalanmış platformalar
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Sayt, sosial şəbəkələr və WhatsApp <br /> arasında məlumatlar
                  itir
                </p>
              </div>

              {/* Kart 4 */}
              <div className="px-[32px] md:w-[463px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Emosional bağ qurulmur
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Standart cavablar müştərinin marağını <br /> çəkmir, çevrilmə
                  azalır
                </p>
              </div>

              {/* Kart 5 */}
              <div className="px-[32px] md:w-[387px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Ehtiyac analizi aparılmır
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Sistem müştərinin nə istədiyini anlamır
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
