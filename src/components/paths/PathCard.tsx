import Link from "next/link";

interface PathCardProps {
  path: any; // Using any to keep it simple, but you can define a strict interface
}

export default function PathCard({ path }: PathCardProps) {
  return (
    <Link
      href={`/paths/${path.id}`}
      className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all"
    >
      <div className="p-6 pb-4">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
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

        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
            {path.category}
          </span>
          <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
            {path.level}
          </span>
        </div>

        <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
          {path.title}
        </h3>
        <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
          {path.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {path.skills.slice(0, 3).map((skill: string, index: number) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-neutral-50 text-neutral-500 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {path.skills.length > 3 && (
            <span className="px-2.5 py-1 text-neutral-400 text-xs">
              +{path.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/50">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-neutral-500">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              {path.courses} courses
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {path.duration}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-amber-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-medium text-neutral-900">{path.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
