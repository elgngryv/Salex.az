import React, { useEffect } from "react";
import CRM from "../../../assets/images/Crm.svg";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const SalexCRM = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="p-4 mb-[74px] md:px-[52px]">
      <div className="text-[#3D246A] md:flex md:flex-row-reverse md:items-start md:justify-between md:max-w-[1613px] md:container md:mx-auto md:gap-[100px]">
        {/* Sol tərəf: Mətn və list */}
        <div
          className="md:w-1/2 md:flex md:flex-col md:mt-[94.27px]"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500">
          <h2 className="font-bold montserrat text-[22px] md:text-[24px]">
            Hər müştəriyə fərdi yanaşma{" "}
            <span className="font-bold">Selnaz CRM ilə</span>
          </h2>
          <div className="mt-[18px] mb-[24px]">
            <p className="font-normal  text-base openSans">
              Selnaz, hər istifadəçi fəaliyyətini izləyərək onları real zamanlı
              olaraq profilə çevirir. Alış davranışları, kliklənmiş məhsullar,
              tərk edilmiş səbətlər və qarşılıqlı əlaqələr avtomatik olaraq CRM
              bazasına yazılır.
            </p>
          </div>
          <div className="mt-[24px] flex flex-col gap-[8px]">
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Müştəriyə fərdi təklif göndər
              </h2>
            </div>
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Satınalma ehtimalını 3x artır
              </h2>
            </div>
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Aktiv müştəri bazasını genişləndir
              </h2>
            </div>
            <div className="flex gap-[8px] items-center">
              <img src={Done} alt="" />
              <h2 className="font-normal text-base openSans">
                Satış sonrası əlaqəni gücləndir
              </h2>
            </div>
          </div>
        </div>

        {/* Sağ tərəf: CRM şəkli */}
        <div
          className="mt-6 md:mt-0  md:w-[613px]  flex justify-center md:justify-end"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <div className="border md:min-w-[613px] rounded-[24px] border-white w-full  h-auto">
            <img className="w-full  md:w-[613px] h-auto" src={CRM} alt="CRM" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalexCRM;
