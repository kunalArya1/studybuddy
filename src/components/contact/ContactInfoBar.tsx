const CONTACT_METHODS = [
  {
    label: "Email",
    value: "hello@studybuddy.com",
    href: "mailto:hello@studybuddy.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    label: "Office",
    value: "San Francisco, CA",
    href: "#",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  },
];

export default function ContactInfoBar() {
  return (
    <section className="border-y border-neutral-200 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {CONTACT_METHODS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-600 group-hover:bg-neutral-200 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <div>
                <div className="text-sm text-neutral-400 mb-0.5">
                  {item.label}
                </div>
                <div className="text-neutral-900 font-medium group-hover:text-neutral-600 transition-colors">
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
