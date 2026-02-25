export default function AboutHero() {
  return (
    <section className="pt-40 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm text-neutral-500 mb-6 tracking-wide uppercase">
            About Us
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-neutral-900 leading-[1] tracking-tight mb-6">
            Empowering learners
            <br />
            <span className="text-neutral-400">worldwide</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            We believe everyone deserves access to world-class education. Our
            mission is to make learning accessible, engaging, and effective for
            millions of students around the globe.
          </p>
        </div>
      </div>
    </section>
  );
}
