"use client";

import { useRef, useEffect, useState } from "react";
import { TabKey, SIDEBAR_TABS, ALERTS, getInitials } from "./data";
import { BellIcon } from "./icons";
import ProfileDropdown from "./ProfileDropdown";

interface HeaderBarProps {
  activeTab: TabKey;
  user: { name: string; email: string };
  onLogout: () => void;
}

export default function HeaderBar({ activeTab, user, onLogout }: HeaderBarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 sm:px-8">
      <div>
        <h1 className="text-lg font-bold text-gray-900">
          {SIDEBAR_TABS.find((t) => t.key === activeTab)?.label}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
          <BellIcon />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#F46A6A] rounded-full text-white text-[10px] font-bold flex items-center justify-center">
            {ALERTS.filter((a) => a.type === "critical").length}
          </span>
        </button>

        {/* Profile Avatar */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:shadow-lg hover:shadow-[#F46A6A]/20 transition-all duration-200"
          >
            {getInitials(user.name)}
          </button>

          {profileOpen && (
            <ProfileDropdown user={user} onLogout={onLogout} />
          )}
        </div>
      </div>
    </header>
  );
}
