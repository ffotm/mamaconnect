import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Amina O.",
    image: "👩🏽",
    quote:
      "MamaConnect made my pregnancy so much easier. I loved tracking my baby's growth every week and getting gentle reminders for my check-ups.",
  },
  {
    name: "Grace T.",
    image: "👩🏻",
    quote:
      "The community chatbox was a lifesaver. Connecting with other mums who understood exactly what I was going through made all the difference.",
  },
  {
    name: "Fatima K.",
    image: "👩🏾",
    quote:
      "The nutrition tips and health insights helped me feel confident about my choices. I recommend MamaConnect to every expecting mother!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Loved by Mothers Everywhere
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hear from the mothers who trust MamaConnect every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} name={t.name} quote={t.quote} image={t.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
