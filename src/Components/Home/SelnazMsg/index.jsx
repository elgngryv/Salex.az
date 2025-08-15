import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../../Widgets/RobotChat";
// import GlassButton from "./GlassButton";

export default function SelnazMsg() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [queuedMessage, setQueuedMessage] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleCtaClick = (text) => {
    setQueuedMessage(text);
    setIsChatOpen(true);
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
    <div className="w-full flex md:h-[100%] mx-auto items-center justify-center relative">
      <div>
        {/* <GlassButton /> */}
        <AnimatePresence>
          {!isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-[290px] md:w-fit openSans mt-[10px] md:mt-[52px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[32px] p-[12px] md:p-0 md:ml-[450px] relative z-90"
              data-aos="zoom-out-down"
              data-aos-delay="500">
              <div className="flex flex-col items-start gap-[8px] md:px-[24px] md:py-[24px]">
                <div
                  className="flex items-center italic w-fit h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px]"
                  data-aos="fade-up"
                  data-aos-delay="300">
                  <span className="text-[12px] md:text-xl font-normal italic leading-[140%]">
                    Salam mən Selnazam
                  </span>
                </div>

                <div
                  className="flex items-center w-fit md:w-[429px] md:h-[68px] h-fit bg-[#D2B0FE] px-[8px] py-[6px] gap-[10px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-b"
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
                  <button
                    onClick={() => handleCtaClick("Bəli, istərdim! 😄")}
                    className="w-fit bg-[#3D246A]  md:bg-[#3D246A] md:text-white text-[10px]  md:text-[14px] openSans text-white  rounded-full px-3 py-[6px] md:py-3 md:px-[30px]  hover:opacity-80 transition-opacity">
                    Bəli, istərdim! 😄
                  </button>
                  <button
                    onClick={() => handleCtaClick("Bəli, çox istərdim! 😄")}
                    className="w-fit  md:bg-[#3D246A] bg-[#3D246A] md:text-white text-[10px]  md:text-[14px] openSans  text-white rounded-full px-3 py-[6px] md:py-3 md:px-[30px]  hover:opacity-80 transition-opacity">
                    Bəli, çox istərdim! 😄
                  </button>
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
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899404/selnazHomeHuge_ykxu2u.png"
              alt="Selnaz Huge"
              className="absolute bottom-[-720px] hidden md:block right-[-790px] z-[9999] cursor-auto"
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
                  className="absolute   md:w-[110px] md:h-[110px] w-[60px] h-[60px] bottom-[-350%] right-[-213px] md:bottom-[-780px] md:right-[-764px] z-[-1] flex justify-center items-center rounded-full shadow-md hover:scale-105 transition-transform"
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
            <div className="md:container md:mx-auto md:max-w-[1336px] relative">
              <AnimatePresence>
                {isChatOpen && (
                  <motion.div
                    ref={chatRef}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute bottom-[-980px] right-[-220px] md:bottom-[-880px] md:right-[-800px] z-[999]"
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
                  src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1755111062/SelnazHome_o3gwqg.png"
                  alt="Selnaz"
                  className="absolute bottom-[-590px] z-[9999] right-[-230px] block md:hidden cursor-auto pointer-events-none"
                  style={{ width: "96.62px", height: "144.98px" }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
