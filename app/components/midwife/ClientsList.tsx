"use client";

export interface Client {
  id: number;
  name: string;
  age: number;
  pregnancyWeek: number;
  dueDate: string;
  riskLevel: "low" | "medium" | "high";
  lastCheckIn: string;
  phone: string;
}

const RISK_STYLES = {
  low: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Low Risk" },
  medium: { bg: "bg-orange-50", text: "text-orange-700", label: "Medium Risk" },
  high: { bg: "bg-red-50", text: "text-red-700", label: "High Risk" },
};

interface ClientsListProps {
  clients: Client[];
  onViewHistory?: (id: number) => void;
  onAddNote?: (id: number) => void;
}

export default function ClientsList({ clients, onViewHistory, onAddNote }: ClientsListProps) {
  if (clients.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
          👤
        </div>
        <p className="text-sm font-semibold text-gray-700 mb-1">No clients assigned</p>
        <p className="text-xs text-gray-400">Your assigned clients will appear here.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {clients.map((client) => {
        const risk = RISK_STYLES[client.riskLevel];
        const initials = client.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
        return (
          <div
            key={client.id}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{client.name}</p>
                  <p className="text-xs text-gray-400">Age {client.age}</p>
                </div>
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${risk.text} ${risk.bg} px-2 py-0.5 rounded-full`}>
                {risk.label}
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 rounded-xl px-3 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Week</p>
                <p className="text-base font-extrabold text-gray-900 leading-none">
                  {client.pregnancyWeek}
                  <span className="text-xs font-medium text-gray-400 ml-1">/ 40</span>
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl px-3 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Due Date</p>
                <p className="text-xs font-semibold text-gray-700 leading-tight">{client.dueDate}</p>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 mb-4">Last check-in: <span className="text-gray-600 font-medium">{client.lastCheckIn}</span></p>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {onViewHistory && (
                <button
                  onClick={() => onViewHistory(client.id)}
                  className="flex-1 text-xs font-semibold text-[#F46A6A] bg-rose-50 hover:bg-[#F46A6A] hover:text-white py-2 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  History
                </button>
              )}
              {onAddNote && (
                <button
                  onClick={() => onAddNote(client.id)}
                  className="flex-1 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 py-2 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  Add Note
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
