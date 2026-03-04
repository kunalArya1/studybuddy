export default function CoursesHero() {
  return (
    <section className="pt-40 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm text-neutral-500 mb-6 tracking-wide uppercase">
            Course Catalog
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-neutral-900 leading-[1] tracking-tight mb-6">
            Explore our
            <br />
            <span className="text-neutral-400">courses</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
            Discover expert-led courses designed to help you master new skills
            and advance your career. Learn at your own pace.
          </p>
        </div>
      </div>
    </section>
  );
}
