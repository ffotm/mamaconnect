"use client";

export interface Appointment {
  id: number;
  clientName: string;
  date: string;
  time: string;
  type: string;
  status: "upcoming" | "completed" | "cancelled";
  week: number;
}

const STATUS_STYLES = {
  upcoming: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
    label: "Upcoming",
  },
  completed: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    label: "Completed",
  },
  cancelled: {
    bg: "bg-gray-100",
    text: "text-gray-500",
    dot: "bg-gray-400",
    label: "Cancelled",
  },
};

interface AppointmentsListProps {
  appointments: Appointment[];
  onManage?: (id: number) => void;
}

export default function AppointmentsList({ appointments, onManage }: AppointmentsListProps) {
  if (appointments.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
          📅
        </div>
        <p className="text-sm font-semibold text-gray-700 mb-1">No appointments found</p>
        <p className="text-xs text-gray-400">Appointments will appear here once booked.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {appointments.map((apt) => {
        const style = STATUS_STYLES[apt.status];
        return (
          <div
            key={apt.id}
            className={`bg-white rounded-2xl p-5 border shadow-sm transition-all duration-200 hover:shadow-md ${
              apt.status === "upcoming" ? "border-[#F46A6A]/20" : "border-gray-100"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {apt.clientName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{apt.clientName}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Pregnancy Week {apt.week}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" />
                      </svg>
                      {apt.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                      </svg>
                      {apt.time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className={`flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider ${style.text} ${style.bg} px-2.5 py-1 rounded-full`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {style.label}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">{apt.type}</span>
                {onManage && apt.status === "upcoming" && (
                  <button
                    onClick={() => onManage(apt.id)}
                    className="text-[11px] font-semibold text-[#F46A6A] hover:text-[#e55d5d] transition-colors cursor-pointer"
                  >
                    Manage →
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
