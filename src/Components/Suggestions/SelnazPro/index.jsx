import React from "react";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";
import { useTheme } from "../../theme-provider";
const SelnazPro = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="px-4 mt-3 ">
      <div className="border p-[32px] md:w-[389px] border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
        <div>
          <h2 className="font-bold text-[#3D246A] dark:text-[#E1DCE6] text-2xl montserrat">
            Selnaz Pro
          </h2>
        </div>
        <div className="mt-[24px] text-[#3D246A] flex flex-col gap-[12px]">
          <div className="flex gap-[4px] ">
            <img
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755249479/material-symbols_done-rounded_di9fzx.svg"
                  : Done
              }
              alt=""
            />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              Bütün kanallardan vahid mesaj
              <br className="dark:text-[#E1DCE6]" />
              idarəsi
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755249479/material-symbols_done-rounded_di9fzx.svg"
                  : Done
              }
              alt=""
            />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              Tam AI satış meneceri funksiyası
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755249479/material-symbols_done-rounded_di9fzx.svg"
                  : Done
              }
              alt=""
            />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              CRM + E-commerce + POS
              <br className="dark:text-[#E1DCE6]" />
              inteqrasiyası
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755249479/material-symbols_done-rounded_di9fzx.svg"
                  : Done
              }
              alt=""
            />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              Avtomatik e-mail / SMS
              <br className="dark:text-[#E1DCE6]" />
              kampaniyaları
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755249479/material-symbols_done-rounded_di9fzx.svg"
                  : Done
              }
              alt=""
            />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              White-label və komanda modulu
            </h2>
          </div>
        </div>
        <div className="montserrat mt-[28px]">
          <h2 className="font-semibold text-lg dark:text-[#E1DCE6] text-[#4200BA]">
            <span className="text-[#4200BA] text-2xl font-semibold  dark:text-[#E1DCE6]">
              189
            </span>{" "}
            AZN / aylıq
          </h2>
        </div>
        <div className="montserrat mt-4">
          <button className="bg-[#3D246A] py-3 px-[75px] w-full rounded-[24px] dark:bg-[#E1DCE6] dark:text-[#3D246A] text-white text-xl font-semibold">
            İNDİ ƏLDƏ ET
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelnazPro;
