import React from "react";

const SalexSection = () => {
  return (
    <div className="p-4 mt-[72px] openSans">
      <div className="w-full  border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150  rounded-[20px]">
        <div className="flex flex-col items-center text-center">
          <div className="py-[20px]">
            <h2 className="font-bold text-[22px] text-[#3D246A]">
              Niyə məhz Selnaz?
            </h2>
          </div>
          <div className=" w-[326px] mb-[20px]  ">
            <p className="font-light text-[#3D246A] text-base ">
              Selnaz sadəcə bot deyil,{" "}
              <span className="font-semibold">rəqəmsal satış</span>{" "}
              <span className="font-semibold">əməkdaşınızdır</span>. Situasiyaya
              uyğun dinamik cavablar verir, bəzən satır, bəzən sadəcə qulaq
              asır. Müştəri ilə emosional bağ quraraq, onu yönləndirir,{" "}
              <span className="font-semibold">güvən</span> yaradır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalexSection;
