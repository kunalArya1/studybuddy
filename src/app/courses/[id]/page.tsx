"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock course data - in real app, fetch based on ID
const courseData = {
  id: 1,
  title: "Full-Stack Web Development",
  subtitle: "Master React, Node.js, and modern web technologies from scratch",
  description:
    "This comprehensive course takes you from beginner to professional full-stack developer. You'll learn to build modern, scalable web applications using React for the frontend, Node.js and Express for the backend, and MongoDB for the database. Through hands-on projects, you'll gain real-world experience that employers are looking for.",
  category: "Development",
  level: "Beginner",
  duration: "12 weeks",
  totalHours: 48,
  lessons: 48,
  students: 12500,
  rating: 4.9,
  reviews: 2847,
  price: 99,
  originalPrice: 199,
  instructor: {
    name: "Alex Chen",
    title: "Senior Software Engineer",
    bio: "Alex has 10+ years of experience building web applications at top tech companies including Google and Stripe. He's passionate about teaching and has helped over 50,000 students launch their development careers.",
    students: 52000,
    courses: 8,
    rating: 4.9,
  },
  lastUpdated: "January 2026",
  language: "English",
  certificate: true,
  features: [
    "Build 5 real-world projects for your portfolio",
    "Learn React 19, Node.js, Express, and MongoDB",
    "Master modern JavaScript (ES6+) and TypeScript",
    "Understand RESTful APIs and authentication",
    "Deploy applications to production",
    "Lifetime access and future updates",
  ],
  requirements: [
    "Basic understanding of HTML and CSS",
    "No prior JavaScript experience required",
    "A computer with internet access",
  ],
  curriculum: [
    {
      title: "Getting Started",
      duration: "2h 30m",
      lessons: [
        {
          title: "Course Introduction",
          duration: "10:25",
          type: "video",
          preview: true,
        },
        {
          title: "Development Environment Setup",
          duration: "25:10",
          type: "video",
          preview: true,
        },
        {
          title: "How the Web Works",
          duration: "18:45",
          type: "video",
          preview: false,
        },
        {
          title: "Setup Guide (PDF)",
          duration: "15 pages",
          type: "pdf",
          preview: true,
        },
      ],
    },
    {
      title: "JavaScript Fundamentals",
      duration: "6h 15m",
      lessons: [
        {
          title: "Variables and Data Types",
          duration: "32:20",
          type: "video",
          preview: false,
        },
        {
          title: "Functions and Scope",
          duration: "45:15",
          type: "video",
          preview: false,
        },
        {
          title: "Arrays and Objects",
          duration: "38:40",
          type: "video",
          preview: false,
        },
        {
          title: "ES6+ Features",
          duration: "52:30",
          type: "video",
          preview: false,
        },
        {
          title: "Async JavaScript",
          duration: "48:20",
          type: "video",
          preview: false,
        },
        {
          title: "JavaScript Cheatsheet (PDF)",
          duration: "25 pages",
          type: "pdf",
          preview: false,
        },
        {
          title: "Practice Exercises (PDF)",
          duration: "18 pages",
          type: "pdf",
          preview: false,
        },
      ],
    },
    {
      title: "React Fundamentals",
      duration: "8h 45m",
      lessons: [
        {
          title: "Introduction to React",
          duration: "28:15",
          type: "video",
          preview: true,
        },
        {
          title: "Components and Props",
          duration: "42:30",
          type: "video",
          preview: false,
        },
        {
          title: "State and Lifecycle",
          duration: "55:20",
          type: "video",
          preview: false,
        },
        {
          title: "Hooks Deep Dive",
          duration: "1:15:45",
          type: "video",
          preview: false,
        },
        {
          title: "Forms and Validation",
          duration: "48:30",
          type: "video",
          preview: false,
        },
        {
          title: "React Router",
          duration: "38:20",
          type: "video",
          preview: false,
        },
        {
          title: "React Components Library (PDF)",
          duration: "32 pages",
          type: "pdf",
          preview: false,
        },
      ],
    },
    {
      title: "Backend with Node.js",
      duration: "7h 30m",
      lessons: [
        {
          title: "Node.js Basics",
          duration: "35:20",
          type: "video",
          preview: false,
        },
        {
          title: "Express Framework",
          duration: "48:15",
          type: "video",
          preview: false,
        },
        {
          title: "RESTful API Design",
          duration: "52:40",
          type: "video",
          preview: false,
        },
        {
          title: "Authentication & JWT",
          duration: "1:05:30",
          type: "video",
          preview: false,
        },
        {
          title: "Error Handling",
          duration: "32:15",
          type: "video",
          preview: false,
        },
        {
          title: "API Documentation Guide (PDF)",
          duration: "20 pages",
          type: "pdf",
          preview: false,
        },
      ],
    },
    {
      title: "Database with MongoDB",
      duration: "5h 20m",
      lessons: [
        {
          title: "MongoDB Fundamentals",
          duration: "42:30",
          type: "video",
          preview: false,
        },
        {
          title: "Mongoose ODM",
          duration: "55:20",
          type: "video",
          preview: false,
        },
        {
          title: "Data Modeling",
          duration: "38:45",
          type: "video",
          preview: false,
        },
        {
          title: "Aggregation Pipeline",
          duration: "45:30",
          type: "video",
          preview: false,
        },
        {
          title: "MongoDB Cheatsheet (PDF)",
          duration: "15 pages",
          type: "pdf",
          preview: false,
        },
      ],
    },
    {
      title: "Full-Stack Projects",
      duration: "18h",
      lessons: [
        {
          title: "Project 1: Task Manager App",
          duration: "3:30:00",
          type: "video",
          preview: false,
        },
        {
          title: "Project 2: E-commerce Platform",
          duration: "5:45:00",
          type: "video",
          preview: false,
        },
        {
          title: "Project 3: Social Media Dashboard",
          duration: "4:20:00",
          type: "video",
          preview: false,
        },
        {
          title: "Project 4: Real-time Chat App",
          duration: "2:45:00",
          type: "video",
          preview: false,
        },
        {
          title: "Project Source Code (ZIP)",
          duration: "—",
          type: "file",
          preview: false,
        },
        {
          title: "Project Requirements Doc (PDF)",
          duration: "45 pages",
          type: "pdf",
          preview: false,
        },
      ],
    },
    {
      title: "Deployment & Production",
      duration: "4h 15m",
      lessons: [
        {
          title: "Environment Variables",
          duration: "22:15",
          type: "video",
          preview: false,
        },
        {
          title: "CI/CD Pipeline",
          duration: "48:30",
          type: "video",
          preview: false,
        },
        {
          title: "Deploy to Vercel",
          duration: "35:20",
          type: "video",
          preview: false,
        },
        {
          title: "Deploy to AWS",
          duration: "52:45",
          type: "video",
          preview: false,
        },
        {
          title: "Monitoring & Analytics",
          duration: "28:30",
          type: "video",
          preview: false,
        },
        {
          title: "Deployment Checklist (PDF)",
          duration: "10 pages",
          type: "pdf",
          preview: false,
        },
      ],
    },
  ],
  reviews: [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "This course completely transformed my career. Alex explains complex concepts in such a simple way. The projects are challenging but incredibly rewarding.",
    },
    {
      name: "Michael Torres",
      rating: 5,
      date: "1 month ago",
      comment:
        "Best investment I've made in my education. Went from knowing nothing about web development to landing a junior developer role in 4 months.",
    },
    {
      name: "Emily Chen",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great content and well-structured curriculum. Would love to see more advanced topics added in future updates.",
    },
  ],
};

export default function CourseDetailPage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const totalLessons = courseData.curriculum.reduce(
    (acc, section) => acc + section.lessons.length,
    0,
  );

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/courses"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Courses
            </Link>
            <svg
              className="w-4 h-4 text-neutral-400"
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
            <span className="text-neutral-500">{courseData.category}</span>
            <svg
              className="w-4 h-4 text-neutral-400"
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
            <span className="text-neutral-900">{courseData.title}</span>
          </nav>
        </div>
      </div>

      {/* Course Header */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                  {courseData.category}
                </span>
                <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                  {courseData.level}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Bestseller
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-4">
                {courseData.title}
              </h1>

              <p className="text-lg text-neutral-600 mb-6">
                {courseData.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-medium text-neutral-900">
                    {courseData.rating}
                  </span>
                  <span className="text-neutral-500">
                    ({courseData.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <span className="text-neutral-500">
                  {courseData.students.toLocaleString()} students
                </span>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {courseData.instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Created by</p>
                  <p className="font-medium text-neutral-900">
                    {courseData.instructor.name}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
                <span className="flex items-center gap-2">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {courseData.totalHours} hours of content
                </span>
                <span className="flex items-center gap-2">
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {totalLessons} lessons
                </span>
                <span className="flex items-center gap-2">
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
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  {courseData.language}
                </span>
                <span className="flex items-center gap-2">
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Updated {courseData.lastUpdated}
                </span>
              </div>
            </div>

            {/* Sticky Purchase Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden sticky top-28">
                {/* Video Preview */}
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-sm">
                    Preview this course
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-medium text-neutral-900">
                      ${courseData.price}
                    </span>
                    <span className="text-lg text-neutral-400 line-through">
                      ${courseData.originalPrice}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      50% off
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-red-600 mb-6">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">
                      2 days left at this price!
                    </span>
                  </div>

                  <button className="w-full bg-neutral-900 text-white py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors mb-3">
                    Enroll Now
                  </button>

                  <button className="w-full bg-white text-neutral-900 py-4 rounded-full text-sm font-medium border border-neutral-200 hover:border-neutral-400 transition-colors mb-4">
                    Add to Wishlist
                  </button>

                  <p className="text-center text-sm text-neutral-500 mb-6">
                    30-day money-back guarantee
                  </p>

                  <div className="border-t border-neutral-100 pt-6">
                    <h4 className="text-sm font-medium text-neutral-900 mb-4">
                      This course includes:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        {
                          icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                          text: `${courseData.totalHours} hours on-demand video`,
                        },
                        {
                          icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                          text: "Downloadable resources",
                        },
                        {
                          icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                          text: "Access on mobile and TV",
                        },
                        {
                          icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                          text: "Certificate of completion",
                        },
                        {
                          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                          text: "Lifetime access",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-sm text-neutral-600"
                        >
                          <svg
                            className="w-5 h-5 text-neutral-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={item.icon}
                            />
                          </svg>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="pt-8 pb-16 px-6 lg:px-8 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  What you&apos;ll learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-medium text-neutral-900 tracking-tight">
                    Course Content
                  </h2>
                  <div className="text-sm text-neutral-500">
                    {courseData.curriculum.length} sections • {totalLessons}{" "}
                    lessons • {courseData.totalHours}h total
                  </div>
                </div>

                <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                  {courseData.curriculum.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="border-b border-neutral-200 last:border-b-0"
                    >
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full flex items-center justify-between p-5 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className={`w-5 h-5 text-neutral-500 transition-transform ${
                              expandedSections.includes(sectionIndex)
                                ? "rotate-90"
                                : ""
                            }`}
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
                          <span className="font-medium text-neutral-900">
                            {section.title}
                          </span>
                        </div>
                        <div className="text-sm text-neutral-500">
                          {section.lessons.length} lessons • {section.duration}
                        </div>
                      </button>

                      {/* Section Lessons */}
                      {expandedSections.includes(sectionIndex) && (
                        <div className="divide-y divide-neutral-100">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between p-5 pl-14 hover:bg-neutral-50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                {lesson.type === "video" && (
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
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={1.5}
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                )}
                                {lesson.type === "pdf" && (
                                  <svg
                                    className="w-5 h-5 text-red-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={1.5}
                                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                  </svg>
                                )}
                                {lesson.type === "file" && (
                                  <svg
                                    className="w-5 h-5 text-blue-500"
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
                                )}
                                <span className="text-neutral-700">
                                  {lesson.title}
                                </span>
                                {lesson.preview && (
                                  <span className="text-xs text-blue-600 font-medium">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-neutral-500">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-16">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {courseData.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-neutral-600"
                    >
                      <svg
                        className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5"
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
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div className="mb-16">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  Description
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-600 leading-relaxed">
                    {courseData.description}
                  </p>
                </div>
              </div>

              {/* Instructor */}
              <div className="mb-16">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  Instructor
                </h2>
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-neutral-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-medium text-white">
                      {courseData.instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-1">
                      {courseData.instructor.name}
                    </h3>
                    <p className="text-neutral-500 mb-4">
                      {courseData.instructor.title}
                    </p>
                    <div className="flex items-center gap-6 mb-4 text-sm text-neutral-600">
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="w-4 h-4 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {courseData.instructor.rating} rating
                      </span>
                      <span>
                        {courseData.instructor.students.toLocaleString()}{" "}
                        students
                      </span>
                      <span>{courseData.instructor.courses} courses</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {courseData.instructor.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-medium text-neutral-900 tracking-tight">
                    Student Reviews
                  </h2>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-medium text-neutral-900">
                      {courseData.rating}
                    </span>
                    <span className="text-neutral-500">
                      ({courseData.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {courseData.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white rounded-2xl border border-neutral-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-white">
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-neutral-900">
                              {review.name}
                            </p>
                            <p className="text-sm text-neutral-500">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? "text-amber-500" : "text-neutral-200"}`}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-neutral-600 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full py-4 border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-neutral-400 transition-colors">
                  View All Reviews
                </button>
              </div>
            </div>

            {/* Sidebar spacer for layout */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 px-6 lg:px-8 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-8">
            Students also bought
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "React Native Mobile Development",
                instructor: "Sarah Miller",
                price: 109,
                rating: 4.8,
              },
              {
                title: "TypeScript Masterclass",
                instructor: "Alex Chen",
                price: 79,
                rating: 4.9,
              },
              {
                title: "Node.js Advanced Patterns",
                instructor: "James Liu",
                price: 89,
                rating: 4.7,
              },
            ].map((course, index) => (
              <Link
                key={index}
                href={`/courses/${index + 2}`}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {course.instructor}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-medium text-neutral-900">
                        {course.rating}
                      </span>
                    </div>
                    <span className="font-medium text-neutral-900">
                      ${course.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
