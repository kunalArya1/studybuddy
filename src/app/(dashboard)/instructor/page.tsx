"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data
const stats = [
  { label: "Total Students", value: "8,542", change: "+18.2%", trend: "up" },
  { label: "Total Earnings", value: "$124,850", change: "+32.5%", trend: "up" },
  { label: "Active Courses", value: "12", change: "+2", trend: "up" },
  { label: "Avg. Rating", value: "4.8", change: "+0.2", trend: "up" },
];

const myCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    students: 2845,
    rating: 4.9,
    revenue: "$45,200",
    status: "published",
    progress: 100,
  },
  {
    id: 2,
    title: "React Native Masterclass",
    students: 1523,
    rating: 4.8,
    revenue: "$28,400",
    status: "published",
    progress: 100,
  },
  {
    id: 3,
    title: "Advanced TypeScript Patterns",
    students: 892,
    rating: 4.7,
    revenue: "$15,600",
    status: "published",
    progress: 100,
  },
  {
    id: 4,
    title: "Node.js Microservices",
    students: 0,
    rating: 0,
    revenue: "$0",
    status: "draft",
    progress: 65,
  },
];

const recentReviews = [
  {
    id: 1,
    student: "Alex Thompson",
    course: "Full-Stack Web Development",
    rating: 5,
    comment:
      "Incredibly comprehensive! The instructor explains complex concepts in a way that's easy to understand.",
    time: "2 hours ago",
  },
  {
    id: 2,
    student: "Maria Garcia",
    course: "React Native Masterclass",
    rating: 5,
    comment:
      "Best React Native course I've taken. Real-world projects are amazing.",
    time: "5 hours ago",
  },
  {
    id: 3,
    student: "James Wilson",
    course: "Advanced TypeScript Patterns",
    rating: 4,
    comment: "Great content, would love more examples on generics.",
    time: "1 day ago",
  },
  {
    id: 4,
    student: "Sophie Chen",
    course: "Full-Stack Web Development",
    rating: 5,
    comment: "Life-changing course. Got a job within 2 months of completion!",
    time: "2 days ago",
  },
];

const studentEngagement = [
  { day: "Mon", views: 245, completions: 32 },
  { day: "Tue", views: 312, completions: 45 },
  { day: "Wed", views: 289, completions: 38 },
  { day: "Thu", views: 356, completions: 52 },
  { day: "Fri", views: 278, completions: 41 },
  { day: "Sat", views: 198, completions: 28 },
  { day: "Sun", views: 167, completions: 22 },
];

const upcomingPayouts = [
  { id: 1, amount: "$4,250", date: "Feb 28, 2026", status: "scheduled" },
  { id: 2, amount: "$3,890", date: "Mar 15, 2026", status: "pending" },
];

export default function InstructorDashboard() {
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
                Instructor
              </span>
            )}
          </div>

          {[
            { icon: "dashboard", label: "Dashboard", active: true },
            { icon: "courses", label: "My Courses" },
            { icon: "students", label: "Students" },
            { icon: "analytics", label: "Analytics" },
            { icon: "earnings", label: "Earnings" },
            { icon: "reviews", label: "Reviews" },
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
                {item.icon === "students" && (
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
                {item.icon === "earnings" && (
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {item.icon === "reviews" && (
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
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
                Instructor Dashboard
              </h1>
              <p className="text-sm text-neutral-500">
                Manage your courses and track performance
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create Course
              </Link>
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
                  JD
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-neutral-900">
                    James Davis
                  </p>
                  <p className="text-xs text-neutral-500">Instructor</p>
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
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
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
                  <span className="text-sm text-neutral-400">this month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Student Engagement Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Student Engagement
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-neutral-900 rounded-full"></div>
                    <span className="text-xs text-neutral-500">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
                    <span className="text-xs text-neutral-500">
                      Completions
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-64 flex items-end gap-4">
                {studentEngagement.map((day, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div className="w-full flex flex-col gap-1 items-center">
                      <div
                        className="w-full bg-neutral-900 rounded-t-lg transition-all duration-300 hover:bg-neutral-700"
                        style={{ height: `${(day.views / 400) * 200}px` }}
                      />
                      <div
                        className="w-full bg-neutral-300 rounded-t-lg"
                        style={{ height: `${(day.completions / 60) * 50}px` }}
                      />
                    </div>
                    <span className="text-xs text-neutral-500">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Payouts */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Upcoming Payouts
              </h3>

              <div className="mb-6">
                <p className="text-xs text-neutral-500 mb-1">
                  Available Balance
                </p>
                <p className="text-3xl font-semibold text-neutral-900">
                  $8,140
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {upcomingPayouts.map((payout) => (
                  <div
                    key={payout.id}
                    className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        {payout.amount}
                      </p>
                      <p className="text-xs text-neutral-500">{payout.date}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        payout.status === "scheduled"
                          ? "bg-green-50 text-green-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {payout.status}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                Request Payout
              </button>
            </div>
          </div>

          {/* My Courses */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                My Courses
              </h3>
              <Link
                href="#"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myCourses.map((course) => (
                    <tr
                      key={course.id}
                      className="border-b border-neutral-100 hover:bg-neutral-50"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-neutral-400"
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
                          </div>
                          <div>
                            <p className="text-sm font-medium text-neutral-900">
                              {course.title}
                            </p>
                            {course.status === "draft" && (
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full w-24">
                                  <div
                                    className="h-full bg-neutral-900 rounded-full"
                                    style={{ width: `${course.progress}%` }}
                                  />
                                </div>
                                <span className="text-xs text-neutral-500">
                                  {course.progress}%
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-neutral-900">
                          {course.students.toLocaleString()}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        {course.rating > 0 ? (
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4 text-amber-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="text-sm text-neutral-900">
                              {course.rating}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-neutral-400">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-neutral-900">
                          {course.revenue}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            course.status === "published"
                              ? "bg-green-50 text-green-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {course.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
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
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Recent Reviews
              </h3>
              <Link
                href="#"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentReviews.map((review) => (
                <div
                  key={review.id}
                  className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-sm font-medium">
                        {review.student
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {review.student}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {review.course}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-amber-400" : "text-neutral-200"}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 mb-2">
                    {review.comment}
                  </p>
                  <p className="text-xs text-neutral-400">{review.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
