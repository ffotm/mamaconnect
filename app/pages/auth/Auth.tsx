"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Panel from "@/app/components/auth/Panel";
import Signup from "@/app/components/auth/Signup";
import Login from "@/app/components/auth/Login";
import ClientProfileDetails from "@/app/components/auth/ClientProfileDetails";
import panelLoginImg from "@/app/assets/panelLogin.png";
import panelSignupImg from "@/app/assets/panelSignup.png";

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

type AuthView = "signup" | "login" | "clientProfile";

export default function Auth() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<AuthView>("signup");

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "login") {
      setView("login");
    }
  }, [searchParams]);

  const isLogin = view === "login";
  const isClientProfile = view === "clientProfile";

  function handleSignup(role: "client" | "midwife" | "") {
    if (role === "client") {
      setView("clientProfile");
    } else {
      // For doctor/expert role, complete signup directly
      // (future: navigate to dashboard or next step)
    }
  }

  function handleProfileContinue(data: {
    birthday: string;
    conditions: string[];
    allergies: string[];
    pregnancyStage: string;
  }) {
    // Store profile data and continue registration
    console.log("Client profile data:", data);
    // Future: send to API and redirect to dashboard
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">

      {/* Back to Home button */}
      <a
        href="/"
        className="absolute top-5 left-5 z-20 flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#F46A6A] transition-colors duration-200 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-gray-100 hover:border-[#F46A6A]/30"
      >
        <HomeIcon />
        <span>Home</span>
      </a>

      {/* ── Mobile / Tablet layout (stacked) ── */}
      <div className="lg:hidden flex flex-col h-screen overflow-y-auto">
        {/* Mobile panel (compact illustration) */}
        <div className="relative w-full h-48 sm:h-60 shrink-0 bg-[#FFF5F5]">
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: isLogin ? 1 : 0,
              transition: "opacity 0.25s ease 0.15s",
            }}
          >
            <Panel src={panelLoginImg} />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: isLogin ? 0 : 1,
              transition: "opacity 0.25s ease 0.15s",
            }}
          >
            <Panel src={panelSignupImg} />
          </div>
        </div>

        {/* Mobile form area */}
        <div className="flex-1 flex items-start justify-center px-5 py-6 sm:px-8">
          {/* Signup / Client profile */}
          <div
            style={{
              display: isLogin ? "none" : "block",
              width: "100%",
              maxWidth: "440px",
            }}
          >
            <div
              style={{
                opacity: isClientProfile ? 0 : 1,
                pointerEvents: isClientProfile ? "none" : "auto",
                position: isClientProfile ? "absolute" : "relative",
                transition: "opacity 0.3s ease",
                width: "100%",
              }}
            >
              <Signup onSwitch={() => setView("login")} onSignup={handleSignup} />
            </div>
            <div
              style={{
                opacity: isClientProfile ? 1 : 0,
                pointerEvents: isClientProfile ? "auto" : "none",
                position: isClientProfile ? "relative" : "absolute",
                transition: "opacity 0.3s ease",
                width: "100%",
              }}
            >
              <ClientProfileDetails onBack={() => setView("signup")} onContinue={handleProfileContinue} />
            </div>
          </div>

          {/* Login */}
          <div
            style={{
              display: isLogin ? "block" : "none",
              width: "100%",
              maxWidth: "440px",
            }}
          >
            <Login onSwitch={() => setView("signup")} />
          </div>
        </div>
      </div>

      {/* ── Desktop layout (side by side) ── */}
      {/* Forms layer */}
      <div className="hidden lg:flex absolute inset-0">

        {/* LEFT column — Signup form / Client profile (45%) */}
        <div
          className="flex items-center justify-center px-10 xl:px-16"
          style={{
            width: "45%",
            opacity: isLogin ? 0 : 1,
            pointerEvents: isLogin ? "none" : "auto",
            transition: "opacity 0.3s ease",
          }}
        >
          <div className="w-full max-w-[420px]">
            {/* Signup form */}
            <div
              style={{
                opacity: isClientProfile ? 0 : 1,
                pointerEvents: isClientProfile ? "none" : "auto",
                position: isClientProfile ? "absolute" : "relative",
                transition: "opacity 0.3s ease",
                width: "100%",
                maxWidth: "420px",
              }}
            >
              <Signup onSwitch={() => setView("login")} onSignup={handleSignup} />
            </div>

            {/* Client profile details form */}
            <div
              style={{
                opacity: isClientProfile ? 1 : 0,
                pointerEvents: isClientProfile ? "auto" : "none",
                position: isClientProfile ? "relative" : "absolute",
                transition: "opacity 0.3s ease",
                width: "100%",
                maxWidth: "420px",
              }}
            >
              <ClientProfileDetails onBack={() => setView("signup")} onContinue={handleProfileContinue} />
            </div>
          </div>
        </div>

        {/* RIGHT column — Login form (45%) */}
        <div
          className="flex items-center justify-center px-10 xl:px-16"
          style={{
            width: "45%",
            marginLeft: "auto",
            opacity: isLogin ? 1 : 0,
            pointerEvents: isLogin ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        >
          <div className="w-full max-w-[420px]">
            <Login onSwitch={() => setView("signup")} />
          </div>
        </div>
      </div>

      {/* ── Sliding illustration panel (55%) ── */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: 0,
          left: isLogin ? "0%" : "45%",
          width: "55%",
          height: "100%",
          zIndex: 10,
          transition: "left 0.65s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        <div className="w-full h-full bg-[#FFF5F5] rounded-l-3xl overflow-hidden">
          {/* panelLogin — fades in when isLogin */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: isLogin ? 1 : 0,
              transition: "opacity 0.25s ease 0.15s",
            }}
          >
            <Panel src={panelLoginImg} />
          </div>

          {/* panelSignup — fades in when !isLogin (signup or clientProfile) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: isLogin ? 0 : 1,
              transition: "opacity 0.25s ease 0.15s",
            }}
          >
            <Panel src={panelSignupImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
