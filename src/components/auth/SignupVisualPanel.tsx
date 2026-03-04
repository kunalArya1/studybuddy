import Link from "next/link";

const BENEFITS = [
  { icon: "✨", text: "Free 14-day trial, no credit card required" },
  { icon: "🎓", text: "Access to all beginner courses" },
  { icon: "🤝", text: "Join our community of learners" },
  { icon: "📱", text: "Learn on any device, anytime" },
];

export default function SignupVisualPanel() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-violet-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-[600px] h-[600px] -bottom-48 -left-48 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col justify-between p-12 w-full">
        <Link href="/" className="flex items-center gap-2.5 group w-fit">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-white tracking-tight">
            study<span className="text-white/50">buddy</span>
          </span>
        </Link>

        <div className="flex-1 flex flex-col justify-center max-w-lg">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/60 mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Join 50,000+ learners today
            </div>
            <h1 className="text-4xl xl:text-5xl font-medium text-white leading-tight mb-4">
              Start your
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 text-transparent bg-clip-text">
                learning adventure
              </span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Unlock unlimited access to 500+ courses. Learn from industry
              experts and build real-world skills.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <span className="text-lg">{benefit.icon}</span>
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-white/70 mb-4 italic">
              &quot;StudyBuddy transformed my career. I went from a complete
              beginner to landing my dream job in just 6 months!&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                SK
              </div>
              <div>
                <div className="text-sm font-medium text-white">Sarah Kim</div>
                <div className="text-xs text-white/40">
                  Software Engineer at Google
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-white/30">
          <span>© 2026 StudyBuddy</span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
