export default function Story() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight mb-6">
              Started with a simple idea
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                StudyBuddy was born in 2019 when our founders, frustrated by the
                gap between traditional education and real-world skills, decided
                to create something different.
              </p>
              <p>
                We started with just 5 courses and a dream to democratize
                education. Today, we're proud to serve over 50,000 students
                across 120+ countries.
              </p>
              <p>
                Our approach is simple: learn by doing. Every course is designed
                around practical projects and real-world scenarios.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-neutral-100 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <p className="text-neutral-500 text-sm">Since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
