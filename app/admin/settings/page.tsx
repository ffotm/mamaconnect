"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  IoPersonOutline,
  IoLockClosedOutline,
  IoNotificationsOutline,
  IoColorPaletteOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: IoPersonOutline },
    { id: "security", label: "Security", icon: IoLockClosedOutline },
    { id: "notifications", label: "Notifications", icon: IoNotificationsOutline },
    { id: "appearance", label: "Appearance", icon: IoColorPaletteOutline },
  ];

  const [profileForm, setProfileForm] = useState({
    name: "Nadia Boudiaf",
    email: "nadia.boudiaf@mamaconnect.dz",
    phone: "+213 550 987 654",
    bio: "Platform administrator for MamaConnect.",
  });

  const [notifSettings, setNotifSettings] = useState({
    emailNotif: true,
    newUserAlert: true,
    articlePublished: false,
    weeklyReport: true,
  });

  const handleSaveProfile = () => {
    toast.success("Profile updated successfully");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification settings saved");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#FFDAB9] text-[#F08080]"
                    : "text-gray-600 hover:bg-[#FFDAB9]/40"
                }`}
              >
                <tab.icon size={18} className={activeTab === tab.id ? "text-[#F08080]" : "text-gray-400"} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Profile Information</h2>
              <div className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Bio</label>
                  <textarea
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all resize-none placeholder:text-gray-300"
                  />
                </div>
                <button
                  onClick={handleSaveProfile}
                  className="px-5 py-2.5 rounded-full bg-[#F08080] text-white text-sm font-semibold hover:bg-[#e07070] active:bg-[#d06060] transition-colors shadow-sm hover:shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Security Settings</h2>
              <div className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Current Password</label>
                  <input
                    type="password"
                    className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all placeholder:text-gray-300"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all placeholder:text-gray-300"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-800 outline-none focus:border-[#F08080] focus:ring-1 focus:ring-[#F08080]/20 transition-all placeholder:text-gray-300"
                    placeholder="Confirm new password"
                  />
                </div>
                <button
                  onClick={() => toast.success("Password updated successfully")}
                  className="px-5 py-2.5 rounded-full bg-[#F08080] text-white text-sm font-semibold hover:bg-[#e07070] active:bg-[#d06060] transition-colors shadow-sm hover:shadow-md"
                >
                  Update Password
                </button>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <IoShieldCheckmarkOutline size={20} className="text-emerald-500" />
                    <h3 className="text-sm font-bold text-gray-900">Two-Factor Authentication</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <button className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-[#FFDAB9]/40 transition-colors">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Notification Preferences</h2>
              <div className="space-y-5 max-w-lg">
                {[
                  { key: "emailNotif" as const, label: "Email Notifications", desc: "Receive updates via email" },
                  { key: "newUserAlert" as const, label: "New User Alerts", desc: "Get notified when new users register" },
                  { key: "articlePublished" as const, label: "Article Published", desc: "Notify when articles are published" },
                  { key: "weeklyReport" as const, label: "Weekly Reports", desc: "Receive weekly summary reports" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    <button
                      onClick={() =>
                        setNotifSettings({ ...notifSettings, [item.key]: !notifSettings[item.key] })
                      }
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        notifSettings[item.key] ? "bg-[#F08080]" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          notifSettings[item.key] ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleSaveNotifications}
                  className="px-5 py-2.5 rounded-full bg-[#F08080] text-white text-sm font-semibold hover:bg-[#e07070] active:bg-[#d06060] transition-colors shadow-sm hover:shadow-md mt-4"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Appearance</h2>
              <div className="space-y-6 max-w-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-3">Theme</p>
                  <div className="flex gap-3">
                    {[
                      { label: "Light", active: true },
                      { label: "Dark", active: false },
                      { label: "System", active: false },
                    ].map((theme) => (
                      <button
                        key={theme.label}
                        className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                          theme.active
                            ? "bg-[#F08080]/10 text-[#F08080] border border-[#F08080]"
                            : "border border-gray-200 text-gray-600 hover:bg-[#FFDAB9]/40"
                        }`}
                      >
                        {theme.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-3">Accent Color</p>
                  <div className="flex gap-3">
                    {["#F08080", "#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"].map((color) => (
                      <button
                        key={color}
                        className={`w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 ${
                          color === "#F08080" ? "border-gray-900 scale-110" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
