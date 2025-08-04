import React, { useEffect } from "react";
import SelnazHome from "../../assets/images/solutionssel.svg";
import Vector from "../../assets/images/Vector.svg";
import SelnazHomeHuge from "../../assets/images/selnazHomeHuge.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
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
                Problemləri analiz etdik və onları aradan qaldırmaq üçün ağıllı
                və effektiv yollar yaratdıq
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
                }}
                className="absolute z-20 block md:hidden"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              {/* Desktop üçün böyük şəkil */}
              <img
                src={SelnazHomeHuge}
                alt="Selnaz Huge"
                className="absolute bottom-[-164px] hidden md:block right-[-85px] z-20"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              {/* Button */}
              <button
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
            <h2 className="text-[#3D246A] md:text-[40px] text-[22px] font-bold  montserrat">
              <span className="text-[#3D246A]  text-[26px] md:text-[46px]">
                Problemlər
              </span>{" "}
            </h2>
          </div>
          <div className="openSans flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-5">
              {/* Kart 1 */}
              <div className="px-[32px] md:w-[422px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] text-[#3D246A]">
                  Yönləndirmə yoxdur
                </h2>
                <p className="font-normal text-base leading-[150%] text-[#3D246A]">
                  Canlı satış meneceri olmadığından <br /> müştəri nə alacağını
                  bilmir
                </p>
              </div>

              {/* Kart 2 */}
              <div className="px-[32px] md:w-[513px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] text-[#3D246A]">
                  Zamanında geri dönüş yoxdur
                </h2>
                <p className="font-normal text-base leading-[150%] text-[#3D246A]">
                  Bayram, kampaniya və ad günləri <br /> unudulur, müştəri
                  münasibəti zəifləyir
                </p>
              </div>

              {/* Kart 3 */}
              <div className="px-[32px] md:w-[427px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] text-[#3D246A]">
                  Parçalanmış platformalar
                </h2>
                <p className="font-normal text-base leading-[150%] text-[#3D246A]">
                  Sayt, sosial şəbəkələr və WhatsApp <br /> arasında məlumatlar
                  itir
                </p>
              </div>

              {/* Kart 4 */}
              <div className="px-[32px] md:w-[463px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] text-[#3D246A]">
                  Emosional bağ qurulmur
                </h2>
                <p className="font-normal text-base leading-[150%] text-[#3D246A]">
                  Standart cavablar müştərinin marağını <br /> çəkmir, çevrilmə
                  azalır
                </p>
              </div>

              {/* Kart 5 */}
              <div className="px-[32px] md:w-[387px] py-[24px] flex flex-col gap-2.5 border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
                <h2 className="font-semibold text-[20px] leading-[100%] text-[#3D246A]">
                  Ehtiyac analizi aparılmır
                </h2>
                <p className="font-normal text-base leading-[150%] text-[#3D246A]">
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
