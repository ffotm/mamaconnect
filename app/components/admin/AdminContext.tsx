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
  { id: "1", name: "Amina Nkemelu", email: "amina@example.com", role: "Client", registrationDate: "2026-01-15", status: "Active" },
  { id: "2", name: "Dr. Fatima Okoro", email: "fatima@example.com", role: "Midwife", registrationDate: "2026-01-10", status: "Active" },
  { id: "3", name: "Grace Adeyemi", email: "grace@example.com", role: "Client", registrationDate: "2026-02-01", status: "Active" },
  { id: "4", name: "Blessing Okafor", email: "blessing@example.com", role: "Admin", registrationDate: "2025-12-05", status: "Active" },
  { id: "5", name: "Ngozi Eze", email: "ngozi@example.com", role: "Client", registrationDate: "2026-02-14", status: "Inactive" },
  { id: "6", name: "Chidinma Uche", email: "chidinma@example.com", role: "Client", registrationDate: "2026-02-20", status: "Active" },
  { id: "7", name: "Adaeze Nwosu", email: "adaeze@example.com", role: "Midwife", registrationDate: "2026-01-25", status: "Active" },
  { id: "8", name: "Yewande Balogun", email: "yewande@example.com", role: "Client", registrationDate: "2026-03-01", status: "Active" },
  { id: "9", name: "Toyin Alade", email: "toyin@example.com", role: "Client", registrationDate: "2026-03-02", status: "Suspended" },
  { id: "10", name: "Ifunanya Obi", email: "ifunanya@example.com", role: "Client", registrationDate: "2026-02-28", status: "Active" },
  { id: "11", name: "Kemi Fashola", email: "kemi@example.com", role: "Midwife", registrationDate: "2026-01-18", status: "Active" },
  { id: "12", name: "Zainab Abdullahi", email: "zainab@example.com", role: "Client", registrationDate: "2026-03-03", status: "Active" },
  { id: "13", name: "Nneka Igwe", email: "nneka@example.com", role: "Client", registrationDate: "2026-02-10", status: "Inactive" },
  { id: "14", name: "Aisha Mohammed", email: "aisha@example.com", role: "Client", registrationDate: "2026-03-05", status: "Active" },
  { id: "15", name: "Oluwadamilola Ojo", email: "damilola@example.com", role: "Midwife", registrationDate: "2026-02-08", status: "Active" },
  { id: "16", name: "Chiamaka Onu", email: "chiamaka@example.com", role: "Client", registrationDate: "2026-01-30", status: "Active" },
  { id: "17", name: "Folarin Adebayo", email: "folarin@example.com", role: "Client", registrationDate: "2026-03-06", status: "Active" },
  { id: "18", name: "Halima Suleiman", email: "halima@example.com", role: "Client", registrationDate: "2026-02-22", status: "Active" },
];

const generateMidwives = (): Midwife[] => [
  { id: "1", name: "Dr. Fatima Okoro", email: "fatima@example.com", phone: "+234 801 234 5678", certificationNumber: "MW-2024-001", location: "Lagos, Nigeria", status: "Verified", joinDate: "2026-01-10" },
  { id: "2", name: "Adaeze Nwosu", email: "adaeze@example.com", phone: "+234 802 345 6789", certificationNumber: "MW-2024-002", location: "Abuja, Nigeria", status: "Verified", joinDate: "2026-01-25" },
  { id: "3", name: "Kemi Fashola", email: "kemi@example.com", phone: "+234 803 456 7890", certificationNumber: "MW-2024-003", location: "Ibadan, Nigeria", status: "Active", joinDate: "2026-01-18" },
  { id: "4", name: "Oluwadamilola Ojo", email: "damilola@example.com", phone: "+234 804 567 8901", certificationNumber: "MW-2024-004", location: "Port Harcourt, Nigeria", status: "Verified", joinDate: "2026-02-08" },
  { id: "5", name: "Amara Eze", email: "amara@example.com", phone: "+234 805 678 9012", certificationNumber: "MW-2024-005", location: "Enugu, Nigeria", status: "Pending", joinDate: "2026-03-01" },
  { id: "6", name: "Bukola Oyedepo", email: "bukola@example.com", phone: "+234 806 789 0123", certificationNumber: "MW-2024-006", location: "Benin City, Nigeria", status: "Active", joinDate: "2026-02-15" },
  { id: "7", name: "Nkechi Okonkwo", email: "nkechi@example.com", phone: "+234 807 890 1234", certificationNumber: "MW-2024-007", location: "Kano, Nigeria", status: "Inactive", joinDate: "2026-01-05" },
];

const generateArticles = (): Article[] => [
  { id: "1", title: "Essential Nutrition During Pregnancy", author: "Dr. Fatima Okoro", category: "Nutrition", publishDate: "2026-03-01", status: "Published", content: "<p>Proper nutrition during pregnancy is crucial for both mother and baby. This guide covers the essential nutrients you need...</p>" },
  { id: "2", title: "Understanding Prenatal Checkups", author: "Kemi Fashola", category: "Pregnancy Health", publishDate: "2026-02-28", status: "Published", content: "<p>Regular prenatal checkups are a vital part of a healthy pregnancy. Here's what to expect during each visit...</p>" },
  { id: "3", title: "Managing Morning Sickness Naturally", author: "Adaeze Nwosu", category: "Wellness", publishDate: "2026-02-25", status: "Published", content: "<p>Morning sickness affects many expecting mothers. Discover natural remedies and tips to manage nausea...</p>" },
  { id: "4", title: "Exercises Safe for Pregnancy", author: "Oluwadamilola Ojo", category: "Fitness", publishDate: "2026-02-20", status: "Published", content: "<p>Staying active during pregnancy has numerous benefits. Learn about safe exercises for each trimester...</p>" },
  { id: "5", title: "Mental Health During Pregnancy", author: "Dr. Fatima Okoro", category: "Mental Wellness", publishDate: "2026-03-05", status: "Draft", content: "<p>Pregnancy can bring a range of emotions. Learn how to take care of your mental health during this important time...</p>" },
  { id: "6", title: "Preparing for Labor: A Complete Guide", author: "Kemi Fashola", category: "Pregnancy Health", publishDate: "2026-02-15", status: "Published", content: "<p>This comprehensive guide will help you understand the stages of labor and how to prepare for delivery...</p>" },
  { id: "7", title: "Breastfeeding Tips for New Mothers", author: "Adaeze Nwosu", category: "Baby Care", publishDate: "2026-03-04", status: "Draft", content: "<p>Breastfeeding can be challenging at first. Here are some helpful tips to make the experience smoother...</p>" },
  { id: "8", title: "Common Pregnancy Complications", author: "Dr. Fatima Okoro", category: "Pregnancy Health", publishDate: "2026-02-10", status: "Published", content: "<p>While most pregnancies are healthy, it's important to be aware of potential complications and warning signs...</p>" },
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
