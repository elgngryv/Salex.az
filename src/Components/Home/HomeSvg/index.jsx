import React from "react";
import HomeSvgEffect from "../../../assets/images/homeEffect.svg";

const HomeSvg = () => {
  return (
    <div className="relative hidden md:block w-full z-1  mb-[250px] md:container md:mx-auto md:max-w-[1336px] ">
      {/* SVG sağ aşağı küncdə */}
      <img
        src="https://res.cloudinary.com/duy7rcf4m/image/upload/v1754899485/homeEffect_ceebcl.svg"
        alt="HomeSvgEffect"
        className="absolute right-[120px] bottom-[-255px] z-1  w-[1106px]"
      />
    </div>
  );
};

export default HomeSvg;
