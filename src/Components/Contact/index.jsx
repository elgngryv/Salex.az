import React, { useEffect, useState } from "react";
import SelnazHome from "../../assets/images/SelnazContact.svg";
import SelnazHuge from "../../assets/images/ELageHuge.svg";
import Vector from "../../assets/images/Vector.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import RobotChat from "../../Widgets/RobotChat";
const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };
  return (
    <div className="mb-[400px] md:mb-[650px] md:px-[52px]">
      {/* Mesaj qutusu */}
      <div className="w-full flex items-center justify-center relative">
        <div
          className="w-[290px] md:w-[477px] openSans mt-[10px] border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] md:ml-[500px] relative z-10"
          data-aos="zoom-out-down"
          data-aos-delay="500">
          <div className="flex flex-col items-start gap-[14px] md:px-[24px] md:py-[24px]">
            {/* Salam mesajı */}
            <div
              className="flex items-center openSans  w-fit h-fit  px-[8px] py-[6px] gap-[10px] rounded-[8px]"
              data-aos="fade-up"
              data-aos-delay="300">
              <span className="text-[14px] text-[#3D246A] md:text-xl font-normal md:font-thin  leading-[140%]">
                Ehtiyacına uyğun planı seç — gizli ödənişlər yoxdur, yalnız
                ağıllı funksiyalar və şəffaf qiymətlər
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
                  bottom: "-150px",
                  right: "-64px",
                  position: "absolute",
                  pointerEvents: "none",
                }}
                className="absolute z-20 block md:hidden"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              {/* Desktop üçün böyük şəkil */}
              <img
                style={{
                  pointerEvents: "none", // <-- Əlavə et
                }}
                src={SelnazHuge}
                alt="Selnaz Huge"
                className="absolute bottom-[-164px] w-[700px] h-[300px]   hidden md:block right-[-85px] z-20"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              <div className="relative">
                {/* Button */}
                <button
                  onClick={toggleChat}
                  className="absolute z-10 cursor-pointer md:w-[110px] md:h-[110px] flex justify-center items-center rounded-full shadow-md w-[60px] h-[60px] bottom-[-296px] right-[-40px] md:bottom-[-320px] md:right-[-78px]"
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
      </div>
      <div className="p-4">
        <div className="flex items-start mt-[50px] justify-start w-[256px]">
          <h2 className="text-[#3D246A] text-[26px] font-bold montserrat">
            Bizimlə Əlaqə
          </h2>
        </div>
      </div>
      <div className="p-4 openSans">
        <div className="md:flex md:gap-[40px] ">
          <div>
            {/* AD */}
            <div className="relative w-full md:w-[476.5px] mt-6">
              <input
                type="text"
                id="ad"
                placeholder=" "
                className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
              <label
                htmlFor="ad"
                className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
                AD
              </label>
            </div>

            {/* SOYAD */}
            <div className="relative md:w-[476.5px] w-full mt-6">
              <input
                type="text"
                id="soyad"
                placeholder=" "
                className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
              <label
                htmlFor="soyad"
                className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
                Soyad
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative md:w-[476.5px] w-full mt-6">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
              <label
                htmlFor="email"
                className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
                Email
              </label>
            </div>

            {/* MOBİL */}
            <div className="relative md:w-[476.5px] w-full mt-6">
              <input
                type="tel"
                id="mobil"
                placeholder=" "
                className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
              />
              <label
                htmlFor="mobil"
                className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
                Mobil nömrə
              </label>
            </div>
          </div>

          <div>
            <div className="relative md:w-[659px]  w-full mt-6">
              <textarea
                id="mesaj"
                placeholder=" "
                rows={6}
                className="peer w-full px-[20px] py-4 md:py-[90px] text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none resize-none"></textarea>
              <label
                htmlFor="mesaj"
                className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
      peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
      peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
      peer-focus:px-1 peer-focus:rounded-md">
                Mesaj
              </label>
            </div>
          </div>
        </div>
        <div className="montserrat mt-4 ">
          <button className="bg-[#3D246A] md:w-[110px] md:px-[24px] md:py-3 md:text-base  py-4 px-[140.5px] w-full rounded-[24px]  text-white text-xl font-semibold">
            Göndər
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
