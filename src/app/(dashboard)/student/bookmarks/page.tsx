"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data
const bookmarks = [
  {
    id: 1,
    type: "course",
    title: "Advanced React Patterns",
    instructor: "Lisa Wang",
    thumbnail: "react",
    savedDate: "Feb 15, 2026",
    tags: ["React", "Advanced"],
    duration: "12 hours",
    rating: 4.8,
  },
  {
    id: 2,
    type: "course",
    title: "Node.js Microservices",
    instructor: "Mike Thompson",
    thumbnail: "node",
    savedDate: "Feb 12, 2026",
    tags: ["Node.js", "Backend"],
    duration: "18 hours",
    rating: 4.9,
  },
  {
    id: 3,
    type: "lesson",
    title: "Understanding React Hooks",
    course: "Full-Stack Web Development",
    savedDate: "Feb 10, 2026",
    duration: "24 min",
    thumbnail: "lesson",
  },
  {
    id: 4,
    type: "lesson",
    title: "CSS Grid Layout Deep Dive",
    course: "UI/UX Design Fundamentals",
    savedDate: "Feb 8, 2026",
    duration: "32 min",
    thumbnail: "lesson",
  },
  {
    id: 5,
    type: "path",
    title: "DevOps Engineer",
    courses: 7,
    thumbnail: "devops",
    savedDate: "Feb 5, 2026",
    tags: ["Docker", "CI/CD", "AWS"],
    duration: "160 hours",
  },
  {
    id: 6,
    type: "course",
    title: "TypeScript Deep Dive",
    instructor: "David Kim",
    thumbnail: "ts",
    savedDate: "Feb 3, 2026",
    tags: ["TypeScript", "JavaScript"],
    duration: "14 hours",
    rating: 4.9,
  },
  {
    id: 7,
    type: "article",
    title: "10 Best Practices for Clean Code",
    author: "StudyBuddy Team",
    savedDate: "Jan 28, 2026",
    readTime: "8 min read",
    thumbnail: "article",
  },
  {
    id: 8,
    type: "lesson",
    title: "Introduction to Redux Toolkit",
    course: "Full-Stack Web Development",
    savedDate: "Jan 25, 2026",
    duration: "18 min",
    thumbnail: "lesson",
  },
];

const filterTypes = ["All", "Courses", "Lessons", "Paths", "Articles"];

const getThumbnailIcon = (thumbnail: string) => {
  switch (thumbnail) {
    case "react":
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
    case "node":
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
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      );
    case "lesson":
      return (
        <svg
          className="w-8 h-8 text-neutral-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
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
    case "ts":
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
    case "article":
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      );
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "course":
      return { label: "Course", color: "bg-blue-100 text-blue-700" };
    case "lesson":
      return { label: "Lesson", color: "bg-green-100 text-green-700" };
    case "path":
      return { label: "Path", color: "bg-purple-100 text-purple-700" };
    case "article":
      return { label: "Article", color: "bg-amber-100 text-amber-700" };
    default:
      return { label: type, color: "bg-neutral-100 text-neutral-700" };
  }
};

export default function BookmarksPage() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"recent" | "name">("recent");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredBookmarks = bookmarks
    .filter((bookmark) => {
      if (filter === "All") return true;
      return bookmark.type === filter.toLowerCase().slice(0, -1);
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }
      return (
        new Date(b.savedDate).getTime() - new Date(a.savedDate).getTime()
      );
    });

  const toggleSelect = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedItems.length === filteredBookmarks.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredBookmarks.map((b) => b.id));
    }
  };

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {bookmarks.length}
          </p>
          <p className="text-sm text-neutral-500">Total Bookmarks</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {bookmarks.filter((b) => b.type === "course").length}
          </p>
          <p className="text-sm text-neutral-500">Courses</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {bookmarks.filter((b) => b.type === "lesson").length}
              </p>
              <p className="text-sm text-neutral-500">Lessons</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <p className="text-2xl font-semibold text-neutral-900">
                {bookmarks.filter((b) => b.type === "path").length +
                  bookmarks.filter((b) => b.type === "article").length}
              </p>
              <p className="text-sm text-neutral-500">Other</p>
            </div>
          </div>

          {/* Filters and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {filterTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    filter === type
                      ? "bg-neutral-900 text-white"
                      : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "name")}
                className="px-3 py-2 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              >
                <option value="recent">Most Recent</option>
                <option value="name">Alphabetical</option>
              </select>
              {selectedItems.length > 0 && (
                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-xl text-sm font-medium hover:bg-red-200 transition-colors">
                  Remove ({selectedItems.length})
                </button>
              )}
            </div>
          </div>

          {/* Select All */}
          {filteredBookmarks.length > 0 && (
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={selectAll}
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedItems.length === filteredBookmarks.length
                      ? "bg-neutral-900 border-neutral-900"
                      : "border-neutral-300"
                  }`}
                >
                  {selectedItems.length === filteredBookmarks.length && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                Select all
              </button>
            </div>
          )}

          {/* Bookmarks List */}
          <div className="space-y-3">
            {filteredBookmarks.map((bookmark) => {
              const typeInfo = getTypeLabel(bookmark.type);
              return (
                <div
                  key={bookmark.id}
                  className={`bg-white rounded-xl border p-4 transition-all group ${
                    selectedItems.includes(bookmark.id)
                      ? "border-neutral-900 shadow-md"
                      : "border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleSelect(bookmark.id)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                        selectedItems.includes(bookmark.id)
                          ? "bg-neutral-900 border-neutral-900"
                          : "border-neutral-300 group-hover:border-neutral-400"
                      }`}
                    >
                      {selectedItems.includes(bookmark.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>

                    <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                      {getThumbnailIcon(bookmark.thumbnail)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-medium ${typeInfo.color}`}
                        >
                          {typeInfo.label}
                        </span>
                        <span className="text-xs text-neutral-400">
                          Saved {bookmark.savedDate}
                        </span>
                      </div>
                      <h3 className="font-medium text-neutral-900 mb-1 truncate">
                        {bookmark.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-neutral-500">
                        {bookmark.type === "course" && (
                          <>
                            <span>{bookmark.instructor}</span>
                            <span>•</span>
                            <span>{bookmark.duration}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-4 h-4 text-amber-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                              {bookmark.rating}
                            </span>
                          </>
                        )}
                        {bookmark.type === "lesson" && (
                          <>
                            <span>{bookmark.course}</span>
                            <span>•</span>
                            <span>{bookmark.duration}</span>
                          </>
                        )}
                        {bookmark.type === "path" && (
                          <>
                            <span>{bookmark.courses} courses</span>
                            <span>•</span>
                            <span>{bookmark.duration}</span>
                          </>
                        )}
                        {bookmark.type === "article" && (
                          <>
                            <span>{bookmark.author}</span>
                            <span>•</span>
                            <span>{bookmark.readTime}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href="#"
                        className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors"
                      >
                        {bookmark.type === "lesson" ||
                        bookmark.type === "article"
                          ? "View"
                          : "Continue"}
                      </Link>
                      <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
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
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {bookmark.tags && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-23">
                      {bookmark.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredBookmarks.length === 0 && (
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                No bookmarks found
              </h3>
              <p className="text-neutral-500 mb-4">
                Save courses and lessons to access them quickly
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
