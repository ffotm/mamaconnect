interface FeaturedArticleProps {
  image: string;
  title: string;
  preview: string;
  category: string;
}

export default function FeaturedArticle({
  image,
  title,
  preview,
  category,
}: FeaturedArticleProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-64 lg:h-auto bg-linear-to-br from-rose-50 via-pink-100 to-rose-100 flex items-center justify-center">
            <span className="text-8xl group-hover:scale-105 transition-transform duration-300">
              {image}
            </span>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#F46A6A] bg-rose-50 px-2.5 py-1 rounded-full">
                {category}
              </span>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-white bg-[#F46A6A] px-2.5 py-1 rounded-full">
                Featured
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#F46A6A] transition-colors duration-200">
              {title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">{preview}</p>
            <a
              href="#"
              className="inline-flex items-center justify-center self-start text-sm font-semibold text-white bg-[#F46A6A] px-7 py-3 rounded-full hover:bg-[#e55d5d] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
