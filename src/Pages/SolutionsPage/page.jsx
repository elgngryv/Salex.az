import React from "react";
import Solutions from "../../Components/Solutions";
import Selnazsolutions from "../../Components/Selnazsolutions";

const SolutionsPage = () => {
  return (
    <div>
      <Solutions />
      <div className="mt-[74px] md:container md:max-w-[1336px] md:mx-auto  mb-[40px]">
        <h2 className="px-4 font-bold text-[26px] md:mb-[42px] dark:text-[#E1DCE6] text-[#3D246A] montserrat">
          Selnazın həlləri
        </h2>
        <Selnazsolutions />
      </div>
    </div>
  );
};

export default SolutionsPage;
