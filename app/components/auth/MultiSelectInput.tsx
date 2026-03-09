"use client";

import { useState, useRef, useEffect } from "react";

interface MultiSelectInputProps {
  label: string;
  placeholder: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  icon?: React.ReactNode;
  error?: string;
}

export default function MultiSelectInput({
  label,
  placeholder,
  options,
  selected,
  onChange,
  icon,
  error,
}: MultiSelectInputProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggle(option: string) {
    if (option === "None") {
      // Selecting "None" clears everything else
      if (selected.includes("None")) {
        onChange([]);
      } else {
        onChange(["None"]);
      }
      return;
    }
    // Selecting any other option removes "None"
    const withoutNone = selected.filter((s) => s !== "None");
    if (withoutNone.includes(option)) {
      onChange(withoutNone.filter((s) => s !== option));
    } else {
      onChange([...withoutNone, option]);
    }
  }

  function remove(option: string) {
    onChange(selected.filter((s) => s !== option));
  }

  return (
    <div className="mb-3.5" ref={containerRef}>
      <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 z-10">
            {icon}
          </span>
        )}
        {/* Trigger area */}
        <div
          onClick={() => setOpen((v) => !v)}
          className={`w-full min-h-11 rounded-xl border cursor-pointer ${
            open ? "border-[#F46A6A] ring-1 ring-[#F46A6A]/20" : error ? "border-red-400" : "border-gray-200"
          } ${icon ? "pl-11" : "pl-4"} pr-9 py-2.5 text-sm text-gray-800 outline-none transition-all flex flex-wrap items-center gap-1.5`}
        >
          {selected.length === 0 && (
            <span className="text-gray-300">{placeholder}</span>
          )}
          {selected.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 bg-rose-50 text-[#F46A6A] text-xs font-medium px-2.5 py-1 rounded-full border border-[#F46A6A]/20"
            >
              {item}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(item);
                }}
                className="hover:text-red-600 transition-colors ml-0.5"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </span>
          ))}
        </div>

        {/* Chevron */}
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>

        {/* Dropdown */}
        {open && (
          <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
            {options.map((option) => {
              const isSelected = selected.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggle(option)}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                    isSelected
                      ? "bg-rose-50 text-[#F46A6A] font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  } first:rounded-t-xl last:rounded-b-xl`}
                >
                  <span>{option}</span>
                  {isSelected && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F46A6A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
