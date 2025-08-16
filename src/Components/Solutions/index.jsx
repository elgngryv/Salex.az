import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SelnazHome from "../../assets/images/solutionssel.svg";
import Vector from "../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../assets/images/HellyollarıHuge.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../Widgets/RobotChat";

const Solutions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [queuedMessage, setQueuedMessage] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleChatClose = () => {
    setQueuedMessage(null);
    setIsChatOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        handleChatClose();
      }
    };
    if (isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  return (
    <div>
      <div className="w-full flex md:h-[100%] mx-auto items-center justify-center relative">
        <div>
          <AnimatePresence>
            {!isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                data-aos="zoom-out-down"
                data-aos-delay="500">
                <div className="w-[290px] md:w-[477px] openSans md:mt-[80px] mt-[10px]  dark:border-none/20 md:p-0 md:rounded-[24px] bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10">
                  <div className="flex flex-col items-start gap-[14px] md:p-[24px] ">
                    <div className="flex items-center openSans w-fit h-fit px-[8px] py-[6px] gap-[10px] rounded-[8px]">
                      <h2 className="text-[14px] text-[#3D246A] dark:text-[#E1DCE6] md:text-xl font-normal md:font-thin leading-[140%]">
                        Problemləri analiz etdik və onları aradan qaldırmaq üçün
                        ağıllı və effektiv yollar yaratdıq
                      </h2>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Selnaz images and button */}
        <div className="fixed z-[9999] ">
          <motion.div
            className="absolute z-[9999] right-[50px] md:right-[250px]"
            initial={false}
            animate={{
              bottom: isChatOpen ? 480 : 410,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}>
            <div className="relative w-[150px] h-[180px]">
              {/* Mobile image */}

              {/* Desktop image */}
              <img
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1755259653/Vector_wt1wkm.png"
                alt="Selnaz Huge"
                className="absolute  bottom-[-700px] hidden md:block right-[-775px] z-[9999] cursor-auto"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              {/* Round button - only show when chat is closed */}
              <AnimatePresence>
                {!isChatOpen && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={toggleChat}
                    className="absolute   md:w-[80px] md:h-[80px] w-[60px] h-[60px] bottom-[-334%] right-[-202px] md:bottom-[-750px] md:right-[-751px] z-[9999] flex justify-center items-center rounded-full shadow-md hover:scale-105 transition-transform"
                    style={{ backgroundColor: "#5B2E91" }}
                    data-aos="fade-left"
                    data-aos-delay="250">
                    {/* Inline SVG chat icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]">
                      <path
                        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
                        fill="white"
                      />
                      <circle cx="7" cy="9" r="1" fill="white" />
                      <circle cx="12" cy="9" r="1" fill="white" />
                      <circle cx="17" cy="9" r="1" fill="white" />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Chat window with animation */}
              <div className="absolute">
                <div className="md:container md:mx-auto md:max-w-[1336px] relative">
                  <AnimatePresence>
                    {isChatOpen && (
                      <motion.div
                        ref={chatRef}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute bottom-[-950px] right-[-220px] md:bottom-[-880px] md:right-[-990px] z-[999]"
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
                        <RobotChat
                          queuedMessage={queuedMessage}
                          onClose={handleChatClose}
                          onMessageSent={() => setQueuedMessage(null)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative w-full h-[200px] md:h-[400px]">
                    <img
                      src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899485/Hellyollar%C4%B1_tdyhek.svg"
                      alt="Selnaz"
                      className="relative bottom-[-620px] z-[999] right-[-240px] block md:hidden cursor-auto pointer-events-none"
                      style={{ width: "138px", height: "138px" }}
                      data-aos="fade-right"
                      data-aos-delay="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="p-4 mt-[74px]   md:px-[60px]">
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
              <div className="px-[32px] md:w-[422px] py-[24px] flex flex-col gap-2.5 border dark:border-none bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Yönləndirmə yoxdur
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Canlı satış meneceri olmadığından <br /> müştəri nə alacağını
                  bilmir
                </p>
              </div>

              {/* Kart 2 */}
              <div className="px-[32px] md:w-[513px] py-[24px] flex flex-col gap-2.5 border dark:border-none bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
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
              <div className="px-[32px] md:w-[427px] py-[24px] flex flex-col gap-2.5 border dark:border-none bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Parçalanmış platformalar
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Sayt, sosial şəbəkələr və WhatsApp <br /> arasında məlumatlar
                  itir
                </p>
              </div>

              {/* Kart 4 */}
              <div className="px-[32px] md:w-[463px] py-[24px] flex flex-col gap-2.5 border dark:border-none bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Emosional bağ qurulmur
                </h2>
                <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
                  Standart cavablar müştərinin marağını <br /> çəkmir, çevrilmə
                  azalır
                </p>
              </div>

              {/* Kart 5 */}
              <div className="px-[32px] md:w-[387px] py-[24px] flex flex-col gap-2.5 border dark:border-none bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
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
