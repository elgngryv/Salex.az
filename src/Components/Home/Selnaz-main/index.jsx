import Sagsel1 from "../../../assets/images/sağsel1.svg";
import Sagsel2 from "../../../assets/images/sağsel2.svg";
import Solsel1 from "../../../assets/images/solsel1.svg";
import Solsel2 from "../../../assets/images/solsel2.svg";
import OrtaSel from "../../../assets/images/ortasel.svg";
import Sag1 from "../../../assets/images/sağ1.svg";
import Sag2 from "../../../assets/images/sağ2.svg";
import Sol1 from "../../../assets/images/sol1.svg";
import Sol2 from "../../../assets/images/sol2.svg";

const SelnazMain = () => {
  return (
    <div>
      <div className="relative w-full min-h-[700px] overflow-hidden">
        {/* Container for the four top images */}
        <div className="absolute top-0 left-0 right-0 h-[400px] px-4">
          {/* Solsel1 */}
          <div className="absolute left-[17px] top-[50px]">
            <img src={Solsel1} alt="Smiling character looking left" />
          </div>
          {/* Solsel2 */}
          <div className="absolute left-[120px] top-[20px]">
            <img src={Solsel2} alt="Thinking character looking up-left" />
          </div>
          {/* Sağsel2 */}
          <div className="absolute right-[120px] top-[20px]">
            <img src={Sagsel2} alt="Surprised character looking forward" />
          </div>
          {/* Sağsel1 */}
          <div className="absolute right-[17px] top-[50px]">
            <img src={Sagsel1} alt="Smiling character looking right" />
          </div>
        </div>

        {/* OrtaSel - positioned at the bottom center */}
        <div className="absolute bottom-[336px] left-1/2 -translate-x-1/2 z-10">
          <img src={OrtaSel} alt="Main happy character with hands up" />
        </div>

        {/* Alt Yazı Qutusu - OrtaSel-in ALTINA düşür */}
        <div className="absolute bottom-[210px] left-1/2 transform -translate-x-1/2 z-20 px-4 w-full max-w-md">
          <div className="w-full text-[#3D246A] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-[10px] backdrop-saturate-150 rounded-[20px] flex justify-center items-center">
            <div className="flex justify-center items-center text-center py-[24px] px-3">
              <h2 className="font-light text-base leading-relaxed text-center">
                Sizinlə <span className="font-semibold">24/7</span> işləyən,
                yorulmayan, təzyiq
                <br />
                altında belə səhv etməyən satış
                <br />
                menecerinizdir. Ən əsası,{" "}
                <span className="font-semibold">şirkətinizin satış</span>
                <br />
                <span className="font-semibold">
                  ruhunu rəqəmsal dünyaya daşıyır
                </span>
                .
              </h2>
            </div>
          </div>
        </div>

        {/* Sol1 (leftmost dashed line) */}
        <div className="absolute bottom-[408px] left-[calc(94%-200px)] z-0">
          <img src={Sol1} alt="test1" />
        </div>
        {/* Sol2 (inner left dashed line) */}
        <div className="absolute bottom-[435px] left-[calc(56%-100px)] z-0">
          <img src={Sol2} alt="test2" />
        </div>
        {/* Sag2 (inner right dashed line) */}
        <div className="absolute bottom-[500px] right-[calc(74%-100px)] z-0">
          <img src={Sag2} alt="Dashed line connecting characters" />
        </div>
        {/* Sag1 (rightmost dashed line) */}
        <div className="absolute bottom-[420px] right-[calc(100%-200px)] z-0">
          <img src={Sag1} alt="test" />
        </div>
      </div>
    </div>
  );
};

export default SelnazMain;
