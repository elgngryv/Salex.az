import React from "react";
import Analytcs from "../../../assets/images/analictcy.svg";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";

const SalexAnalytics = () => {
  return (
    <div className="p-4 mb-[74px]">
      <div className="text-[#3D246A] ">
        <div>
          <div>
            <h2 className="font-bold montserrat text-[22px]">
              Rəqəmlər danışır
              <br />
              <span className="font-bold text-[24px]">
                Selnaz Analitika ilə
              </span>
            </h2>
            <div className="mt-[18px] mb-[24px]">
              <p className="font-normal text-base openSans">
                Selnaz, hər istifadəçi fəaliyyətini izləyərək onları real
                zamanlı olaraq profilə çevirir. Alış davranışları, kliklənmiş
                məhsullar, tərk edilmiş səbətlər və qarşılıqlı əlaqələr
                avtomatik olaraq CRM bazasına yazılır.
              </p>
            </div>
          </div>
          <div className="border rounded-[24px] border-white">
            <img src={Analytcs} alt="" />
          </div>
          <div className="mt-[24px] flex flex-col gap-[8px]">
            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans">
                  Hansı mesaj daha çox satır?
                </span>
                <span className="font-normal text-base openSans">
                  Test et və tətbiq et
                </span>
              </div>
            </div>

            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans">
                  Hər klikin arxasında nə olduğunu
                </span>
                <span className="font-normal text-base openSans">
                  analiz et
                </span>
              </div>
            </div>

            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans">
                  ROI və kampaniya effektivliyini
                </span>
                <span className="font-normal text-base openSans">
                  real vaxtda ölç
                </span>
              </div>
            </div>

            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans">
                  Davranışa əsaslanan optimizasiya ilə
                </span>
                <span className="font-normal text-base openSans">
                  satışları artır
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalexAnalytics;
