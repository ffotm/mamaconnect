"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/components/auth/AuthContext";
import Navbar from "@/app/components/landing/Navbar";
import Hero from "@/app/components/landing/Hero";
import Features from "@/app/components/landing/Features";
import Articles from "@/app/components/landing/Articles";
import DownloadSection from "@/app/components/landing/DownloadSection";
import Testimonials from "@/app/components/landing/Testimonials";
import CallToAction from "@/app/components/landing/CallToAction";
import Footer from "@/app/components/landing/Footer";
import LandingChatWidget from "@/app/components/landing/LandingChatWidget";

export default function LandingPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/dashboard");
    }
  }, [user, isLoading, router]);

  if (isLoading || user) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-[#F46A6A] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <DownloadSection />
      <Testimonials />
      <CallToAction />
      <Footer />
      <LandingChatWidget />
    </main>
  );
}
