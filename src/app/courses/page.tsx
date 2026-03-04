"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/courses/CoursesHero";
import CourseFilters from "@/components/courses/CourseFilters";
import FeaturedCourses from "@/components/courses/FeaturedCourses";
import AllCoursesGrid from "@/components/courses/AllCoursesGrid";
import CourseLearningPaths from "@/components/courses/CourseLearningPaths";
import CoursesCTA from "@/components/courses/CoursesCTA";

const categories = [
  "All",
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Data Science",
  "AI & ML",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Master React, Node.js, and modern web technologies from scratch.",
    category: "Development",
    level: "Beginner",
    duration: "12 weeks",
    lessons: 48,
    students: 12500,
    rating: 4.9,
    instructor: "Alex Chen",
    price: 99,
    featured: true,
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    description:
      "Learn to design beautiful, user-centered digital experiences.",
    category: "Design",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 36,
    students: 8200,
    rating: 4.8,
    instructor: "Emma Wilson",
    price: 79,
    featured: true,
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    description: "Build intelligent applications with Python and TensorFlow.",
    category: "AI & ML",
    level: "Advanced",
    duration: "10 weeks",
    lessons: 42,
    students: 6800,
    rating: 4.9,
    instructor: "David Park",
    price: 129,
    featured: true,
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    description: "Master SEO, social media, and growth marketing techniques.",
    category: "Marketing",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 28,
    students: 9400,
    rating: 4.7,
    instructor: "Maria Garcia",
    price: 69,
    featured: false,
  },
  {
    id: 5,
    title: "Data Analytics with Python",
    description:
      "Analyze and visualize data using pandas, numpy, and matplotlib.",
    category: "Data Science",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 32,
    students: 7200,
    rating: 4.8,
    instructor: "James Liu",
    price: 89,
    featured: false,
  },
  {
    id: 6,
    title: "Product Management Essentials",
    description: "Learn to build and launch successful digital products.",
    category: "Business",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 24,
    students: 5600,
    rating: 4.7,
    instructor: "Ryan Thompson",
    price: 79,
    featured: false,
  },
  {
    id: 7,
    title: "React Native Mobile Development",
    description: "Build cross-platform mobile apps for iOS and Android.",
    category: "Development",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 40,
    students: 4800,
    rating: 4.8,
    instructor: "Sarah Miller",
    price: 109,
    featured: false,
  },
  {
    id: 8,
    title: "Brand Design & Identity",
    description: "Create memorable brand identities and visual systems.",
    category: "Design",
    level: "Advanced",
    duration: "8 weeks",
    lessons: 30,
    students: 3900,
    rating: 4.9,
    instructor: "Emma Wilson",
    price: 89,
    featured: false,
  },
  {
    id: 9,
    title: "Deep Learning with PyTorch",
    description: "Advanced neural networks and deep learning architectures.",
    category: "AI & ML",
    level: "Advanced",
    duration: "12 weeks",
    lessons: 50,
    students: 4200,
    rating: 4.9,
    instructor: "David Park",
    price: 149,
    featured: false,
  },
  {
    id: 10,
    title: "Business Strategy & Planning",
    description: "Develop strategic thinking and business planning skills.",
    category: "Business",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 22,
    students: 3400,
    rating: 4.6,
    instructor: "Lisa Anderson",
    price: 69,
    featured: false,
  },
  {
    id: 11,
    title: "SQL & Database Management",
    description: "Master SQL queries and database design principles.",
    category: "Data Science",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 26,
    students: 8900,
    rating: 4.8,
    instructor: "James Liu",
    price: 59,
    featured: false,
  },
  {
    id: 12,
    title: "Content Marketing Mastery",
    description:
      "Create compelling content that drives engagement and conversions.",
    category: "Marketing",
    level: "Intermediate",
    duration: "5 weeks",
    lessons: 20,
    students: 5100,
    rating: 4.7,
    instructor: "Maria Garcia",
    price: 59,
    featured: false,
  },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const featuredCourses = courses.filter((course) => course.featured);
  const showFeatured =
    selectedCategory === "All" &&
    selectedLevel === "All Levels" &&
    searchQuery === "";

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <main>
        <CoursesHero />
        <CourseFilters
          categories={categories}
          levels={levels}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {showFeatured && <FeaturedCourses courses={featuredCourses} />}

        <AllCoursesGrid
          courses={filteredCourses}
          title={selectedCategory === "All" ? "All Courses" : selectedCategory}
          count={filteredCourses.length}
        />

        <CourseLearningPaths />
        <CoursesCTA />
      </main>
      <Footer />
    </div>
  );
}
