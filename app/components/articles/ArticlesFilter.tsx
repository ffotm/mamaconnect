"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Pregnancy Health",
  "Nutrition",
  "Baby Development",
  "Mental Wellness",
];

interface ArticlesFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function ArticlesFilter({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ArticlesFilterProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#F46A6A] focus:ring-2 focus:ring-[#F46A6A]/20 transition-all duration-200"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#F46A6A] text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#F46A6A] hover:text-[#F46A6A]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
