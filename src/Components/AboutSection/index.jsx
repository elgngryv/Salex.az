import React from "react";

const AboutSection = () => {
  return (
    <div className="p-[42px] md:px-[362px]">
      <div className="border p-[20px] leading-[100%] md:w-[717px]  border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px]   relative z-10">
        <div className="openSans px-4 md:max-w-[717px] md:p-[42px] md:mx-auto md:text-[16px] md:leading-[28px]">
          <div className="mb-4">
            <h2 className="text-[#3D246A] text-sm md:text-base leading-relaxed">
              <span className="font-bold text-base md:text-lg leading-[100%]">
                Missiyamız
              </span>{" "}
              - Rəqəmsal satış təcrübəsini insani və ağıllı hala gətirmək.
              Selnaz, satış komandası olmayan və ya məhdud resurslara sahib olan
              şirkətlərə süni intellekt vasitəsilə canlı satış meneceri effekti
              yaradır.
            </h2>
          </div>

          <div>
            <h2 className="text-[#3D246A] text-sm md:text-base leading-relaxed">
              <span className="font-bold text-base md:text-lg leading-[100%]">
                Məqsədimiz
              </span>{" "}
              – müştəri ilə emosional əlaqə quraraq, dəqiq yönləndirmə, davamlı
              təmas və satış performansını artıran qərarların
              avtomatlaşdırılmasıdır. Biz şirkətləri data ilə danışan, müştərini
              anlayan və 24/7 işləyən bir satış sisteminə qovuşdururuq.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
