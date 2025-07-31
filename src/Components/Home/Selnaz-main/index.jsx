import Sagsel1 from "../../../assets/images/sagsel1.svg";
import Sagsel2 from "../../../assets/images/sagsel2.svg";
import Solsel1 from "../../../assets/images/solsel1.svg";
import Solsel2 from "../../../assets/images/solsel2.svg";
import OrtaSel from "../../../assets/images/ortasel.svg";
import Sag1 from "../../../assets/images/sag1.svg";
import Sag2 from "../../../assets/images/sag2.svg";
import Sol1 from "../../../assets/images/sol1.svg";
import Sol2 from "../../../assets/images/sol2.svg";
import OrtaHuge from "../../../assets/images/ortaHuge.svg";
import Sagsel1Huge from "../../../assets/images/Sagselhuge1.svg";
import Sagsel2Huge from "../../../assets/images/Sagselhuge2.svg";
import SolselHuge1 from "../../../assets/images/Solselhuge1.svg";
import SolselHuge2 from "../../../assets/images/Solselhuge2.svg";
import OrtaselHuge from "../../../assets/images/ortaSelÜst.svg";
import Sagline1 from "../../../assets/images/sagline1.svg";
import Sagline2 from "../../../assets/images/sagline2.svg";
import Ortaline from "../../../assets/images/ortaline.svg";
import Solline1 from "../../../assets/images/solline1.svg";
import Solline2 from "../../../assets/images/solline2.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SelnazMain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="">
      <div className="relative w-full min-h-[700px] md:min-h-[910px]  overflow-hidden">
        {/* Container for the four top images */}
        <div className="absolute top-0 left-0 right-0 h-[400px] px-4">
          {/* Solsel1 */}
          <div className="absolute left-[17px]  top-[50px] md:hidden">
            <img src={Solsel1} alt="Smiling character looking left" />
          </div>
          <div className="absolute left-[128px] hidden top-[255px] md:block">
            <img src={SolselHuge1} alt="Smiling character looking left" 
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-center"
                 data-aos-delay="300"
            
            />
          </div>

          {/* Solsel2 */}
          <div className="absolute left-[120px] top-[20px] md:hidden">
            <img src={Solsel2} alt="Thinking character looking up-left" />
          </div>
          <div className="absolute left-[310px] hidden top-[140px] md:block">
            <img src={SolselHuge2} alt="Thinking character looking up-left"
            
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            />
          </div>
          {/* Sağsel2 */}
          <div className="absolute right-[120px] top-[20px] md:hidden">
            <img src={Sagsel2} alt="Surprised character looking forward" />
          </div>
          <div className="absolute right-[333px] hidden top-[130px] md:block">
            <img src={Sagsel2Huge} alt="Surprised character looking forward" 
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-center"
                 data-aos-delay="300"
            />
          </div>
          {/* Sağsel1 */}
          <div className="absolute right-[17px] top-[50px] md:hidden">
            <img src={Sagsel1} alt="Smiling character looking right" />
          </div>
          <div className="absolute right-[126px] hidden top-[255px] md:block">
            <img src={Sagsel1Huge} alt="Smiling character looking right"
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-center"
                 data-aos-delay="300"
            />
          </div>
          <div className="absolute right-[668px] top-[8px] hidden md:block">
            <img src={OrtaselHuge} alt="Smiling character looking right" 
            
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            />
          </div>
        </div>

        {/* 🌐 Desktop görünüş — yalnız md və yuxarısı */}
        <div className="absolute bottom-[336px] left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <img
            src={OrtaHuge}
            alt="Main happy character with hands up (desktop)"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          />
        </div>

        {/* 📱 Mobil görünüş — yalnız sm və aşağısı */}
        <div className="absolute bottom-[336px] left-1/2 -translate-x-1/2 z-10 block md:hidden">
          <img
            src={OrtaSel}
            alt="Main happy character with hands up (mobile)"
          />
        </div>

        <div className="absolute bottom-[210px] md:left-[610px] left-1/2 transform -translate-x-1/2 z-20 px-4 w-full max-w-md">
          <div className="w-full md:w-[610px] text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex justify-center items-center">
            <div className="flex justify-center items-center text-center py-[24px] px-3">
              <h2 className="font-light md:w-[578px] text-base leading-relaxed text-center"
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-center"
                 data-aos-delay="400"
              
              >
                Sizinlə <span className="font-semibold">24/7</span> işləyən,
                yorulmayan, təzyiq altında belə səhv etməyən satış
                menecerinizdir. Ən əsası,{" "}
                <span className="font-semibold">şirkətinizin satış ruhunu</span>{" "}
                <span className="font-semibold">
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
          <img src={Sol1} alt="test1" />
        </div>
        <div className="absolute bottom-[380px] left-[calc(64%-200px)] hidden z-0 md:block">
          <img src={Sagline2} alt="sagline2"
          
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
          />
        </div>
        {/* Sol2 (inner left dashed line) */}
        <div className="absolute bottom-[435px] left-[calc(56%-100px)] z-0 md:hidden">
          <img src={Sol2} alt="test2" />
        </div>
        <div className="absolute bottom-[395px] left-[calc(59%-100px)] hidden z-0 md:block">
          <img src={Sagline1} alt="sagline1"
               data-aos="fade-up"
               data-aos-anchor-placement="top-center"
               data-aos-delay="300"
          />
        </div>
        {/* Sag2 (inner right dashed line) */}
        <div className="absolute bottom-[500px] right-[calc(74%-100px)] z-0 md:hidden">
          <img src={Sag2} alt="Dashed line connecting characters" 
          />
        </div>
        <div className="absolute bottom-[397px] right-[calc(59%-100px)] hidden z-0 md:block">
          <img src={Solline1} alt="Solline1" 
          
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
          />
        </div>
        {/* Sag1 (rightmost dashed line) */}
        <div className="absolute bottom-[420px] right-[calc(100%-200px)] z-0 md:hidden">
          <img src={Sag1} alt="test" />
        </div>
        <div className="absolute bottom-[380px] right-[calc(64%-200px)] hidden z-0 md:block">
          <img src={Solline2} alt="testSolline2"
          
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="500"
          
          />
        </div>
        <div className="absolute bottom-[526px] right-[calc(64%-200px)] hidden z-0 md:block">
          <img src={Ortaline} alt="testorta" 
          
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="500"
          
          />
        </div>
      </div>
    </div>
  );
};

export default SelnazMain;
