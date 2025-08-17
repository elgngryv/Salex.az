import React from "react";
import Done from "../../../assets/images/material-symbols_done-rounded.svg";
import { useTheme } from "../../theme-provider";
const SelnazPro = () => {
  const handleSelect = (tariffName) => {
    const phone = "994558996649";
    const text = `Salam! Mən ${tariffName} paketi seçmək istəyirəm.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };
  const selnazPro = {
    id: 1,
    title: "Selnaz Pro",
    price: "119 AZN / aylıq",
    items: [
      { id: 1, text: "Bütün kanallardan vahid mesaj idarəsi" },
      { id: 2, text: "Tam AI satış meneceri funksiyası" },
      { id: 3, text: "CRM + E-commerce + POS inteqrasiyası" },
      { id: 4, text: "Avtomatik e-mail / SMS kampaniyaları" },
      { id: 5, text: "White-label və komanda modulu" },
    ],
  };
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="px-4 mt-3 max-w-md mx-auto">
      <div className="border p-[32px] md:w-[389px] border-white/20 bg-white/10 backdrop-blur-md shadow-md rounded-[20px]">
        <h2 className="font-bold text-[#3D246A] dark:text-[#E1DCE6] text-2xl montserrat">
          {selnazPro.title}
        </h2>
        <div className="mt-[24px] flex flex-col gap-[12px] text-[#3D246A]">
          {selnazPro.items.map((item) => (
            <div key={item.id} className="flex gap-[4px] items-center">
              <img
                src={
                  theme === "dark"
                    ? "https://res.cloudinary.com/duy7rcf4m/image/upload/v1755249479/material-symbols_done-rounded_di9fzx.svg"
                    : Done
                }
                alt=""
              />
              <h2 className="font-normal dark:text-[#E1DCE6] text-base openSans">
                {item.text}
              </h2>
            </div>
          ))}
        </div>
        <div className="montserrat mt-[28px]">
          <h2 className="font-semibold text-lg dark:text-[#E1DCE6] text-[#4200BA]">
            <span className="text-[#4200BA] text-2xl font-semibold dark:text-[#E1DCE6]">
              189
            </span>{" "}
            AZN / aylıq
          </h2>
        </div>
        <div className="montserrat mt-4">
          <button
            className="bg-[#3D246A] dark:bg-[#E1DCE6] dark:text-[#3D246A] py-3 px-[75px] w-full rounded-[24px] text-white text-xl font-semibold"
            onClick={() => handleSelect(selnazPro.title)}>
            İNDİ ƏLDƏ ET
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelnazPro;
