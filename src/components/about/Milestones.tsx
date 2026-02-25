const MILESTONES = [
  {
    year: "2019",
    title: "Founded",
    desc: "Started with 5 courses and a vision",
  },
  {
    year: "2020",
    title: "10K Students",
    desc: "Reached our first major milestone",
  },
  { year: "2022", title: "Series A", desc: "$15M funding to scale globally" },
  {
    year: "2024",
    title: "50K Students",
    desc: "Serving learners in 120+ countries",
  },
];

export default function Milestones() {
  return (
    <section className="py-24 px-6 lg:px-8 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
            Key Milestones
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-neutral-200" />
          <div className="grid md:grid-cols-4 gap-8">
            {MILESTONES.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-neutral-900 rounded-full border-4 border-[#fafafa]" />
                <div className="md:pt-16 text-center md:text-left">
                  <div className="text-2xl font-medium text-neutral-900 mb-1">
                    {milestone.year}
                  </div>
                  <div className="text-lg font-medium text-neutral-700 mb-1">
                    {milestone.title}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {milestone.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
