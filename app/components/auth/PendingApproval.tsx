"use client";

function ClockIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

interface PendingApprovalProps {
  onGoToSignIn: () => void;
}

export default function PendingApproval({ onGoToSignIn }: PendingApprovalProps) {
  return (
    <div className="w-full">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-500">
          <ClockIcon />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 leading-tight text-center">
        Documents Submitted
      </h1>
      <p className="text-sm text-gray-500 mt-2 mb-6 text-center leading-relaxed">
        Your application is under review. Our team will verify your credentials and
        notify you once your account has been approved.
      </p>

      {/* What happens next */}
      <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-4 mb-6">
        <p className="text-xs font-semibold text-amber-800 mb-3">What happens next?</p>
        <ul className="space-y-2">
          {[
            "An admin reviews your National ID Card",
            "Your diploma or certification is verified",
            "You receive a confirmation once approved",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5 shrink-0">
                <CheckCircleIcon />
              </span>
              <span className="text-xs text-amber-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Note */}
      <p className="text-xs text-gray-400 text-center mb-5 leading-relaxed">
        Review typically takes 1–2 business days. You will receive an email when your
        account is ready.
      </p>

      <button
        onClick={onGoToSignIn}
        className="w-full bg-[#F46A6A] text-white rounded-full h-11 font-semibold text-sm hover:bg-[#e55d5d] active:bg-[#d45252] transition-colors"
      >
        Back to Sign In
      </button>
    </div>
  );
}
