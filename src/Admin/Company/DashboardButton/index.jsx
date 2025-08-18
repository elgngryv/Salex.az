"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const buttons = [
    { id: 1, label: "Selnaz", path: "/selnaz" },
    { id: 3, label: "Robot", path: "/robot" },
    { id: 4, label: "Chat", path: "/chat" },
    { id: 5, label: "Analitika", path: "/admin/company/AnalyticsDashboard" },

    { id: 6, label: "CRM", path: "/crm" },
  ];

  const handleButtonClick = (buttonId, path) => {
    setSelectedButton(buttonId);
    navigate(path);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id, button.path)}
              className={`
                bg-purple-900 hover:bg-purple-800 text-white font-medium 
                py-8 px-6 rounded-3xl transition-all duration-200 
                text-xl min-h-[120px] flex items-center justify-center
                ${selectedButton === button.id ? "ring-4 ring-purple-400" : ""}
                hover:scale-105 active:scale-95
              `}>
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
