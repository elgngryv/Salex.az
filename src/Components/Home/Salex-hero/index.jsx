import React from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    text: "Canlı qarşılayır, tanıyır, yönləndirir",
    image:
      "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755588364/Frame_7230_mcfuik.png",
    hasBreak: false,
  },
  {
    text: "Emosional ehtiyacı anlayır və uyğun cavab verir",
    image:
      "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755588479/Frame_7235_y3bqjv.png",
    hasBreak: false,
  },
  {
    text: "Real vaxtda davranış analizi aparır",
    image:
      "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755588517/Frame_7232_hw0r8m.png",
    hasBreak: false,
  },
  {
    text: "Bütün mesajları birləşdirir",
    image:
      "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755588562/Frame_7236_z6d1tj.png",
    hasBreak: true,
  },
  {
    text: "Data əsaslı geri dönüşlər edir",
    image:
      "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755588615/Frame_7233_kz2opw.png",
    hasBreak: true,
  },
  {
    text: "CRM ilə təbrik, kampaniya və xatırlatma göndərir",
    image:
      "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755588720/Frame_7234_mondf5.png",
    hasBreak: false,
  },
];

const SalexHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 mt-[74px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="px-2 w-[390px] md:w-[434px]">
            <div className="border border-white/30 rounded-[20px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 p-[24px] flex flex-col items-center justify-center min-h-[400px]">
              <div className="flex w-[310px] mb-3 dark:text-[#E1DCE6] text-[#3D246A]">
                <h2 className="font-semibold openSans dark:text-[#E1DCE6] text-xl">
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
              <LazyLoadImage
                src={item.image}
                alt={`slide-${index}`}
                effect="blur"
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
