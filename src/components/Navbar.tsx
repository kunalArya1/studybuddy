"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Paths", href: "/paths" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Change background on scroll for desktop glassy effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "unset";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          /* MOBILE: Always White bg-white
             DESKTOP (md:): Transparent (bg-transparent) at top, 
             Glassy (md:bg-[#fafafa]/80 md:backdrop-blur-sm) when scrolled
          */
          isOpen || scrolled
            ? "bg-white border-b border-neutral-200 py-4 md:bg-[#fafafa]/80 md:backdrop-blur-md"
            : "bg-white border-b border-neutral-100 py-6 md:bg-transparent md:border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group z-[110]">
              <div className="w-9 h-9 bg-neutral-900 rounded-xl flex items-center justify-center group-hover:bg-neutral-800 transition-colors shadow-sm">
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
              <span className="text-xl font-bold text-neutral-900 tracking-tight">
                study<span className="text-neutral-400 font-medium">buddy</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all hover:text-neutral-900 ${
                    pathname === link.href
                      ? "text-neutral-900"
                      : "text-neutral-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 px-4 py-2"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="text-sm font-medium bg-neutral-900 text-white px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-all shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden z-[110] p-2 -mr-2 text-neutral-900 flex flex-col items-center justify-center gap-1.5 w-10 h-10"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* --- FULL SCREEN MOBILE OVERLAY --- */}
        <div
          className={`fixed inset-0 bg-white z-[105] md:hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full pt-32 pb-10 px-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-4xl font-semibold tracking-tight transition-all duration-300 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 75}ms` }}
                >
                  <span
                    className={
                      pathname === link.href
                        ? "text-neutral-900"
                        : "text-neutral-300"
                    }
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <div
              className={`mt-auto space-y-6 transition-all duration-500 delay-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="h-px bg-neutral-100 w-full" />
              <div className="grid grid-cols-1 gap-4">
                <Link
                  href="/login"
                  className="flex items-center justify-center w-full py-4 text-lg font-medium text-neutral-600 border border-neutral-200 rounded-2xl"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center justify-center w-full py-4 text-lg font-medium bg-neutral-900 text-white rounded-2xl shadow-xl"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
