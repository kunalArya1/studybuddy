const STATS = [
  { value: "500+", label: "Courses" },
  { value: "50K+", label: "Students" },
  { value: "95%", label: "Success Rate" },
  { value: "4.9", label: "Avg Rating" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-neutral-200 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-medium text-neutral-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
