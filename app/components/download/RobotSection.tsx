export default function RobotSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Robot illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative group cursor-pointer">
              {/* Robot body */}
              <div className="w-48 h-56 sm:w-56 sm:h-64 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-6 group-hover:-translate-y-2 transition-all duration-500">
                {/* Antenna */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#F46A6A] group-hover:animate-bounce" />
                  <div className="w-1 h-5 bg-gray-300" />
                </div>
                {/* Face */}
                <div className="w-full flex flex-col items-center gap-3">
                  {/* Eyes */}
                  <div className="flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#F46A6A] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#F46A6A] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  {/* Smile */}
                  <div className="w-12 h-6 border-b-4 border-[#F46A6A] rounded-b-full" />
                  {/* Heart */}
                  <div className="mt-2 text-2xl group-hover:scale-125 transition-transform duration-300">
                    💖
                  </div>
                </div>
                {/* Arms */}
                <div className="absolute top-1/2 -left-3 w-6 h-16 bg-gray-200 rounded-full group-hover:rotate-6 transition-transform duration-500 origin-top" />
                <div className="absolute top-1/2 -right-3 w-6 h-16 bg-gray-200 rounded-full group-hover:-rotate-6 transition-transform duration-500 origin-top" />
              </div>
              {/* Glow */}
              <div className="absolute -inset-6 bg-[#F46A6A]/8 rounded-full blur-2xl -z-10 group-hover:bg-[#F46A6A]/15 transition-all duration-500" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-3">
              AI Assistant
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Your MamaConnect Assistant
            </h2>
            <p className="text-gray-500 max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed">
              Our friendly AI assistant is here to help you every step of the way.
              Ask questions, get personalised pregnancy guidance, and receive
              helpful reminders — all powered by smart, caring technology.
            </p>
            <ul className="space-y-3 text-sm text-gray-600 max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-[#F46A6A] shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Answers your pregnancy questions instantly
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-[#F46A6A] shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Provides personalised health tips
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-[#F46A6A] shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Sends appointment and milestone reminders
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
