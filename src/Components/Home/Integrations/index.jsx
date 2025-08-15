import React from "react";
import Web from "../../../assets/Icons/streamline-plump_web-remix.svg";
import Commerce from "../../../assets/Icons/streamline-ultimate_e-commerce-touch-buy-bold.svg";
import Chat from "../../../assets/Icons/simple-icons_livechat.svg";
import Telegram from "../../../assets/Icons/hugeicons_telegram.svg";
import Whatsapp from "../../../assets/Icons/whatsapp-line.svg";
import Instagram from "../../../assets/Icons/instagram-fill.svg";
import Facebook from "../../../assets/Icons/facebook-1.svg";
import { useTheme } from "../../theme-provider";
const Integrations = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className=" md:container md:mx-auto md:max-w-[1336px]">
      <div className="p-4  montserrat ">
        <div className="mb-[22px] flex items-start text-start justify-start">
          <h2 className="font-bold dark:text-[#E1DCE6]  text-[#3D246A] text-[22px]">
            Bütün inteqrasiyalar
          </h2>
        </div>
        <div className="flex md:flex flex-col md:gap-0 gap-4 ">
          <div className="md:flex md:gap-4    md:items-center md:justify-center">
            <div className="w-full mb-4 md:w-[310px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
              <img
                src={
                  theme === "dark"
                    ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755244920/streamline-plump_web-remix_pszrlf.svg"
                    : Web
                }
                alt=""
              />
              <h2 className="font-semibold dark:text-[#E1DCE6] text-[#3D246A] text-base ">
                Web site
              </h2>
            </div>
            <div className="w-full mb-4  md:w-[310px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
              <img
                src={
                  theme === "dark"
                    ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755244920/streamline-ultimate_e-commerce-touch-buy-bold_o8dcnc.svg"
                    : Commerce
                }
                alt=""
              />
              <h2 className="font-semibold dark:text-[#E1DCE6] text-[#3D246A] text-base ">
                E-commerce
              </h2>
            </div>
            <div className="w-full mb-4  md:w-[310px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
              <img
                src={
                  theme === "dark"
                    ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755244919/simple-icons_livechat_tof8mc.svg"
                    : Chat
                }
                alt=""
              />
              <h2 className="font-semibold dark:text-[#E1DCE6] text-[#3D246A] text-base ">
                LiveChat
              </h2>
            </div>
            <div className="w-full  md:w-[310px] md:mb-[14px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
              <img src={theme === "dark" ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755244918/hugeicons_telegram_jcobyv.svg" :Telegram} alt="" />
              <h2 className="font-semibold dark:text-[#E1DCE6] text-[#3D246A] text-base ">
                Telegram
              </h2>
            </div>
          </div>
          <div className="md:flex mb-4 md:gap-4 gap-4  md:items-center md:justify-center">
            <div className="w-full mb-4  md:w-[310px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
              <img src={theme === "dark"? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755244918/mingcute_whatsapp-line_aenrue.svg"  :Whatsapp} alt="" />
              <h2 className="font-semibold dark:text-[#E1DCE6] text-[#3D246A] text-base ">
                Whatsapp
              </h2>
            </div>
            <div className="w-full  mb-4 md:w-[310px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
              <img src={theme === "dark" ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755244918/akar-icons_instagram-fill_prbpcc.svg"  :Instagram} alt="" />
              <h2 className="font-semibold dark:text-[#E1DCE6] text-[#3D246A] text-base ">
                Instagram
              </h2>
            </div>
            <div className="w-full  mb-4 md:w-[310px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex items-center text-center justify-center py-[23px] gap-[7px]">
              <img src={theme === "dark" ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755244919/streamline-plump_facebook-1_g043xm.svg"  :Facebook} alt="" />
              <h2 className="font-semibold dark:text-[#E1DCE6] text-[#3D246A] text-base ">
                Facebook
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
