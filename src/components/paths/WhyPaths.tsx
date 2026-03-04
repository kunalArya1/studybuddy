const FEATURES = [
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
    title: "Structured Curriculum",
    description:
      "Follow a clear roadmap from beginner to job-ready professional. No guesswork about what to learn next.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Hands-on Projects",
    description:
      "Build real portfolio projects as you learn. Graduate with proof of your skills, not just certificates.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Career Support",
    description:
      "Get resume reviews, interview prep, and job search guidance. We're invested in your success.",
  },
];

export default function WhyPaths() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
            Why Choose Paths
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Learn smarter, not harder
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
