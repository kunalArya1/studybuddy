export default function Testimonial() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-medium text-neutral-900 leading-snug mb-8 tracking-tight">
            "StudyBuddy transformed my career. The practical approach and expert
            guidance helped me land my dream job in just 6 months."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
            <div className="text-left">
              <p className="text-sm font-medium text-neutral-900">Sarah Chen</p>
              <p className="text-sm text-neutral-500">
                Software Engineer at Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
