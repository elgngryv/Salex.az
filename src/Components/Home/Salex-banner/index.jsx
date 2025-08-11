import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const SalexBanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="p-4 md:p-[54px]">
      <div className="md:flex md:flex-col md:gap-[24px] md:mb-[24px]">
        <div
          className="flex items-start justify-start md:w-[775px] w-[256px]"
          data-aos="fade-up"
          data-aos-delay="500">
          <h2 className="text-[#3D246A] dark:text-[#E1DCE6] md:text-[40px] text-[22px] font-bold montserrat">
            <span className="text-[#5B2E91] dark:text-[#E1DCE6] text-[26px] md:text-[46px]">
              SaleX
            </span>{" "}
            – Rəqəmsal Satışın Yeni Gücü
          </h2>
        </div>

        <div
          className="flex items-start mt-3 md:w-[681px] justify-start w-[256px]"
          data-aos="fade-up"
          data-aos-delay="600">
          <h2 className="font-normal md:text-[22px] dark:text-[#E1DCE6] text-base md:leading-[140%] text-[#3D246A] openSans">
            SaleX, süni intellekt əsaslı rəqmsal satış meneceri{" "}
            <span className="font-semibold md:text-[22px] dark:text-[#E1DCE6]">
              Selnaz
            </span>{" "}
            vasitəsilə web
            <br className="hidden md:inline dark:text-[#E1DCE6]" /> sayta və
            rəqəmsal platformalara daxil olan istifadəçiləri real
            <br className="hidden md:inline dark:text-[#E1DCE6]" />
            müştəriyə çevirir.
          </h2>
        </div>
      </div>

      <div className="montserrat flex gap-2.5 items-center mt-4">
        <h2
          className="font-semibold text-lg md:text-[22px] dark:text-[#E1DCE6] text-[#3D246A]"
          data-aos="fade-up"
          data-aos-delay="700">
          Satışlarını Artırmağa
        </h2>
        <button
            data-aos="fade-up"
          data-aos-delay="800"
          className="bg-[#3D246A] py-3 px-[24px] cursor-pointer dark:text-[#E1DCE6] rounded-[24px] text-white text-base font-semibold"
          type="button"
          style={{ zIndex: 9999, position: "relative" }}
          onClick={() => {
            navigate("/SuggestionsPage");
          }}>
          Başla
        </button>
      </div>
    </div>
  );
};

export default SalexBanner;
