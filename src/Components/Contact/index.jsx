import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../Widgets/RobotChat";
import "./contact.css";
import useAnnounceStore from "../../../Stores/AnnounceStore";

const Contact = () => {
  const { addAnnounce, loading } = useAnnounceStore();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [queuedMessage, setQueuedMessage] = useState(null);
  const chatRef = useRef(null);

  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    mobil: "",
    mesaj: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.ad ||
      !formData.soyad ||
      !formData.email ||
      !formData.mobil ||
      !formData.mesaj
    ) {
      alert("Zəhmət olmasa bütün xanaları doldurun!");
      return;
    }
    await addAnnounce(formData);
    alert("Mesajınız göndərildi ✅");
    setFormData({ ad: "", soyad: "", email: "", mobil: "", mesaj: "" }); // form reset
  };

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
    <div className="md:px-[52px]">
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
                <div className="w-[290px] md:w-[477px] openSans md:mt-[80px] mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] md:rounded-[24px] p-[12px] md:p-0 md:ml-[500px] relative z-10">
                  <div className="flex flex-col items-start gap-[14px] md:p-[24px] ">
                    <div className="flex items-center openSans w-fit h-fit px-[8px] py-[6px] gap-[10px] rounded-[8px]">
                      <h2 className="text-[14px] text-[#3D246A] dark:text-[#E1DCE6] md:text-xl font-normal md:font-thin leading-[140%]">
                        Əgər xidmətlərimizlə bağlı sualınız yaranıbsa, bizimlə
                        əlaqə saxlayın.
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
              bottom: isChatOpen ? 450 : 410,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}>
            <div className="relative w-[150px] h-[180px]">
              {/* Mobile image */}

              {/* Desktop image */}
              <img
                id="SelnazHugeContact"
                src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1755507741/ChatGPT_Image_Jul_16_2025_07_12_28_PM-Photoroom-Photoroom-Photoroom_1_cynmor.png "
                alt="Selnaz Huge"
                className="absolute bottom-[-730px] hidden md:block pointer-events-none right-[-810px] z-[9999] cursor-auto"
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
                    className="absolute   md:w-[80px] md:h-[80px] w-[60px] h-[60px] bottom-[-315%] right-[-213px] md:bottom-[-707px] md:right-[-759px] z-[-1] flex justify-center items-center rounded-full shadow-md hover:scale-105 transition-transform"
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
                      className="w-[24px] h-[24px] md:w-[35px] md:h-[35px] ">
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
                        className="absolute bottom-[-910px] right-[-241px] md:bottom-[-830px] md:right-[-970px] z-[999]"
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
                      src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1755523661/ChatGPT_Image_Jul_16_2025_07_12_28_PM-Photoroom-Photoroom-Photoroom_2_hvtbt5.png"
                      alt="Selnaz"
                      className="relative bottom-[-570px] z-[9999] right-[-257px] block md:hidden cursor-auto pointer-events-none"
                      style={{ width: "122px", height: "189px" }}
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
      <div className="p-4">
        <div className="flex items-start mt-[50px] justify-start w-[256px]">
          <h2 className="text-[#3D246A] dark:text-[#E1DCE6] text-[26px] font-bold montserrat">
            Bizimlə Əlaqə
          </h2>
        </div>
      </div>
  <form className="p-4 openSans" onSubmit={handleSubmit}>
        <div className="md:flex md:gap-[12px]">
          <div>
            <div className="relative w-full md:w-[476.5px] mt-6">
              <input
                type="text"
                id="ad"
                placeholder="Ad"
                value={formData.ad}
                onChange={handleChange}
                className="peer w-full px-[20px] py-4 text-[#3D246A] placeholder:text-[#3D246A] italic text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
            </div>

            <div className="relative md:w-[476.5px] md:mt-3 w-full mt-6">
              <input
                type="text"
                id="soyad"
                placeholder="Soyad"
                value={formData.soyad}
                onChange={handleChange}
                className="w-full px-[20px] py-4 text-[#3D246A] italic text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
            </div>

            <div className="relative md:w-[476.5px] md:mt-3 w-full mt-6">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full px-[20px] py-4 text-[#3D246A] italic text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
            </div>

            <div className="relative md:w-[476.5px] md:mt-3 w-full mt-6">
              <input
                type="tel"
                id="mobil"
                placeholder="Mobil Nömrə"
                value={formData.mobil}
                onChange={handleChange}
                className="peer w-full px-[20px] py-4 text-[#3D246A] italic text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="relative md:w-[659px] w-full mt-6">
              <textarea
                id="mesaj"
                placeholder="Mesaj"
                rows={6}
                value={formData.mesaj}
                onChange={handleChange}
                className="peer w-full md:h-[250px] px-[20px] py-2 text-[#3D246A] italic text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none resize-none"></textarea>
            </div>
          </div>
        </div>
        <div className="montserrat mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#3D246A] md:w-[110px] md:px-[24px] dark:text-[#E1DCE6] md:py-3 md:text-base py-4 px-[140.5px] w-full rounded-[24px] text-white text-xl font-semibold disabled:opacity-50">
            {loading ? "Göndərilir..." : "Göndər"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
