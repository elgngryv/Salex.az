import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const DataManagement = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    mobilNomre: "",
    email: "",
    sirket: "",
  });

  // Sample data for the table
  const tableData = [
    { id: 1, name: "Elgün Qarayev", company: "Salex" },
    { id: 2, name: "Elgün Qarayev", company: "Salex" },
    { id: 3, name: "Elgün Qarayev", company: "Salex" },
    { id: 4, name: "Elgün Qarayev", company: "Salex" },
    { id: 5, name: "Elgün Qarayev", company: "Salex" },
    { id: 6, name: "Elgün Qarayev", company: "Salex" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Ad</label>
              <input
                type="text"
                value={formData.ad}
                onChange={(e) => handleInputChange("ad", e.target.value)}
                placeholder="Ad"
                className="w-full px-4 py-3 bg-purple-300 placeholder-gray-600 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Soyad
              </label>
              <input
                type="text"
                value={formData.soyad}
                onChange={(e) => handleInputChange("soyad", e.target.value)}
                placeholder="Soyad"
                className="w-full px-4 py-3 bg-purple-300 placeholder-gray-600 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mobil nömrə
              </label>
              <input
                type="tel"
                value={formData.mobilNomre}
                onChange={(e) =>
                  handleInputChange("mobilNomre", e.target.value)
                }
                placeholder="Mobil nömrə"
                className="w-full px-4 py-3 bg-purple-300 placeholder-gray-600 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
              />
            </div>
          </div>

          {/* Second row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 bg-purple-300 placeholder-gray-600 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Şirkət
              </label>
              <input
                type="text"
                value={formData.sirket}
                onChange={(e) => handleInputChange("sirket", e.target.value)}
                placeholder="Şirkət"
                className="w-full px-4 py-3 bg-purple-300 placeholder-gray-600 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-purple-900 hover:bg-purple-800 text-white font-medium py-4 px-6 rounded-2xl transition-colors duration-200">
            Əlavə et
          </button>
        </form>

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
                <button className="bg-purple-900 hover:bg-purple-800 text-white rounded-lg px-4 py-2 text-sm">
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
    </div>
  );
};

export default DataManagement;
