"use client";
import { useState } from "react";
import Link from "next/link";
import SocialLoginButtons from "./SocialLoginButtons";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

export default function SignupFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-2">
          Create your account
        </h2>
        <p className="text-neutral-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-neutral-900 font-medium hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>

      <SocialLoginButtons />

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-4 bg-[#fafafa] text-neutral-400 uppercase tracking-wider">
            or continue with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="relative">
          <label
            htmlFor="name"
            className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === "name" || formData.name ? "top-2 text-xs text-neutral-400" : "top-1/2 -translate-y-1/2 text-sm text-neutral-400"}`}
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className={`w-full px-4 pt-6 pb-2 bg-white border rounded-xl outline-none transition-all duration-200 ${focusedField === "name" ? "border-neutral-900 ring-4 ring-neutral-900/5" : "border-neutral-200 hover:border-neutral-300"}`}
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <label
            htmlFor="email"
            className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === "email" || formData.email ? "top-2 text-xs text-neutral-400" : "top-1/2 -translate-y-1/2 text-sm text-neutral-400"}`}
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className={`w-full px-4 pt-6 pb-2 bg-white border rounded-xl outline-none transition-all duration-200 ${focusedField === "email" ? "border-neutral-900 ring-4 ring-neutral-900/5" : "border-neutral-200 hover:border-neutral-300"}`}
            required
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="relative">
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === "password" || formData.password ? "top-2 text-xs text-neutral-400" : "top-1/2 -translate-y-1/2 text-sm text-neutral-400"}`}
            >
              Create password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 pt-6 pb-2 pr-12 bg-white border rounded-xl outline-none transition-all duration-200 ${focusedField === "password" ? "border-neutral-900 ring-4 ring-neutral-900/5" : "border-neutral-200 hover:border-neutral-300"}`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <PasswordStrengthMeter password={formData.password} />
        </div>

        {/* Terms Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="peer sr-only"
                required
              />
              <div className="w-5 h-5 border border-neutral-300 rounded-md bg-white peer-checked:bg-neutral-900 transition-all duration-200" />
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm text-neutral-600 leading-relaxed">
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-neutral-900 font-medium hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-neutral-900 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading || !acceptTerms}
          className="relative w-full py-4 bg-neutral-900 text-white rounded-xl font-medium hover:bg-neutral-800 transition-all disabled:opacity-50"
        >
          <span className={isLoading ? "opacity-0" : "opacity-100"}>
            Create account
          </span>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
