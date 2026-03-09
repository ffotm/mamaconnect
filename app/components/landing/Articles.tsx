import ArticleCard from "./ArticleCard";
import { ARTICLES as ALL_ARTICLES } from "@/app/data/articles";

const LANDING_ARTICLES = ALL_ARTICLES.slice(0, 3);

export default function Articles() {
  return (
    <section id="articles" className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-3">
            Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Latest Pregnancy &amp; Parenting Reads
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Expert-backed articles to guide you through every stage of motherhood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANDING_ARTICLES.map((a) => (
            <ArticleCard key={a.id} id={a.id} image={a.image} title={a.title} preview={a.preview} />
          ))}
        </div>
      </div>
    </section>
  );
}
