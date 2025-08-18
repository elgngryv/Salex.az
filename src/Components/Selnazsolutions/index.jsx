import React from "react";
import { useTheme } from "../theme-provider";

const Selnazsolutions = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="px-4 md:px-4 openSans  flex flex-col gap-[54px]">
      <div className="md:flex md:flex-row-reverse md:items-center md:text-start md:gap-[100px] md:justify-center">
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg dark:text-[#E1DCE6]">
            Canlı qarşılayır, tanıyır,
            <br className="dark:text-[#E1DCE6]" />
            yönləndirir
          </h2>
          <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
            Sayta daxil olan müştərini real satış meneceri kimi salamlayır və
            qarşılıqlı ünsiyyət qurur
          </p>
        </div>
        <div className=" md:w-[600px] md:h-[551px]">
          <div className="">
            <img
              className="w-[358px] md:hidden  h-[322px]"
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899479/6_xhiptu.svg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="md:w-[600px] md:h-[510px] hidden md:block  h-[322px]"
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755242536/Frame_7229_1_oiyimy.png"
                  : "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755242535/Frame_7229_ntakok.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:flex  md:items-center md:text-start md:gap-[100px] md:justify-center">
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg dark:text-[#E1DCE6] ">
            Emosional ehtiyacı anlayır
            <br className="dark:text-[#E1DCE6]" />
            və uyğun cavab verir
          </h2>
          <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
            Müştərinin yazı tərzindən emosional vəziyyətini analiz edərək
            empatik cavablar təqdim edir
          </p>
        </div>
        <div className="  md:w-[600px] md:h-[551px] ">
          <div>
            <img
              className="w-[358px] md:hidden h-[322px]"
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1755173173/Frame_7230_wms3d3.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <img
                className="w-[358px] md:w-[600px] md:h-[510px]  hidden md:block h-[322px]"
                src={
                  theme === "dark"
                    ? " https://res.cloudinary.com/duy7rcf4m/image/upload/v1755173447/Frame_7230_s44sli.png"
                    : "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755173104/Frame_7230_ivsmgq.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse md:items-center md:text-start md:gap-[100px] md:justify-center">
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg dark:text-[#E1DCE6] ">
            Real vaxtda davranış analizi
            <br className="dark:text-[#E1DCE6]" />
            aparır
          </h2>
          <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
            Hərəkət, klik və gözləmə müddətini analiz edərək müştərinin
            maraqlandığı məhsulu
            <br className="dark:text-[#E1DCE6] md:hidden " />
            {""}
            müəyyənləşdirir
          </p>
        </div>
        <div className="  md:w-[600px] md:h-[551px]">
          <div>
            <img
              className="w-[358px] md:hidden h-[322px]"
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899476/4_hvojwo.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[358px] md:w-[600px] md:h-[510px]  hidden md:block h-[322px]"
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755242873/Frame_7231_i7wrjq.png "
                  : "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755242873/Frame_7231_1_hj9mt7.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center md:text-start md:gap-[100px] md:justify-center">
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg  dark:text-[#E1DCE6]">
            Bütün mesajları birləşdirir
          </h2>
          <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
            WhatsApp, sosial şəbəkə və sayt mesajlarını bir yerə toplayaraq
            parçalanmanı aradan
            <br className="dark:text-[#E1DCE6] md:hidden " /> qaldırır.{" "}
          </p>
        </div>
        <div className="  md:w-[600px] md:h-[551px]">
          <div>
            <img
              className="w-[358px] md:hidden h-[322px]"
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899475/3_kvgkr5.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[358px] md:w-[600px] md:h-[510px]  hidden md:block h-[322px]"
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755243092/Frame_7232_1_ehnfyh.png"
                  : "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755243093/Frame_7232_dl0qne.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse md:items-center md:text-start md:gap-[100px] md:justify-center">
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg  dark:text-[#E1DCE6]">
            Data əsaslı geri dönüşlər edir
          </h2>
          <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
            Müştərinin qeyd olunan tarix, mövzu və keçmiş alışlarına əsaslanaraq
            uyğun zamanda əlaqə
            <br className="dark:text-[#E1DCE6] md:hidden" /> yaradır
          </p>
        </div>
        <div className="  md:w-[600px] md:h-[551px]">
          <div>
            <img
              className="w-[358px] md:hidden h-[322px]"
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899475/2_veoluo.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[358px]  md:w-[600px] md:h-[510px] hidden md:block h-[322px]"
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755243653/Frame_7233_1_wtakya.png"
                  : "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755243655/Frame_7233_levswl.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:flex  md:items-center md:text-start md:gap-[100px] md:justify-center">
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg dark:text-[#E1DCE6] ">
            CRM ilə təbrik, kampaniya və
            <br className="dark:text-[#E1DCE6]" />
            xatırlatma göndərir
          </h2>
          <p className="font-normal text-base leading-[150%] dark:text-[#E1DCE6] text-[#3D246A]">
            Avtomatlaşdırılmış şəkildə bayram, ad günü və kampaniya mesajlarını
            çatdırır
          </p>
        </div>
        <div className="  md:w-[600px] md:h-[551px]">
          <div>
            <img
              className="w-[358px] md:hidden h-[322px]"
              src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899474/1_snl4sm.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[358px]  md:w-[600px] md:h-[551px] hidden md:block h-[322px]"
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755243777/Frame_7234_llqjlt.png"
                  : "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755243776/Frame_7234_1_wmhuej.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selnazsolutions;
