"use client";

import Link from "next/link";

// Mock data
const stats = [
  { label: "Courses Enrolled", value: "8", icon: "courses" },
  { label: "Hours Learned", value: "124", icon: "clock" },
  { label: "Certificates", value: "3", icon: "certificate" },
  { label: "Current Streak", value: "12 days", icon: "streak" },
];

const enrolledCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    instructor: "James Davis",
    progress: 68,
    lastLesson: "Building REST APIs with Express",
    totalLessons: 48,
    completedLessons: 32,
    thumbnail: "web",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Anna Martinez",
    progress: 45,
    lastLesson: "Color Theory & Psychology",
    totalLessons: 36,
    completedLessons: 16,
    thumbnail: "design",
  },
  {
    id: 3,
    title: "Data Science with Python",
    instructor: "Dr. Sarah Chen",
    progress: 23,
    lastLesson: "Introduction to Pandas",
    totalLessons: 52,
    completedLessons: 12,
    thumbnail: "data",
  },
];

const continueWatching = {
  id: "1",
  course: "Full-Stack Web Development",
  lesson: "Building REST APIs with Express",
  duration: "18:24",
  progress: 45,
};

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first lesson",
    icon: "🎯",
    earned: true,
  },
  {
    id: 2,
    title: "Week Warrior",
    description: "Learn for 7 days in a row",
    icon: "🔥",
    earned: true,
  },
  {
    id: 3,
    title: "Quick Learner",
    description: "Complete 10 lessons in one day",
    icon: "⚡",
    earned: true,
  },
  {
    id: 4,
    title: "Certified Pro",
    description: "Earn your first certificate",
    icon: "🏆",
    earned: true,
  },
  {
    id: 5,
    title: "Knowledge Seeker",
    description: "Enroll in 10 courses",
    icon: "📚",
    earned: false,
  },
  {
    id: 6,
    title: "Perfectionist",
    description: "Score 100% on 5 quizzes",
    icon: "💯",
    earned: false,
  },
];

const recommendedCourses = [
  {
    id: 1,
    title: "Node.js Microservices",
    instructor: "Mike Thompson",
    rating: 4.9,
    students: 3420,
    price: "$89",
    tag: "Based on your learning",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    instructor: "Lisa Wang",
    rating: 4.8,
    students: 2180,
    price: "$79",
    tag: "Popular in Development",
  },
  {
    id: 3,
    title: "TypeScript Deep Dive",
    instructor: "David Kim",
    rating: 4.9,
    students: 4560,
    price: "$69",
    tag: "Trending",
  },
];

const recentActivity = [
  {
    id: 1,
    action: "Completed lesson",
    details: "Introduction to REST APIs",
    course: "Full-Stack Web Development",
    time: "2 hours ago",
  },
  {
    id: 2,
    action: "Earned achievement",
    details: "Week Warrior - 7 day streak!",
    course: null,
    time: "1 day ago",
  },
  {
    id: 3,
    action: "Started course",
    details: "Data Science with Python",
    course: "Data Science with Python",
    time: "3 days ago",
  },
  {
    id: 4,
    action: "Completed quiz",
    details: "CSS Flexbox Quiz - 95%",
    course: "UI/UX Design Fundamentals",
    time: "4 days ago",
  },
];

const upcomingDeadlines = [
  {
    id: 1,
    title: "Project Submission",
    course: "Full-Stack Web Development",
    date: "Feb 25, 2026",
    daysLeft: 5,
  },
  {
    id: 2,
    title: "Final Assessment",
    course: "UI/UX Design Fundamentals",
    date: "Mar 1, 2026",
    daysLeft: 9,
  },
];

export default function StudentDashboard() {
  return (
    <>
      {/* Continue Watching Banner */}
      <div className="bg-neutral-900 rounded-2xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-neutral-800 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">
                Continue where you left off
              </p>
              <p className="text-lg font-medium text-white mb-0.5">
                {continueWatching.lesson}
              </p>
              <p className="text-sm text-neutral-400">
                {continueWatching.course}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <p className="text-xs text-neutral-400 mb-1">Progress</p>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/20 rounded-full">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${continueWatching.progress}%` }}
                  />
                </div>
                <span className="text-sm text-white">
                  {continueWatching.progress}%
                </span>
              </div>
            </div>
            <Link
              href={`/learn/${continueWatching.id}`}
              className="flex items-center gap-2 px-5 py-3 bg-white text-neutral-900 rounded-xl text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Resume
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                {stat.icon === "courses" && (
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                )}
                {stat.icon === "clock" && (
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {stat.icon === "certificate" && (
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                )}
                {stat.icon === "streak" && (
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
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className="text-2xl font-semibold text-neutral-900">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Enrolled Courses */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-neutral-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-neutral-900">
              My Courses
            </h3>
            <Link
              href="/student/courses"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <Link
                key={course.id}
                href={`/learn/${course.id}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                  {course.thumbnail === "web" && (
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
                  )}
                  {course.thumbnail === "design" && (
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
                  )}
                  {course.thumbnail === "data" && (
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
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-900 mb-0.5">
                    {course.title}
                  </p>
                  <p className="text-xs text-neutral-500 mb-2">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-neutral-200 rounded-full">
                      <div
                        className="h-full bg-neutral-900 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-neutral-500 whitespace-nowrap">
                      {course.completedLessons}/{course.totalLessons} lessons
                    </span>
                  </div>
                </div>
                <div className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Upcoming Deadlines
            </h3>
            <div className="space-y-3">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.id} className="p-3 rounded-xl bg-neutral-50">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-neutral-900">
                      {deadline.title}
                    </p>
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-medium">
                      {deadline.daysLeft} days
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">{deadline.course}</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    {deadline.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.slice(0, 3).map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-1.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-neutral-500 truncate">
                      {activity.details}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-neutral-900">
            Achievements
          </h3>
          <span className="text-sm text-neutral-500">
            {achievements.filter((a) => a.earned).length}/{achievements.length}{" "}
            earned
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl border text-center transition-all ${
                achievement.earned
                  ? "border-neutral-200 bg-white hover:shadow-md"
                  : "border-dashed border-neutral-300 bg-neutral-50 opacity-50"
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <p className="text-sm font-medium text-neutral-900 mb-0.5">
                {achievement.title}
              </p>
              <p className="text-xs text-neutral-500">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white rounded-2xl p-6 border border-neutral-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-neutral-900">
            Recommended for You
          </h3>
          <Link
            href="/courses"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Browse all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedCourses.map((course) => (
            <div
              key={course.id}
              className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">
                  {course.tag}
                </span>
                <span className="text-lg font-semibold text-neutral-900">
                  {course.price}
                </span>
              </div>
              <div className="aspect-video bg-neutral-100 rounded-lg mb-3 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-neutral-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-neutral-900 mb-1">
                {course.title}
              </p>
              <p className="text-xs text-neutral-500 mb-2">
                {course.instructor}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium text-neutral-900">
                    {course.rating}
                  </span>
                </div>
                <span className="text-xs text-neutral-400">•</span>
                <span className="text-xs text-neutral-500">
                  {course.students.toLocaleString()} students
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
