import React from "react";
import Web from "../../../assets/Icons/streamline-plump_web-remix.svg";
import Commerce from "../../../assets/Icons/streamline-ultimate_e-commerce-touch-buy-bold.svg";
import Chat from "../../../assets/Icons/simple-icons_livechat.svg";
import Telegram from "../../../assets/Icons/hugeicons_telegram.svg";
import Whatsapp from "../../../assets/Icons/whatsapp-line.svg";
import Instagram from "../../../assets/Icons/instagram-fill.svg";
import Facebook from "../../../assets/Icons/facebook-1.svg";

const Integrations = () => {
  return (
    <div className="mb-[350px]">
      <div className="p-4 montserrat ">
        <div className="mb-[22px] flex items-start text-start justify-start">
          <h2 className="font-bold text-[#3D246A] text-[22px]">
            Bütün inteqrasiyalar
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full  text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
            <img src={Web} alt="" />
            <h2 className="font-semibold text-[#3D246A] text-base ">
              Web site
            </h2>
          </div>
          <div className="w-full  text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
            <img src={Commerce} alt="" />
            <h2 className="font-semibold text-[#3D246A] text-base ">
              E-commerce
            </h2>
          </div>
          <div className="w-full  text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
            <img src={Chat} alt="" />
            <h2 className="font-semibold text-[#3D246A] text-base ">
              LiveChat
            </h2>
          </div>
          <div className="w-full  text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
            <img src={Telegram} alt="" />
            <h2 className="font-semibold text-[#3D246A] text-base ">
              Telegram
            </h2>
          </div>
          <div className="w-full  text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
            <img src={Whatsapp} alt="" />
            <h2 className="font-semibold text-[#3D246A] text-base ">
              Whatsapp
            </h2>
          </div>
          <div className="w-full  text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
            <img src={Instagram} alt="" />
            <h2 className="font-semibold text-[#3D246A] text-base ">
              Instagram
            </h2>
          </div>
          <div className="w-full  text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
            <img src={Facebook} alt="" />
            <h2 className="font-semibold text-[#3D246A] text-base ">
              Facebook
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
