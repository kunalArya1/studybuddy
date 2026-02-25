import Link from "next/link";

const TEAM = [
  { name: "Alex Chen", role: "CEO & Co-founder", initials: "AC" },
  { name: "Sarah Miller", role: "CTO & Co-founder", initials: "SM" },
  { name: "David Park", role: "Head of Content", initials: "DP" },
  { name: "Emma Wilson", role: "Head of Design", initials: "EW" },
  { name: "James Liu", role: "Engineering Lead", initials: "JL" },
  { name: "Maria Garcia", role: "Marketing Director", initials: "MG" },
  { name: "Ryan Thompson", role: "Product Manager", initials: "RT" },
  { name: "Lisa Anderson", role: "Customer Success", initials: "LA" },
];

export default function Team() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
              Meet the people behind
              <br />
              <span className="text-neutral-400">StudyBuddy</span>
            </h2>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group"
          >
            Join our team
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-neutral-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden group-hover:bg-neutral-200 transition-colors">
                <div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-xl font-medium text-white">
                    {member.initials}
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-medium text-neutral-900">
                {member.name}
              </h4>
              <p className="text-sm text-neutral-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
