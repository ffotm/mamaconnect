import React from "react";
import {
  PillIcon,
  DumbbellIcon,
  HospitalIcon,
  BookOpenIcon,
  ShoppingBagIcon,
  UsersIcon,
  VideoIcon,
  HomeIcon,
  PhoneIcon,
  DashboardIcon,
  MonitorIcon,
  CalendarIcon,
  ShopIcon,
  ChatIcon,
} from "./icons";

/* ═══════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════ */

export type TabKey = "home" | "monitoring" | "booking" | "shop" | "chat";

export interface Midwife {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  available: boolean;
  image: null;
  bio: string;
  languages: string[];
  education: string;
  sessions: string[];
}

export interface SessionType {
  value: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
}

/* ═══════════════════════════════════════════════════════════
   PREGNANCY DATA
   ═══════════════════════════════════════════════════════════ */

export const PREGNANCY_WEEK = 7;
export const PREGNANCY_DAY = 3;
export const TOTAL_DAYS = 280;
export const ELAPSED_DAYS = PREGNANCY_WEEK * 7 + PREGNANCY_DAY;
export const PERCENT_DONE = parseFloat(((ELAPSED_DAYS / TOTAL_DAYS) * 100).toFixed(1));
export const DAYS_TO_GO = TOTAL_DAYS - ELAPSED_DAYS;

/* ═══════════════════════════════════════════════════════════
   SERVICE ITEMS
   ═══════════════════════════════════════════════════════════ */

export const SERVICE_ITEMS = [
  { icon: "pill", label: "Medicines", desc: "Track prescriptions & supplements", color: "from-rose-400 to-pink-500" },
  { icon: "dumbbell", label: "Exercises", desc: "Prenatal fitness routines", color: "from-violet-400 to-purple-500" },
  { icon: "hospital", label: "Hospitals", desc: "Nearby clinics & emergency", color: "from-blue-400 to-cyan-500" },
  { icon: "book", label: "Articles", desc: "Weekly guides & tips", color: "from-amber-400 to-orange-500" },
  { icon: "shop", label: "Shop", desc: "Plans & essentials", color: "from-emerald-400 to-teal-500" },
  { icon: "community", label: "Community", desc: "Connect with other mamas", color: "from-pink-400 to-rose-500" },
];

export const serviceIcons: Record<string, React.ReactNode> = {
  pill: <PillIcon />,
  dumbbell: <DumbbellIcon />,
  hospital: <HospitalIcon />,
  book: <BookOpenIcon />,
  shop: <ShoppingBagIcon />,
  community: <UsersIcon />,
};

/* ═══════════════════════════════════════════════════════════
   ALERTS
   ═══════════════════════════════════════════════════════════ */

export const ALERTS = [
  { id: 1, type: "critical" as const, title: "Heart Rate Spike Detected", desc: "Heart rate reached 168 BPM at 2:34 PM. Please rest and monitor.", time: "14 min ago" },
  { id: 2, type: "warning" as const, title: "Low Kick Count Today", desc: "Only 4 kicks recorded in the last 2 hours. Try drinking cold water and lying on your left side.", time: "1 hr ago" },
  { id: 3, type: "warning" as const, title: "Temperature Elevation", desc: "Body temperature at 37.8\u00B0C \u2014 slightly elevated. Stay hydrated and rest.", time: "2 hrs ago" },
  { id: 4, type: "warning" as const, title: "Low Battery \u2014 Mamacita Monitor", desc: "Wearable device battery at 12%. Please charge soon to avoid data gaps.", time: "3 hrs ago" },
  { id: 5, type: "info" as const, title: "Weekly Health Report Ready", desc: "Your Week 7 health summary is available. Tap to view detailed metrics.", time: "5 hrs ago" },
  { id: 6, type: "info" as const, title: "Check-in Reminder", desc: "Don\u2019t forget your daily mood and symptom check-in for today.", time: "6 hrs ago" },
];

export const alertStyles = {
  critical: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", badge: "bg-red-100 text-red-700", dot: "bg-red-500" },
  warning: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", badge: "bg-orange-100 text-orange-700", dot: "bg-orange-500" },
  info: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", dot: "bg-blue-500" },
};

/* ═══════════════════════════════════════════════════════════
   WEARABLE
   ═══════════════════════════════════════════════════════════ */

export const WEARABLE_DATA = {
  spo2: 98,
  heartRate: 82,
  temp: 36.6,
  battery: 72,
  connected: true,
};

/* ═══════════════════════════════════════════════════════════
   MIDWIVES
   ═══════════════════════════════════════════════════════════ */

export const MIDWIVES: Midwife[] = [
  { id: 1, name: "Dr. Sarah Benali", specialty: "High-Risk Pregnancy", location: "Algiers Central", rating: 4.9, reviews: 128, price: "3,500 DA", available: true, image: null, bio: "Board-certified OB-GYN with 12 years of experience specializing in high-risk pregnancies. Known for her compassionate approach and evidence-based care.", languages: ["Arabic", "French", "English"], education: "University of Algiers Medical School", sessions: ["Video Call", "Home Visit", "Clinic Visit"] },
  { id: 2, name: "Dr. Fatima Ndiaye", specialty: "Prenatal Nutrition", location: "Oran", rating: 4.8, reviews: 95, price: "2,800 DA", available: true, image: null, bio: "Specialist in maternal nutrition with a focus on holistic prenatal care. Combines traditional knowledge with modern nutritional science.", languages: ["Arabic", "French"], education: "University of Oran Medical Faculty", sessions: ["Video Call", "Clinic Visit"] },
  { id: 3, name: "Dr. Amina Diallo", specialty: "Natural Birth", location: "Constantine", rating: 4.7, reviews: 76, price: "3,200 DA", available: false, image: null, bio: "Experienced midwife specializing in natural birth techniques and water birth. Advocates for personalized birth plans.", languages: ["Arabic", "French", "Tamazight"], education: "Constantine University Hospital Training", sessions: ["Home Visit", "Clinic Visit"] },
  { id: 4, name: "Dr. Leila Mansouri", specialty: "Postpartum Care", location: "Blida", rating: 4.9, reviews: 112, price: "3,000 DA", available: true, image: null, bio: "Dedicated to supporting new mothers through the postpartum period. Expert in breastfeeding support and mental health screening.", languages: ["Arabic", "French"], education: "Blida Medical University", sessions: ["Video Call", "Home Visit", "Phone Call"] },
];

export const SESSION_TYPES: SessionType[] = [
  { value: "video", label: "Video Call", icon: <VideoIcon />, desc: "Face-to-face consultation from home" },
  { value: "home", label: "Home Visit", icon: <HomeIcon />, desc: "Midwife visits you at your location" },
  { value: "clinic", label: "Clinic Visit", icon: <HospitalIcon />, desc: "Visit the midwife's clinic" },
  { value: "phone", label: "Phone Call", icon: <PhoneIcon />, desc: "Quick consultation over the phone" },
];

/* ═══════════════════════════════════════════════════════════
   SHOP PLANS
   ═══════════════════════════════════════════════════════════ */

export const SHOP_PLANS = [
  {
    name: "Basic",
    price: "9,900",
    period: "/ month",
    desc: "Essential monitoring for healthy pregnancies",
    features: ["Weekly health reports", "Basic exercise guides", "Community access", "Article library", "Email support"],
    popular: false,
  },
  {
    name: "Standard",
    price: "18,900",
    period: "/ month",
    desc: "Complete care for peace of mind",
    features: ["Everything in Basic", "Wearable device integration", "Real-time alerts", "2 midwife consultations/mo", "Priority support", "Nutrition planning"],
    popular: true,
  },
  {
    name: "Premium",
    price: "29,900",
    period: "/ month",
    desc: "Full-spectrum premium maternal care",
    features: ["Everything in Standard", "Unlimited consultations", "Dedicated care coordinator", "Emergency hotline 24/7", "Partner access", "Birth plan assistance", "Postpartum support"],
    popular: false,
  },
];

/* ═══════════════════════════════════════════════════════════
   USER PROFILE
   ═══════════════════════════════════════════════════════════ */

export const USER_PROFILE = {
  name: "Amira Khelif",
  email: "amira.khelif@email.com",
  age: 28,
  bloodType: "O+",
  dueDate: "2026-10-15",
  weight: 65,
  height: 165,
};

/* ═══════════════════════════════════════════════════════════
   SIDEBAR TABS
   ═══════════════════════════════════════════════════════════ */

export const SIDEBAR_TABS: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "home", label: "Dashboard", icon: <DashboardIcon /> },
  { key: "monitoring", label: "Monitoring", icon: <MonitorIcon /> },
  { key: "booking", label: "Booking", icon: <CalendarIcon /> },
  { key: "shop", label: "Shop", icon: <ShopIcon /> },
  { key: "chat", label: "Chat", icon: <ChatIcon /> },
];

/* ═══════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════ */

export function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
