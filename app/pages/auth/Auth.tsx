"use client";

import { useState } from "react";
import Panel from "@/app/components/auth/Panel";
import Signup from "@/app/components/auth/Signup";
import Login from "@/app/components/auth/Login";
import panelLoginImg from "@/app/assets/panelLogin.png";
import panelSignupImg from "@/app/assets/panelSignup.png";

export default function Auth() {
  // false = Signup (panel RIGHT, form LEFT)
  // true  = Login  (panel LEFT,  form RIGHT)
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">

      {/* ── Forms layer (always rendered, fade in/out) ── */}
      <div className="absolute inset-0 flex">

        {/* LEFT column — Signup form */}
        <div
          className="w-1/2 flex items-center justify-center"
          style={{
            opacity: isLogin ? 0 : 1,
            pointerEvents: isLogin ? "none" : "auto",
            transition: "opacity 0.3s ease",
          }}
        >
          <Signup onSwitch={() => setIsLogin(true)} />
        </div>

        {/* RIGHT column — Login form */}
        <div
          className="w-1/2 flex items-center justify-center"
          style={{
            opacity: isLogin ? 1 : 0,
            pointerEvents: isLogin ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        >
          <Login onSwitch={() => setIsLogin(false)} />
        </div>
      </div>

      {/* ── Sliding panel column ── */}
      {/*
        Signup → panel sits in RIGHT half : left = 50%
        Login  → panel sits in LEFT  half : left = 0
      */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: isLogin ? "0%" : "50%",
          width: "50%",
          height: "100%",
          zIndex: 10,
          transition: "left 0.65s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
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

        {/* panelSignup — fades in when !isLogin */}
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
  );
}
