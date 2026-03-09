"use client";

import { useState, useRef } from "react";

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

interface UploadBoxProps {
  label: string;
  description: string;
  file: File | null;
  onSelect: (file: File) => void;
  onRemove: () => void;
}

function UploadBox({ label, description, file, onSelect, onRemove }: UploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) onSelect(dropped);
  }

  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
      {file ? (
        <div className="flex items-center gap-3 rounded-xl border border-[#F46A6A]/40 bg-[#F46A6A]/5 px-4 h-14">
          <span className="text-[#F46A6A]"><FileIcon /></span>
          <span className="flex-1 text-sm text-gray-700 truncate">{file.name}</span>
          <button
            type="button"
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <XIcon />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed cursor-pointer transition-colors h-24 ${
            dragging
              ? "border-[#F46A6A] bg-[#F46A6A]/5"
              : "border-gray-200 hover:border-[#F46A6A]/50 hover:bg-gray-50"
          }`}
        >
          <span className="text-gray-400"><UploadIcon /></span>
          <p className="text-xs text-gray-500">
            <span className="font-medium text-[#F46A6A]">Click to upload</span> or drag &amp; drop
          </p>
          <p className="text-[11px] text-gray-400">{description}</p>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        className="hidden"
        onChange={(e) => { if (e.target.files?.[0]) onSelect(e.target.files[0]); }}
      />
    </div>
  );
}

interface MidwifeDocumentUploadProps {
  onBack?: () => void;
  onSubmit?: (data: { idCard: File; diploma: File }) => void;
}

export default function MidwifeDocumentUpload({ onBack, onSubmit }: MidwifeDocumentUploadProps) {
  const [idCard, setIdCard] = useState<File | null>(null);
  const [diploma, setDiploma] = useState<File | null>(null);

  function handleSubmit() {
    if (!idCard || !diploma) return;
    onSubmit?.({ idCard, diploma });
  }

  const canSubmit = !!idCard && !!diploma;

  return (
    <div className="w-full">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#F46A6A] transition-colors mb-3"
      >
        <ArrowLeftIcon />
        <span>Back to Sign up</span>
      </button>

      <h1 className="text-2xl font-bold text-gray-900 leading-tight">Document Verification</h1>
      <p className="text-sm text-gray-500 mt-1 mb-5">
        Upload your documents to complete your midwife registration. They will be reviewed for approval.
      </p>

      <UploadBox
        label="National ID Card"
        description="JPG, PNG or PDF — max 5MB"
        file={idCard}
        onSelect={setIdCard}
        onRemove={() => setIdCard(null)}
      />

      <UploadBox
        label="Diploma / Certification"
        description="JPG, PNG or PDF — max 10MB"
        file={diploma}
        onSelect={setDiploma}
        onRemove={() => setDiploma(null)}
      />

      <div className="mt-1 mb-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
        <p className="text-xs text-amber-700 leading-relaxed">
          Your documents will be reviewed by our team. You will be notified once your account is approved.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className={`w-full rounded-full h-11 font-semibold text-sm transition-colors ${
          canSubmit
            ? "bg-[#F46A6A] text-white hover:bg-[#e55d5d] active:bg-[#d45252]"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        Submit for Approval
      </button>
    </div>
  );
}
