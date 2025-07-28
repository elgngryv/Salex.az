import React from "react";
import Suggestions from "../../Components/Suggestions";
import SelnazStart from "../../Components/Suggestions/SelnazStart";
import SelnazSmart from "../../Components/Suggestions/SelnazSmart";
import SelnazPro from "../../Components/Suggestions/SelnazPro";

const SuggestionsPage = () => {
  return (
    <div className="mb-[400px]">
      <Suggestions />
      <SelnazStart />
      <SelnazSmart/>
      <SelnazPro/>
    </div>
  );
};

export default SuggestionsPage;
