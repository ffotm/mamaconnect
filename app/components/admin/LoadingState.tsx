"use client";

interface LoadingStateProps {
  rows?: number;
}

export default function LoadingState({ rows = 5 }: LoadingStateProps) {
  return (
    <div className="animate-pulse space-y-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-100 rounded w-1/2" />
          </div>
          <div className="h-8 w-20 bg-gray-200 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
