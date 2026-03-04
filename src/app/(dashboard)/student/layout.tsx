"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import StudentSidebar from "@/components/dashboard/StudentSidebar";
import StudentHeader from "@/components/dashboard/StudentHeader";

const pageConfig: Record<string, { title: string; subtitle: string }> = {
  "/dashboard/student": {
    title: "Welcome back, Alex! 👋",
    subtitle: "Continue your learning journey",
  },
  "/dashboard/student/courses": {
    title: "My Courses",
    subtitle: "Track your learning progress",
  },
  "/dashboard/student/paths": {
    title: "Learning Paths",
    subtitle: "Structured courses to achieve your career goals",
  },
  "/dashboard/student/certificates": {
    title: "Certificates",
    subtitle: "Your earned credentials and achievements",
  },
  "/dashboard/student/achievements": {
    title: "Achievements",
    subtitle: "Track your learning milestones and unlock rewards",
  },
  "/dashboard/student/bookmarks": {
    title: "Bookmarks",
    subtitle: "Your saved courses, lessons, and resources",
  },
  "/dashboard/student/settings": {
    title: "Settings",
    subtitle: "Manage your account preferences",
  },
};

const getActivePage = (pathname: string): string => {
  if (pathname === "/dashboard/student") return "Dashboard";
  if (pathname.includes("/courses")) return "My Courses";
  if (pathname.includes("/paths")) return "Learning Paths";
  if (pathname.includes("/certificates")) return "Certificates";
  if (pathname.includes("/achievements")) return "Achievements";
  if (pathname.includes("/bookmarks")) return "Bookmarks";
  if (pathname.includes("/settings")) return "Settings";
  return "Dashboard";
};

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const activePage = getActivePage(pathname);
  const config = pageConfig[pathname] || pageConfig["/dashboard/student"];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <StudentSidebar
        activePage={activePage}
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main
        className={`transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}
      >
        <StudentHeader title={config.title} subtitle={config.subtitle} />
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
