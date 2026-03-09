"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SignupProps {
  onSwitch: () => void;
  onSignup: (role: "client" | "midwife" | "", name?: string, email?: string, phone?: string) => void;
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
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

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function validateEmail(value: string): string {
  if (!value) return "";
  if (value.length > 254) return "Email must be 254 characters or fewer";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
  return "";
}

function validatePhone(value: string): string {
  if (!value) return "";
  const digits = value.replace(/[\s\-\(\)\+]/g, "");
  if (digits.length < 8 || digits.length > 15) return "Enter a valid phone number";
  if (!/^[\d\s\-\(\)\+]+$/.test(value)) return "Phone number contains invalid characters";
  return "";
}

export default function Signup({ onSwitch, onSignup }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [passwordError, setPasswordError] = useState("");   // confirm field
  const [roleError, setRoleError] = useState("");
  const [role, setRole] = useState<"client" | "midwife" | "">("");
  const router = useRouter();

  function checkMatch(pwd: string, conf: string) {
    if (!conf) return "";
    return pwd !== conf ? "Passwords do not match" : "";
  }

  function handleContinue() {
    const nameErr  = name.trim()  ? "" : "Full name is required";
    const emailErr = !email ? "Email is required" : validateEmail(email);
    const phoneErr = !phone ? "Phone number is required" : validatePhone(phone);
    const pwdErr   = password     ? "" : "Password is required";
    const confirmErr = !confirm
      ? "Please confirm your password"
      : password !== confirm
      ? "Passwords do not match"
      : "";
    const roleErr  = role         ? "" : "Please select your role";

    setNameError(nameErr);
    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setPwdError(pwdErr);
    setPasswordError(confirmErr);
    setRoleError(roleErr);

    if (nameErr || emailErr || phoneErr || pwdErr || confirmErr || roleErr) return;
    onSignup(role, name, email, phone);
  }

  return (
    <div className="w-full">
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#F46A6A] transition-colors mb-5"
      >
        <ArrowLeftIcon />
        <span>Back to Home</span>
      </button>

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
            onChange={(e) => { setName(e.target.value); if (nameError) setNameError(""); }}
            className={`w-full rounded-xl border ${nameError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
        </div>
        {nameError && <p className="text-xs text-red-500 mt-1">{nameError}</p>}
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
            onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(""); }}
            onBlur={() => setEmailError(validateEmail(email))}
            className={`w-full rounded-xl border ${emailError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
        </div>
        {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
      </div>

      {/* Phone Number */}
      <div className="mb-3.5">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Phone Number</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <PhoneIcon />
          </span>
          <input
            type="tel"
            placeholder="+213 555 123 456"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); if (phoneError) setPhoneError(""); }}
            onBlur={() => setPhoneError(validatePhone(phone))}
            className={`w-full rounded-xl border ${phoneError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
        </div>
        {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
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
              if (pwdError) setPwdError("");
              setPasswordError(checkMatch(e.target.value, confirm));
            }}
            className={`w-full rounded-xl border ${pwdError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-11 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {pwdError && <p className="text-xs text-red-500 mt-1">{pwdError}</p>}
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
            onClick={() => { setRole("client"); if (roleError) setRoleError(""); }}
            className={`flex-1 h-11 rounded-xl border text-sm font-medium transition-colors ${
              role === "client"
                ? "bg-[#F46A6A] border-[#F46A6A] text-white"
                : roleError
                ? "border-red-400 text-gray-600 hover:border-[#F46A6A] hover:text-[#F46A6A]"
                : "border-gray-200 text-gray-600 hover:border-[#F46A6A] hover:text-[#F46A6A]"
            }`}
          >
            Client
          </button>
          <button
            type="button"
            onClick={() => { setRole("midwife"); if (roleError) setRoleError(""); }}
            className={`flex-1 h-11 rounded-xl border text-sm font-medium transition-colors ${
              role === "midwife"
                ? "bg-[#F46A6A] border-[#F46A6A] text-white"
                : roleError
                ? "border-red-400 text-gray-600 hover:border-[#F46A6A] hover:text-[#F46A6A]"
                : "border-gray-200 text-gray-600 hover:border-[#F46A6A] hover:text-[#F46A6A]"
            }`}
          >
            Midwife
          </button>
        </div>
        {roleError && <p className="text-xs text-red-500 mt-1">{roleError}</p>}
      </div>

      {/* Continue button */}
      <button
        onClick={handleContinue}
        className="w-full bg-[#F46A6A] text-white rounded-full h-11 font-semibold text-sm hover:bg-[#e55d5d] active:bg-[#d45252] transition-colors"
      >
        Continue
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
