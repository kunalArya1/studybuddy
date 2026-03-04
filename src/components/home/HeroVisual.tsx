"use client";
import { useEffect, useState } from "react";

export default function HeroVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animate = mounted
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <div className="relative h-120 w-full">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-100 via-neutral-50 to-white rounded-3xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-neutral-200 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-neutral-200 to-transparent rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Main content */}
      <div className="relative h-full p-8 flex flex-col">
        {/* Top row - Stats */}
        <div className="flex gap-4 mb-6">
          <StatCard
            count="500+"
            label="Expert Courses"
            delay="duration-700"
            animate={animate}
          />
          <StatCard
            count="50K+"
            label="Active Students"
            delay="delay-100"
            animate={animate}
          />
        </div>

        {/* Center - Featured Course Card */}
        <div
          className={`flex-1 bg-white rounded-2xl border border-neutral-200/50 shadow-sm overflow-hidden transition-all duration-700 delay-200 ${animate}`}
        >
          <div className="h-full flex">
            {/* Course Preview */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                  Popular
                </span>
                <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                  Development
                </span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                React & TypeScript Masterclass
              </h3>
              <p className="text-sm text-neutral-500 mb-4 flex-1">
                Build modern web applications with industry best practices
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5">
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
                  42 hours
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  4.9
                </span>
              </div>
            </div>
            {/* Visual Side */}
            <div className="w-40 bg-neutral-900 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
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
        </div>

        {/* Bottom row - Mini cards */}
        <div className="flex gap-4 mt-6">
          <div
            className={`flex-1 bg-white/80 backdrop-blur rounded-2xl p-4 border border-neutral-200/50 shadow-sm flex items-center gap-3 transition-all duration-700 delay-300 ${animate}`}
          >
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-emerald-600"
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
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">
                Certificate
              </p>
              <p className="text-xs text-neutral-500">On completion</p>
            </div>
          </div>
          <div
            className={`flex-1 bg-white/80 backdrop-blur rounded-2xl p-4 border border-neutral-200/50 shadow-sm flex items-center gap-3 transition-all duration-700 delay-400 ${animate}`}
          >
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-amber-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">4.9 Rating</p>
              <p className="text-xs text-neutral-500">From 50K+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  count,
  label,
  delay,
  animate,
}: {
  count: string;
  label: string;
  delay: string;
  animate: string;
}) {
  return (
    <div
      className={`flex-1 bg-white/80 backdrop-blur rounded-2xl p-5 border border-neutral-200/50 shadow-sm transition-all duration-700 ${delay} ${animate}`}
    >
      <p className="text-3xl font-semibold text-neutral-900">{count}</p>
      <p className="text-sm text-neutral-500">{label}</p>
    </div>
  );
}
