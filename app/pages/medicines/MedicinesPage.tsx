"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Vitamins & Supplements", "Prescribed", "Pain Relief", "Digestive Health"];

const MEDICINES = [
  {
    emoji: "💊",
    name: "Acide Folique (Folic Acid)",
    category: "Vitamins & Supplements",
    description:
      "A critical B-vitamin that supports fetal neural tube development and helps prevent birth defects. Recommended from before conception through the first trimester.",
    use: "400–800 mcg daily, as directed by your doctor",
    trimester: "All Trimesters",
    note: "Available at pharmacies across Algeria without prescription.",
  },
  {
    emoji: "🩸",
    name: "Tardyferon (Iron Supplement)",
    category: "Vitamins & Supplements",
    description:
      "Slow-release iron supplement widely prescribed in Algeria to prevent and treat iron-deficiency anemia, very common during pregnancy.",
    use: "1 tablet daily on an empty stomach, or as prescribed",
    trimester: "All Trimesters",
    note: "Take with orange juice to improve absorption. Avoid with dairy.",
  },
  {
    emoji: "🦴",
    name: "Orocal D3 (Calcium + Vit D3)",
    category: "Vitamins & Supplements",
    description:
      "Combination of calcium carbonate and vitamin D3 to support fetal bone development and maintain maternal bone density throughout pregnancy.",
    use: "1–2 tablets daily after meals, as prescribed",
    trimester: "2nd & 3rd Trimester",
    note: "Commonly prescribed from mid-pregnancy onward in Algerian clinics.",
  },
  {
    emoji: "☀️",
    name: "Stérogyl (Vitamine D3)",
    category: "Vitamins & Supplements",
    description:
      "Vitamin D3 supplement that supports calcium absorption, immune function, and fetal skeletal development. Particularly important in regions with limited sun exposure.",
    use: "As directed by physician — usually weekly or monthly dosing",
    trimester: "All Trimesters",
    note: "A standard supplement in Algerian prenatal care protocols.",
  },
  {
    emoji: "🧠",
    name: "Magnésium B6",
    category: "Vitamins & Supplements",
    description:
      "Magnesium combined with vitamin B6 to reduce leg cramps, manage stress, and support nervous system health during pregnancy.",
    use: "1–2 tablets daily, as prescribed by your midwife or doctor",
    trimester: "2nd & 3rd Trimester",
    note: "Often recommended for night leg cramps common in late pregnancy.",
  },
  {
    emoji: "🐟",
    name: "Oméga-3 DHA/EPA",
    category: "Vitamins & Supplements",
    description:
      "Essential fatty acids that support fetal brain development, visual development, and reduce risk of preterm birth.",
    use: "200–300 mg DHA daily",
    trimester: "All Trimesters",
    note: "Available in Algerian pharmacies. Choose certified mercury-free brands.",
  },
  {
    emoji: "🌱",
    name: "Utrogestan (Progestérone)",
    category: "Prescribed",
    description:
      "Natural progesterone supplement used to support early pregnancy, prevent miscarriage, and manage luteal phase deficiency.",
    use: "Oral or vaginal use, dosage determined by your gynecologist",
    trimester: "1st & 2nd Trimester",
    note: "Prescription required. Available at Algerian hospital pharmacies.",
  },
  {
    emoji: "🤢",
    name: "Primpéran (Métoclopramide)",
    category: "Prescribed",
    description:
      "Anti-nausea medication used to manage severe morning sickness (nausea and vomiting) in the first trimester when non-drug measures are insufficient.",
    use: "Short-term use only, strictly as prescribed by your doctor",
    trimester: "1st Trimester",
    note: "Only use under medical supervision. Not for prolonged self-medication.",
  },
  {
    emoji: "😣",
    name: "Spasfon (Phloroglucinol)",
    category: "Prescribed",
    description:
      "Antispasmodic used to relieve uterine contractions and pelvic pain during pregnancy. Commonly prescribed in Algerian obstetric clinics.",
    use: "As prescribed — typically 2 tablets up to 3 times daily",
    trimester: "2nd & 3rd Trimester",
    note: "Do not self-medicate. Consult your gynecologist before use.",
  },
  {
    emoji: "🩹",
    name: "Paracétamol (Doliprane / Efferalgan)",
    category: "Pain Relief",
    description:
      "The first-line pain reliever and fever reducer considered safest during pregnancy. Avoid ibuprofen and aspirin during pregnancy.",
    use: "500 mg – 1 g every 6–8 hours, do not exceed 3 g/day",
    trimester: "All Trimesters",
    note: "Widely available in Algerian pharmacies. Use minimum effective dose.",
  },
  {
    emoji: "🔥",
    name: "Gaviscon (Alginate antacid)",
    category: "Digestive Health",
    description:
      "Relieves heartburn and acid reflux, which are extremely common during pregnancy due to hormonal changes and uterine pressure on the stomach.",
    use: "2–4 tablets after meals and at bedtime",
    trimester: "2nd & 3rd Trimester",
    note: "Safe for use during pregnancy. Available over the counter in Algeria.",
  },
  {
    emoji: "🫧",
    name: "Maalox (Magnesium + Aluminum hydroxide)",
    category: "Digestive Health",
    description:
      "Antacid suspension used to neutralize stomach acid and relieve pregnancy-related heartburn, bloating, and indigestion.",
    use: "1–2 sachets or tablets after meals and at bedtime",
    trimester: "2nd & 3rd Trimester",
    note: "Commonly available at pharmacies in Algeria. Consult your doctor first.",
  },
];

export default function MedicinesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = MEDICINES.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || m.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <>
      {/* Back to Dashboard */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#F46A6A] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Dashboard
          </a>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 50%, #fecdd3 100%)" }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#F46A6A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-4 shadow-sm">
            Pregnancy Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Prenatal <span className="text-[#F46A6A]">Medicines</span> &amp; Supplements
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A guide to commonly used medications and supplements during pregnancy in Algeria.
            Always consult your doctor before taking any medication.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto mb-6">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search medicines or supplements..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] transition-colors placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#F46A6A] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-[#F46A6A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="bg-rose-50 border-b border-rose-100 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">⚠️</span>
            <p className="text-sm text-rose-700 leading-relaxed">
              <strong>Medical Disclaimer:</strong> This information is for educational purposes only. Always consult a qualified healthcare professional (doctor, gynecologist, or pharmacist) before taking any medication during pregnancy. Never self-medicate.
            </p>
          </div>
        </div>
      </section>

      {/* Medicines Grid */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Medication Guide
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Commonly used prenatal medications and supplements available in Algerian pharmacies and hospitals.
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((med) => (
                <div
                  key={med.name}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-2xl shadow-md flex-shrink-0">
                      {med.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1">
                        {med.name}
                      </h3>
                      <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-2.5 py-0.5 rounded-full">
                        {med.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {med.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-gray-500 w-20 flex-shrink-0 pt-0.5">Dosage</span>
                      <span className="text-xs text-gray-700 leading-relaxed">{med.use}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-gray-500 w-20 flex-shrink-0 pt-0.5">Trimester</span>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{med.trimester}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-gray-500 w-20 flex-shrink-0 pt-0.5">Note</span>
                      <span className="text-xs text-gray-500 leading-relaxed">{med.note}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4 block">📭</span>
              <p className="text-gray-500 text-sm">No medicines found. Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 sm:p-12 text-center">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-3">
              Always Stay Safe
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Talk to Your Doctor First
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Every pregnancy is unique. Your gynecologist or midwife will recommend the right
              medications and supplements for your specific needs.
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#F46A6A] px-7 py-3 rounded-full hover:bg-[#e55d5d] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
