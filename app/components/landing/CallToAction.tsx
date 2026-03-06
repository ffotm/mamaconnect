export default function CallToAction() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#F46A6A] rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />

          <h2 className="relative text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Start Your Journey?
          </h2>
          <p className="relative text-white/80 max-w-md mx-auto mb-8">
            Join thousands of mothers who track, plan, and thrive with
            MamaConnect. Create your free account today.
          </p>
          <a
            href="/auth"
            className="relative inline-flex items-center justify-center text-sm font-semibold text-[#F46A6A] bg-white px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Create Free Account
          </a>
        </div>
      </div>
    </section>
  );
}
