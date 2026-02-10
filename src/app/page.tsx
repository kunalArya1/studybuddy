import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-neutral-900 tracking-tight">study<span className="text-neutral-400">buddy</span></span>
            </Link>
            <div className="hidden md:flex items-center gap-12">
              <Link
                href="#work"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="#about"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/login"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm text-neutral-500 mb-6 tracking-wide uppercase">
              Online Learning Platform
            </p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-medium text-neutral-900 leading-[0.95] tracking-tight mb-8">
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
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-200 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { value: "500+", label: "Courses" },
              { value: "50K+", label: "Students" },
              { value: "95%", label: "Success Rate" },
              { value: "4.9", label: "Avg Rating" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-medium text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
                Featured
              </p>
              <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight">
                Popular Courses
              </h2>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group"
            >
              View All
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
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                description: "Full-stack development with modern frameworks",
                duration: "12 weeks",
                level: "Beginner",
                number: "01",
              },
              {
                title: "Product Design",
                description: "UI/UX design principles and Figma mastery",
                duration: "8 weeks",
                level: "Intermediate",
                number: "02",
              },
              {
                title: "Data Science",
                description: "Python, ML algorithms and data visualization",
                duration: "16 weeks",
                level: "Advanced",
                number: "03",
              },
            ].map((course, index) => (
              <Link
                href={`/courses/${course.title.toLowerCase().replace(" ", "-")}`}
                key={index}
                className="group block"
              >
                <div className="aspect-[4/3] bg-neutral-100 rounded-2xl mb-6 flex items-end p-8 relative overflow-hidden group-hover:bg-neutral-200 transition-colors">
                  <span className="absolute top-6 right-6 text-sm text-neutral-400 font-mono">
                    {course.number}
                  </span>
                  <h3 className="text-2xl font-medium text-neutral-900 leading-tight">
                    {course.title}
                  </h3>
                </div>
                <p className="text-neutral-500 mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span>{course.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                  <span>{course.level}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                We believe education should be accessible, practical, and
                aligned with industry needs. Our platform is built to help you
                succeed.
              </p>
            </div>
            <div className="space-y-12">
              {[
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
              ].map((feature, index) => (
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

      {/* Testimonial */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-medium text-neutral-900 leading-snug mb-8 tracking-tight">
              "StudyBuddy transformed my career. The practical approach and
              expert guidance helped me land my dream job in just 6 months."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
              <div className="text-left">
                <p className="text-sm font-medium text-neutral-900">
                  Sarah Chen
                </p>
                <p className="text-sm text-neutral-500">
                  Software Engineer at Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-2.5 mb-4 group"
              >
                <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-neutral-900 tracking-tight">study<span className="text-neutral-400">buddy</span></span>
              </Link>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                Empowering learners worldwide with practical skills and expert
                guidance for the modern job market.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900 mb-4">
                Platform
              </h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <Link
                    href="/courses"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/instructors"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Instructors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/enterprise"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900 mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900 mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500">
              © 2026 StudyBuddy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
