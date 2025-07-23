import React from "react";

const SalexBanner = () => {
  return (
    <div className="p-4">
      <div className="flex items-start justify-start w-[256px]">
        <h2 className="text-[#3D246A]  text-[22px] font-bold  montserrat">
          <span className="text-[#5B2E91] text-[26px]">SaleX</span> – Rəqəmsal
          Satışın Yeni Gücü{" "}
        </h2>
      </div>
      <div className="flex items-start mt-3 justify-start w-[256px]">
        <h2 className="font-normal text-base text-[#3D246A] openSans">
          SaleX, süni intellekt əsaslı satış meneceri{" "}
          <span className="font-semibold">Selnaz</span> vasitəsilə veb saytınıza
          daxil olan istifadəçiləri real müştəriyə çevirir.
        </h2>
      </div>
      <div className="montserrat flex gap-2.5 items-center mt-4">
        <h2 className="font-semibold text-lg text-[#3D246A]">
          Satışlarını Artırmağa
        </h2>
        <button className="bg-[#3D246A] py-3 px-[24px] rounded-[24px]  text-white text-base font-semibold">
          Başla
        </button>
      </div>
    </div>
  );
};

export default SalexBanner;
