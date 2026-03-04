const COMPANIES = ["Google", "Meta", "Amazon", "Microsoft", "Apple", "Netflix"];
const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Google",
    quote:
      "The structured curriculum helped me go from zero coding experience to landing my dream job in 8 months.",
  },
  {
    name: "Marcus Johnson",
    role: "Data Scientist at Meta",
    quote:
      "The hands-on projects gave me real experience that made all the difference in my interviews.",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer at Airbnb",
    quote:
      "StudyBuddy's path gave me the confidence and portfolio I needed to break into tech design.",
  },
];

export default function PathSuccessStories() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
            Where our graduates work
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-16">
          {COMPANIES.map((company, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <span className="text-xl font-semibold text-neutral-300">
                {company}
              </span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-neutral-200"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
