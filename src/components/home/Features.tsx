const FEATURES = [
  {
    title: "Expert Instructors",
    description:
      "Learn from professionals actively working in top companies around the world.",
  },
  {
    title: "Project-Based Learning",
    description:
      "Build a portfolio of real projects that demonstrate your skills to employers.",
  },
  {
    title: "Flexible Schedule",
    description:
      "Access courses 24/7 and learn at your own pace, from anywhere in the world.",
  },
  {
    title: "Career Support",
    description:
      "Get guidance on resume building, interviews, and job placement assistance.",
  },
];

export default function Features() {
  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-8 bg-neutral-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="md:sticky md:top-32">
            <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Learning designed
              <br />
              <span className="text-neutral-500">for the modern world</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We believe education should be accessible, practical, and aligned
              with industry needs.
            </p>
          </div>
          <div className="space-y-12">
            {FEATURES.map((feature, index) => (
              <div key={index} className="border-t border-neutral-800 pt-8">
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-600 font-mono shrink-0">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
