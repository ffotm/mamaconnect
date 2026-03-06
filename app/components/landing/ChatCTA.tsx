export default function ChatCTA() {
  return (
    <section id="community" className="relative bg-gray-50 py-16 sm:py-20 overflow-hidden">
      {/* Subtle decorative blob */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Chat illustration */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-sm space-y-3">
              {/* chat bubbles mockup */}
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F46A6A]/20 flex items-center justify-center text-xs font-bold text-[#F46A6A] shrink-0">A</div>
                <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-gray-100 max-w-[75%]">
                  <p className="text-sm text-gray-700">Has anyone else had trouble sleeping in the third trimester? Any tips?</p>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-end">
                <div className="bg-[#F46A6A] rounded-2xl rounded-tr-md px-4 py-3 shadow-sm max-w-[75%]">
                  <p className="text-sm text-white">I use a pregnancy pillow and it&apos;s been a lifesaver! Also try warm chamomile tea before bed.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-bold text-[#F46A6A] shrink-0">S</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-[#F46A6A] shrink-0">M</div>
                <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-gray-100 max-w-[75%]">
                  <p className="text-sm text-gray-700">This community is so supportive! Love being here with other mums</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-3">
              Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Connect With Other Moms
            </h2>
            <p className="text-gray-500 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Share your journey, ask questions, and find support in our warm community of
              expecting and new mothers. You&apos;re never alone on this journey.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#F46A6A] px-7 py-3 rounded-full hover:bg-[#e55d5d] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Open Chatbox
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
