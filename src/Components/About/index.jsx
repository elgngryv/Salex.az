import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../Widgets/RobotChat";

const About = () => {
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
                <div className="w-[290px] md:w-[477px] openSans md:mt-[80px] mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10">
                  <div className="flex flex-col items-start gap-[14px] md:px-[24px] md:py-[24px]">
                    <div className="flex items-center openSans w-fit h-fit px-[8px] py-[6px] gap-[10px] rounded-[8px]">
                      <h2 className="text-[14px] text-[#3D246A] dark:text-[#E1DCE6] md:text-xl font-normal md:font-thin leading-[140%]">
                        Artıq təxminlər yox, dəqiq analiz və real nəticələr
                        dövrüdür
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
                    className="absolute   md:w-[110px] md:h-[110px] w-[60px] h-[60px] bottom-[-336%] right-[-213px] md:bottom-[-780px] md:right-[-764px] z-[-1] flex justify-center items-center rounded-full shadow-md hover:scale-105 transition-transform"
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
                        className="absolute bottom-[-940px] right-[-260px] md:bottom-[-880px] md:right-[-990px] z-[999]"
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
                      className="relative bottom-[-610px] z-[9999] right-[-280px] block md:hidden cursor-auto pointer-events-none"
                      style={{ width: "96.62px", height: "144.98px" }}
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
      <div className="p-4 md:container md:max-w-[1336px] md:mx-auto mt-[74px]  ">
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
