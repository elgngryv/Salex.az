import React, { useState } from "react";

const SelnazMessage = () => {
  const [bgColor, setBgColor] = useState("#D2B0FE");
  const [textColor, setTextColor] = useState("#1F1F1F");
  const [tempBgColor, setTempBgColor] = useState(bgColor);
  const [tempTextColor, setTempTextColor] = useState(textColor);

  const handleConfirm = () => {
    setBgColor(tempBgColor);
    setTextColor(tempTextColor);
  };

  return (
    <div className="p-6 flex flex-col items-start gap-6">
      {/* Mesajlar */}
      <div
        className="flex items-center w-fit px-6 py-3 gap-3 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105"
        style={{ backgroundColor: bgColor, color: textColor }}>
        <span className="font-semibold italic text-lg">
          Salam! Mən Selnazam 🌟
        </span>
      </div>

      <div
        className="flex items-center w-fit px-6 py-3 gap-3 rounded-3xl shadow-md transform transition duration-300 hover:scale-105"
        style={{ backgroundColor: bgColor, color: textColor }}>
        <span className="font-medium italic text-base md:text-lg">
          Şirkətlər mənimlə satışlarını <span className="font-bold">30%</span>{" "}
          artırır, sən də artırmaq istəyərsən? 🤩
        </span>
      </div>

      {/* Rəng seçiciləri */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Arxa fon:</label>
          <input
            type="color"
            value={tempBgColor}
            onChange={(e) => setTempBgColor(e.target.value)}
            className="w-10 h-10 cursor-pointer border rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Yazı rəngi:</label>
          <input
            type="color"
            value={tempTextColor}
            onChange={(e) => setTempTextColor(e.target.value)}
            className="w-10 h-10 cursor-pointer border rounded-md"
          />
        </div>

        <button
          onClick={handleConfirm}
          className="bg-purple-700 text-white px-5 py-2 rounded-xl shadow-md hover:bg-purple-800 transition">
          Təsdiqlə
        </button>
      </div>
    </div>
  );
};

export default SelnazMessage;
