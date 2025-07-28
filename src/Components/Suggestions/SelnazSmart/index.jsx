import React from "react";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";

const SelnazSmart = () => {
  return (
    <div className="px-4  mt-3">
      <div className="border p-[32px] border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
        <div>
          <h2 className="font-bold text-[#3D246A] text-2xl montserrat">
            Selnaz Smart
          </h2>
        </div>
        <div className="mt-[24px] text-[#3D246A] flex flex-col gap-[12px]">
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              3 kanalda qarşılanma (veb, IG, WhatsApp)
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              Davranış əsaslı yönləndirmə
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              Kampaniya və təklif
              <br />
              avtomatlaşdırması
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              CRM inteqrasiyası + avtomatik
              <br />
              follow-up
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              Müştəri segmentasiyası
            </h2>
          </div>
          <div className="flex gap-[4px] ">
            <img src={Done} alt="" />
            <h2 className="font-normal text-base openSans">
              Həftəlik analitik hesabat
            </h2>
          </div>
        </div>
        <div className="montserrat mt-[28px]">
          <h2 className="font-semibold text-lg text-[#4200BA]">
            <span className="text-[#4200BA] text-2xl font-semibold ">119</span>{" "}
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

export default SelnazSmart;
