"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data - Fixed the duplicate key "reviews"
const pathData = {
  id: "frontend-developer",
  title: "Frontend Developer",
  subtitle:
    "Master modern frontend technologies and build beautiful, responsive web applications",
  description:
    "This comprehensive learning path takes you from complete beginner to job-ready frontend developer. You'll learn HTML, CSS, JavaScript, React, TypeScript, and modern development tools through hands-on projects that build your portfolio.",
  category: "Development",
  level: "Beginner to Advanced",
  duration: "6 months",
  hoursPerWeek: "10-15 hours",
  courses: 8,
  totalHours: 120,
  projectCount: 12,
  students: 12500,
  rating: 4.9,
  reviewsCount: 3240, // RENAMED THIS to avoid conflict
  color: "from-blue-500 to-cyan-500",
  skills: [
    "HTML/CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Git",
    "Testing",
    "Performance",
    "Accessibility",
  ],
  outcomes: [
    "Build responsive, accessible websites from scratch",
    "Create interactive web applications with React",
    "Write clean, maintainable TypeScript code",
    "Implement modern CSS and animation techniques",
    "Deploy and maintain production applications",
    "Collaborate using Git and modern workflows",
  ],
  curriculum: [
    {
      phase: 1,
      title: "Web Fundamentals",
      duration: "4 weeks",
      description: "Master the building blocks of the web",
      courses: [
        {
          id: 1,
          title: "HTML & CSS Mastery",
          duration: "20 hours",
          lessons: 28,
          projects: 3,
        },
        {
          id: 2,
          title: "Responsive Web Design",
          duration: "12 hours",
          lessons: 18,
          projects: 2,
        },
      ],
    },
    {
      phase: 2,
      title: "JavaScript Deep Dive",
      duration: "6 weeks",
      description: "Become fluent in JavaScript programming",
      courses: [
        {
          id: 3,
          title: "JavaScript Fundamentals",
          duration: "25 hours",
          lessons: 35,
          projects: 2,
        },
        {
          id: 4,
          title: "Advanced JavaScript",
          duration: "18 hours",
          lessons: 24,
          projects: 2,
        },
      ],
    },
    {
      phase: 3,
      title: "React Development",
      duration: "8 weeks",
      description: "Build modern UIs with React",
      courses: [
        {
          id: 5,
          title: "React Fundamentals",
          duration: "22 hours",
          lessons: 30,
          projects: 2,
        },
        {
          id: 6,
          title: "Advanced React Patterns",
          duration: "15 hours",
          lessons: 20,
          projects: 1,
        },
      ],
    },
    {
      phase: 4,
      title: "Professional Development",
      duration: "6 weeks",
      description: "Polish your skills for the industry",
      courses: [
        {
          id: 7,
          title: "TypeScript for React",
          duration: "14 hours",
          lessons: 18,
          projects: 1,
        },
        {
          id: 8,
          title: "Testing & Performance",
          duration: "12 hours",
          lessons: 16,
          projects: 1,
        },
      ],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "Build your professional portfolio website with responsive design and animations.",
      skills: ["HTML", "CSS", "JavaScript"],
      difficulty: "Beginner",
    },
    {
      title: "E-commerce Store",
      description:
        "Create a fully functional online store with cart, checkout, and product filtering.",
      skills: ["React", "State Management", "API Integration"],
      difficulty: "Intermediate",
    },
    {
      title: "Real-time Dashboard",
      description:
        "Build a data visualization dashboard with live updates and interactive charts.",
      skills: ["React", "TypeScript", "WebSockets", "D3.js"],
      difficulty: "Advanced",
    },
  ],
  instructors: [
    {
      name: "Alex Chen",
      title: "Senior Frontend Engineer",
      company: "Google",
      courses: 3,
    },
    {
      name: "Sarah Miller",
      title: "Tech Lead",
      company: "Stripe",
      courses: 3,
    },
    {
      name: "David Park",
      title: "Principal Engineer",
      company: "Vercel",
      courses: 2,
    },
  ],
  reviews: [
    {
      name: "Michael Torres",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "This path gave me everything I needed to land my first frontend job. The projects are challenging but incredibly rewarding.",
    },
    {
      name: "Emily Chen",
      rating: 5,
      date: "1 month ago",
      comment:
        "Went from knowing nothing about web development to building production apps in 6 months. Highly recommend!",
    },
  ],
};

export default function PathDetailPage() {
  const [expandedPhases, setExpandedPhases] = useState<number[]>([0]);

  const togglePhase = (index: number) => {
    setExpandedPhases((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const totalCourses = pathData.curriculum.reduce(
    (acc, phase) => acc + phase.courses.length,
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
              href="/paths"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Learning Paths
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
            <span className="text-neutral-900">{pathData.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Path Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pathData.color} flex items-center justify-center`}
                >
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
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                    {pathData.category}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                    {pathData.level}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-4">
                {pathData.title}
              </h1>

              <p className="text-lg text-neutral-600 mb-6">
                {pathData.subtitle}
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
                    {pathData.rating}
                  </span>
                  <span className="text-neutral-500">
                    ({pathData.reviewsCount.toLocaleString()} reviews)
                  </span>
                </div>
                <span className="text-neutral-500">
                  {pathData.students.toLocaleString()} students enrolled
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
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
                  {pathData.duration} to complete
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  {totalCourses} courses
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
                  {pathData.totalHours}+ hours of content
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  {pathData.projectCount} projects
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {pathData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-600 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky Enroll Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden sticky top-28">
                <div
                  className={`aspect-video bg-gradient-to-br ${pathData.color} relative`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">
                      {pathData.duration} Learning Path
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-medium text-neutral-900">
                      Pro Membership
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-6">
                    Get unlimited access to all courses and learning paths
                  </p>
                  <button className="w-full bg-neutral-900 text-white py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors mb-3">
                    Start Learning
                  </button>
                  <button className="w-full bg-white text-neutral-900 py-4 rounded-full text-sm font-medium border border-neutral-200 hover:border-neutral-400 transition-colors mb-4">
                    Try 7 Days Free
                  </button>
                  <div className="border-t border-neutral-100 pt-6">
                    <h4 className="text-sm font-medium text-neutral-900 mb-4">
                      This path includes:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { text: `${totalCourses} comprehensive courses` },
                        { text: `${pathData.totalHours}+ hours of content` },
                        { text: `${pathData.projectCount} portfolio projects` },
                        { text: "Certificate of completion" },
                        { text: "Career support & mentorship" },
                        { text: "Lifetime access" },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-sm text-neutral-600"
                        >
                          <svg
                            className="w-5 h-5 text-green-600 flex-shrink-0"
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

      {/* Learning Outcomes & Curriculum */}
      <section className="pt-8 pb-16 px-6 lg:px-8 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  What you&apos;ll achieve
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {pathData.outcomes.map((outcome, index) => (
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
                      <span className="text-neutral-600">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Phases */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  Curriculum
                </h2>
                <div className="space-y-4">
                  {pathData.curriculum.map((phase, phaseIndex) => (
                    <div
                      key={phaseIndex}
                      className="border border-neutral-200 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => togglePhase(phaseIndex)}
                        className="w-full flex items-center justify-between p-5 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pathData.color} flex items-center justify-center`}
                          >
                            <span className="text-white font-medium">
                              {phase.phase}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-medium text-neutral-900">
                              {phase.title}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {phase.description}
                            </p>
                          </div>
                        </div>
                        <svg
                          className={`w-5 h-5 text-neutral-500 transition-transform ${expandedPhases.includes(phaseIndex) ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {expandedPhases.includes(phaseIndex) && (
                        <div className="divide-y divide-neutral-100">
                          {phase.courses.map((course, idx) => (
                            <Link
                              key={idx}
                              href={`/courses/${course.id}`}
                              className="flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-500">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <span className="font-medium text-neutral-900">
                                  {course.title}
                                </span>
                              </div>
                              <span className="text-sm text-neutral-500">
                                {course.duration}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  Portfolio Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {pathData.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white border border-neutral-200 rounded-2xl"
                    >
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full mb-3 inline-block ${project.difficulty === "Beginner" ? "bg-green-100 text-green-700" : project.difficulty === "Intermediate" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}
                      >
                        {project.difficulty}
                      </span>
                      <h3 className="font-medium text-neutral-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mb-4">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">
                  Student Reviews
                </h2>
                <div className="space-y-6">
                  {pathData.reviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white rounded-2xl border border-neutral-200"
                    >
                      <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-neutral-900">
                              {review.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-neutral-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
