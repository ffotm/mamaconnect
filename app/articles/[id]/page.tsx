import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES, FEATURED_ARTICLE } from "@/app/data/articles";
import BackButton from "@/app/components/articles/BackButton";

export function generateStaticParams() {
  return [...ARTICLES, FEATURED_ARTICLE].map((a) => ({ id: a.id }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = [...ARTICLES, FEATURED_ARTICLE].find((a) => a.id === id);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <BackButton />
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Category badge */}
        <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-3 py-1 rounded-full mb-5">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-[#F46A6A] font-bold text-sm">
              {article.author.charAt(0)}
            </div>
            <span className="font-medium text-gray-700">{article.author}</span>
          </div>
          <span>&middot;</span>
          <span>{article.date}</span>
          <span>&middot;</span>
          <span>{article.readTime}</span>
        </div>

        {/* Hero image block */}
        <div className="w-full h-56 sm:h-72 bg-linear-to-br from-rose-50 to-pink-100 rounded-2xl flex items-center justify-center mb-10 overflow-hidden">
          <span className="text-8xl sm:text-9xl select-none">{article.image}</span>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {article.content.map((section, i) => (
            <div key={i} className="mb-8">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h2>
              )}
              <p className="text-gray-600 leading-relaxed text-base sm:text-[17px]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 pt-10 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm mb-5">
            Enjoyed this article? Browse more expert-backed resources below.
          </p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#F46A6A] px-7 py-3 rounded-full hover:bg-[#e55d5d] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Browse All Articles
            <span>&rarr;</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
