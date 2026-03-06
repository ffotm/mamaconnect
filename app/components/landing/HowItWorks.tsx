const STEPS = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Sign up in seconds — choose whether you're an expecting mother or a midwife and personalise your profile.",
  },
  {
    number: "02",
    title: "Track Your Progress",
    description:
      "Log appointments, symptoms, nutrition, and milestones. Watch your baby grow week by week.",
  },
  {
    number: "03",
    title: "Get Personalised Guidance",
    description:
      "Receive tailored health tips, reminders, and community support that adapts to your stage of pregnancy.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Simple Steps to Get Started
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Getting started with MamaConnect is easy — three steps and you&apos;re on your way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div key={s.number} className="relative text-center">
              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-rose-200" />
              )}
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-rose-50 rounded-2xl mb-5">
                <span className="text-xl font-bold text-[#F46A6A]">{s.number}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
