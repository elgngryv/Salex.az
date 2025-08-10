import React from "react";

const SalexSection = () => {
  return (
    <div className="p-4 mt-[72px]  md:flex md:flex-col md:items-center md:text-center md:justify-center md:w-full openSans">
      <div className="w-full md:py-[24px] md:px-4 md:w-[606px]  border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150  rounded-[20px]">
        <div className="flex flex-col items-center text-center">
          <div className="py-[20px] md:py-0 md:mb-[18px]">
            <h2 className="font-bold md:text-[28px] text-[22px] dark:text-[#E1DCE6] text-[#3D246A]">
              Niyə məhz Selnaz?
            </h2>
          </div>
          <div className=" w-[326px] md:w-[574px] mb-[20px]  ">
            <p className="font-light text-[#3D246A] text-base dark:text-[#E1DCE6] ">
              Selnaz sadəcə bot deyil,{" "}
              <span className="font-semibold dark:text-[#E1DCE6]">
                rəqəmsal satış
              </span>{" "}
              <span className="font-semibold dark:text-[#E1DCE6]">
                əməkdaşınızdır
              </span>
              . Situasiyaya uyğun dinamik cavablar verir, bəzən satır, bəzən
              sadəcə qulaq asır. Müştəri ilə emosional bağ quraraq, onu
              yönləndirir,{" "}
              <span className="font-semibold dark:text-[#E1DCE6]">güvən</span>{" "}
              yaradır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalexSection;
