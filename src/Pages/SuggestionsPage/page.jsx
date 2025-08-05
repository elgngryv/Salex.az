import React from "react";
import Suggestions from "../../Components/Suggestions";
import SelnazStart from "../../Components/Suggestions/SelnazStart";
import SelnazSmart from "../../Components/Suggestions/SelnazSmart";
import SelnazPro from "../../Components/Suggestions/SelnazPro";

const SuggestionsPage = () => {
  return (
    <div className="mb-[400px] md:mb-[600px]">
      <Suggestions />
      <div className="md:flex">
        <SelnazStart />
        <SelnazSmart />
        <SelnazPro />
      </div>
    </div>
  );
};

export default SuggestionsPage;
