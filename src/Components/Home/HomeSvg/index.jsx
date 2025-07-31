import React, { useEffect } from "react";
import HomeSvgEffect from "../../../assets/images/homeEffect.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSvg = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative hidden md:block w-full mb-[250px] "
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="300">
      {/* SVG sağ aşağı küncdə */}
      <img
        src={HomeSvgEffect}
        alt="HomeSvgEffect"
        className="absolute right-[120px] bottom-[-255px]  w-[1106px]"
      />
    </div>
  );
};

export default HomeSvg;
