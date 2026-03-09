"use client";
import { useState, useRef, useEffect } from "react";
import { IoMenuOutline, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";

interface HeaderProps {
  onMenuToggle: () => void;
}

const ADMIN_NOTIFICATIONS = [
  { id: 1, title: "New user registered", desc: "Hanane Belkacem just created an account.", time: "2 hours ago", type: "info" as const },
  { id: 2, title: "Midwife verification request", desc: "Lynda Bensalem submitted verification documents.", time: "4 hours ago", type: "warning" as const },
  { id: 3, title: "Article published", desc: "Dr. Fatima Mansouri published \"Essential Nutrition During Pregnancy\".", time: "6 hours ago", type: "info" as const },
  { id: 4, title: "User account suspended", desc: "Souad Hamidi's account was flagged for review.", time: "1 day ago", type: "critical" as const },
  { id: 5, title: "Weekly report ready", desc: "Your weekly platform summary is available.", time: "1 day ago", type: "info" as const },
];

const notifStyles = {
  info: { dot: "bg-blue-400", text: "text-blue-700", bg: "" },
  warning: { dot: "bg-amber-400", text: "text-amber-700", bg: "bg-amber-50/50" },
  critical: { dot: "bg-red-500", text: "text-red-700", bg: "bg-red-50/50" },
};

export default function Header({ onMenuToggle }: HeaderProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const criticalCount = ADMIN_NOTIFICATIONS.filter((n) => n.type === "critical").length;

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 h-16 flex items-center justify-between px-4 lg:px-8 transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg hover:bg-[#F46A6A]/10 lg:hidden transition-colors duration-200"
        >
          <IoMenuOutline size={22} className="text-gray-600" />
        </button>

        <div className="hidden sm:flex items-center gap-2 w-64">
          <div className="relative w-full">
            <IoSearchOutline size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-gray-200 h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="relative p-2 rounded-lg hover:bg-[#F46A6A]/10 transition-colors duration-200"
          >
            <IoNotificationsOutline size={20} className="text-gray-600" />
            {criticalCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#F46A6A] rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                {criticalCount}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-scaleIn">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div>
                  <p className="text-sm font-bold text-gray-900">Notifications</p>
                  <p className="text-xs text-gray-400">{ADMIN_NOTIFICATIONS.length} notifications</p>
                </div>
                {criticalCount > 0 && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700 uppercase tracking-wider">
                    {criticalCount} critical
                  </span>
                )}
              </div>

              {/* Notifications list */}
              <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                {ADMIN_NOTIFICATIONS.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${notifStyles[notif.type].bg}`}
                  >
                    <span className={`mt-1.5 shrink-0 block w-2.5 h-2.5 rounded-full ${notifStyles[notif.type].dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <p className={`text-xs font-semibold truncate ${notifStyles[notif.type].text}`}>{notif.title}</p>
                        <span className="text-[10px] text-gray-400 shrink-0">{notif.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{notif.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-gray-100 text-center">
                <button
                  onClick={() => setNotifOpen(false)}
                  className="text-xs font-semibold text-[#F46A6A] hover:underline cursor-pointer"
                >
                  Dismiss all
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-px bg-[#FBC4AB]/50" />

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center">
            <span className="text-white font-semibold text-sm">NB</span>
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
