import React from "react";

import Photo from "../../assets/images/6.svg";
import Photo2 from "../../assets/images/5.svg";
import Photo3 from "../../assets/images/4.svg";
import Photo4 from "../../assets/images/3.svg";
import Photo5 from "../../assets/images/2.svg";
import Photo6 from "../../assets/images/1.svg";

const Selnazsolutions = () => {
  return (
    <div className="p-4 openSans flex flex-col gap-[54px]">
      <div>
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg ">
            Canlı qarşılayır, tanıyır,
            <br />
            yönləndirir
          </h2>
          <p className="font-normal text-base leading-[150%] text-[#3D246A]">
            Sayta daxil olan müştərini real satış meneceri kimi salamlayır və
            qarşılıqlı ünsiyyət qurur
          </p>
        </div>
        <div className="border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
          <div>
            <img className="w-[358px] h-[322px]" src={Photo} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg ">
            Emosional ehtiyacı anlayır
            <br />
            və uyğun cavab verir
          </h2>
          <p className="font-normal text-base leading-[150%] text-[#3D246A]">
            Müştərinin yazı tərzindən emosional vəziyyətini analiz edərək
            empatik cavablar təqdim edir
          </p>
        </div>
        <div className="border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
          <div>
            <img className="w-[358px] h-[322px]" src={Photo2} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg ">
            Real vaxtda davranış analizi
            <br />
            aparır
          </h2>
          <p className="font-normal text-base leading-[150%] text-[#3D246A]">
            Hərəkət, klik və gözləmə müddətini analiz edərək müştərinin
            maraqlandığı məhsulu
            <br />
            müəyyənləşdirir
          </p>
        </div>
        <div className="border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
          <div>
            <img className="w-[358px] h-[322px]" src={Photo3} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg ">
            Bütün mesajları birləşdirir
          </h2>
          <p className="font-normal text-base leading-[150%] text-[#3D246A]">
            Hərəkət, klik və gözləmə müddətini analiz edərək müştərinin
            maraqlandığı məhsulu
            <br />
            müəyyənləşdirir
          </p>
        </div>
        <div className="border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
          <div>
            <img className="w-[358px] h-[322px]" src={Photo4} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg ">
            Data əsaslı geri dönüşlər edir
          </h2>
          <p className="font-normal text-base leading-[150%] text-[#3D246A]">
            Müştərinin qeyd olunan tarix, mövzu və keçmiş alışlarına əsaslanaraq
            uyğun zamanda əlaqə
            <br />
            yaradır
          </p>
        </div>
        <div className="border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
          <div>
            <img className="w-[358px] h-[322px]" src={Photo5} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex flex-col gap-2.5">
          <h2 className="text-[#3D246A] font-bold text-lg ">
            CRM ilə təbrik, kampaniya və
            <br />
            xatırlatma göndərir
          </h2>
          <p className="font-normal text-base leading-[150%] text-[#3D246A]">
            Avtomatlaşdırılmış şəkildə bayram, ad günü və kampaniya mesajlarını
            çatdırır
          </p>
        </div>
        <div className="border border-white bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
          <div>
            <img className="w-[358px] h-[322px]" src={Photo6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selnazsolutions;
