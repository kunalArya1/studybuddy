import CourseCard from "./CourseCard";

export default function FeaturedCourses({ courses }: { courses: any[] }) {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-neutral-900 tracking-tight">
            Featured Courses
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
