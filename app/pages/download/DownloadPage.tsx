"use client";

import { useState } from "react";
import Navbar from "@/app/components/landing/Navbar";
import Footer from "@/app/components/landing/Footer";
import RobotSection from "@/app/components/download/RobotSection";

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.48c-.36-.17-.6-.52-.6-.92V1.44c0-.4.24-.75.6-.93l11.18 11.49L3.18 23.48zm1.4.96l12.24-7.07-2.72-2.8-9.52 9.87zm15.38-11.61l-3.22-1.86-3.02 3.1 3.02 3.03 3.22-1.86c.6-.35.6-1.06 0-1.41zM4.58.56l9.52 9.87 2.72-2.8L4.58.56z" />
    </svg>
  );
}

const BENEFITS = [
  {
    icon: "📊",
    title: "Pregnancy Tracking",
    description: "Track your weekly progress, baby's growth, and important milestones — all in one place.",
  },
  {
    icon: "👩‍👩‍👧",
    title: "Community Support",
    description: "Connect with other expecting mothers, share experiences, and find your support tribe.",
  },
  {
    icon: "💡",
    title: "Personalised Health Tips",
    description: "Receive customised advice based on your pregnancy stage, health profile, and preferences.",
  },
  {
    icon: "📅",
    title: "Appointment Reminders",
    description: "Never miss a check-up or scan with smart reminders synced to your pregnancy timeline.",
  },
];

const FAQS = [
  {
    q: "Is the MamaConnect app free to download?",
    a: "Yes! MamaConnect is completely free to download and use. We offer a premium subscription with additional features, but the core experience is free for all mothers.",
  },
  {
    q: "What devices are supported?",
    a: "MamaConnect is available on iOS (iPhone and iPad) and Android devices. We support iOS 15+ and Android 10+.",
  },
  {
    q: "Is my health data secure?",
    a: "Absolutely. We use end-to-end encryption and follow strict data protection standards. Your health data is never shared with third parties without your consent.",
  },
  {
    q: "Can I use the app after my baby is born?",
    a: "Yes! MamaConnect continues to support you with postnatal care tips, baby development tracking, and community support even after your baby arrives.",
  },
  {
    q: "Does the app work offline?",
    a: "Many features work offline, including your pregnancy tracker, saved articles, and appointment reminders. Chat features require an internet connection.",
  },
];

export default function DownloadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 50%, #fecdd3 100%)" }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#F46A6A]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-4 shadow-sm">
              Mobile App
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Take MamaConnect{" "}
              <span className="text-[#F46A6A]">Everywhere</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Your pregnancy companion in your pocket. Track your journey, connect
              with other mothers, and get personalised tips — anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <AppleIcon />
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-normal opacity-80">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <PlayStoreIcon />
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-normal opacity-80">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 sm:w-72 lg:w-80">
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-200 p-3">
                <div className="bg-rose-50 rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 py-2 bg-white/60">
                    <span className="text-[10px] font-medium text-gray-500">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 bg-gray-400 rounded-sm" />
                      <div className="w-1.5 h-2 bg-gray-400 rounded-sm" />
                    </div>
                  </div>
                  {/* App mockup */}
                  <div className="px-5 py-4 space-y-3">
                    <div className="text-center">
                      <p className="text-[10px] text-[#F46A6A] font-semibold uppercase tracking-wide">Week 24</p>
                      <p className="text-xs font-bold text-gray-900 mt-1">Your baby is the size of a cantaloupe!</p>
                    </div>
                    {/* Progress ring */}
                    <div className="flex justify-center py-2">
                      <div className="w-24 h-24 rounded-full border-4 border-[#F46A6A]/20 flex items-center justify-center relative">
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="46" fill="none" stroke="#F46A6A" strokeWidth="4" strokeDasharray="289.03" strokeDashoffset="100" strokeLinecap="round" />
                        </svg>
                        <div className="text-center">
                          <p className="text-lg font-bold text-[#F46A6A]">65%</p>
                          <p className="text-[8px] text-gray-500">complete</p>
                        </div>
                      </div>
                    </div>
                    {/* Quick cards */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white rounded-xl p-2.5 shadow-sm">
                        <p className="text-[9px] text-gray-400 font-medium">Next Visit</p>
                        <p className="text-[11px] font-semibold text-gray-800 mt-0.5">Mar 12</p>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 shadow-sm">
                        <p className="text-[9px] text-gray-400 font-medium">Weight</p>
                        <p className="text-[11px] font-semibold text-gray-800 mt-0.5">68.5 kg</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-2.5 shadow-sm">
                      <p className="text-[9px] text-gray-400 font-medium">Today&apos;s Tip</p>
                      <p className="text-[10px] text-gray-700 mt-0.5 leading-relaxed">
                        Stay hydrated! Aim for 8-10 glasses of water daily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -inset-4 bg-[#F46A6A]/10 rounded-[3rem] blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* App Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-3">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Everything You Need in One App
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              MamaConnect brings together all the tools and support you need for a healthy,
              happy pregnancy journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F46A6A] transition-colors duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{b.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download buttons section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Download MamaConnect today and join thousands of mothers who are already
            using the app to support their pregnancy journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <AppleIcon />
              <div className="text-left leading-tight">
                <p className="text-[10px] font-normal opacity-80">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <PlayStoreIcon />
              <div className="text-left leading-tight">
                <p className="text-[10px] font-normal opacity-80">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Robot Assistant Section */}
      <RobotSection />

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Got questions about the MamaConnect app? We have answers.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
