import React from "react";
import CRM from "../../../assets/images/Crm.svg";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";

const SalexCRM = () => {
  return (
    <div className="p-4 mb-[74px]">
      <div className="text-[#3D246A] ">
        <div>
          <div>
            <h2 className="font-bold montserrat text-[22px]">
              Hər müştəriyə fərdi yanaşma{" "}
              <span className="font-bold text-[24px]">Selnaz CRM ilə</span>
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
            <img src={CRM} alt="" />
          </div>
          <div className="mt-[24px] flex flex-col gap-[8px]">
            <div className="flex gap-[4px] ">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Müştəriyə fərdi təklif göndər
              </h2>
            </div>
            <div className="flex gap-[4px] ">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Satınalma ehtimalını 3x artır
              </h2>
            </div>
            <div className="flex gap-[4px] ">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Aktiv müştəri bazasını genişləndir
              </h2>
            </div>
            <div className="flex gap-[4px] ">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Satış sonrası əlaqəni gücləndir
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalexCRM;
