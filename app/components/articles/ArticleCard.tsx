interface ArticleCardProps {
  image: string;
  title: string;
  preview: string;
  category: string;
}

export default function ArticleCard({ image, title, preview, category }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      {/* Image placeholder */}
      <div className="h-48 bg-linear-to-br from-rose-50 to-pink-100 flex items-center justify-center overflow-hidden">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{image}</span>
      </div>
      <div className="p-5">
        <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-2.5 py-0.5 rounded-full mb-2">
          {category}
        </span>
        <h3 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-[#F46A6A] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{preview}</p>
        <button className="text-sm font-semibold text-[#F46A6A] hover:underline inline-flex items-center gap-1 group/btn cursor-pointer">
          Read More
          <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-200">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
