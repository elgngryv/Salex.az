import React from "react";
import Analytcs from "../../../assets/images/analictcy.svg";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";

const SalexAnalytics = () => {
  return (
    <div className="p-4 mb-[74px] md:p-[52px]">
      <div className="text-[#3D246A] flex flex-col md:flex-row md:items-start md:justify-between md:max-w-[1613px] md:container md:mx-auto md:gap-[100px]">
        {/* Mətn və siyahı (solda desktopda, üstdə mobil) */}
        <div className="md:w-1/2">
          <h2 className="font-bold montserrat text-[22px] dark:text-[#E1DCE6] md:text-[24px]">
            Rəqəmlər danışır
            <br />
            <span className="font-bold">Selnaz Analitika ilə</span>
          </h2>
          <div className="mt-[18px] mb-[24px]">
            <p className="font-normal text-base openSans dark:text-[#E1DCE6]">
              Selnaz, hər istifadəçi fəaliyyətini izləyərək onları real zamanlı
              olaraq profilə çevirir. Alış davranışları, kliklənmiş məhsullar,
              tərk edilmiş səbətlər və qarşılıqlı əlaqələr avtomatik olaraq CRM
              bazasına yazılır.
            </p>
          </div>
          <div className="mt-[24px] flex flex-col gap-[8px]">
            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  Hansı mesaj daha çox satır?
                </span>
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  Test et və tətbiq et
                </span>
              </div>
            </div>

            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  Hər klikin arxasında nə olduğunu
                </span>
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  analiz et
                </span>
              </div>
            </div>

            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  ROI və kampaniya effektivliyini
                </span>
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  real vaxtda ölç
                </span>
              </div>
            </div>

            <div className="flex gap-[8px] items-start">
              <img src={Done} alt="" className="mt-[4px]" />
              <div className="flex flex-col">
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  Davranışa əsaslanan optimizasiya ilə
                </span>
                <span className="font-normal text-base openSans dark:text-[#E1DCE6]">
                  satışları artır
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Şəkil tərəfi (sağda desktopda, altda mobil) */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <div className="border rounded-[24px] border-white w-full max-w-[613px] h-auto">
            <img
              className="w-full h-auto"
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899480/analictcy_xz2ndo.svg"
              alt="Analytics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalexAnalytics;
