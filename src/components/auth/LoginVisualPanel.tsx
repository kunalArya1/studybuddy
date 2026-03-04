import Link from "next/link";
import FeatureCard from "./FeatureCard";

export default function LoginVisualPanel() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-gradient-to-br from-emerald-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
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
              50,000+ learners already onboard
            </div>
            <h1 className="text-4xl xl:text-5xl font-medium text-white leading-tight mb-4">
              Continue your
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 text-transparent bg-clip-text">
                learning journey
              </span>
            </h1>
            <p className="text-lg text-white/50">
              Pick up where you left off. Your courses, progress, and
              achievements are waiting.
            </p>
          </div>

          <div className="grid gap-4">
            <FeatureCard
              icon="🎯"
              title="Personalized Learning"
              desc="AI-powered recommendations"
            />
            <FeatureCard
              icon="📊"
              title="Track Progress"
              desc="Detailed analytics & insights"
            />
            <FeatureCard
              icon="🏆"
              title="Earn Certificates"
              desc="Industry-recognized credentials"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-white/30">
          <span>© 2026 StudyBuddy</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/60">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/60">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
