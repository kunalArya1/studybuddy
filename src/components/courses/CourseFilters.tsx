interface CourseFiltersProps {
  categories: string[];
  levels: string[];
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedLevel: string;
  setSelectedLevel: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function CourseFilters({
  categories,
  levels,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  searchQuery,
  setSearchQuery,
}: CourseFiltersProps) {
  return (
    <section className="border-y border-neutral-200 py-6 px-6 lg:px-8 sticky top-20 bg-[#fafafa]/95 backdrop-blur-sm z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="relative w-full lg:w-96">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-full text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-neutral-900 text-white"
                      : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2.5 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600 focus:outline-none focus:border-neutral-400 cursor-pointer"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
