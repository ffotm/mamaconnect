"use client";

import { useState } from "react";
import { ALERTS, alertStyles, WEARABLE_DATA } from "./data";
import { BellIcon } from "./icons";

/* ── inline icons ───────────────────────────────────────────────── */
function BatteryFullIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="18" height="11" rx="2" />
      <path d="M22 11v3" strokeWidth="2.5" />
      <rect x="4" y="9" width="12" height="7" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/* ── heartbeat SVG waveform ─────────────────────────────────────── */
function HeartbeatChart() {
  const line =
    "M0,40 L28,40 L34,40 L40,12 L46,62 L52,4 L58,56 L64,40 L90,40 L96,40 L102,16 L108,60 L114,6 L120,52 L126,40 L155,40 L161,40 L167,14 L173,60 L179,8 L185,54 L191,40 L220,40";
  return (
    <svg viewBox="0 0 220 70" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="hbFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F46A6A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F46A6A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L220,70 L0,70 Z`} fill="url(#hbFill)" />
      <path d={line} fill="none" stroke="#F46A6A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── circular progress ──────────────────────────────────────────── */
function CircularProgress({ value, color = "#F46A6A" }: { value: number; color?: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r={r} fill="none" stroke="#f3f4f6" strokeWidth="6" />
      <circle cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="6"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform="rotate(-90 36 36)" />
      <text x="36" y="40" textAnchor="middle" fontSize="12" fontWeight="700" fill="#111827">{value}%</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────────── */
export default function MonitoringAlerts() {
  const [filter, setFilter] = useState<"all" | "critical" | "warning" | "info">("all");
  const [kicks, setKicks] = useState(WEARABLE_DATA.kicks);
  const [notifEvery2h, setNotifEvery2h] = useState(true);

  const filteredAlerts = filter === "all" ? ALERTS : ALERTS.filter((a) => a.type === filter);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-5">

      {/* ── Device Status Bar ─────────────────────────────────────── */}
      <div className="bg-gray-900 rounded-2xl px-5 py-4 flex items-center justify-between text-white shadow-lg">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <div>
            <p className="font-bold text-sm leading-tight">Mamacita Monitor</p>
            <p className="text-xs text-gray-400 leading-tight">Connected &amp; Syncing</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <BatteryFullIcon />
          <span className="text-sm font-semibold">{WEARABLE_DATA.battery}%</span>
        </div>
      </div>

      {/* ── Row 1: Heartbeat (wide) + Kicks + Temp ───────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Baby Heartbeat */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Baby Heartbeat</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-4xl font-extrabold text-gray-900">{WEARABLE_DATA.heartRate}</span>
                <span className="text-lg font-semibold text-gray-500 mb-0.5">BPM</span>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 mt-1 shrink-0">
              Normal
            </span>
          </div>
          <div className="h-16 my-3">
            <HeartbeatChart />
          </div>
          <p className="text-[11px] text-gray-400">
            Normal range: <span className="font-semibold text-gray-600">120 – 160 BPM</span>
          </p>
        </div>

        {/* Kicks + Temp stacked */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Kicks Today</p>
            <div className="flex items-end justify-between mt-2">
              <div>
                <span className="text-4xl font-extrabold text-gray-900">{kicks}</span>
                <span className="text-sm font-medium text-gray-500 ml-1.5">kicks</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">Low</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-2">Expected: <span className="font-semibold text-gray-600">10+ per day</span></p>
          </div>

          <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Temperature</p>
            <div className="flex items-end justify-between mt-2">
              <div>
                <span className="text-4xl font-extrabold text-gray-900">{WEARABLE_DATA.temp}</span>
                <span className="text-base font-medium text-gray-500 ml-1">°C</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">Normal</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-2">Normal: <span className="font-semibold text-gray-600">36.1 – 37.2 °C</span></p>
          </div>
        </div>
      </div>

      {/* ── Row 2: Movement ───────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-5">
        <CircularProgress value={WEARABLE_DATA.movement} color="#F46A6A" />
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Movement</p>
          <p className="text-2xl font-extrabold text-gray-900 mt-1">{WEARABLE_DATA.movement}%</p>
          <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 mt-1.5">
            Active
          </span>
        </div>
      </div>

      {/* ── Row 3: Kick Counter + Notification Setting ───────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Manual Kick Counter */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Manual Kick Counter</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-5xl font-extrabold text-gray-900">{kicks}</span>
              <p className="text-xs text-gray-400 mt-1">kicks recorded today</p>
            </div>
            <button
              onClick={() => setKicks((k) => k + 1)}
              className="w-14 h-14 rounded-full bg-[#F46A6A] text-white text-3xl flex items-center justify-center shadow-md hover:bg-[#e55d5d] active:scale-95 transition-all duration-150 cursor-pointer leading-none"
            >
              +
            </button>
          </div>
          <button
            onClick={() => setKicks(0)}
            className="mt-4 w-full text-xs font-semibold text-gray-500 hover:text-[#F46A6A] transition-colors py-2 border border-gray-200 rounded-xl hover:border-[#F46A6A]/30 cursor-pointer"
          >
            Reset
          </button>
        </div>

        {/* Notification Preference */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Update Preference</p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-800">Update me every 2 hours</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">Receive a health summary every 2 hours during the day.</p>
            </div>
            <button
              onClick={() => setNotifEvery2h((v) => !v)}
              className={`relative shrink-0 w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${notifEvery2h ? "bg-[#F46A6A]" : "bg-gray-200"}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${notifEvery2h ? "translate-x-5" : "translate-x-0"}`} />
            </button>
          </div>
          {notifEvery2h && (
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
              <CheckCircleIcon />
              <span>Next update in ~45 min</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Notification Center ───────────────────────────────────── */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-[#F46A6A]">
              <BellIcon />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Notification Center</h2>
              <p className="text-sm text-gray-500">{ALERTS.length} alerts today</p>
            </div>
          </div>
          <div className="flex gap-2">
            {(["all", "critical", "warning", "info"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize cursor-pointer ${
                  filter === f
                    ? f === "critical" ? "bg-red-100 text-red-700"
                    : f === "warning"  ? "bg-orange-100 text-orange-700"
                    : f === "info"     ? "bg-blue-100 text-blue-700"
                    : "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex items-start gap-4 rounded-xl p-4 sm:p-5 border ${alertStyles[alert.type].bg} ${alertStyles[alert.type].border} transition-all duration-200 hover:shadow-md`}
            >
              <div className="mt-1.5 shrink-0">
                <span className={`block w-3 h-3 rounded-full ${alertStyles[alert.type].dot}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className={`text-sm font-semibold ${alertStyles[alert.type].text}`}>{alert.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${alertStyles[alert.type].badge} uppercase tracking-wider`}>
                      {alert.type}
                    </span>
                    <span className="text-[11px] text-gray-400">{alert.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{alert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
