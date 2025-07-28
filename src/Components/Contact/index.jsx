import React from "react";
import SelnazHome from "../../assets/images/SelnazContact.svg";
import Vector from "../../assets/images/Vector.svg";

const Contact = () => {
  return (
    <div  className="mb-[400px]">
      <div className="w-full flex items-center justify-center relative">
        {/* Mesaj qutusu */}
        <div className="w-[290px] openSans mt-[10px] border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] p-[12px] relative z-10">
          <div className="flex flex-col items-start gap-[14px]">
            <div className="flex items-center w-fit h-fit text-[#3D246A] px-[8px] py-[6px] gap-[10px] rounded-[8px]">
              <span className="text-[14px] font-normal italic leading-[140%]">
                Əgər xidmətlərimizlə bağlı sualınız yaranıbsa, bizimlə əlaqə
                saxlayın.
              </span>
            </div>
          </div>

          <div className="fixed z-50" style={{ bottom: "0px", right: "0px" }}>
            <div
              className="relative"
              style={{ width: "150px", height: "180px" }}>
              <button
                className="absolute z-20"
                style={{
                  bottom: "-130px",
                  right: "-36px",
                  backgroundColor: "#5B2E91",
                  width: "60px",
                  height: "60px",
                  borderRadius: "9999px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                <img
                  src={Vector}
                  alt="Vector"
                  style={{ width: "24px", height: "24px" }}
                />
              </button>

              <img
                src={SelnazHome}
                alt="Selnaz"
                style={{
                  bottom: "-164px",
                  right: "-64px",
                  position: "absolute",
                }}
                className="absolute z-30"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start mt-[50px] justify-start w-[256px]">
          <h2 className="text-[#3D246A] text-[26px] font-bold montserrat">
            Bizimlə Əlaqə
          </h2>
        </div>
      </div>
      <div className="p-4 openSans">
        <div>
          {/* AD */}
          <div className="relative w-full mt-6">
            <input
              type="text"
              id="ad"
              placeholder=" "
              className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
            />
            <label
              htmlFor="ad"
              className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
              AD
            </label>
          </div>

          {/* SOYAD */}
          <div className="relative w-full mt-6">
            <input
              type="text"
              id="soyad"
              placeholder=" "
              className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
            />
            <label
              htmlFor="soyad"
              className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
              Soyad
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative w-full mt-6">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
              Email
            </label>
          </div>

          {/* MOBİL */}
          <div className="relative w-full mt-6">
            <input
              type="tel"
              id="mobil"
              placeholder=" "
              className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none"
            />
            <label
              htmlFor="mobil"
              className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
          peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
          peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
          peer-focus:px-1 peer-focus:rounded-md">
              Mobil nömrə
            </label>
          </div>

          <div className="relative w-full mt-6">
            <textarea
              id="mesaj"
              placeholder=" "
              rows={6}
              className="peer w-full px-[20px] py-4 text-[#3D246A] font-light text-sm border border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px] focus:outline-none resize-none"></textarea>
            <label
              htmlFor="mesaj"
              className="absolute left-[20px] top-[14px] text-sm text-[#3D246A] font-light bg-white/10 px-1 transition-all duration-200
      peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm
      peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-white/10
      peer-focus:px-1 peer-focus:rounded-md">
              Mesaj
            </label>
          </div>
        </div>
        <div className="montserrat mt-4">
          <button className="bg-[#3D246A] py-4 px-[140.5px] w-full rounded-[24px]  text-white text-xl font-semibold">
            Göndər
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
