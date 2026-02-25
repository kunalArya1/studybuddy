import Link from "next/link";

const PATHS = [
  {
    title: "Frontend Developer",
    courses: 8,
    duration: "6 months",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Data Scientist",
    courses: 10,
    duration: "8 months",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "UX Designer",
    courses: 6,
    duration: "4 months",
    color: "from-amber-500 to-orange-500",
  },
];

export default function CourseLearningPaths() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
            Structured Learning
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight mb-4">
            Learning Paths
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Follow curated paths designed by industry experts to master specific
            skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATHS.map((path, index) => (
            <Link
              key={index}
              href={`/paths/${path.title.toLowerCase().replace(" ", "-")}`}
              className="group bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center mb-4`}
              >
                <svg
                  className="w-7 h-7 text-white"
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
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                {path.title}
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                Become a professional {path.title.toLowerCase()} with hands-on
                projects
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span>{path.courses} courses</span>
                <span>•</span>
                <span>{path.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
