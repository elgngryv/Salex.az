import React, { useState } from "react";

const Buttons = () => {
  const [bgColor, setBgColor] = useState("#5B2E91");
  const [iconColor, setIconColor] = useState("#FFFFFF");
  const [tempBg, setTempBg] = useState(bgColor);
  const [tempIcon, setTempIcon] = useState(iconColor);

  const handleConfirm = () => {
    setBgColor(tempBg);
    setIconColor(tempIcon);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative gap-6">
      {/* Düymə */}
      <button
        className="w-16 h-16 md:w-28 md:h-28 flex justify-center items-center rounded-full shadow-md hover:scale-105 transition-transform"
        style={{ backgroundColor: tempBg }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-9 md:h-9"
        >
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
            fill={tempIcon}
          />
          <circle cx="7" cy="9" r="1" fill={tempIcon} />
          <circle cx="12" cy="9" r="1" fill={tempIcon} />
          <circle cx="17" cy="9" r="1" fill={tempIcon} />
        </svg>
      </button>

      {/* Fon rəngi seçici */}
      <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-md">
        <label className="text-sm font-medium">Fon Rəngi:</label>
        <input
          type="color"
          value={tempBg}
          onChange={(e) => setTempBg(e.target.value)}
          className="w-12 h-12 cursor-pointer"
        />
      </div>

      {/* İkon rəngi seçici */}
      <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-md">
        <label className="text-sm font-medium">İkon Rəngi:</label>
        <input
          type="color"
          value={tempIcon}
          onChange={(e) => setTempIcon(e.target.value)}
          className="w-12 h-12 cursor-pointer"
        />
      </div>

      {/* Təsdiqlə düyməsi */}
      <button
        onClick={handleConfirm}
        className="bg-purple-700 text-white px-6 py-2 rounded-md mt-2"
      >
        Təsdiqlə
      </button>
    </div>
  );
};

export default Buttons;
