import React from "react";
import SelnazMsg from "../../Components/Home/SelnazMsg";
import SalexBanner from "../../Components/Home/Salex-banner";
import SalexHero from "../../Components/Home/Salex-hero";
import SalexSection from "../../Components/Home/Salex-section";
import SelnazMain from "../../Components/Home/Selnaz-main";
import Integrations from "../../Components/Home/Integrations";
import FooterElem from "../../Components/Layout/FooterElem";
import SalexCRM from "../../Components/Home/SalexCRM";
import SalexAnalytics from "../../Components/Home/SalexAnalytics";

const Home = () => {
  return (
    <div>
      <SelnazMsg />
      <SalexBanner />
      <SalexHero />
      <SalexSection />
      <SelnazMain />
      <SalexCRM />
      <SalexAnalytics />
      <Integrations />
    </div>
  );
};

export default Home;
