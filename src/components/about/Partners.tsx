const COMPANIES = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"];

export default function Partners() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
            Trusted By
          </p>
          <h2 className="text-2xl font-medium text-neutral-900 tracking-tight">
            Industry-leading companies
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {COMPANIES.map((company, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <span className="text-xl font-semibold text-neutral-400">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
