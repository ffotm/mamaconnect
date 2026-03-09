"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/components/auth/AuthContext";
import AppointmentsList, { Appointment } from "@/app/components/midwife/AppointmentsList";
import ClientsList, { Client } from "@/app/components/midwife/ClientsList";

/* ── Mock Data ─────────────────────────────────────────── */

const MIDWIFE = {
  name: "Dr. Sarah Benali",
  specialty: "High-Risk Pregnancy",
  email: "sarah.benali@mamaconnect.dz",
  since: "2019",
};

const STATS = [
  {
    label: "Total Clients",
    value: "24",
    change: "+3 this month",
    positive: true,
    color: "from-[#F46A6A] to-[#FBC4AB]",
    light: "bg-rose-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Upcoming Appointments",
    value: "8",
    change: "Next 7 days",
    positive: true,
    color: "from-blue-400 to-cyan-500",
    light: "bg-blue-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" />
      </svg>
    ),
  },
  {
    label: "Completed Consultations",
    value: "147",
    change: "+12 this week",
    positive: true,
    color: "from-emerald-400 to-teal-500",
    light: "bg-emerald-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: "Unread Messages",
    value: "5",
    change: "2 urgent",
    positive: false,
    color: "from-violet-400 to-purple-500",
    light: "bg-violet-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const APPOINTMENTS: Appointment[] = [
  { id: 1, clientName: "Amira Khelif", date: "Mar 12, 2026", time: "09:00 AM", type: "Clinic Visit", status: "upcoming", week: 7 },
  { id: 2, clientName: "Yasmine Boukhedenna", date: "Mar 12, 2026", time: "10:30 AM", type: "Video Call", status: "upcoming", week: 22 },
  { id: 3, clientName: "Soumia Hadj-Ali", date: "Mar 11, 2026", time: "02:00 PM", type: "Home Visit", status: "completed", week: 34 },
  { id: 4, clientName: "Rania Meziani", date: "Mar 10, 2026", time: "11:00 AM", type: "Phone Call", status: "completed", week: 16 },
  { id: 5, clientName: "Nadia Ferhat", date: "Mar 15, 2026", time: "03:30 PM", type: "Clinic Visit", status: "upcoming", week: 28 },
  { id: 6, clientName: "Imene Bensalem", date: "Mar 09, 2026", time: "09:30 AM", type: "Video Call", status: "cancelled", week: 12 },
];

const CLIENTS: Client[] = [
  { id: 1, name: "Amira Khelif", age: 28, pregnancyWeek: 7, dueDate: "Oct 15, 2026", riskLevel: "low", lastCheckIn: "Mar 7, 2026", phone: "+213 550 123 456" },
  { id: 2, name: "Yasmine Boukhedenna", age: 31, pregnancyWeek: 22, dueDate: "Jul 20, 2026", riskLevel: "medium", lastCheckIn: "Mar 5, 2026", phone: "+213 661 234 567" },
  { id: 3, name: "Soumia Hadj-Ali", age: 34, pregnancyWeek: 34, dueDate: "Apr 8, 2026", riskLevel: "high", lastCheckIn: "Mar 11, 2026", phone: "+213 770 345 678" },
  { id: 4, name: "Rania Meziani", age: 26, pregnancyWeek: 16, dueDate: "Sep 2, 2026", riskLevel: "low", lastCheckIn: "Mar 10, 2026", phone: "+213 555 456 789" },
  { id: 5, name: "Nadia Ferhat", age: 29, pregnancyWeek: 28, dueDate: "Jun 1, 2026", riskLevel: "medium", lastCheckIn: "Mar 6, 2026", phone: "+213 660 567 890" },
  { id: 6, name: "Imene Bensalem", age: 32, pregnancyWeek: 12, dueDate: "Sep 25, 2026", riskLevel: "low", lastCheckIn: "Mar 7, 2026", phone: "+213 771 678 901" },
];

const NOTIFICATIONS = [
  { id: 1, title: "New appointment request", desc: "Amira Khelif requested a clinic visit on Mar 14.", time: "10 min ago", unread: true },
  { id: 2, title: "High-risk alert", desc: "Soumia Hadj-Ali's blood pressure reading is elevated.", time: "1 hour ago", unread: true },
  { id: 3, title: "Document approved", desc: "Your latest certification has been verified by admin.", time: "3 hours ago", unread: false },
  { id: 4, title: "Appointment cancelled", desc: "Imene Bensalem cancelled her Mar 9 video call.", time: "Yesterday", unread: false },
  { id: 5, title: "New client assigned", desc: "Fatima Zeroual has been assigned to your care.", time: "2 days ago", unread: false },
];

/* ── Mock history data for client history modal ─────── */
const CLIENT_HISTORY: Record<number, { date: string; type: string; notes: string }[]> = {
  1: [
    { date: "Mar 7, 2026", type: "Clinic Visit", notes: "Initial consultation. Vitals normal. Prescribed prenatal vitamins." },
    { date: "Feb 20, 2026", type: "Phone Call", notes: "Follow-up on lab results. All within normal range." },
  ],
  2: [
    { date: "Mar 5, 2026", type: "Video Call", notes: "22-week check-up. Mild anemia detected. Iron supplements recommended." },
    { date: "Feb 15, 2026", type: "Clinic Visit", notes: "Ultrasound performed. Fetal development on track." },
    { date: "Jan 28, 2026", type: "Phone Call", notes: "Discussed diet plan and exercise routine." },
  ],
  3: [
    { date: "Mar 11, 2026", type: "Home Visit", notes: "Blood pressure slightly elevated (140/90). Monitoring closely." },
    { date: "Mar 4, 2026", type: "Clinic Visit", notes: "34-week check-up. Baby in cephalic position." },
    { date: "Feb 25, 2026", type: "Video Call", notes: "Discussed birth plan and hospital preferences." },
  ],
  4: [
    { date: "Mar 10, 2026", type: "Phone Call", notes: "16-week check-up. No complications. Next visit in 4 weeks." },
  ],
  5: [
    { date: "Mar 6, 2026", type: "Clinic Visit", notes: "28-week glucose tolerance test. Results pending." },
    { date: "Feb 18, 2026", type: "Video Call", notes: "Discussed third trimester expectations." },
  ],
  6: [
    { date: "Mar 7, 2026", type: "Video Call", notes: "12-week scan. NT measurement normal. Low risk for chromosomal abnormalities." },
  ],
};

type ActiveSection = "appointments" | "clients";

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function MidwifeDashboard() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("appointments");
  const [appointmentFilter, setAppointmentFilter] = useState<"all" | "upcoming" | "completed">("all");
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [historyModalClient, setHistoryModalClient] = useState<Client | null>(null);
  const [noteModalClient, setNoteModalClient] = useState<Client | null>(null);
  const [noteText, setNoteText] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ current: "", newPass: "", confirm: "" });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleLogout() {
    logout();
    router.push("/");
  }

  function handleChangePassword() {
    setPasswordError("");
    setPasswordSuccess(false);
    if (!passwordForm.current || !passwordForm.newPass || !passwordForm.confirm) {
      setPasswordError("All fields are required.");
      return;
    }
    if (passwordForm.newPass.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }
    if (passwordForm.newPass !== passwordForm.confirm) {
      setPasswordError("New password and confirmation do not match.");
      return;
    }
    setPasswordSuccess(true);
    setPasswordForm({ current: "", newPass: "", confirm: "" });
  }

  function handleSaveNote() {
    if (!noteText.trim()) return;
    setNoteSaved(true);
    setTimeout(() => {
      setNoteSaved(false);
      setNoteText("");
      setNoteModalClient(null);
    }, 1500);
  }

  const filteredAppointments = appointmentFilter === "all"
    ? APPOINTMENTS
    : APPOINTMENTS.filter((a) => a.status === appointmentFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur-md border-b border-gray-200 flex items-center px-6 sm:px-8 justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <a href="/midwife-dashboard" className="flex items-center gap-2 select-none">
            <span className="text-2xl leading-none">&#127800;</span>
            <span className="font-bold text-xl text-gray-900 tracking-tight hidden sm:block">
              Mama<span className="text-[#F46A6A]">Connect</span>
            </span>
          </a>
          <span className="text-gray-300 hidden sm:block">|</span>
          <span className="text-sm font-semibold text-gray-600 hidden sm:block">Midwife Portal</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Notification bell */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#F46A6A] rounded-full text-[9px] text-white font-bold flex items-center justify-center">
                {NOTIFICATIONS.filter((n) => n.unread).length}
              </span>
            </button>
            {/* Notifications dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">Notifications</p>
                  <span className="text-[10px] font-semibold text-[#F46A6A] bg-rose-50 px-2 py-0.5 rounded-full">
                    {NOTIFICATIONS.filter((n) => n.unread).length} new
                  </span>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {NOTIFICATIONS.map((notif) => (
                    <div
                      key={notif.id}
                      className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors ${notif.unread ? "bg-rose-50/40" : ""}`}
                    >
                      <div className="flex items-start gap-2">
                        {notif.unread && <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F46A6A] shrink-0" />}
                        <div className={notif.unread ? "" : "ml-4"}>
                          <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{notif.desc}</p>
                          <p className="text-[10px] text-gray-400 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Avatar with dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-9 h-9 rounded-full bg-linear-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:shadow-lg hover:shadow-[#F46A6A]/20 transition-all duration-200"
            >
              {getInitials(MIDWIFE.name)}
            </button>
            {profileOpen && (
              <div className="absolute right-0 top-12 w-52 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900 truncate">{MIDWIFE.name}</p>
                  <p className="text-xs text-gray-500 truncate">{MIDWIFE.email}</p>
                </div>
                <button
                  onClick={() => { setProfileOpen(false); setChangePasswordOpen(true); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Change Password
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 space-y-10">

        {/* Welcome Banner */}
        <div
          className="relative rounded-2xl py-8 px-8 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 50%, #fecdd3 100%)" }}
        >
          <div className="absolute top-4 right-8 w-48 h-48 bg-[#F46A6A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full">
                Midwife Dashboard
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                Welcome back, <span className="text-[#F46A6A]">{MIDWIFE.name.split(" ")[1]}</span>
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {MIDWIFE.specialty} &middot; Member since {MIDWIFE.since}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-white/80 backdrop-blur rounded-2xl px-5 py-3 shadow-sm border border-white/50 text-center">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Today</p>
                <p className="text-sm font-bold text-gray-900">
                  {new Date().toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${stat.light} flex items-center justify-center text-gray-600 group-hover:bg-linear-to-br group-hover:${stat.color} group-hover:text-white transition-all duration-300`}>
                    {stat.icon}
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${stat.positive ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Appointments & Clients — tabbed */}
        <section>
          {/* Tab switcher */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl w-fit mb-6">
            {(["appointments", "clients"] as ActiveSection[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer capitalize ${
                  activeSection === tab
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "appointments" ? "Appointments" : "Clients"}
              </button>
            ))}
          </div>

          {/* Appointments section */}
          {activeSection === "appointments" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Appointment Schedule</h2>
                  <p className="text-sm text-gray-500">Manage your upcoming and past consultations.</p>
                </div>
                {/* Filter pills */}
                <div className="flex items-center gap-2">
                  {(["all", "upcoming", "completed"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setAppointmentFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer capitalize ${
                        appointmentFilter === f
                          ? "bg-[#F46A6A] text-white shadow-sm shadow-[#F46A6A]/20"
                          : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <AppointmentsList
                appointments={filteredAppointments}
                onManage={(id) => {
                  const apt = APPOINTMENTS.find((a) => a.id === id);
                  if (apt) alert(`Managing appointment for ${apt.clientName} on ${apt.date} at ${apt.time}`);
                }}
              />
            </div>
          )}

          {/* Clients section */}
          {activeSection === "clients" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Assigned Clients</h2>
                  <p className="text-sm text-gray-500">Overview of all pregnant women under your care.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#F46A6A] bg-rose-50 px-3 py-1.5 rounded-lg">
                    {CLIENTS.length} Clients
                  </span>
                </div>
              </div>
              <ClientsList
                clients={CLIENTS}
                onViewHistory={(id) => {
                  const client = CLIENTS.find((c) => c.id === id);
                  if (client) setHistoryModalClient(client);
                }}
                onAddNote={(id) => {
                  const client = CLIENTS.find((c) => c.id === id);
                  if (client) {
                    setNoteText("");
                    setNoteSaved(false);
                    setNoteModalClient(client);
                  }
                }}
              />
            </div>
          )}
        </section>

      </div>

      {/* ── Client History Modal ─────────────────────────── */}
      {historyModalClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{historyModalClient.name}</h3>
                <p className="text-xs text-gray-500">Medical History</p>
              </div>
              <button
                onClick={() => setHistoryModalClient(null)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4 max-h-80 overflow-y-auto space-y-3">
              {(CLIENT_HISTORY[historyModalClient.id] || []).map((entry, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-900">{entry.date}</span>
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">{entry.type}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{entry.notes}</p>
                </div>
              ))}
              {!(CLIENT_HISTORY[historyModalClient.id]?.length) && (
                <p className="text-sm text-gray-400 text-center py-6">No history records available.</p>
              )}
            </div>
            <div className="px-6 py-3 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setHistoryModalClient(null)}
                className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add Note Modal ───────────────────────────────── */}
      {noteModalClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Add Note</h3>
                <p className="text-xs text-gray-500">For {noteModalClient.name}</p>
              </div>
              <button
                onClick={() => setNoteModalClient(null)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              {noteSaved ? (
                <div className="flex flex-col items-center py-6 gap-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Note saved successfully!</p>
                </div>
              ) : (
                <>
                  <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Type your observation or clinical note here..."
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 resize-none"
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      onClick={() => setNoteModalClient(null)}
                      className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveNote}
                      disabled={!noteText.trim()}
                      className={`px-4 py-2 text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                        noteText.trim()
                          ? "bg-[#F46A6A] text-white hover:bg-[#e55d5d]"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Save Note
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Change Password Modal ────────────────────────── */}
      {changePasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Change Password</h3>
              <button
                onClick={() => { setChangePasswordOpen(false); setPasswordError(""); setPasswordSuccess(false); }}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4 space-y-3">
              {passwordSuccess ? (
                <div className="flex flex-col items-center py-6 gap-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Password changed successfully!</p>
                  <button
                    onClick={() => { setChangePasswordOpen(false); setPasswordSuccess(false); }}
                    className="mt-2 px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Current Password</label>
                    <input
                      type="password"
                      value={passwordForm.current}
                      onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 h-10 text-sm text-gray-700 focus:outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">New Password</label>
                    <input
                      type="password"
                      value={passwordForm.newPass}
                      onChange={(e) => setPasswordForm({ ...passwordForm, newPass: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 h-10 text-sm text-gray-700 focus:outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      value={passwordForm.confirm}
                      onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 h-10 text-sm text-gray-700 focus:outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20"
                    />
                  </div>
                  {passwordError && (
                    <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">{passwordError}</p>
                  )}
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => { setChangePasswordOpen(false); setPasswordError(""); }}
                      className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleChangePassword}
                      className="px-4 py-2 text-sm font-semibold bg-[#F46A6A] text-white hover:bg-[#e55d5d] rounded-xl transition-colors cursor-pointer"
                    >
                      Update Password
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
