"use client";

import { useState } from "react";

// Mock data
const userProfile = {
  name: "Alex Thompson",
  email: "alex.thompson@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate learner focused on full-stack development and data science. Currently working as a software engineer.",
  joinDate: "October 2025",
  timezone: "America/Los_Angeles",
  language: "English",
  avatar: "AT",
};

const subscriptionInfo = {
  plan: "Pro",
  status: "Active",
  nextBilling: "March 20, 2026",
  price: "$19.99",
  period: "month",
  features: [
    "Unlimited course access",
    "Downloadable resources",
    "Certificate of completion",
    "Priority support",
    "No ads",
    "Offline viewing",
  ],
};

const notificationSettings = [
  {
    id: 1,
    category: "Learning",
    icon: "book",
    settings: [
      {
        id: "course_updates",
        label: "Course updates",
        description: "New lessons and content changes",
        enabled: true,
      },
      {
        id: "study_reminders",
        label: "Study reminders",
        description: "Daily learning reminders at your preferred time",
        enabled: true,
      },
      {
        id: "streak_alerts",
        label: "Streak alerts",
        description: "Notifications to keep your streak going",
        enabled: true,
      },
      {
        id: "completion_alerts",
        label: "Completion milestones",
        description: "Celebrate when you complete courses",
        enabled: false,
      },
    ],
  },
  {
    id: 2,
    category: "Community",
    icon: "users",
    settings: [
      {
        id: "discussion_replies",
        label: "Discussion replies",
        description: "When someone replies to your posts",
        enabled: true,
      },
      {
        id: "mentions",
        label: "Mentions",
        description: "When someone mentions you in discussions",
        enabled: false,
      },
      {
        id: "instructor_messages",
        label: "Instructor messages",
        description: "Direct messages from course instructors",
        enabled: true,
      },
    ],
  },
  {
    id: 3,
    category: "Marketing",
    icon: "mail",
    settings: [
      {
        id: "new_courses",
        label: "New course announcements",
        description: "Be first to know about new courses",
        enabled: true,
      },
      {
        id: "promotions",
        label: "Promotions & discounts",
        description: "Special offers and exclusive deals",
        enabled: false,
      },
      {
        id: "newsletter",
        label: "Weekly newsletter",
        description: "Learning tips, updates, and curated content",
        enabled: true,
      },
    ],
  },
];

const privacySettings = [
  {
    id: "profile_visibility",
    label: "Profile visibility",
    description: "Control who can see your profile information",
    value: "public",
    options: ["public", "private", "connections"],
  },
  {
    id: "show_progress",
    label: "Show learning progress",
    description: "Display your learning progress on your public profile",
    value: true,
  },
  {
    id: "show_certificates",
    label: "Show certificates",
    description: "Display earned certificates on your profile",
    value: true,
  },
  {
    id: "show_achievements",
    label: "Show achievements",
    description: "Display your achievements and badges publicly",
    value: true,
  },
  {
    id: "activity_status",
    label: "Show activity status",
    description: "Let others see when you're online",
    value: false,
  },
];

const connectedAccounts = [
  {
    id: "google",
    name: "Google",
    connected: true,
    email: "alex.thompson@gmail.com",
  },
  { id: "github", name: "GitHub", connected: true, username: "@alexthompson" },
  { id: "linkedin", name: "LinkedIn", connected: false },
];

const settingsTabs = [
  { id: "profile", label: "Profile", icon: "user" },
  { id: "account", label: "Account", icon: "shield" },
  { id: "notifications", label: "Notifications", icon: "bell" },
  { id: "privacy", label: "Privacy", icon: "lock" },
  { id: "billing", label: "Billing", icon: "card" },
];

const TabIcon = ({
  icon,
  className = "w-5 h-5",
}: {
  icon: string;
  className?: string;
}) => {
  switch (icon) {
    case "user":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "bell":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    case "card":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      );
    case "book":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "mail":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "google":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            fill="#0A66C2"
          />
        </svg>
      );
    default:
      return null;
  }
};

// Toggle Switch Component
const Toggle = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 ${
      enabled ? "bg-neutral-900" : "bg-neutral-200"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
        enabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState(notificationSettings);
  const [privacy, setPrivacy] = useState(privacySettings);
  const [profile, setProfile] = useState(userProfile);
  const [isSaving, setIsSaving] = useState(false);

  const toggleNotification = (categoryId: number, settingId: string) => {
    setNotifications((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              settings: category.settings.map((setting) =>
                setting.id === settingId
                  ? { ...setting, enabled: !setting.enabled }
                  : setting,
              ),
            }
          : category,
      ),
    );
  };

  const togglePrivacy = (settingId: string) => {
    setPrivacy((prev) =>
      prev.map((setting) =>
        setting.id === settingId && typeof setting.value === "boolean"
          ? { ...setting, value: !setting.value }
          : setting,
      ),
    );
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Top Navigation Tabs */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-1.5">
        <nav className="flex gap-1">
          {settingsTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-lg shadow-neutral-900/20"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <TabIcon icon={tab.icon} className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="pb-6 border-b border-neutral-200">
              <h2 className="text-xl font-semibold text-neutral-900">
                Profile Settings
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Manage your public profile information
              </p>
            </div>

            {/* Avatar Section */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Profile Photo
              </h3>
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div className="w-24 h-24 bg-linear-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
                    {profile.avatar}
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                      Upload New
                    </button>
                    <button className="px-4 py-2 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
                      Remove
                    </button>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Recommended: Square image, at least 400x400px. Max 5MB.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Location
                  </label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) =>
                      setProfile({ ...profile, location: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                  />
                </div>
                <div className="col-span-2 space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Bio
                  </label>
                  <textarea
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
                    placeholder="Tell us about yourself..."
                  />
                  <p className="text-xs text-neutral-400">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Preferences
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Timezone
                  </label>
                  <select className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="America/Los_Angeles">
                      Pacific Time (PT)
                    </option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="Europe/London">
                      Greenwich Mean Time (GMT)
                    </option>
                    <option value="Asia/Tokyo">
                      Japan Standard Time (JST)
                    </option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Language
                  </label>
                  <select className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="ja">日本語</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-6 py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        )}

        {/* Account Tab */}
        {activeTab === "account" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="pb-6 border-b border-neutral-200">
              <h2 className="text-xl font-semibold text-neutral-900">
                Account & Security
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Manage your account security and connected services
              </p>
            </div>

            {/* Password */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Password
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Last changed 3 months ago
                  </p>
                </div>
                <button className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                  Change Password
                </button>
              </div>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Two-Factor Auth */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
                  Enable 2FA
                </button>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Connected Accounts
              </h3>
              <div className="space-y-3">
                {connectedAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <TabIcon icon={account.id} className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {account.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {account.connected
                            ? account.email || account.username
                            : "Not connected"}
                        </p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        account.connected
                          ? "bg-red-50 text-red-600 hover:bg-red-100"
                          : "bg-neutral-900 text-white hover:bg-neutral-800"
                      }`}
                    >
                      {account.connected ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sessions */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Active Sessions
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Manage your active sessions across devices
                  </p>
                </div>
                <button className="text-xs font-medium text-red-600 hover:text-red-700 transition-colors">
                  Sign out all devices
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        MacBook Pro • Chrome
                      </p>
                      <p className="text-xs text-neutral-500">
                        San Francisco, CA • Current session
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-neutral-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        iPhone 14 Pro • Safari
                      </p>
                      <p className="text-xs text-neutral-500">
                        San Francisco, CA • 2 days ago
                      </p>
                    </div>
                  </div>
                  <button className="text-xs font-medium text-neutral-500 hover:text-neutral-700 transition-colors">
                    Revoke
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-2xl border border-red-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-red-600">
                    Danger Zone
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Irreversible and destructive actions
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    Delete Account
                  </p>
                  <p className="text-xs text-neutral-500">
                    Permanently delete your account and all data
                  </p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="pb-6 border-b border-neutral-200">
              <h2 className="text-xl font-semibold text-neutral-900">
                Notification Preferences
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Choose how and when you want to be notified
              </p>
            </div>

            {/* Email Preferences */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      Email Notifications
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Receive notifications via email
                    </p>
                  </div>
                </div>
                <Toggle enabled={true} onChange={() => {}} />
              </div>
              <div className="border-l-2 border-neutral-100 ml-5 pl-8">
                <p className="text-xs text-neutral-500">
                  Email: {profile.email}
                </p>
              </div>
            </div>

            {/* Notification Categories */}
            {notifications.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-neutral-200 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <TabIcon
                      icon={category.icon}
                      className="w-5 h-5 text-neutral-600"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.settings.map((setting, idx) => (
                    <div
                      key={setting.id}
                      className={`flex items-center justify-between py-3 ${
                        idx !== category.settings.length - 1
                          ? "border-b border-neutral-100"
                          : ""
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {setting.label}
                        </p>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {setting.description}
                        </p>
                      </div>
                      <Toggle
                        enabled={setting.enabled}
                        onChange={() =>
                          toggleNotification(category.id, setting.id)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === "privacy" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="pb-6 border-b border-neutral-200">
              <h2 className="text-xl font-semibold text-neutral-900">
                Privacy Settings
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Control your privacy and visibility preferences
              </p>
            </div>

            {/* Profile Visibility */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Profile Visibility
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Control who can see your profile
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["public", "connections", "private"].map((option) => (
                  <button
                    key={option}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      privacy.find((p) => p.id === "profile_visibility")
                        ?.value === option
                        ? "border-neutral-900 bg-neutral-50"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                          privacy.find((p) => p.id === "profile_visibility")
                            ?.value === option
                            ? "bg-neutral-900 text-white"
                            : "bg-neutral-100 text-neutral-500"
                        }`}
                      >
                        {option === "public" && (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        {option === "connections" && (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        )}
                        {option === "private" && (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm font-medium text-neutral-900 capitalize">
                        {option}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        {option === "public" && "Visible to everyone"}
                        {option === "connections" && "Only connections"}
                        {option === "private" && "Only you"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Privacy Toggles */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-6">
                Display Settings
              </h3>
              <div className="space-y-4">
                {privacy
                  .filter((s) => typeof s.value === "boolean")
                  .map((setting, idx, arr) => (
                    <div
                      key={setting.id}
                      className={`flex items-center justify-between py-3 ${
                        idx !== arr.length - 1
                          ? "border-b border-neutral-100"
                          : ""
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {setting.label}
                        </p>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {setting.description}
                        </p>
                      </div>
                      <Toggle
                        enabled={setting.value as boolean}
                        onChange={() => togglePrivacy(setting.id)}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Data & Privacy */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Data & Privacy
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-neutral-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <div className="text-left">
                      <p className="text-sm font-medium text-neutral-900">
                        Download Your Data
                      </p>
                      <p className="text-xs text-neutral-500">
                        Get a copy of all your data
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-400 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-neutral-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div className="text-left">
                      <p className="text-sm font-medium text-neutral-900">
                        Privacy Policy
                      </p>
                      <p className="text-xs text-neutral-500">
                        Read our privacy policy
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-400 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === "billing" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="pb-6 border-b border-neutral-200">
              <h2 className="text-xl font-semibold text-neutral-900">
                Billing & Subscription
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Manage your subscription and payment methods
              </p>
            </div>

            {/* Current Plan */}
            <div className="bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      {subscriptionInfo.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3">
                      {subscriptionInfo.plan} Plan
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1">
                      Your plan renews on {subscriptionInfo.nextBilling}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white">
                      {subscriptionInfo.price}
                    </p>
                    <p className="text-sm text-neutral-400">
                      per {subscriptionInfo.period}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 bg-white text-neutral-900 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-colors">
                    Upgrade Plan
                  </button>
                  <button className="px-5 py-2.5 bg-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-colors">
                    View All Plans
                  </button>
                </div>
              </div>
            </div>

            {/* Plan Features */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                What&apos;s Included
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {subscriptionInfo.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-3.5 h-3.5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Payment Method
                </h3>
                <button className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                  + Add New
                </button>
              </div>
              <div className="p-4 bg-neutral-50 rounded-xl border-2 border-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-10 bg-linear-to-br from-neutral-800 to-neutral-900 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-5 text-white"
                        viewBox="0 0 32 21"
                        fill="currentColor"
                      >
                        <path
                          d="M11.5 18.5h-9A2.5 2.5 0 010 16V5a2.5 2.5 0 012.5-2.5h9A2.5 2.5 0 0114 5v11a2.5 2.5 0 01-2.5 2.5z"
                          fillOpacity="0.3"
                        />
                        <circle cx="22" cy="10.5" r="8" fillOpacity="0.5" />
                        <circle cx="26" cy="10.5" r="8" fillOpacity="0.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-xs text-neutral-500">
                        Expires 12/2027
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-neutral-900 text-white rounded text-xs font-medium">
                      Default
                    </span>
                    <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing History */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Billing History
                </h3>
                <button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                  Download All
                </button>
              </div>
              <div className="space-y-2">
                {[
                  {
                    date: "Feb 20, 2026",
                    amount: "$19.99",
                    status: "Paid",
                    invoice: "INV-2026-0220",
                  },
                  {
                    date: "Jan 20, 2026",
                    amount: "$19.99",
                    status: "Paid",
                    invoice: "INV-2026-0120",
                  },
                  {
                    date: "Dec 20, 2025",
                    amount: "$19.99",
                    status: "Paid",
                    invoice: "INV-2025-1220",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <svg
                          className="w-5 h-5 text-neutral-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {item.invoice}
                        </p>
                        <p className="text-xs text-neutral-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-neutral-900">
                        {item.amount}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {item.status}
                      </span>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-neutral-500 hover:text-neutral-900">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancel Subscription */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Cancel Subscription
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    You&apos;ll lose access to Pro features at the end of your
                    billing period
                  </p>
                </div>
                <button className="px-4 py-2 border border-neutral-300 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors">
                  Cancel Plan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
