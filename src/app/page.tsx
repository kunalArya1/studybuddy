import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Features from "@/components/home/Features";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <FeaturedCourses />
        <Features />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
