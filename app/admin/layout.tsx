"use client";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { AdminProvider } from "../components/admin/AdminContext";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#1f2937",
            color: "#fff",
            fontSize: "14px",
          },
        }}
      />
      <div className="min-h-screen bg-[#fff5f5]">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="lg:ml-65 min-h-screen flex flex-col">
          <Header onMenuToggle={() => setSidebarOpen(true)} />
          <main className="flex-1 p-4 lg:p-8">{children}</main>
        </div>
      </div>
    </AdminProvider>
  );
}
