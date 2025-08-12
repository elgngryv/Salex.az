import React from "react";
import FooterLogo from "../../../assets/images/Footer-logo.svg";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Selnaz from "../../../assets/images/selnazHome.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center relative top-[80px] md:container md:max-w-[1336px] md:mx-auto  md:top-[80px] mb-10">
        <div 
          className=" md:px-[230px] md:py-[200px] p-10 text-[#3D246A] border border-white/30
                     shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r 
                     backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] relative"
          style={{ overflow: "visible" }}>
          <div className="absolute -top-28 right-0 z-30">
            <img src={Selnaz} alt="Selnaz" className="w-[96.62px] h-auto" />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-montserrat font-semibold md:text-[40px]  dark:text-[#E1DCE6] md:w-[845px] md:leading-[100%] text-xl">
              Sən də{" "}
              <span className="font-bold dark:text-[#E1DCE6] text-[#5B2E91]">
                Selnaz
              </span>{" "}
              ilə canlı satışın rəqəmsal gücünü hiss etməyə hazırsan?
            </h2>
            <h2 className="font-openSans mt-2 text-base font-normal dark:text-[#E1DCE6] md:text-[18px]">
              AI ilə satışları avtomatlaşdır, amma insan toxunuşunu itirmə.
            </h2>
            <div className="font-montserrat mt-4 md:flex items-center gap-2">
              <h2 className="font-semibold text-lg dark:text-[#E1DCE6]">
                Satışlarını Artırmağa
              </h2>
              <button
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
        </div>
      </div>

      <div className="bg-[#3D246A] md:px-[52px] p-4 openSans w-full pt-[94px]">
        <div className="md:hidden block">
          <img src={FooterLogo} alt="Footer Logo" />
        </div>
        <div className="mt-10 flex md:grid md:grid-cols-4 md:container md:max-w-[1366px] md:mx-auto justify-between md:justify-start">
          <div className="hidden md:block">
            <img src={FooterLogo} alt="Footer Logo" />
          </div>
          <div className="md:flex flex gap-[39px]  md:justify-between md:w-[800px]">
            {/* 1 */}
            <div>
              <div className="text-white mb-4">
                <h2 className="font-extrabold text-base dark:text-[#E1DCE6] ">
                  Sürətli Menü
                </h2>
              </div>
              <div className="text-white">
                <p className="font-thin text-base dark:text-[#E1DCE6] ">
                  Ana Səhifə
                </p>
                <p className="font-thin text-base dark:text-[#E1DCE6] ">
                  Haqqımızda
                </p>
                <p className="font-thin text-base dark:text-[#E1DCE6] ">
                  Həll Yolları
                </p>
                <p className="font-thin text-base dark:text-[#E1DCE6] ">
                  Təkliflər
                </p>
                <p className="font-thin text-base dark:text-[#E1DCE6] ">
                  Əlaqə
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="md:flex md:gap-[213.38px]">
              <div>
                <div className="mb-4">
                  <h2 className="font-extrabold text-base text-white dark:text-[#E1DCE6]">
                    Əlaqə və Sosial media
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-[6px]">
                    <FaInstagram className="text-[#E1DCE6] w-[24px] h-[24px]" />
                    <p className="font-thin text-base dark:text-[#E1DCE6] text-[#E1DCE6]">
                      @salex.az
                    </p>
                  </div>
                  <div className="flex gap-[6px]">
                    <FaLinkedin className="text-[#E1DCE6] dark:text-[#E1DCE6] w-[24px] h-[24px]" />
                    <p className="font-thin text-base dark:text-[#E1DCE6] text-[#E1DCE6]">
                      @salex
                    </p>
                  </div>
                  <div className="flex gap-[6px]">
                    <FaFacebook className="text-[#E1DCE6] dark:text-[#E1DCE6] w-[24px] h-[24px]" />
                    <p className="font-thin text-base dark:text-[#E1DCE6] text-[#E1DCE6]">
                      @salex.az
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[22px]">
                <div>
                  <h2 className="font-extrabold text-base dark:text-[#E1DCE6] mb-[16px] text-white">
                    Məlumat
                  </h2>
                </div>
                <div>
                  <h2 className="font-thin text-base dark:text-[#E1DCE6] text-white">
                    Məxfilik Siyasəti
                  </h2>
                  <h2 className="font-thin text-base dark:text-[#E1DCE6] text-white">
                    İstifadə Şərtləri
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
