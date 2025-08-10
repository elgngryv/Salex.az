import React from "react";
import Sagsel1 from "../../assets/images/sagsel1.svg";
import Sagsel2 from "../../assets/images/sagsel2.svg";
import Solsel1 from "../../assets/images/solsel1.svg";
import Solsel2 from "../../assets/images/solsel2.svg";
import OrtaSel from "../../assets/images/ortasel.svg";
import Sag1 from "../../assets/images/sag1.svg";
import Sag2 from "../../assets/images/sag2.svg";
import Sol1 from "../../assets/images/sol1.svg";
import Sol2 from "../../assets/images/sol2.svg";
import OrtaHuge from "../../assets/images/ortaHuge.svg";
import Sagsel1Huge from "../../assets/images/Sagselhuge1.svg";
import Sagsel2Huge from "../../assets/images/Sagselhuge2.svg";
import SolselHuge1 from "../../assets/images/Solselhuge1.svg";
import SolselHuge2 from "../../assets/images/Solselhuge2.svg";
import OrtaselHuge from "../../assets/images/ortaSelUst.svg";
import Sagline1 from "../../assets/images/sagline1.svg";
import Sagline2 from "../../assets/images/sagline2.svg";
import Ortaline from "../../assets/images/ortaline.svg";
import Solline1 from "../../assets/images/solline1.svg";
import Solline2 from "../../assets/images/solline2.svg";

const AboutMain = () => {
  return (
    <div className="">
      <div className="relative w-full min-h-[700px] md:min-h-[910px]  overflow-hidden">
        {/* Container for the four top images */}
        <div className="absolute top-0 left-0 right-0 h-[400px] px-4">
          {/* Solsel1 */}

          {/* Sağsel2 */}

          {/* Sağsel1 */}
        </div>

        <div className="absolute bottom-[336px] left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <img
            src={OrtaHuge}
            alt="Main happy character with hands up (desktop)"
          />
        </div>

        <div className="absolute bottom-[336px] left-1/2 -translate-x-1/2 z-10 block md:hidden">
          <img
            src={OrtaSel}
            alt="Main happy character with hands up (mobile)"
          />
        </div>

        <div className="absolute bottom-[210px] md:left-[610px] left-1/2 transform -translate-x-1/2 z-20 px-4 w-full max-w-md">
          <div className="w-full md:w-[610px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex justify-center items-center">
            <div className="flex justify-center items-center text-center py-[24px] px-3">
              <h2 className="font-light md:w-[578px] text-base leading-relaxed text-center dark:text-[#E1DCE6]">
                Sizinlə{" "}
                <span className="font-semibold dark:text-[#E1DCE6]">24/7</span>{" "}
                işləyən, yorulmayan, təzyiq altında belə səhv etməyən satış
                menecerinizdir. Ən əsası,{" "}
                <span className="font-semibold dark:text-[#E1DCE6]">
                  şirkətinizin satış ruhunu
                </span>{" "}
                <span className="font-semibold dark:text-[#E1DCE6]">
                  rəqəmsal dünyaya
                  <br />
                  daşıyır
                </span>
                .
              </h2>
            </div>
          </div>
        </div>

        {/* Sol1 (leftmost dashed line) */}
        <div className="absolute bottom-[408px] left-[calc(94%-200px)] z-0 md:hidden">
          <div className="relative right-[17px] top-[50px] md:hidden">
            <div className="absolute right-[-43px] top-[-50px]">
              <img src={Sagsel1} alt="Smiling character looking right" />
            </div>
            <img src={Sol1} alt="test1" />
          </div>
        </div>
        <div className="absolute bottom-[380px] left-[calc(64%-200px)] hidden z-0 md:block">
          <div className="relative  h-full w-full hidden  md:block">
            <div className=" absolute w-[112px] top-[-110px] right-[-60px] hidden md:block">
              <img
                className="w-full h-full"
                src={Sagsel1Huge}
                alt="Smiling character looking right"
              />
            </div>
            <img src={Sagline2} alt="sagline2" />
          </div>
        </div>
        {/* Sol2 (inner left dashed line) */}
        <div className="absolute bottom-[475px] right-[290px] z-0 md:hidden">
          <div className="relative right-[-180px] top-[20px] md:hidden">
            <div className=" absolute left-[27px]  w-[80px] h-[80px] top-[-44px]">
              <img src={Sagsel2} alt="Surprised character looking forward" />
            </div>

            <img className="w-[100px] h-[159px]" src={Sol2} alt="test2" />
          </div>
        </div>
        <div className="absolute bottom-[395px] left-[calc(59%-100px)] hidden z-0 md:block">
          <div className="relative  h-full w-full hidden  md:block">
            <div className="absolute w-[112px] top-[-110px] right-[-60px] hidden md:block">
              <img
                className="w-full h-full"
                src={Sagsel2Huge}
                alt="Surprised character looking forward"
              />
            </div>
            <img src={Sagline1} alt="sagline1" />
          </div>
        </div>
        {/* Sag2 (inner right dashed line) */}
        <div className="absolute bottom-[500px] right-[calc(72%-100px)] z-0 md:hidden">
          <div className="relative left-[10px] top-[20px] md:hidden">
            <div className="absolute left-[-3px]  top-[-80px]">
              <img src={Solsel2} alt="Thinking character looking up-left" />
            </div>
            <img src={Sag2} alt="Dashed line connecting characters" />
          </div>
        </div>
        <div className="absolute bottom-[397px] right-[calc(59%-100px)] hidden z-0 md:block">
          <div className="relative  h-full w-full hidden  md:block">
            <div className="absolute w-[112px] top-[-110px] right-[260px] hidden md:block">
              <img
                className="w-full h-full"
                src={SolselHuge2}
                alt="Thinking character looking up-left"
              />
            </div>
            <img src={Solline1} alt="Solline1" />
          </div>
        </div>
        {/* Sag1 (rightmost dashed line) */}
        <div className="absolute bottom-[420px] right-[calc(110%-200px)] z-0 md:hidden">
          <div className="relative left-[17px]  top-[50px] md:hidden">
            <div className=" absolute left-[-43px]  top-[-60px] ">
              <img src={Solsel1} alt="Smiling character looking left" />
            </div>

            <img src={Sag1} alt="test" />
          </div>
        </div>
        <div className="absolute bottom-[380px] right-[calc(64%-200px)] hidden z-0 md:block">
          <div className="relative  h-full w-full hidden  md:block">
            <div className=" absolute w-[112px] top-[-110px] right-[443px] hidden md:block">
              <img
                className="w-full h-full"
                src={SolselHuge1}
                alt="Smiling character looking left"
              />
            </div>
            <img src={Solline2} alt="testSolline2" />
          </div>
        </div>
        <div className="absolute bottom-[526px]  right-[calc(64%-200px)] hidden z-0 md:block">
          <div className="relative h-full w-full">
            <div className="absolute w-[112px] top-[-110px] right-[-57px] hidden md:block">
              <img
                className="w-full h-full"
                src={OrtaselHuge}
                alt="Smiling character looking right"
              />
            </div>
            <img src={Ortaline} alt="testorta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
