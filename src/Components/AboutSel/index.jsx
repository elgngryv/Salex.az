import React from "react";
import AboutImg from "../../assets/images/aboutImage.svg";
import AboutImgHuge from "../../assets/images/aboutHuge.svg";

const AboutSel = () => {
  return (
    <div className=" mt-[130px] md:mt-[363px] px-4 text-[#3D246A]  md:flex md:flex-col md:items-center md:text-center md:justify-center md:w-full openSans">
      <div className="w-full md:py-[24px] md:px-4 md:w-[606px]   border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150  rounded-[20px]">
        <div className="flex flex-col items-center text-center">
          <div className="py-[20px] md:py-0 md:mb-[18px]">
            <h2 className="font-bold md:text-[28px] text-[22px] text-[#3D246A]">
              Niyə məhz Selnaz?
            </h2>
          </div>
          <div className=" w-[326px] md:w-[574px] mb-[20px]  ">
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
      <div>
        <img
          className="absolute bottom-[-370px] right-[80px] block md:hidden"
          src={AboutImg}
          alt=""
        />
        <img
          className="absolute top-[1068px] right-[490px] hidden md:block"
          src={AboutImgHuge}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutSel;
