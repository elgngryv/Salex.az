import React, { useState } from "react";

const UserMessage = () => {
  const [bgColor, setBgColor] = useState("#A8DDFD"); // default istifadəçi rəngi
  const [textColor, setTextColor] = useState("#1F1F1F");
  const [tempBgColor, setTempBgColor] = useState(bgColor);
  const [tempTextColor, setTempTextColor] = useState(textColor);

  const handleConfirm = () => {
    setBgColor(tempBgColor);
    setTextColor(tempTextColor);
  };

  return (
    <div className="p-6 flex flex-col items-end gap-6">
      {/* İstifadəçi mesajları */}
      <div
        className="flex items-center w-fit px-6 py-3 gap-3 rounded-3xl shadow-md transform transition duration-300 hover:scale-105"
        style={{ backgroundColor: tempBgColor, color: tempTextColor }}
      >
        <span className="font-medium text-base md:text-lg">
          Salam, mən istifadəçiyəm! 👋
        </span>
      </div>

      <div
        className="flex items-center w-fit px-6 py-3 gap-3 rounded-3xl shadow-sm transform transition duration-300 hover:scale-105"
        style={{ backgroundColor: tempBgColor, color: tempTextColor }}
      >
        <span className="font-normal text-base md:text-lg">
          Sualım var: Sizin xidmətlərdən necə istifadə edə bilərəm? 🤔
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
          className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Təsdiqlə
        </button>
      </div>
    </div>
  );
};

export default UserMessage;
