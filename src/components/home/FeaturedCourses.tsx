import Link from "next/link";

const COURSES = [
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
];

export default function FeaturedCourses() {
  return (
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
          {COURSES.map((course, index) => (
            <Link
              key={index}
              href={`/courses/${course.title.toLowerCase().replace(" ", "-")}`}
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
  );
}
