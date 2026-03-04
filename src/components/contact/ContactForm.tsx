"use client";
import { useState } from "react";

const countryCodes = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedCountry = countryCodes.find((c) => c.code === countryCode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-neutral-900 mb-2">
          Message sent!
        </h3>
        <p className="text-neutral-600 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          }}
          className="text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
          placeholder="John Doe"
          className={`w-full px-4 py-4 bg-white border rounded-xl outline-none transition-all duration-200 ${
            focusedField === "name"
              ? "border-neutral-900 ring-4 ring-neutral-900/5"
              : "border-neutral-200 hover:border-neutral-300"
          }`}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          placeholder="john@example.com"
          className={`w-full px-4 py-4 bg-white border rounded-xl outline-none transition-all duration-200 ${
            focusedField === "email"
              ? "border-neutral-900 ring-4 ring-neutral-900/5"
              : "border-neutral-200 hover:border-neutral-300"
          }`}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Phone Number
        </label>
        <div className="flex gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-2 px-4 py-4 bg-white border rounded-xl transition-all duration-200 min-w-[120px] ${
                isDropdownOpen
                  ? "border-neutral-900 ring-4 ring-neutral-900/5"
                  : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <span className="text-xl">{selectedCountry?.flag}</span>
              <span className="text-sm text-neutral-700 font-medium">
                {countryCode}
              </span>
              <svg
                className={`w-4 h-4 text-neutral-400 ml-auto transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 rounded-xl shadow-2xl z-50 max-h-72 overflow-y-auto">
                  {countryCodes.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setCountryCode(country.code);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors ${countryCode === country.code ? "bg-neutral-50" : ""}`}
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span className="text-sm text-neutral-600 flex-1">
                        {country.country}
                      </span>
                      <span className="text-sm text-neutral-900 font-medium">
                        {country.code}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            placeholder="(555) 000-0000"
            className={`flex-1 px-4 py-4 bg-white border rounded-xl outline-none transition-all duration-200 ${
              focusedField === "phone"
                ? "border-neutral-900 ring-4 ring-neutral-900/5"
                : "border-neutral-200 hover:border-neutral-300"
            }`}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Your Message
        </label>
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 500))}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            rows={6}
            placeholder="Tell us how we can help you..."
            className={`w-full px-4 py-4 bg-white border rounded-xl outline-none transition-all duration-200 resize-none ${
              focusedField === "message"
                ? "border-neutral-900 ring-4 ring-neutral-900/5"
                : "border-neutral-200 hover:border-neutral-300"
            }`}
            required
          />
          <div className="absolute right-4 bottom-4 text-xs text-neutral-400">
            {message.length}/500
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all group disabled:opacity-70"
      >
        {isLoading ? "Sending..." : "Send Message"}
        {!isLoading && (
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        )}
      </button>
    </form>
  );
}
