"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock course data
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
  reviewsCount: 2847,
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
          title: "Hooks Deep Dive",
          duration: "1:15:45",
          type: "video",
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
          title: "Project Source Code (ZIP)",
          duration: "—",
          type: "file",
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
        "This course completely transformed my career. Alex explains complex concepts in such a simple way.",
    },
    {
      name: "Michael Torres",
      rating: 5,
      date: "1 month ago",
      comment:
        "Best investment I've made in my education. Landed a junior role in 4 months.",
    },
    {
      name: "Emily Chen",
      rating: 4,
      date: "1 month ago",
      comment: "Great content and well-structured curriculum. Very practical.",
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
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link
              href="/courses"
              className="hover:text-neutral-900 transition-colors"
            >
              Courses
            </Link>
            <span>/</span>
            <span>{courseData.category}</span>
            <span>/</span>
            <span className="text-neutral-900">{courseData.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Course Details */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                  {courseData.category}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                  Bestseller
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-medium text-neutral-900 mb-4">
                {courseData.title}
              </h1>
              <p className="text-lg text-neutral-600 mb-6">
                {courseData.subtitle}
              </p>

              <div className="flex items-center gap-6 mb-8 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <span className="text-amber-500 text-lg">★</span>
                  <span className="font-medium text-neutral-900">
                    {courseData.rating}
                  </span>
                  <span>
                    ({courseData.reviewsCount.toLocaleString()} reviews)
                  </span>
                </div>
                <span>{courseData.students.toLocaleString()} students</span>
                <span>Updated {courseData.lastUpdated}</span>
              </div>

              {/* What You'll Learn Section */}
              <div className="mb-12 p-8 bg-white border border-neutral-200 rounded-3xl">
                <h2 className="text-2xl font-medium text-neutral-900 mb-6">
                  What you&apos;ll learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseData.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex gap-3 text-neutral-600 text-sm"
                    >
                      <span className="text-emerald-500">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Accordion */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-neutral-900 mb-6">
                  Course Content
                </h2>
                <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
                  {courseData.curriculum.map((section, idx) => (
                    <div
                      key={idx}
                      className="border-b border-neutral-200 last:border-0"
                    >
                      <button
                        onClick={() => toggleSection(idx)}
                        className="w-full flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors"
                      >
                        <span className="font-medium text-neutral-900">
                          {section.title}
                        </span>
                        <span className="text-sm text-neutral-500">
                          {section.lessons.length} lessons
                        </span>
                      </button>
                      {expandedSections.includes(idx) && (
                        <div className="divide-y divide-neutral-100 border-t border-neutral-100">
                          {section.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-4 pl-12 flex justify-between text-sm text-neutral-600"
                            >
                              <span>{lesson.title}</span>
                              <span className="text-neutral-400">
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

              {/* Instructor Bio */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-neutral-900 mb-6">
                  Instructor
                </h2>
                <div className="flex gap-6 items-start">
                  <div className="w-20 h-20 bg-neutral-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    {courseData.instructor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900">
                      {courseData.instructor.name}
                    </h3>
                    <p className="text-neutral-500 mb-4">
                      {courseData.instructor.title}
                    </p>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {courseData.instructor.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Pricing Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-neutral-900 relative flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-white ml-1">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-medium text-neutral-900">
                      ${courseData.price}
                    </span>
                    <span className="text-lg text-neutral-400 line-through">
                      ${courseData.originalPrice}
                    </span>
                  </div>
                  <button className="w-full bg-neutral-900 text-white py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors mb-4">
                    Enroll Now
                  </button>
                  <p className="text-center text-xs text-neutral-500 mb-6">
                    30-day money-back guarantee
                  </p>
                  <div className="space-y-4 pt-6 border-t border-neutral-100">
                    <p className="text-sm font-medium text-neutral-900 uppercase tracking-wider">
                      This course includes:
                    </p>
                    <ul className="space-y-3 text-sm text-neutral-600">
                      <li>• {courseData.totalHours} hours on-demand video</li>
                      <li>• Downloadable resources</li>
                      <li>• Certificate of completion</li>
                      <li>• Lifetime access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
