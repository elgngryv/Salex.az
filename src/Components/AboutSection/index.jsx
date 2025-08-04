import React from "react";

const AboutSection = () => {
  return (
    <div className="p-[42px]">
      <div className="border p-[20px] leading-[100%]  border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px]   relative z-10">
        <div className="openSans">
          <div className="mb-2.5">
            <h2 className="text-[#3D246A] text-base">
              <span className="font-bold text-lg leading-[100%]">
                Missiyamız
              </span>{" "}
              - Rəqəmsal satış təcrübəsini insani və ağıllı hala gətirmək.
              Selnaz, satış komandası olmayan və ya məhdud resurslara sahib olan
              şirkətlərə süni intellekt vasitəsilə canlı satış meneceri effekti
              yaradır.
            </h2>
          </div>

          <div>
            {" "}
            <h2 className="text-[#3D246A] text-base ">
              {" "}
              <span className="font-bold text-lg leading-[100%]">
                {" "}
                Məqsədimiz
              </span>{" "}
              – müştəri ilə emosional əlaqə quraraq, dəqiq yönləndirmə, davamlı
              təmas və satış performansını
              <br />
              artıran qərarların
              <br />
              avtomatlaşdırılmasıdır. Biz şirkətləri
              <br />
              data ilə danışan, müştərini anlayan və
              <br />
              24/7 işləyən bir satış sisteminə
              <br />
              qovuşdururuq.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
