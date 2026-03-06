"use client";

interface StatusBadgeProps {
  status: string;
}

const statusColors: Record<string, string> = {
  active: "text-emerald-700 bg-emerald-50",
  inactive: "text-gray-600 bg-gray-100",
  suspended: "text-red-600 bg-red-50",
  pending: "text-amber-700 bg-amber-50",
  published: "text-emerald-700 bg-emerald-50",
  draft: "text-gray-600 bg-gray-100",
  verified: "text-blue-700 bg-blue-50",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colorClass = statusColors[status.toLowerCase()] || "text-gray-600 bg-gray-100";

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase capitalize ${colorClass}`}>
      {status}
    </span>
  );
}
