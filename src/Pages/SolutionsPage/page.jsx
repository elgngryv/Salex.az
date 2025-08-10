import React from "react";
import Solutions from "../../Components/Solutions";
import Selnazsolutions from "../../Components/Selnazsolutions";

const SolutionsPage = () => {
  return (
    <div>
      <Solutions />
      <div className="mt-[74px] mb-[40px]">
        <h2 className="px-4 font-bold text-[26px] text-[#3D246A] montserrat">
          Selnazın həlləri
        </h2>
        <Selnazsolutions />
      </div>
    </div>
  );
};

export default SolutionsPage;
