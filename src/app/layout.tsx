import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StudyBuddy - Learn Skills That Matter",
    template: "%s | StudyBuddy",
  },
  description:
    "Master in-demand skills with expert-led courses. Build real projects and advance your career at your own pace with StudyBuddy.",
  keywords: [
    "online learning",
    "courses",
    "education",
    "web development",
    "programming",
    "design",
    "data science",
    "career",
    "skills",
  ],
  authors: [{ name: "StudyBuddy" }],
  creator: "StudyBuddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studybuddy.com",
    siteName: "StudyBuddy",
    title: "StudyBuddy - Learn Skills That Matter",
    description:
      "Master in-demand skills with expert-led courses. Build real projects and advance your career at your own pace.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StudyBuddy - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyBuddy - Learn Skills That Matter",
    description:
      "Master in-demand skills with expert-led courses. Build real projects and advance your career at your own pace.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
