import React from "react";

const AboutSel = () => {
  return (
    <div className="mt-[130px] md:mt-[363px] px-4 text-[#3D246A] md:flex md:flex-col md:items-center md:text-center md:justify-center md:w-full openSans">
      {/* Text box */}
      <div className="w-full   md:py-[24px]   md:w-[606px] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px]">
        <div className="flex  flex-col items-center text-center">
          <div className="py-[20px] md:py-0 md:mb-[18px]">
            <h2 className="font-bold md:text-[28px] dark:text-[#E1DCE6] text-[22px] text-[#3D246A]">
              Niyə məhz Selnaz?
            </h2>
          </div>
          <div className="w-[326px] md:w-[574px] mb-[20px]">
            <p className="font-light text-[#3D246A] dark:text-[#E1DCE6] text-base">
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

      {/* Şəkillər text box-un altında */}
      {/* Mobil */}
      <img
        className="block md:hidden mt-[-430px] mx-auto"
        src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899482/aboutImage_at9ysy.svg"
        alt="about"
      />
      {/* Desktop */}
      <img
        className="hidden bottom-[100px]  md:block mt-[-648px] mx-auto"
        src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899480/aboutHuge_azzsvd.svg"
        alt="about"
      />
    </div>
  );
};

export default AboutSel;
