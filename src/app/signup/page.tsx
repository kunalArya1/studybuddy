import Link from "next/link";
import SignupVisualPanel from "@/components/auth/SignupVisualPanel";
import SignupFormComponent from "@/components/auth/SignupFormComponent";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <SignupVisualPanel />

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex flex-col bg-[#fafafa]">
        <div className="lg:hidden p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-neutral-900 tracking-tight">
              study<span className="text-neutral-400">buddy</span>
            </span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <SignupFormComponent />
        </div>

        {/* Desktop Footer */}
        <div className="hidden lg:flex items-center justify-between p-6 border-t border-neutral-200 text-sm text-neutral-400">
          <span>© 2026 StudyBuddy. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/help" className="hover:text-neutral-600">
              Help Center
            </Link>
            <Link href="/privacy" className="hover:text-neutral-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
