"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data
const certificates = [
  {
    id: 1,
    title: "JavaScript Essentials",
    issueDate: "January 15, 2026",
    instructor: "Mike Thompson",
    duration: "18 hours",
    credentialId: "CERT-JS-2026-001",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async/Await"],
    thumbnail: "js",
  },
  {
    id: 2,
    title: "Introduction to Cloud Computing",
    issueDate: "December 8, 2025",
    instructor: "Rachel Kim",
    duration: "24 hours",
    credentialId: "CERT-CLOUD-2025-042",
    skills: ["AWS", "Cloud Architecture", "S3", "EC2"],
    thumbnail: "cloud",
  },
  {
    id: 3,
    title: "HTML & CSS Fundamentals",
    issueDate: "October 22, 2025",
    instructor: "Emily Chen",
    duration: "12 hours",
    credentialId: "CERT-HTML-2025-089",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    thumbnail: "html",
  },
];

const inProgressCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    progress: 68,
    estimatedCompletion: "March 2026",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    progress: 45,
    estimatedCompletion: "April 2026",
  },
  {
    id: 3,
    title: "Data Science with Python",
    progress: 23,
    estimatedCompletion: "May 2026",
  },
];

const getThumbnailIcon = (thumbnail: string) => {
  switch (thumbnail) {
    case "js":
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
            d="M17 8l4 4-4 4M7 8l-4 4 4 4M14 4l-4 16"
          />
        </svg>
      );
    case "cloud":
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
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      );
    case "html":
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
  }
};

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {certificates.length}
          </p>
          <p className="text-sm text-neutral-500">Total Certificates</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <p className="text-2xl font-semibold text-neutral-900">
            {inProgressCourses.length}
          </p>
              <p className="text-sm text-neutral-500">In Progress</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <p className="text-2xl font-semibold text-neutral-900">
                {certificates.reduce(
                  (sum, c) => sum + parseInt(c.duration),
                  0
                )}
              </p>
              <p className="text-sm text-neutral-500">Hours Certified</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <p className="text-2xl font-semibold text-neutral-900">
                {new Set(certificates.flatMap((c) => c.skills)).size}
              </p>
              <p className="text-sm text-neutral-500">Skills Verified</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Certificates List */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                Earned Certificates
              </h2>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert.id)}
                    className={`bg-white rounded-2xl border p-6 cursor-pointer transition-all ${
                      selectedCert === cert.id
                        ? "border-neutral-900 shadow-lg"
                        : "border-neutral-200 hover:border-neutral-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                        {getThumbnailIcon(cert.thumbnail)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-neutral-900">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {cert.instructor}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
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
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                            </button>
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
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                          <span>Issued: {cert.issueDate}</span>
                          <span>•</span>
                          <span>{cert.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-2 py-1 bg-neutral-100 text-neutral-400 text-xs rounded-lg">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upcoming Certificates */}
              <h2 className="text-lg font-semibold text-neutral-900 mt-8 mb-4">
                Upcoming Certificates
              </h2>
              <div className="space-y-3">
                {inProgressCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-xl border border-neutral-200 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-neutral-900">
                        {course.title}
                      </h3>
                      <span className="text-sm text-neutral-500">
                        Est. {course.estimatedCompletion}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-neutral-200 rounded-full">
                        <div
                          className="h-full bg-neutral-900 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-neutral-900">
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Preview */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                Certificate Preview
              </h2>
              {selectedCert ? (
                <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-8">
                    <div className="w-full h-full border-4 border-neutral-200 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider mb-2">
                        Certificate of Completion
                      </p>
                      <p className="text-lg font-semibold text-neutral-900 mb-2">
                        {certificates.find((c) => c.id === selectedCert)?.title}
                      </p>
                      <p className="text-sm text-neutral-500">Alex Thompson</p>
                    </div>
                  </div>
                  <div className="p-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-400 mb-2">
                      Credential ID
                    </p>
                    <p className="text-sm font-mono text-neutral-600 mb-4">
                      {
                        certificates.find((c) => c.id === selectedCert)
                          ?.credentialId
                      }
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                        Download PDF
                      </button>
                      <button className="px-4 py-2 border border-neutral-200 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-neutral-200 p-8 text-center">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-500">
                    Select a certificate to preview
                  </p>
                </div>
              )}
            </div>
          </div>
    </>
  );
}
