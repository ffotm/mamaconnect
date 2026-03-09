"use client";

import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface AuthLayoutProps {
  panelSrc: StaticImageData;
  children: ReactNode;
}

export default function AuthLayout({ panelSrc, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left decorative panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-[55%] relative bg-[#fdf0f0] items-center justify-center overflow-hidden">
        <div className="relative w-full h-full" style={{ maxWidth: 520, maxHeight: 520 }}>
          <Image
            src={panelSrc}
            alt="Auth illustration"
            fill
            sizes="55vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-10 bg-white">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
