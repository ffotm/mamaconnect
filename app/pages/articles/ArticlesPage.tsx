"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArticleCard from "@/app/components/articles/ArticleCard";
import { ARTICLES, FEATURED_ARTICLE } from "@/app/data/articles";

const CATEGORIES = ["All", "Pregnancy Health", "Nutrition", "Baby Development", "Mental Wellness"];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const filteredArticles = ARTICLES.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.preview.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Back navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#F46A6A] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 50%, #fecdd3 100%)" }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#F46A6A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-4 shadow-sm">
            Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Pregnancy &amp; Motherhood{" "}
            <span className="text-[#F46A6A]">Articles</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Expert-backed articles to help you stay informed, healthy, and confident
            through every stage of your pregnancy journey.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-6">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] transition-colors placeholder:text-gray-400"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#F46A6A] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-[#F46A6A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto bg-linear-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500">
                  {FEATURED_ARTICLE.image}
                </span>
              </div>
              <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
                <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-[#F46A6A] bg-rose-50 px-2.5 py-0.5 rounded-full mb-3 w-fit">
                  {FEATURED_ARTICLE.category}
                </span>
                <span className="inline-block text-xs font-semibold text-white bg-[#F46A6A] px-2.5 py-0.5 rounded-full mb-3 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#F46A6A] transition-colors duration-200">
                  {FEATURED_ARTICLE.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {FEATURED_ARTICLE.preview}
                </p>
                <Link
                  href={`/articles/${FEATURED_ARTICLE.id}`}
                  className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#F46A6A] px-7 py-3 rounded-full hover:bg-[#e55d5d] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 w-fit"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              All Articles
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse our collection of expert-backed articles to guide you through every stage.
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((a) => (
                <ArticleCard
                  key={a.id}
                  id={a.id}
                  image={a.image}
                  title={a.title}
                  preview={a.preview}
                  category={a.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4 block">📭</span>
              <p className="text-gray-500 text-sm">No articles found matching your search. Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-rose-50 to-pink-50 rounded-2xl p-8 sm:p-12 text-center">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-3">
              Newsletter
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Get Weekly Pregnancy Tips
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Subscribe to receive expert advice, helpful articles, and weekly updates
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-gray-200 py-3 px-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] transition-colors placeholder:text-gray-400 bg-white"
              />
              <button className="text-sm font-semibold text-white bg-[#F46A6A] px-7 py-3 rounded-xl hover:bg-[#e55d5d] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
