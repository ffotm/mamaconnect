interface TestimonialCardProps {
  name: string;
  quote: string;
  image: string;
}

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#F46A6A] opacity-30">
      <path
        fill="currentColor"
        d="M9.58 4C5.38 6.19 3 9.82 3 14.46V20h8v-8H7c0-3.26 1.76-5.74 4.58-7.24L9.58 4zm11 0C16.38 6.19 14 9.82 14 14.46V20h8v-8h-4c0-3.26 1.76-5.74 4.58-7.24L20.58 4z"
      />
    </svg>
  );
}

export default function TestimonialCard({ name, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <QuoteIcon />
      <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-5">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-lg">
          {image}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F46A6A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
