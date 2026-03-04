"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data
const learningPaths = [
  {
    id: 1,
    title: "Full-Stack Developer",
    description:
      "Master front-end and back-end technologies to become a complete web developer",
    courses: 8,
    totalHours: 180,
    completedCourses: 4,
    progress: 50,
    skills: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
    enrolled: true,
    thumbnail: "fullstack",
  },
  {
    id: 2,
    title: "Data Scientist",
    description:
      "Learn data analysis, machine learning, and AI to extract insights from data",
    courses: 6,
    totalHours: 145,
    completedCourses: 1,
    progress: 16,
    skills: ["Python", "Pandas", "TensorFlow", "SQL", "Statistics"],
    enrolled: true,
    thumbnail: "data",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description:
      "Design beautiful, user-friendly interfaces and experiences",
    courses: 5,
    totalHours: 95,
    completedCourses: 2,
    progress: 40,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    enrolled: true,
    thumbnail: "design",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    description:
      "Automate deployment, manage infrastructure, and ensure reliability",
    courses: 7,
    totalHours: 160,
    completedCourses: 0,
    progress: 0,
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
    enrolled: false,
    thumbnail: "devops",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    description:
      "Build native and cross-platform mobile applications",
    courses: 6,
    totalHours: 130,
    completedCourses: 0,
    progress: 0,
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    enrolled: false,
    thumbnail: "mobile",
  },
  {
    id: 6,
    title: "Cybersecurity Specialist",
    description:
      "Protect systems and networks from cyber threats",
    courses: 8,
    totalHours: 175,
    completedCourses: 0,
    progress: 0,
    skills: ["Network Security", "Ethical Hacking", "Cryptography"],
    enrolled: false,
    thumbnail: "security",
  },
];

const getThumbnailIcon = (thumbnail: string) => {
  switch (thumbnail) {
    case "fullstack":
      return (
        <svg
          className="w-10 h-10 text-neutral-400"
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
    case "data":
      return (
        <svg
          className="w-10 h-10 text-neutral-400"
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
    case "design":
      return (
        <svg
          className="w-10 h-10 text-neutral-400"
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
    case "devops":
      return (
        <svg
          className="w-10 h-10 text-neutral-400"
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
    case "mobile":
      return (
        <svg
          className="w-10 h-10 text-neutral-400"
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
    case "security":
      return (
        <svg
          className="w-10 h-10 text-neutral-400"
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
    default:
      return (
        <svg
          className="w-10 h-10 text-neutral-400"
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
      );
  }
};

export default function LearningPathsPage() {
  const [filter, setFilter] = useState<"all" | "enrolled" | "available">("all");

  const filteredPaths = learningPaths.filter((path) => {
    if (filter === "enrolled") return path.enrolled;
    if (filter === "available") return !path.enrolled;
    return true;
  });

  const enrolledPaths = learningPaths.filter((p) => p.enrolled);
  const totalProgress =
    enrolledPaths.length > 0
      ? Math.round(
          enrolledPaths.reduce((sum, p) => sum + p.progress, 0) /
            enrolledPaths.length
        )
      : 0;

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {enrolledPaths.length}
              </p>
              <p className="text-sm text-neutral-500">Paths Enrolled</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <p className="text-2xl font-semibold text-neutral-900">
                {enrolledPaths.reduce((sum, p) => sum + p.completedCourses, 0)}
              </p>
              <p className="text-sm text-neutral-500">Courses Completed</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <p className="text-2xl font-semibold text-neutral-900">
                {totalProgress}%
              </p>
              <p className="text-sm text-neutral-500">Average Progress</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <p className="text-2xl font-semibold text-neutral-900">
                {learningPaths.length - enrolledPaths.length}
              </p>
              <p className="text-sm text-neutral-500">Available Paths</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              All Paths
            </button>
            <button
              onClick={() => setFilter("enrolled")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === "enrolled"
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              My Paths
            </button>
            <button
              onClick={() => setFilter("available")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === "available"
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              Available
            </button>
          </div>

          {/* Learning Paths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPaths.map((path) => (
              <div
                key={path.id}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                      {getThumbnailIcon(path.thumbnail)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {path.title}
                        </h3>
                        {path.enrolled && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-lg">
                            Enrolled
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-500 line-clamp-2">
                        {path.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                    <span className="flex items-center gap-1">
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      {path.courses} courses
                    </span>
                    <span className="flex items-center gap-1">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {path.totalHours} hours
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {path.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                    {path.skills.length > 4 && (
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-400 text-xs rounded-lg">
                        +{path.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  {path.enrolled && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-neutral-500">Progress</span>
                        <span className="font-medium text-neutral-900">
                          {path.completedCourses}/{path.courses} courses
                        </span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full">
                        <div
                          className="h-full bg-neutral-900 rounded-full"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/paths/${path.id}`}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      path.enrolled
                        ? "bg-neutral-900 text-white hover:bg-neutral-800"
                        : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                    }`}
                  >
                    {path.enrolled ? (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Continue Learning
                      </>
                    ) : (
                      <>
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
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        View Path
                      </>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPaths.length === 0 && (
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                No paths found
              </h3>
              <p className="text-neutral-500">
                Explore available learning paths to start your journey
              </p>
            </div>
          )}
    </>
  );
}
