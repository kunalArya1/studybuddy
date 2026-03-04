interface PathFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function PathFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: PathFiltersProps) {
  return (
    <section className="py-8 px-6 lg:px-8 sticky top-20 bg-[#fafafa]/95 backdrop-blur-sm z-40 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
