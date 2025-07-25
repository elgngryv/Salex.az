import React from "react";
import Selnaz from "../../../assets/images/selnazHome.svg";

const FooterElem = () => {
  return (
    <div className="absolute top-[-231px] left-0 w-full flex justify-center z-20 px-4">
      <div className="w-full max-w-2xl p-10 text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] relative mt-[-60px]">
        
        {/* Şəkil */}
        <div className="absolute -top-28 -right-12">
          <img src={Selnaz} alt="Selnaz" className="w-[120px] h-auto" />
        </div>

        <div className="flex items-center flex-col text-center">
          <div className="font-montserrat">
            <h2 className="font-semibold text-xl">
              Sən də <span className="font-bold text-[#5B2E91]">Selnaz</span> ilə canlı <br />
              satışın rəqəmsal <br />
              gücünü hiss etməyə <br />
              hazırsan?
            </h2>
          </div>

          <div className="font-openSans mt-2">
            <h2 className="text-base font-normal">
              AI ilə satışları avtomatlaşdır, amma insan toxunuşunu itirmə.
            </h2>
          </div>

          <div className="font-montserrat mt-4 flex flex-col items-center gap-2">
            <h2 className="font-semibold text-lg">Satışlarını Artırmağa</h2>
            <button className="bg-[#3D246A] py-3 px-6 rounded-full text-white text-base font-semibold">
              Başla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterElem;
