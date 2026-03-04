import Link from "next/link";

export default function PathsCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-neutral-500 mb-6 tracking-wide uppercase">
          Start Your Journey
        </p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium text-neutral-900 leading-tight tracking-tight mb-6">
          Ready to transform
          <br />
          <span className="text-neutral-400">your career?</span>
        </h2>
        <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed mb-10">
          Join thousands of students who have successfully changed careers with
          our learning paths.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all group"
          >
            Get Started Free
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors px-4 py-4"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
