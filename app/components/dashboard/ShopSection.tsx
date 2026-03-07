"use client";

import { SHOP_PLANS } from "./data";
import { CheckIcon } from "./icons";

export default function ShopSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
        <p className="text-gray-500 max-w-md mx-auto">Select the perfect care package for your pregnancy journey</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {SHOP_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl border-2 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl ${
              plan.popular
                ? "border-[#F46A6A] shadow-lg shadow-[#F46A6A]/10 scale-[1.02]"
                : "border-gray-100 hover:border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#F46A6A] to-[#FBC4AB] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular
                </span>
              </div>
            )}
            <div className={`${plan.popular ? "pt-2" : ""}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">DA {plan.period}</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-[#F46A6A] text-white" : "bg-gray-100 text-gray-500"}`}>
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#F46A6A] text-white hover:bg-[#e55a5a] shadow-md shadow-[#F46A6A]/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Get {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
