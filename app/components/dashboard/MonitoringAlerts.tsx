"use client";

import { useState } from "react";
import { ALERTS, alertStyles, WEARABLE_DATA } from "./data";
import { BellIcon, HeartPulseIcon, ThermometerIcon, WatchIcon, BatteryIcon } from "./icons";

export default function MonitoringAlerts() {
  const [filter, setFilter] = useState<"all" | "critical" | "warning" | "info">("all");
  const filteredAlerts = filter === "all" ? ALERTS : ALERTS.filter((a) => a.type === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8">
      {/* Mamacita Monitor Status Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-5 sm:p-6 mb-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <WatchIcon />
            </div>
            <div>
              <h2 className="font-bold text-base">Mamacita Monitor</h2>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${WEARABLE_DATA.connected ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`} />
                <span className="text-xs text-gray-400">
                  {WEARABLE_DATA.connected ? "Connected & Syncing" : "Disconnected"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <BatteryIcon />
            <span>{WEARABLE_DATA.battery}%</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mb-1">SpO2</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{WEARABLE_DATA.spo2}%</p>
            <p className="text-[10px] text-gray-500 mt-0.5">Normal</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mb-1">Heart Rate</p>
            <div className="flex items-center justify-center gap-1">
              <HeartPulseIcon />
              <p className="text-2xl sm:text-3xl font-extrabold text-rose-400">{WEARABLE_DATA.heartRate}</p>
            </div>
            <p className="text-[10px] text-gray-500 mt-0.5">BPM</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mb-1">Temp</p>
            <div className="flex items-center justify-center gap-1">
              <ThermometerIcon />
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">{WEARABLE_DATA.temp}&deg;C</p>
            </div>
            <p className="text-[10px] text-gray-500 mt-0.5">Normal</p>
          </div>
        </div>
      </div>

      {/* Notification Center Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize ${
                filter === f
                  ? f === "critical" ? "bg-red-100 text-red-700"
                  : f === "warning" ? "bg-orange-100 text-orange-700"
                  : f === "info" ? "bg-blue-100 text-blue-700"
                  : "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts Feed */}
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
  );
}
