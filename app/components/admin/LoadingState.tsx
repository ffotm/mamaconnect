"use client";

interface LoadingStateProps {
  rows?: number;
}

export default function LoadingState({ rows = 5 }: LoadingStateProps) {
  return (
    <div className="animate-pulse space-y-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#FBC4AB]/40" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-[#FBC4AB]/40 rounded w-3/4" />
            <div className="h-3 bg-[#FFDAB9]/60 rounded w-1/2" />
          </div>
          <div className="h-8 w-20 bg-[#FBC4AB]/40 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
