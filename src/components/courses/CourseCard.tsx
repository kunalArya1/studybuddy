import Link from "next/link";

export default function CourseCard({
  course,
  showPrice = false,
}: {
  course: any;
  showPrice?: boolean;
}) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        {course.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
            {course.category}
          </span>
          <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
            {course.level}
          </span>
        </div>
        <h3 className="text-lg font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            {course.lessons} lessons
          </span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-white">
                {course.instructor
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </span>
            </div>
            <span className="text-sm text-neutral-600">
              {course.instructor}
            </span>
          </div>
          {showPrice ? (
            <div className="text-lg font-medium text-neutral-900">
              ${course.price}
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-medium text-neutral-900">
                {course.rating}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
