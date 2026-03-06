"use client";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 50%, #fecdd3 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#F46A6A]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-4 shadow-sm">
            Your Pregnancy Companion
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Your Pregnancy Journey,{" "}
            <span className="text-[#F46A6A]">Supported Every Step of the Way</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Track your health, connect with other mothers, get personalised tips,
            and never miss an appointment — all in one warm and supportive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="/auth"
              className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#F46A6A] px-7 py-3 rounded-full hover:bg-[#e55d5d] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Tracking
            </a>
            <a
              href="#download"
              className="inline-flex items-center justify-center text-sm font-semibold text-[#F46A6A] bg-white px-7 py-3 rounded-full border border-[#F46A6A] hover:bg-rose-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Download App
            </a>
          </div>
        </div>

        {/* Phone illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 sm:w-72 lg:w-80">
            {/* Phone frame */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-200 p-3">
              <div className="bg-rose-50 rounded-4xl overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 py-2 bg-white/60">
                  <span className="text-[10px] font-medium text-gray-500">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3.5 h-2 bg-gray-400 rounded-sm" />
                    <div className="w-1.5 h-2 bg-gray-400 rounded-sm" />
                  </div>
                </div>
                {/* App content mockup */}
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
            {/* Glow behind phone */}
            <div className="absolute -inset-4 bg-[#F46A6A]/10 rounded-[3rem] blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
