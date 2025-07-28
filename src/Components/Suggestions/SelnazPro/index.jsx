import React from "react";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";

const SelnazPro = () => {
  return (
    <div className="px-4 mt-3 ">
      <div className="border p-[32px] border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
        <div>
          <h2 className="font-bold text-[#3D246A] text-2xl montserrat">
            Selnaz Pro
          </h2>
        </div>
        <div className="mt-[24px] text-[#3D246A] flex flex-col gap-[12px]">
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              Bütün kanallardan vahid mesaj
              <br />
              idarəsi
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              Tam AI satış meneceri funksiyası
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              CRM + E-commerce + POS
              <br />
              inteqrasiyası
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              Avtomatik e-mail / SMS
              <br />
              kampaniyaları
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              White-label və komanda modulu
            </h2>
          </div>
        </div>
        <div className="montserrat mt-[28px]">
          <h2 className="font-semibold text-lg text-[#4200BA]">
            <span className="text-[#4200BA] text-2xl font-semibold ">189</span>{" "}
            AZN / aylıq
          </h2>
        </div>
        <div className="montserrat mt-4">
          <button className="bg-[#3D246A] py-3 px-[75px] w-full rounded-[24px]  text-white text-xl font-semibold">
            İNDİ ƏLDƏ ET
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelnazPro;
