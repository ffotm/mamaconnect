"use client";
import { IoMenuOutline, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 h-16 flex items-center justify-between px-4 lg:px-8 transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg hover:bg-[#FFDAB9]/50 lg:hidden transition-colors duration-200"
        >
          <IoMenuOutline size={22} className="text-gray-600" />
        </button>

        <div className="hidden sm:flex items-center gap-2 w-64">
          <div className="relative w-full">
            <IoSearchOutline size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-gray-200 h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all placeholder:text-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-[#FFDAB9]/50 transition-colors duration-200">
          <IoNotificationsOutline size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F08080] rounded-full" />
        </button>

        <div className="h-8 w-px bg-[#FBC4AB]/50" />

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FFDAB9] flex items-center justify-center">
            <span className="text-[#F08080] font-semibold text-sm">BO</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-900 leading-tight">Nadia Boudiaf</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
