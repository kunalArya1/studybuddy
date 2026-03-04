import CourseCard from "./CourseCard";

export default function AllCoursesGrid({
  courses,
  title,
  count,
}: {
  courses: any[];
  title: string;
  count: number;
}) {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium text-neutral-900 tracking-tight">
            {title}{" "}
            <span className="ml-3 text-lg text-neutral-400">({count})</span>
          </h2>
        </div>

        {courses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} showPrice={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-neutral-200">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">
              No courses found
            </h3>
            <p className="text-neutral-500">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
