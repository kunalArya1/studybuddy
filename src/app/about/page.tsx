import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import your newly created modular components
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Milestones from "@/components/about/Milestones";
import Partners from "@/components/about/Partners";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Global Navigation */}
      <Navbar />

      <main>
        {/* Introduction Section */}
        <AboutHero />

        {/* Key Metrics/Data Points */}
        <AboutStats />

        {/* The Company Narrative */}
        <Story />

        {/* Belief Systems and Culture */}
        <Values />

        {/* Leadership and Staff */}
        <Team />

        {/* Historical Progress Timeline */}
        <Milestones />

        {/* Social Proof/Affiliations */}
        <Partners />

        {/* Final Call to Action */}
        <AboutCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
