import React from "react";
import Suggestions from "../../Components/Suggestions";
import SelnazStart from "../../Components/Suggestions/SelnazStart";
import SelnazSmart from "../../Components/Suggestions/SelnazSmart";
import SelnazPro from "../../Components/Suggestions/SelnazPro";

const SuggestionsPage = () => {
  return (
    <div className="mb-[40px]">
      <Suggestions />
      <div className="md:flex md:gap-[24px]   md:container md:max-w-[1305px] md:mx-auto">
        <SelnazStart />
        <SelnazSmart />
        <SelnazPro />
      </div>
    </div>
  );
};

export default SuggestionsPage;
