"use client";

import { Check, Edit, Minus, Plus } from "lucide-react";
import { useState } from "react";

const Package = () => {
  const [editingFeature, setEditingFeature] = useState(null);
  const [editingPrice, setEditingPrice] = useState(null);
  const [pricingTiers, setPricingTiers] = useState([
    {
      name: "Selnaz Start",
      price: "49",
      currency: "AZN",
      period: "aylıq",
      features: [
        { name: "AI ilə əsas qarşılaşdırma", included: false },
        { name: "1 kanalda yönləndirmə (veb sayt)", included: false },
        { name: "Əsas məhsul təvsiyəsi", included: false },
        { name: "Sadə CRM qeydiyyatı", included: false },
        { name: "Aylıq analiz hesabatı", included: true, highlighted: true },
      ],
    },
    {
      name: "Selnaz Smart",
      price: "119",
      currency: "AZN",
      period: "aylıq",
      features: [
        {
          name: "3 kanalda qarşılaşdırma (veb, IG, WhatsApp)",
          included: false,
        },
        { name: "Davraniş əsaslı yönləndirmə", included: false },
        { name: "Kampaniya və təklif avtomatlaşdırması", included: false },
        { name: "CRM inteqrasiyası + avtomatik follow-up", included: false },
        { name: "Müştəri seqmentasiyası", included: false },
        {
          name: "Həftəlik analitik hesabat",
          included: true,
          highlighted: true,
        },
      ],
    },
    {
      name: "Selnaz Pro",
      price: "189",
      currency: "AZN",
      period: "aylıq",
      features: [
        { name: "Bütün kanallardan vahid mesaj idarəsi", included: false },
        { name: "Tam AI satış meneceri funksiyası", included: false },
        { name: "CRM + E-commerce + POS inteqrasiyası", included: false },
        { name: "Avtomatik e-mail / SMS kampaniyaları", included: false },
        { name: "White-label və komanda modulu", included: false },
        { name: "Aylıq analiz hesabatı", included: true, highlighted: true },
      ],
    },
  ]);

  const addFeature = (tierIndex) => {
    const updatedTiers = [...pricingTiers];
    updatedTiers[tierIndex].features.push({
      name: "Yeni xüsusiyyət",
      included: false,
    });
    setPricingTiers(updatedTiers);
  };

  const removeFeature = (tierIndex, featureIndex) => {
    const updatedTiers = [...pricingTiers];
    updatedTiers[tierIndex].features.splice(featureIndex, 1);
    setPricingTiers(updatedTiers);
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, tierIndex) => (
            <div
              key={tier.name}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {tier.name}
                </h2>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => {
                    const featureKey = `${tierIndex}-${featureIndex}`;
                    const isEditing = editingFeature === featureKey;

                    return (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-between">
                        {isEditing ? (
                          <input
                            type="text"
                            value={feature.name}
                            onChange={(e) => {
                              const updatedTiers = [...pricingTiers];
                              updatedTiers[tierIndex].features[
                                featureIndex
                              ].name = e.target.value;
                              setPricingTiers(updatedTiers);
                            }}
                            onBlur={() => setEditingFeature(null)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") setEditingFeature(null);
                            }}
                            className="text-gray-700 text-sm flex-1 border border-purple-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            autoFocus
                          />
                        ) : (
                          <span className="text-gray-700 text-sm flex-1">
                            {feature.name}
                          </span>
                        )}

                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => setEditingFeature(featureKey)}
                            className="hover:bg-gray-100 p-1 rounded">
                            <Edit className="w-4 h-4 text-gray-400" />
                          </button>
                          <button
                            onClick={() =>
                              removeFeature(tierIndex, featureIndex)
                            }>
                            <Minus className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {tier.features.find((f) => f.highlighted) && (
                    <div className="bg-purple-100 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-800 font-medium text-sm">
                          {tier.features.find((f) => f.highlighted)?.name}
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => addFeature(tierIndex)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-1">
                  {editingPrice === `price-${tierIndex}` ? (
                    <input
                      type="text"
                      value={tier.price}
                      onChange={(e) => {
                        const updatedTiers = [...pricingTiers];
                        updatedTiers[tierIndex].price = e.target.value;
                        setPricingTiers(updatedTiers);
                      }}
                      onBlur={() => setEditingPrice(null)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setEditingPrice(null);
                      }}
                      className="text-4xl font-bold text-purple-600 border border-purple-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 w-24"
                      autoFocus
                    />
                  ) : (
                    <span className="text-4xl font-bold text-purple-600">
                      {tier.price}
                    </span>
                  )}
                  <span className="text-purple-600 font-medium">
                    {tier.currency} / {tier.period}
                  </span>
                </div>
                <button
                  onClick={() => setEditingPrice(`price-${tierIndex}`)}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
