import React from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate();

  // Sample data for the table
  const tableData = [
    { id: 1, name: "Elgün Qarayev", company: "Salex" },
    { id: 2, name: "Elgün Qarayev", company: "Salex" },
    { id: 3, name: "Elgün Qarayev", company: "Salex" },
    { id: 4, name: "Elgün Qarayev", company: "Salex" },
    { id: 5, name: "Elgün Qarayev", company: "Salex" },
    { id: 6, name: "Elgün Qarayev", company: "Salex" },
  ];

  return (
    <div>
      {/* Data Table */}
      <div className="rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4  p-4 border-b font-medium text-[#3D246A]">
          <div className="col-span-4 font-bold">Ad/Soyad</div>
          <div className="col-span-4 font-bold ">Şirkət</div>
          <div className="col-span-4"></div>
        </div>

        {/* Table Rows */}
        {tableData.map((row) => (
          <div
            key={row.id}
            className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
            <div className="col-span-4 text-gray-700">{row.name}</div>
            <div className="col-span-4 text-gray-700">{row.company}</div>
            <div className="col-span-4 flex gap-2 justify-end">
              {/* 🚀 Detallar button yönləndirir */}
              <button
                onClick={() => navigate("/admin/company/dashboard")}
                className="bg-purple-900 hover:bg-purple-800 text-white rounded-lg px-4 py-2 text-sm">
                Detallar
              </button>

              <button className="bg-purple-900 hover:bg-purple-800 text-white rounded-lg px-4 py-2 text-sm">
                Redaktə
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 text-sm">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
