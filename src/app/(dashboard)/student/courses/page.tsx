"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data
const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    instructor: "James Davis",
    progress: 68,
    totalLessons: 48,
    completedLessons: 32,
    duration: "42 hours",
    lastAccessed: "2 hours ago",
    thumbnail: "web",
    status: "in-progress",
    nextLesson: "Building REST APIs with Express",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Anna Martinez",
    progress: 45,
    totalLessons: 36,
    completedLessons: 16,
    duration: "28 hours",
    lastAccessed: "1 day ago",
    thumbnail: "design",
    status: "in-progress",
    nextLesson: "Color Theory & Psychology",
  },
  {
    id: 3,
    title: "Data Science with Python",
    instructor: "Dr. Sarah Chen",
    progress: 23,
    totalLessons: 52,
    completedLessons: 12,
    duration: "56 hours",
    lastAccessed: "3 days ago",
    thumbnail: "data",
    status: "in-progress",
    nextLesson: "Introduction to Pandas",
  },
  {
    id: 4,
    title: "JavaScript Essentials",
    instructor: "Mike Thompson",
    progress: 100,
    totalLessons: 24,
    completedLessons: 24,
    duration: "18 hours",
    lastAccessed: "2 weeks ago",
    thumbnail: "js",
    status: "completed",
    nextLesson: null,
  },
  {
    id: 5,
    title: "Introduction to Cloud Computing",
    instructor: "Rachel Kim",
    progress: 100,
    totalLessons: 32,
    completedLessons: 32,
    duration: "24 hours",
    lastAccessed: "1 month ago",
    thumbnail: "cloud",
    status: "completed",
    nextLesson: null,
  },
  {
    id: 6,
    title: "React Native Mobile Development",
    instructor: "David Chen",
    progress: 0,
    totalLessons: 40,
    completedLessons: 0,
    duration: "36 hours",
    lastAccessed: "Never",
    thumbnail: "mobile",
    status: "not-started",
    nextLesson: "Getting Started with React Native",
  },
  {
    id: 7,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Emily Watson",
    progress: 0,
    totalLessons: 48,
    completedLessons: 0,
    duration: "52 hours",
    lastAccessed: "Never",
    thumbnail: "ml",
    status: "not-started",
    nextLesson: "Introduction to ML Concepts",
  },
  {
    id: 8,
    title: "DevOps & CI/CD Pipelines",
    instructor: "Alex Rodriguez",
    progress: 15,
    totalLessons: 28,
    completedLessons: 4,
    duration: "22 hours",
    lastAccessed: "1 week ago",
    thumbnail: "devops",
    status: "in-progress",
    nextLesson: "Docker Containers Deep Dive",
  },
];

const filters = ["All Courses", "In Progress", "Completed", "Not Started"];

export default function MyCoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All Courses");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCourses = courses.filter((course) => {
    if (activeFilter === "All Courses") return true;
    if (activeFilter === "In Progress") return course.status === "in-progress";
    if (activeFilter === "Completed") return course.status === "completed";
    if (activeFilter === "Not Started") return course.status === "not-started";
    return true;
  });

  const stats = {
    total: courses.length,
    inProgress: courses.filter((c) => c.status === "in-progress").length,
    completed: courses.filter((c) => c.status === "completed").length,
    notStarted: courses.filter((c) => c.status === "not-started").length,
  };

  const getThumbnailIcon = (thumbnail: string) => {
    switch (thumbnail) {
      case "web":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "design":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
      case "data":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
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
        );
      case "js":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4-4 4M7 8l-4 4 4 4M14 4l-4 16"
            />
          </svg>
        );
      case "cloud":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        );
      case "mobile":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
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
        );
      case "ml":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
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
        );
      case "devops":
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
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
        );
      default:
        return (
          <svg
            className="w-8 h-8 text-neutral-400"
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
    }
  };

  return (
    <>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {stats.total}
          </p>
          <p className="text-sm text-neutral-500">Total Courses</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {stats.inProgress}
          </p>
          <p className="text-sm text-neutral-500">In Progress</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {stats.completed}
          </p>
          <p className="text-sm text-neutral-500">Completed</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {stats.notStarted}
          </p>
          <p className="text-sm text-neutral-500">Not Started</p>
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "grid"
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
            }`}
          >
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
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "list"
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
            }`}
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Course Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/learn/${course.id}`}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="aspect-video bg-neutral-100 flex items-center justify-center relative">
                {getThumbnailIcon(course.thumbnail)}
                {course.status === "completed" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-lg">
                    Completed
                  </div>
                )}
                {course.status === "in-progress" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-neutral-900 text-white text-xs font-medium rounded-lg">
                    {course.progress}%
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  {course.instructor}
                </p>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span>{course.duration}</span>
                  <span>{course.totalLessons} lessons</span>
                </div>
                {course.status !== "completed" && (
                  <div className="w-full h-1.5 bg-neutral-200 rounded-full">
                    <div
                      className="h-full bg-neutral-900 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                )}
                {course.nextLesson && (
                  <p className="text-xs text-neutral-500 mt-3 truncate">
                    Next: {course.nextLesson}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/learn/${course.id}`}
              className="group flex items-center gap-4 bg-white rounded-xl p-4 border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all"
            >
              <div className="w-20 h-20 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                {getThumbnailIcon(course.thumbnail)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {course.instructor}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-medium shrink-0 ${
                      course.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : course.status === "in-progress"
                          ? "bg-neutral-100 text-neutral-700"
                          : "bg-neutral-50 text-neutral-500"
                    }`}
                  >
                    {course.status === "completed"
                      ? "Completed"
                      : course.status === "in-progress"
                        ? `${course.progress}% Complete`
                        : "Not Started"}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-neutral-400">
                  <span>{course.duration}</span>
                  <span>
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                  <span>Last accessed: {course.lastAccessed}</span>
                </div>
                {course.status !== "completed" && (
                  <div className="w-full h-1.5 bg-neutral-200 rounded-full mt-3">
                    <div
                      className="h-full bg-neutral-900 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                )}
              </div>
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors shrink-0">
                <svg
                  className="w-5 h-5 text-neutral-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </Link>
          ))}
        </div>
      )}

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-neutral-400"
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
          <h3 className="text-lg font-medium text-neutral-900 mb-2">
            No courses found
          </h3>
          <p className="text-neutral-500 mb-4">
            Try adjusting your filters or browse our catalog
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      )}
    </>
  );
}
