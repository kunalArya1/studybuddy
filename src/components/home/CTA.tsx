import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6 lg:px-8 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight mb-8">
            Ready to start
            <br />
            your journey?
          </h2>
          <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
            Join thousands of learners already building their future with us.
            Start with a free course today.
          </p>
          <div className="flex flex-wrap gap-4">
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
              href="/contact"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-900 px-8 py-4 rounded-full text-sm font-medium hover:border-neutral-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
