"use client";

import { useState } from "react";
import { getInitials, USER_PROFILE } from "./data";
import {
  UserIcon,
  EditIcon,
  LockIcon,
  SettingsIcon,
  LogOutIcon,
  ChevronLeftIcon,
} from "./icons";

type ProfilePage = "menu" | "view" | "edit" | "password" | "settings";

interface ProfileDropdownProps {
  user: { name: string; email: string };
  onLogout: () => void;
}

export default function ProfileDropdown({ user, onLogout }: ProfileDropdownProps) {
  const [page, setPage] = useState<ProfilePage>("menu");

  return (
    <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl border border-gray-200 shadow-xl animate-scaleIn overflow-hidden">
      {page === "menu" && (
        <ProfileMenu user={user} onNavigate={setPage} onLogout={onLogout} />
      )}
      {page === "view" && <ProfileView onBack={() => setPage("menu")} />}
      {page === "edit" && <ProfileEdit onBack={() => setPage("menu")} />}
      {page === "password" && <ChangePassword onBack={() => setPage("menu")} />}
      {page === "settings" && <AccountSettings onBack={() => setPage("menu")} />}
    </div>
  );
}

/* ── Sub-page header ── */

function BackHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
      <button onClick={onBack} className="text-gray-400 hover:text-gray-600 transition-colors">
        <ChevronLeftIcon />
      </button>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

/* ── Menu ── */

function ProfileMenu({ user, onNavigate, onLogout }: {
  user: { name: string; email: string };
  onNavigate: (page: ProfilePage) => void;
  onLogout: () => void;
}) {
  return (
    <div>
      <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center text-white font-bold text-sm shrink-0">
            {getInitials(user.name)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        <button onClick={() => onNavigate("view")} className="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          <span className="text-gray-400"><UserIcon /></span>
          View Profile
        </button>
        <button onClick={() => onNavigate("edit")} className="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          <span className="text-gray-400"><EditIcon /></span>
          Edit Profile
        </button>
        <button onClick={() => onNavigate("password")} className="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          <span className="text-gray-400"><LockIcon /></span>
          Change Password
        </button>
        <button onClick={() => onNavigate("settings")} className="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          <span className="text-gray-400"><SettingsIcon /></span>
          Account Settings
        </button>
      </div>

      <div className="border-t border-gray-100 py-2">
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
          <LogOutIcon />
          Sign Out
        </button>
      </div>
    </div>
  );
}

/* ── View ── */

function ProfileView({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <BackHeader title="Profile Information" onBack={onBack} />
      <div className="p-5">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center text-white font-bold text-xl">
            {getInitials(USER_PROFILE.name)}
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: "Name", value: USER_PROFILE.name },
            { label: "Email", value: USER_PROFILE.email },
            { label: "Age", value: `${USER_PROFILE.age} years` },
            { label: "Blood Type", value: USER_PROFILE.bloodType },
            { label: "Due Date", value: new Date(USER_PROFILE.dueDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
              <span className="text-xs text-gray-500">{item.label}</span>
              <span className="text-sm font-medium text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Edit ── */

function ProfileEdit({ onBack }: { onBack: () => void }) {
  const [name, setName] = useState(USER_PROFILE.name);
  const [email, setEmail] = useState(USER_PROFILE.email);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <BackHeader title="Edit Profile" onBack={onBack} />
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A]"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full py-2.5 rounded-xl bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55a5a] transition-colors shadow-sm"
        >
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

/* ── Change Password ── */

function ChangePassword({ onBack }: { onBack: () => void }) {
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <BackHeader title="Change Password" onBack={onBack} />
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Current Password</label>
          <input type="password" placeholder="Enter current password" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A]" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">New Password</label>
          <input type="password" placeholder="Enter new password" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A]" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Confirm New Password</label>
          <input type="password" placeholder="Confirm new password" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A]" />
        </div>
        <button
          onClick={handleSave}
          className="w-full py-2.5 rounded-xl bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55a5a] transition-colors shadow-sm"
        >
          {saved ? "Password Updated!" : "Update Password"}
        </button>
      </div>
    </div>
  );
}

/* ── Account Settings ── */

function AccountSettings({ onBack }: { onBack: () => void }) {
  const [notifications, setNotifications] = useState(true);
  const [alerts, setAlerts] = useState(true);

  return (
    <div>
      <BackHeader title="Account Settings" onBack={onBack} />
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm font-medium text-gray-900">Email Notifications</p>
            <p className="text-xs text-gray-500">Receive weekly health reports</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${notifications ? "bg-[#F46A6A]" : "bg-gray-300"}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${notifications ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm font-medium text-gray-900">Health Alerts</p>
            <p className="text-xs text-gray-500">Critical monitoring alerts</p>
          </div>
          <button
            onClick={() => setAlerts(!alerts)}
            className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${alerts ? "bg-[#F46A6A]" : "bg-gray-300"}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${alerts ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <button className="w-full py-2.5 rounded-xl border border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
