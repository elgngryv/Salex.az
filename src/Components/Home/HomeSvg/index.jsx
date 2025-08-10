import React from "react";
import HomeSvgEffect from "../../../assets/images/homeEffect.svg";

const HomeSvg = () => {
  return (
    <div className="relative hidden md:block w-full mb-[250px] ">
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
