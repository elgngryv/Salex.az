import React from "react";

const AnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Real-time Monitoring Panel */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Real-time izleme paneli
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">
                Onlayn olan müşteri sayı
              </h3>
              <p className="text-4xl font-bold">278</p>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">
                Hal-hazırda cavab verdiyimiz aktiv danışıqlar
              </h3>
              <p className="text-4xl font-bold">52</p>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">
                Ən çox soruşulan suallar
              </h3>
              <div className="space-y-1 text-sm">
                <p>Çatbot necə işləyir?</p>
                <p>Çatbot necə işləyir?</p>
                <p>Çatbot necə işləyir?</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">
                Botdan operatora keçid sayı
              </h3>
              <p className="text-4xl font-bold">19</p>
            </div>
          </div>
        </div>

        {/* Performance Panel */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Selnazın performans paneli
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Cavab sayı</h3>
              <p className="text-4xl font-bold">354</p>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Bəyənilmə faizi</h3>
              <p className="text-4xl font-bold">92%</p>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">
                Canlıya yönləndirmə sayı
              </h3>
              <p className="text-4xl font-bold">37</p>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-sm font-medium mb-2">
                Təklif etdiyi məhsullardan alınanlar
              </h3>
              <p className="text-4xl font-bold">90%</p>
            </div>
          </div>
        </div>

        {/* Effectiveness Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Effectiveness Panel */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Effektivlik paneli
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-600 text-white p-6 rounded-lg">
                <h3 className="text-sm font-medium mb-2">
                  Hər bir QR / reklam / sosial media postu - klik sayı
                </h3>
                <p className="text-4xl font-bold">1872</p>
              </div>
              <div className="bg-purple-600 text-white p-6 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Satış sayı</h3>
                <p className="text-4xl font-bold">142</p>
              </div>
            </div>
          </div>

          {/* Right Effectiveness Panel */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Effektivlik paneli
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-600 text-white p-6 rounded-lg">
                <h3 className="text-sm font-medium mb-2">CPC</h3>
                <p className="text-4xl font-bold">$0.10</p>
              </div>
              <div className="bg-purple-600 text-white p-6 rounded-lg">
                <h3 className="text-sm font-medium mb-2">CR</h3>
                <p className="text-4xl font-bold">60%</p>
              </div>
              <div className="bg-purple-600 text-white p-6 rounded-lg mt-4">
                <h3 className="text-sm font-medium mb-2">ROAS</h3>
                <p className="text-4xl font-bold">$3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
