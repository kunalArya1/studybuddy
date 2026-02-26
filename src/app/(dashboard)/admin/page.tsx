"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data
const stats = [
  { label: "Total Users", value: "24,532", change: "+12.5%", trend: "up" },
  { label: "Active Courses", value: "1,284", change: "+8.2%", trend: "up" },
  { label: "Revenue", value: "$842,500", change: "+23.1%", trend: "up" },
  { label: "Completion Rate", value: "68.4%", change: "-2.3%", trend: "down" },
];

const recentUsers = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@example.com",
    role: "Student",
    joined: "2 hours ago",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    email: "marcus@example.com",
    role: "Instructor",
    joined: "5 hours ago",
    avatar: "MJ",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily@example.com",
    role: "Student",
    joined: "1 day ago",
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@example.com",
    role: "Student",
    joined: "2 days ago",
    avatar: "DK",
  },
  {
    id: 5,
    name: "Lisa Wang",
    email: "lisa@example.com",
    role: "Instructor",
    joined: "3 days ago",
    avatar: "LW",
  },
];

const pendingCourses = [
  {
    id: 1,
    title: "Advanced Machine Learning",
    instructor: "Dr. James Wilson",
    submitted: "Jan 15, 2026",
    status: "pending",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Anna Martinez",
    submitted: "Jan 14, 2026",
    status: "pending",
  },
  {
    id: 3,
    title: "Blockchain Development",
    instructor: "Mike Thompson",
    submitted: "Jan 12, 2026",
    status: "review",
  },
];

const recentActivity = [
  {
    id: 1,
    action: "New course published",
    details: "React Native Masterclass",
    time: "10 min ago",
    icon: "course",
  },
  {
    id: 2,
    action: "User upgraded to Pro",
    details: "john@example.com",
    time: "25 min ago",
    icon: "upgrade",
  },
  {
    id: 3,
    action: "Payout processed",
    details: "$12,450 to 8 instructors",
    time: "1 hour ago",
    icon: "payout",
  },
  {
    id: 4,
    action: "Support ticket resolved",
    details: "Ticket #4521",
    time: "2 hours ago",
    icon: "support",
  },
  {
    id: 5,
    action: "New instructor verified",
    details: "Dr. Sarah Mitchell",
    time: "3 hours ago",
    icon: "verify",
  },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-neutral-900 transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-neutral-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            {sidebarOpen && (
              <span className="text-lg font-semibold text-white tracking-tight">
                study<span className="text-neutral-500">buddy</span>
              </span>
            )}
          </Link>
        </div>

        <nav className="mt-6 px-3">
          <div className={`${sidebarOpen ? "px-3" : "px-0"} mb-4`}>
            {sidebarOpen && (
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Main Menu
              </span>
            )}
          </div>

          {[
            { icon: "dashboard", label: "Dashboard", active: true },
            { icon: "users", label: "Users" },
            { icon: "courses", label: "Courses" },
            { icon: "analytics", label: "Analytics" },
            { icon: "payments", label: "Payments" },
            { icon: "settings", label: "Settings" },
          ].map((item) => (
            <Link
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition-colors ${
                item.active
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {item.icon === "dashboard" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                )}
                {item.icon === "users" && (
                  <svg
                    className="w-5 h-5"
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
                {item.icon === "courses" && (
                  <svg
                    className="w-5 h-5"
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
                )}
                {item.icon === "analytics" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                )}
                {item.icon === "payments" && (
                  <svg
                    className="w-5 h-5"
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
                )}
                {item.icon === "settings" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </div>
              {sidebarOpen && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-0 right-0 px-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <svg
              className={`w-5 h-5 transition-transform ${sidebarOpen ? "" : "rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            {sidebarOpen && <span className="text-sm">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#fafafa]/80 backdrop-blur-sm border-b border-neutral-200">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-semibold text-neutral-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-neutral-500">Welcome back, Admin</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-xl hover:bg-neutral-100 transition-colors">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-sm font-medium">
                  AD
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-neutral-900">
                    Admin User
                  </p>
                  <p className="text-xs text-neutral-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300"
              >
                <p className="text-sm text-neutral-500 mb-2">{stat.label}</p>
                <p className="text-3xl font-semibold text-neutral-900 mb-2">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <svg
                    className={`w-4 h-4 ${stat.trend === "up" ? "text-green-600" : "text-red-500 rotate-180"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span className="text-sm text-neutral-400">
                    vs last month
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart Placeholder */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Revenue Overview
                </h3>
                <select className="text-sm bg-neutral-100 border-0 rounded-lg px-3 py-2 text-neutral-600 focus:ring-2 focus:ring-neutral-900">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              {/* Chart Visualization */}
              <div className="h-64 flex items-end gap-2">
                {[65, 45, 78, 52, 89, 67, 94, 73, 85, 62, 91, 78].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div
                        className="w-full bg-neutral-900 rounded-t-lg transition-all duration-300 hover:bg-neutral-700"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-neutral-400">
                        {
                          [
                            "J",
                            "F",
                            "M",
                            "A",
                            "M",
                            "J",
                            "J",
                            "A",
                            "S",
                            "O",
                            "N",
                            "D",
                          ][i]
                        }
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
                      {activity.icon === "course" && (
                        <svg
                          className="w-4 h-4 text-neutral-600"
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
                      )}
                      {activity.icon === "upgrade" && (
                        <svg
                          className="w-4 h-4 text-neutral-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      )}
                      {activity.icon === "payout" && (
                        <svg
                          className="w-4 h-4 text-neutral-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {activity.icon === "support" && (
                        <svg
                          className="w-4 h-4 text-neutral-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      )}
                      {activity.icon === "verify" && (
                        <svg
                          className="w-4 h-4 text-neutral-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-900">
                        {activity.action}
                      </p>
                      <p className="text-xs text-neutral-500 truncate">
                        {activity.details}
                      </p>
                    </div>
                    <span className="text-xs text-neutral-400 whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Recent Users
                </h3>
                <Link
                  href="#"
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  View all →
                </Link>
              </div>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-sm font-medium">
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-neutral-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.role === "Instructor"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {user.role}
                    </span>
                    <span className="text-xs text-neutral-400 hidden sm:block">
                      {user.joined}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Course Approvals */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Pending Approvals
                </h3>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">
                  {pendingCourses.length} pending
                </span>
              </div>
              <div className="space-y-4">
                {pendingCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {course.title}
                        </p>
                        <p className="text-xs text-neutral-500">
                          by {course.instructor}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          course.status === "pending"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {course.status === "pending" ? "Pending" : "In Review"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-400">
                        Submitted {course.submitted}
                      </span>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          Reject
                        </button>
                        <button className="px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors">
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
