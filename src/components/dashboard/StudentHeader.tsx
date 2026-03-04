"use client";

import Link from "next/link";

interface StudentHeaderProps {
  title: string;
  subtitle?: string;
}

export default function StudentHeader({ title, subtitle }: StudentHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#fafafa]/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
          {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-xl">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-0 outline-none text-sm text-neutral-600 placeholder:text-neutral-400 w-48"
            />
          </div>
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
          <Link
            href="/dashboard/student/settings"
            className="flex items-center gap-3 pl-4 border-l border-neutral-200"
          >
            <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-sm font-medium">
              AT
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-neutral-900">
                Alex Thompson
              </p>
              <p className="text-xs text-neutral-500">Pro Member</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
