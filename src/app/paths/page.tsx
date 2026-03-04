"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PathsHero from "@/components/paths/PathsHero";
import PathsStats from "@/components/paths/PathsStats";
import PathFilters from "@/components/paths/PathFilters";
import PathCard from "@/components/paths/PathCard";
import WhyPaths from "@/components/paths/WhyPaths";
import PathSuccessStories from "@/components/paths/PathSuccessStories";
import PathsCTA from "@/components/paths/PathsCTA";

// Keep your data in the page file or move to a separate constant file
const categories = ["All", "Development", "Design", "Data", "Business"];
const learningPaths = [
  {
    id: "frontend-developer",

    title: "Frontend Developer",

    description:
      "Master modern frontend technologies and build beautiful, responsive web applications.",

    category: "Development",

    courses: 8,

    duration: "6 months",

    students: 12500,

    rating: 4.9,

    level: "Beginner to Advanced",

    color: "from-blue-500 to-cyan-500",

    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Testing"],
  },

  {
    id: "backend-developer",

    title: "Backend Developer",

    description:
      "Learn server-side programming, databases, and API development from scratch.",

    category: "Development",

    courses: 10,

    duration: "8 months",

    students: 9800,

    rating: 4.8,

    level: "Beginner to Advanced",

    color: "from-green-500 to-emerald-500",

    skills: ["Node.js", "Python", "Databases", "APIs", "Security"],
  },

  {
    id: "full-stack-developer",

    title: "Full-Stack Developer",

    description:
      "Become a complete developer with frontend, backend, and deployment skills.",

    category: "Development",

    courses: 14,

    duration: "12 months",

    students: 15200,

    rating: 4.9,

    level: "Beginner to Advanced",

    color: "from-violet-500 to-purple-500",

    skills: ["React", "Node.js", "MongoDB", "DevOps", "AWS"],
  },

  {
    id: "data-scientist",

    title: "Data Scientist",

    description:
      "Analyze data, build models, and extract insights using Python and machine learning.",

    category: "Data",

    courses: 10,

    duration: "8 months",

    students: 8400,

    rating: 4.9,

    level: "Intermediate to Advanced",

    color: "from-purple-500 to-pink-500",

    skills: [
      "Python",

      "Statistics",

      "Machine Learning",

      "SQL",

      "Visualization",
    ],
  },

  {
    id: "data-analyst",

    title: "Data Analyst",

    description:
      "Transform raw data into actionable insights using modern analytics tools.",

    category: "Data",

    courses: 6,

    duration: "4 months",

    students: 11200,

    rating: 4.8,

    level: "Beginner to Intermediate",

    color: "from-teal-500 to-cyan-500",

    skills: ["Excel", "SQL", "Tableau", "Python", "Statistics"],
  },

  {
    id: "ux-designer",

    title: "UX Designer",

    description:
      "Design user-centered digital experiences that delight and engage users.",

    category: "Design",

    courses: 6,

    duration: "4 months",

    students: 7600,

    rating: 4.8,

    level: "Beginner to Intermediate",

    color: "from-amber-500 to-orange-500",

    skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Testing"],
  },

  {
    id: "ui-designer",

    title: "UI Designer",

    description:
      "Create stunning visual interfaces and design systems that stand out.",

    category: "Design",

    courses: 5,

    duration: "3 months",

    students: 6200,

    rating: 4.7,

    level: "Beginner to Intermediate",

    color: "from-rose-500 to-pink-500",

    skills: [
      "Visual Design",

      "Figma",

      "Design Systems",

      "Typography",

      "Color Theory",
    ],
  },

  {
    id: "product-manager",

    title: "Product Manager",

    description:
      "Lead product development from ideation to launch with strategic thinking.",

    category: "Business",

    courses: 7,

    duration: "5 months",

    students: 5400,

    rating: 4.8,

    level: "Intermediate",

    color: "from-indigo-500 to-blue-500",

    skills: ["Strategy", "Roadmapping", "Analytics", "Agile", "Leadership"],
  },

  {
    id: "digital-marketer",

    title: "Digital Marketer",

    description:
      "Master digital marketing channels and drive growth for any business.",

    category: "Business",

    courses: 8,

    duration: "5 months",

    students: 9100,

    rating: 4.7,

    level: "Beginner to Intermediate",

    color: "from-red-500 to-orange-500",

    skills: ["SEO", "Social Media", "Content", "Analytics", "Paid Ads"],
  },
];

export default function LearningPathsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPaths = learningPaths.filter(
    (path) => selectedCategory === "All" || path.category === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <main>
        <PathsHero />
        <PathsStats />
        <PathFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-8">
              {selectedCategory === "All" ? "All Paths" : selectedCategory}
              <span className="ml-3 text-lg text-neutral-400">
                ({filteredPaths.length})
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPaths.map((path) => (
                <PathCard key={path.id} path={path} />
              ))}
            </div>
          </div>
        </section>

        <WhyPaths />
        <PathSuccessStories />
        <PathsCTA />
      </main>
      <Footer />
    </div>
  );
}
