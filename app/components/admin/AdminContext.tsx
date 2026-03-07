"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  role: "Client" | "Midwife" | "Admin";
  registrationDate: string;
  status: "Active" | "Inactive" | "Suspended";
  avatar?: string;
}

export interface Midwife {
  id: string;
  name: string;
  email: string;
  phone: string;
  certificationNumber: string;
  location: string;
  status: "Active" | "Inactive" | "Verified" | "Pending";
  joinDate: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  category: string;
  publishDate: string;
  status: "Published" | "Draft";
  content: string;
}

// ─── Mock Data ──────────────────────────────────────────────────────────────
const generateUsers = (): User[] => [
  { id: "1", name: "Amina Benali", email: "amina.benali@example.dz", role: "Client", registrationDate: "2026-01-15", status: "Active" },
  { id: "2", name: "Dr. Fatima Mansouri", email: "fatima.mansouri@example.dz", role: "Midwife", registrationDate: "2026-01-10", status: "Active" },
  { id: "3", name: "Yasmine Cherif", email: "yasmine.cherif@example.dz", role: "Client", registrationDate: "2026-02-01", status: "Active" },
  { id: "4", name: "Nadia Boudiaf", email: "nadia.boudiaf@example.dz", role: "Admin", registrationDate: "2025-12-05", status: "Active" },
  { id: "5", name: "Samira Hadj", email: "samira.hadj@example.dz", role: "Client", registrationDate: "2026-02-14", status: "Inactive" },
  { id: "6", name: "Leila Rahimi", email: "leila.rahimi@example.dz", role: "Client", registrationDate: "2026-02-20", status: "Active" },
  { id: "7", name: "Meriem Kebir", email: "meriem.kebir@example.dz", role: "Midwife", registrationDate: "2026-01-25", status: "Active" },
  { id: "8", name: "Hanane Belkacem", email: "hanane.belkacem@example.dz", role: "Client", registrationDate: "2026-03-01", status: "Active" },
  { id: "9", name: "Souad Hamidi", email: "souad.hamidi@example.dz", role: "Client", registrationDate: "2026-03-02", status: "Suspended" },
  { id: "10", name: "Zineb Touati", email: "zineb.touati@example.dz", role: "Client", registrationDate: "2026-02-28", status: "Active" },
  { id: "11", name: "Karima Zerrouki", email: "karima.zerrouki@example.dz", role: "Midwife", registrationDate: "2026-01-18", status: "Active" },
  { id: "12", name: "Dalila Bouzid", email: "dalila.bouzid@example.dz", role: "Client", registrationDate: "2026-03-03", status: "Active" },
  { id: "13", name: "Houria Mimouni", email: "houria.mimouni@example.dz", role: "Client", registrationDate: "2026-02-10", status: "Inactive" },
  { id: "14", name: "Sabrina Khelifi", email: "sabrina.khelifi@example.dz", role: "Client", registrationDate: "2026-03-05", status: "Active" },
  { id: "15", name: "Asma Amrani", email: "asma.amrani@example.dz", role: "Midwife", registrationDate: "2026-02-08", status: "Active" },
  { id: "16", name: "Rania Saadi", email: "rania.saadi@example.dz", role: "Client", registrationDate: "2026-01-30", status: "Active" },
  { id: "17", name: "Djamila Dahmani", email: "djamila.dahmani@example.dz", role: "Client", registrationDate: "2026-03-06", status: "Active" },
  { id: "18", name: "Naima Benmoussa", email: "naima.benmoussa@example.dz", role: "Client", registrationDate: "2026-02-22", status: "Active" },
];

const generateMidwives = (): Midwife[] => [
  { id: "1", name: "Dr. Fatima Mansouri", email: "fatima.mansouri@example.dz", phone: "+213 550 123 456", certificationNumber: "MW-2024-001", location: "Alger, Algérie", status: "Verified", joinDate: "2026-01-10" },
  { id: "2", name: "Meriem Kebir", email: "meriem.kebir@example.dz", phone: "+213 661 234 567", certificationNumber: "MW-2024-002", location: "Oran, Algérie", status: "Verified", joinDate: "2026-01-25" },
  { id: "3", name: "Karima Zerrouki", email: "karima.zerrouki@example.dz", phone: "+213 772 345 678", certificationNumber: "MW-2024-003", location: "Constantine, Algérie", status: "Active", joinDate: "2026-01-18" },
  { id: "4", name: "Asma Amrani", email: "asma.amrani@example.dz", phone: "+213 553 456 789", certificationNumber: "MW-2024-004", location: "Annaba, Algérie", status: "Verified", joinDate: "2026-02-08" },
  { id: "5", name: "Lynda Bensalem", email: "lynda.bensalem@example.dz", phone: "+213 664 567 890", certificationNumber: "MW-2024-005", location: "Tizi Ouzou, Algérie", status: "Pending", joinDate: "2026-03-01" },
  { id: "6", name: "Samia Laoufi", email: "samia.laoufi@example.dz", phone: "+213 775 678 901", certificationNumber: "MW-2024-006", location: "Béjaïa, Algérie", status: "Active", joinDate: "2026-02-15" },
  { id: "7", name: "Warda Guerrouche", email: "warda.guerrouche@example.dz", phone: "+213 556 789 012", certificationNumber: "MW-2024-007", location: "Blida, Algérie", status: "Inactive", joinDate: "2026-01-05" },
];

const generateArticles = (): Article[] => [
  { id: "1", title: "Essential Nutrition During Pregnancy", author: "Dr. Fatima Mansouri", category: "Nutrition", publishDate: "2026-03-01", status: "Published", content: "<p>Proper nutrition during pregnancy is crucial for both mother and baby. This guide covers the essential nutrients you need...</p>" },
  { id: "2", title: "Understanding Prenatal Checkups", author: "Karima Zerrouki", category: "Pregnancy Health", publishDate: "2026-02-28", status: "Published", content: "<p>Regular prenatal checkups are a vital part of a healthy pregnancy. Here's what to expect during each visit...</p>" },
  { id: "3", title: "Managing Morning Sickness Naturally", author: "Meriem Kebir", category: "Wellness", publishDate: "2026-02-25", status: "Published", content: "<p>Morning sickness affects many expecting mothers. Discover natural remedies and tips to manage nausea...</p>" },
  { id: "4", title: "Exercises Safe for Pregnancy", author: "Asma Amrani", category: "Fitness", publishDate: "2026-02-20", status: "Published", content: "<p>Staying active during pregnancy has numerous benefits. Learn about safe exercises for each trimester...</p>" },
  { id: "5", title: "Mental Health During Pregnancy", author: "Dr. Fatima Mansouri", category: "Mental Wellness", publishDate: "2026-03-05", status: "Draft", content: "<p>Pregnancy can bring a range of emotions. Learn how to take care of your mental health during this important time...</p>" },
  { id: "6", title: "Preparing for Labor: A Complete Guide", author: "Karima Zerrouki", category: "Pregnancy Health", publishDate: "2026-02-15", status: "Published", content: "<p>This comprehensive guide will help you understand the stages of labor and how to prepare for delivery...</p>" },
  { id: "7", title: "Breastfeeding Tips for New Mothers", author: "Meriem Kebir", category: "Baby Care", publishDate: "2026-03-04", status: "Draft", content: "<p>Breastfeeding can be challenging at first. Here are some helpful tips to make the experience smoother...</p>" },
  { id: "8", title: "Common Pregnancy Complications", author: "Dr. Fatima Mansouri", category: "Pregnancy Health", publishDate: "2026-02-10", status: "Published", content: "<p>While most pregnancies are healthy, it's important to be aware of potential complications and warning signs...</p>" },
];

// ─── Context ────────────────────────────────────────────────────────────────
interface AdminContextType {
  users: User[];
  midwives: Midwife[];
  articles: Article[];
  addUser: (user: Omit<User, "id">) => void;
  updateUser: (id: string, data: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addMidwife: (midwife: Omit<Midwife, "id">) => void;
  updateMidwife: (id: string, data: Partial<Midwife>) => void;
  deleteMidwife: (id: string) => void;
  addArticle: (article: Omit<Article, "id">) => void;
  updateArticle: (id: string, data: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  stats: {
    totalUsers: number;
    totalMidwives: number;
    totalArticles: number;
    newUsersThisWeek: number;
  };
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(generateUsers);
  const [midwives, setMidwives] = useState<Midwife[]>(generateMidwives);
  const [articles, setArticles] = useState<Article[]>(generateArticles);

  const addUser = useCallback((user: Omit<User, "id">) => {
    setUsers((prev) => [{ ...user, id: String(Date.now()) }, ...prev]);
  }, []);

  const updateUser = useCallback((id: string, data: Partial<User>) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...data } : u)));
  }, []);

  const deleteUser = useCallback((id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }, []);

  const addMidwife = useCallback((midwife: Omit<Midwife, "id">) => {
    setMidwives((prev) => [{ ...midwife, id: String(Date.now()) }, ...prev]);
  }, []);

  const updateMidwife = useCallback((id: string, data: Partial<Midwife>) => {
    setMidwives((prev) => prev.map((m) => (m.id === id ? { ...m, ...data } : m)));
  }, []);

  const deleteMidwife = useCallback((id: string) => {
    setMidwives((prev) => prev.filter((m) => m.id !== id));
  }, []);

  const addArticle = useCallback((article: Omit<Article, "id">) => {
    setArticles((prev) => [{ ...article, id: String(Date.now()) }, ...prev]);
  }, []);

  const updateArticle = useCallback((id: string, data: Partial<Article>) => {
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...a, ...data } : a)));
  }, []);

  const deleteArticle = useCallback((id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const newUsersThisWeek = users.filter((u) => new Date(u.registrationDate) >= oneWeekAgo).length;

  const stats = {
    totalUsers: users.length,
    totalMidwives: midwives.length,
    totalArticles: articles.length,
    newUsersThisWeek,
  };

  return (
    <AdminContext.Provider
      value={{
        users, midwives, articles,
        addUser, updateUser, deleteUser,
        addMidwife, updateMidwife, deleteMidwife,
        addArticle, updateArticle, deleteArticle,
        stats,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
