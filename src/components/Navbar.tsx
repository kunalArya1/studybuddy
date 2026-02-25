import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-neutral-900 tracking-tight">
              study<span className="text-neutral-400">buddy</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/courses"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/paths"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Paths
            </Link>
            <Link
              href="/about"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
