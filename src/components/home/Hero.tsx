import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-neutral-500 mb-6 tracking-wide uppercase">
              Online Learning Platform
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-medium text-neutral-900 leading-[0.95] tracking-tight mb-8">
              Learn skills
              <br />
              <span className="text-neutral-400">that matter</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-12">
              Master in-demand skills with expert-led courses. Build real
              projects and advance your career at your own pace.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all group"
              >
                Start Learning
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
                href="#courses"
                className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors px-4 py-4"
              >
                Browse Courses
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
