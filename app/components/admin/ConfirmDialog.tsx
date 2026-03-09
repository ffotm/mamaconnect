"use client";
import { IoWarningOutline } from "react-icons/io5";

interface ConfirmDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  variant?: "danger" | "warning";
}

export default function ConfirmDialog({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
  confirmLabel = "Delete",
  variant = "danger",
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  const btnClass =
    variant === "danger"
      ? "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white"
      : "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm animate-scaleIn border border-gray-100">
        <div className="p-6 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4">
            <IoWarningOutline className="text-red-500" size={28} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">{message}</p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 h-11 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 h-11 rounded-full font-semibold text-sm transition-colors ${btnClass}`}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
