import React from "react";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";

const SelnazStart = () => {
  return (
    <div className="px-4 md:px-[52px] mt-3  ">
      <div className="border p-[32px] md:w-[389px] border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
        <div>
          <h2 className="font-bold text-[#3D246A] dark:text-[#E1DCE6] text-2xl montserrat">
            Selnaz Start
          </h2>
        </div>
        <div className="mt-[24px] text-[#3D246A] flex flex-col gap-[12px]">
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              AI ilə əsas qarşılanma
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              1 kanalda yönləndirmə (Web sayt)
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              Əsas məhsul tövsiyəsi
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              Sadə CRM qeydiyyatı
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
              Aylıq analiz hesabatı
            </h2>
          </div>
        </div>
        <div className="montserrat mt-[28px]">
          <h2 className="font-semibold text-lg dark:text-[#E1DCE6] text-[#4200BA]">
            <span className="text-[#4200BA] text-2xl font-semibold  dark:text-[#E1DCE6]">49</span>{" "}
            AZN / aylıq
          </h2>
        </div>
        <div className="montserrat mt-4">
          <button className="bg-[#3D246A] dark:text-[#E1DCE6] py-3 px-[75px] w-full rounded-[24px]  text-white text-xl font-semibold">
            İNDİ ƏLDƏ ET
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelnazStart;
