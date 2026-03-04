import Link from "next/link";

export default function CoursesCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-neutral-500 mb-6 tracking-wide uppercase">
          Start Today
        </p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium text-white leading-tight tracking-tight mb-6">
          Begin your learning
          <br />
          <span className="text-neutral-500">journey today</span>
        </h2>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10">
          Join 50,000+ students already learning with StudyBuddy. Get unlimited
          access to all courses.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-100 transition-all group"
          >
            Start Free Trial
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
            href="/#pricing"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors px-4 py-4"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
