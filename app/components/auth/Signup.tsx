"use client";

import { useState } from "react";

interface SignupProps {
  onSwitch: () => void;
  onSignup: (role: "client" | "midwife" | "", name?: string, email?: string) => void;
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function validateEmail(value: string): string {
  if (!value) return "";
  if (value.length > 254) return "Email must be 254 characters or fewer";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
  return "";
}

export default function Signup({ onSwitch, onSignup }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role, setRole] = useState<"client" | "midwife" | "">("");

  function checkMatch(pwd: string, conf: string) {
    if (!conf) return "";
    return pwd !== conf ? "Passwords do not match" : "";
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight">Get Started Now</h1>
      <p className="text-sm text-gray-500 mt-1 mb-5">Let&apos;s create your account</p>

      {/* Full Name */}
      <div className="mb-3.5">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Full Name</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <UserIcon />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-200 h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-3.5">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <MailIcon />
          </span>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailError(validateEmail(email))}
            className={`w-full rounded-xl border ${emailError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
        </div>
        {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
      </div>

      {/* Password */}
      <div className="mb-3.5">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Password</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <LockIcon />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Set your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(checkMatch(e.target.value, confirm));
            }}
            className="w-full rounded-xl border border-gray-200 h-11 pl-11 pr-11 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Confirm Password</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <LockIcon />
          </span>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
              setPasswordError(checkMatch(password, e.target.value));
            }}
            onBlur={() => setPasswordError(checkMatch(password, confirm))}
            className={`w-full rounded-xl border ${passwordError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-11 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {passwordError && <p className="text-xs text-red-500 mt-1">{passwordError}</p>}
      </div>

      {/* Role selection */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-2">What are you?</label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setRole("client")}
            className={`flex-1 h-11 rounded-xl border text-sm font-medium transition-colors ${
              role === "client"
                ? "bg-[#F46A6A] border-[#F46A6A] text-white"
                : "border-gray-200 text-gray-600 hover:border-[#F46A6A] hover:text-[#F46A6A]"
            }`}
          >
            Client
          </button>
          <button
            type="button"
            onClick={() => setRole("midwife")}
            className={`flex-1 h-11 rounded-xl border text-sm font-medium transition-colors ${
              role === "midwife"
                ? "bg-[#F46A6A] border-[#F46A6A] text-white"
                : "border-gray-200 text-gray-600 hover:border-[#F46A6A] hover:text-[#F46A6A]"
            }`}
          >
            Midwife
          </button>
        </div>
      </div>

      {/* Sign up button */}
      <button
        onClick={() => onSignup(role, name, email)}
        className="w-full bg-[#F46A6A] text-white rounded-full h-11 font-semibold text-sm hover:bg-[#e55d5d] active:bg-[#d45252] transition-colors"
      >
        Sign up
      </button>

      {/* Divider */}
      <div className="flex items-center my-3.5 gap-3">
        <hr className="flex-1 border-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      {/* Google button */}
      <button className="w-full rounded-full border border-gray-200 h-11 flex items-center justify-center gap-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors">
        <GoogleIcon />
        Sign up with Google
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-[#F46A6A] font-semibold hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}
