import React from "react";
import CRM from "../../../assets/images/Crm.svg";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";

const SalexCRM = () => {
  return (
    <div className="p-4 mb-[74px] md:px-[52px]">
      <div className="text-[#3D246A] md:flex md:flex-row-reverse md:items-start md:justify-between md:max-w-[1613px] md:container md:mx-auto md:gap-[100px]">
        {/* Sol tərəf: Mətn və list */}
        <div className="md:w-1/2 md:flex md:flex-col md:mt-[94.27px]">
          <h2 className="font-bold montserrat text-[22px] md:text-[24px] dark:text-[#E1DCE6]">
            Hər müştəriyə fərdi yanaşma{" "}
            <span className="font-bold">Selnaz CRM ilə</span>
          </h2>
          <div className="mt-[18px] mb-[24px]">
            <p className="font-normal  text-base openSans dark:text-[#E1DCE6]">
              Selnaz, hər istifadəçi fəaliyyətini izləyərək onları real zamanlı
              olaraq profilə çevirir. Alış davranışları, kliklənmiş məhsullar,
              tərk edilmiş səbətlər və qarşılıqlı əlaqələr avtomatik olaraq CRM
              bazasına yazılır.
            </p>
          </div>
          <div className="mt-[24px] flex flex-col gap-[8px]">
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans dark:text-[#E1DCE6]">
                Müştəriyə fərdi təklif göndər
              </h2>
            </div>
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans dark:text-[#E1DCE6]">
                Satınalma ehtimalını 3x artır
              </h2>
            </div>
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans dark:text-[#E1DCE6]">
                Aktiv müştəri bazasını genişləndir
              </h2>
            </div>
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans dark:text-[#E1DCE6]">
                Satış sonrası əlaqəni gücləndir
              </h2>
            </div>
          </div>
        </div>

        {/* Sağ tərəf: CRM şəkli */}
        <div className="mt-6 md:mt-0  md:w-[613px]  flex justify-center md:justify-end">
          <div className="border md:min-w-[613px] rounded-[24px] border-white w-full  h-auto">
            <img className="w-full   md:w-[613px] h-auto" src={CRM} alt="CRM" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalexCRM;
