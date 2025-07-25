import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Photo from "../../../assets/images/6.svg";
import Photo2 from "../../../assets/images/5.svg";
import Photo3 from "../../../assets/images/4.svg";
import Photo4 from "../../../assets/images/3.svg";
import Photo5 from "../../../assets/images/2.svg";
import Photo6 from "../../../assets/images/1.svg";

const slides = [
  {
    text: "Canlı qarşılayır, tanıyır, yönləndirir",
    image: Photo,
    hasBreak: false,
  },
  {
    text: "Emosional ehtiyacı anlayır və uyğun cavab verir",
    image: Photo2,
    hasBreak: false,
  },
  {
    text: "Real vaxtda davranış analizi aparır",
    image: Photo3,
    hasBreak: false,
  },
  {
    text: "Bütün mesajları birləşdirir",
    image: Photo4,
    hasBreak: true,
  },
  {
    text: "Data əsaslı geri dönüşlər edir",
    image: Photo5,
    hasBreak: true,
  },
  {
    text: "CRM ilə təbrik, kampaniya və xatırlatma göndərir",
    image: Photo6,
    hasBreak: false,
  },
];

const SalexHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipe: true,
    draggable: true,
  };

  return (
    <div className="px-4 mt-[74px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="px-2">
            <div className="border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[20px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 p-[24px] flex flex-col items-center justify-center min-h-[400px]">
              <div className="flex w-[310px] mb-3 text-[#3D246A]">
                <h2 className="font-semibold openSans text-xl">
                  {item.hasBreak ? (
                    <>
                      {item.text.split(" ").slice(0, -1).join(" ")} <br />
                      {item.text.split(" ").slice(-1)[0]}
                    </>
                  ) : (
                    item.text
                  )}
                </h2>
              </div>
              <img
                src={item.image}
                alt={`slide-${index}`}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SalexHero;
