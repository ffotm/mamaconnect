import Navbar from "@/app/components/landing/Navbar";
import Hero from "@/app/components/landing/Hero";
import Features from "@/app/components/landing/Features";
import Articles from "@/app/components/landing/Articles";
import ChatCTA from "@/app/components/landing/ChatCTA";
import DownloadSection from "@/app/components/landing/DownloadSection";
import Testimonials from "@/app/components/landing/Testimonials";
import CallToAction from "@/app/components/landing/CallToAction";
import Footer from "@/app/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <ChatCTA />
      <DownloadSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
