const STATS = [
  { value: "9", label: "Learning Paths" },
  { value: "74+", label: "Total Courses" },
  { value: "85K+", label: "Students Enrolled" },
  { value: "92%", label: "Completion Rate" },
];

export default function PathsStats() {
  return (
    <section className="border-y border-neutral-200 py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-medium text-neutral-900 mb-1">
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
