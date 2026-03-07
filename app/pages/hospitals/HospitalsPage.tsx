"use client";

import { useState } from "react";

const CITIES = ["All Cities", "Alger", "Oran", "Constantine", "Blida", "Tizi Ouzou", "Annaba", "Sétif"];

const HOSPITALS = [
  {
    emoji: "🏥",
    name: "CHU Mustapha Pacha",
    city: "Alger",
    address: "Place du 1er Mai, Alger Centre",
    type: "Public University Hospital",
    description:
      "One of Algeria's largest and most prestigious public hospitals, with a dedicated maternity and neonatology department. Equipped with advanced obstetric care units and 24/7 emergency services.",
    services: ["Obstetrics & Gynecology", "Neonatology ICU", "High-Risk Pregnancy", "C-Section", "24/7 Emergency"],
    phone: "021 23 45 67",
    emergency: true,
    rating: 4.2,
  },
  {
    emoji: "🏥",
    name: "EHS Mère et Enfant El Biar",
    city: "Alger",
    address: "El Biar, Alger",
    type: "Public Specialized Hospital",
    description:
      "A specialized mother and child hospital (EHS) providing comprehensive maternity care, prenatal consultations, labor units, and postnatal follow-up. Highly regarded among Algerian mothers.",
    services: ["Prenatal Consultations", "Labor & Delivery", "Breastfeeding Support", "Newborn Care", "Postnatal Follow-up"],
    phone: "021 92 11 45",
    emergency: true,
    rating: 4.4,
  },
  {
    emoji: "🏥",
    name: "Clinique El Azhar",
    city: "Alger",
    address: "Ben Aknoun, Alger Ouest",
    type: "Private Clinic",
    description:
      "A well-equipped private maternity clinic in western Algiers offering private prenatal consultations, echographies, and delivery rooms with comfortable private suites.",
    services: ["Private Delivery Rooms", "3D Echography", "Gynecology Consultations", "Lactation Support", "Postnatal Care"],
    phone: "021 91 33 20",
    emergency: false,
    rating: 4.6,
  },
  {
    emoji: "🏥",
    name: "Clinique Sainte-Thérèse",
    city: "Alger",
    address: "Rue Hassiba Ben Bouali, Alger Centre",
    type: "Private Clinic",
    description:
      "A reputable private clinic in central Algiers providing personalized maternity care. Known for its experienced gynecologists and modern delivery facilities.",
    services: ["Natural Birth Support", "Epidural Analgesia", "Prenatal Classes", "Gynecology", "Echography"],
    phone: "021 73 45 18",
    emergency: false,
    rating: 4.5,
  },
  {
    emoji: "🏥",
    name: "EHS Mère et Enfant Canastel",
    city: "Oran",
    address: "Canastel, Oran",
    type: "Public Specialized Hospital",
    description:
      "The main specialized public hospital for maternal and child health in western Algeria. Serves a large population across the Oran region with complete obstetric and neonatal services.",
    services: ["Labor & Delivery", "Neonatal ICU", "Prenatal Monitoring", "High-Risk Cases", "Emergency Obstetrics"],
    phone: "041 42 31 00",
    emergency: true,
    rating: 4.1,
  },
  {
    emoji: "🏥",
    name: "CHU d'Oran (CHUO)",
    city: "Oran",
    address: "1 Avenue de l'ANP, Oran",
    type: "Public University Hospital",
    description:
      "The main teaching hospital of western Algeria, housing a respected obstetrics and gynecology department that handles complex and high-risk pregnancies for the entire region.",
    services: ["High-Risk Pregnancy", "Obstetric Surgery", "Fetal Medicine", "Neonatology", "24/7 Emergency"],
    phone: "041 40 91 91",
    emergency: true,
    rating: 4.0,
  },
  {
    emoji: "🏥",
    name: "CHU de Constantine (CHUC)",
    city: "Constantine",
    address: "Route Aïn El Bey, Constantine",
    type: "Public University Hospital",
    description:
      "A major reference hospital for eastern Algeria, with a comprehensive women's and children's health department handling thousands of births annually with 24/7 emergency obstetric care.",
    services: ["Obstetrics", "Gynecological Surgery", "Neonatal Care", "Prenatal Echo", "Emergency"],
    phone: "031 68 78 00",
    emergency: true,
    rating: 4.0,
  },
  {
    emoji: "🏥",
    name: "Clinique El Karma",
    city: "Blida",
    address: "Route de l'Université, Blida",
    type: "Private Clinic",
    description:
      "A modern private maternity clinic in Blida offering a personalized birth experience, skilled obstetricians, and well-equipped delivery suites with comfortable postnatal recovery rooms.",
    services: ["Delivery Suites", "Prenatal Check-ups", "Ultrasound", "Postnatal Recovery", "Breastfeeding Clinic"],
    phone: "025 49 71 12",
    emergency: false,
    rating: 4.5,
  },
  {
    emoji: "🏥",
    name: "EPH Frantz Fanon – Maternité",
    city: "Blida",
    address: "Boulevard Colonel Lotfi, Blida",
    type: "Public Hospital",
    description:
      "A well-established public hospital center with an active maternity ward serving the Blida wilaya. Provides free public prenatal care and delivery services.",
    services: ["Free Prenatal Care", "Labor & Delivery", "C-Section", "Neonatal Care", "Postnatal Consultation"],
    phone: "025 41 14 94",
    emergency: true,
    rating: 3.9,
  },
  {
    emoji: "🏥",
    name: "CHU Lamine Debaghine (Parnet)",
    city: "Alger",
    address: "Hussein Dey, Alger Est",
    type: "Public University Hospital",
    description:
      "A large teaching hospital in eastern Algiers with a busy obstetrics department. Handles both routine and complex deliveries and offers postnatal mother-baby care.",
    services: ["Obstetrics & Gynecology", "Antenatal Monitoring", "Delivery Unit", "Neonatal ICU", "24/7 Emergency"],
    phone: "021 49 11 12",
    emergency: true,
    rating: 4.1,
  },
  {
    emoji: "🏥",
    name: "CHU Tizi Ouzou",
    city: "Tizi Ouzou",
    address: "Route Ait Aissa Mimoun, Tizi Ouzou",
    type: "Public University Hospital",
    description:
      "The main referral hospital for Kabylie region, providing full obstetric services. Known for handling high-altitude and rural referral cases with a dedicated maternity unit.",
    services: ["Prenatal Care", "Labor & Delivery", "Emergency Obstetrics", "Neonatal Unit", "Gynecology"],
    phone: "026 21 49 40",
    emergency: true,
    rating: 3.8,
  },
  {
    emoji: "🏥",
    name: "CHU Annaba – Maternité",
    city: "Annaba",
    address: "Avenue de l'ALN, Annaba",
    type: "Public University Hospital",
    description:
      "The teaching hospital of Annaba hosts a busy maternity department serving the northeastern region of Algeria. Supported by a neonatal intensive care unit for premature and at-risk newborns.",
    services: ["Labor & Delivery", "Fetal Monitoring", "C-Section", "Neonatal ICU", "Postnatal Care"],
    phone: "038 86 60 80",
    emergency: true,
    rating: 3.9,
  },
];

export default function HospitalsPage() {
  const [search, setSearch] = useState("");
  const [activeCity, setActiveCity] = useState("All Cities");

  const filtered = HOSPITALS.filter((h) => {
    const matchSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.description.toLowerCase().includes(search.toLowerCase()) ||
      h.services.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchCity = activeCity === "All Cities" || h.city === activeCity;
    return matchSearch && matchCity;
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
            Medical Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Hospitals &amp; <span className="text-[#F46A6A]">Maternity Clinics</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Find trusted hospitals, maternity wards, and clinics across Algeria for your
            prenatal care and delivery needs.
          </p>
        </div>
      </section>

      {/* Search & City filters */}
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
              placeholder="Search hospitals or services..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] transition-colors placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeCity === city
                    ? "bg-[#F46A6A] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-[#F46A6A]"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {activeCity === "All Cities" ? "All Facilities" : `Facilities in ${activeCity}`}
              </h2>
              <p className="text-gray-500 text-sm">{filtered.length} hospital{filtered.length !== 1 ? "s" : ""} found</p>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((h) => (
                <div
                  key={h.name}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-2xl shadow-md flex-shrink-0">
                      {h.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                          {h.name}
                        </h3>
                        {h.emergency && (
                          <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full flex-shrink-0">
                            24/7
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-semibold text-[#F46A6A] bg-rose-50 px-2 py-0.5 rounded-full">
                          {h.city}
                        </span>
                        <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {h.type}
                        </span>
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-semibold">
                          ★ {h.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {h.description}
                  </p>

                  {/* Services */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Services</p>
                    <div className="flex flex-wrap gap-1.5">
                      {h.services.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-gray-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-xs truncate">{h.address}</span>
                    </div>
                    <a
                      href={`tel:${h.phone}`}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#F46A6A] hover:text-[#e55d5d] transition-colors flex-shrink-0 ml-3"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.03 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6.1 6.1l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {h.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4 block">🏥</span>
              <p className="text-gray-500 text-sm">No hospitals found. Try a different city or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-3">
                  Emergency
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Obstetric Emergency? Act Fast.
                </h2>
                <p className="text-gray-500 max-w-md leading-relaxed">
                  If you experience heavy bleeding, severe abdominal pain, decreased fetal movement, or any sudden symptoms — contact emergency services or go directly to your nearest maternity hospital.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="tel:021"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-red-500 px-7 py-3 rounded-full hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.03 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6.1 6.1l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Emergency (021)
                </a>
                <a
                  href="/dashboard"
                  className="inline-flex items-center justify-center text-sm font-semibold text-[#F46A6A] px-7 py-3 rounded-full border border-[#F46A6A] hover:bg-rose-50 transition-colors"
                >
                  Book a Midwife Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
