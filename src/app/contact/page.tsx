import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoBar from "@/components/contact/ContactInfoBar";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <main>
        <ContactHero />
        <ContactInfoBar />

        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form Side */}
              <div>
                <div className="mb-10">
                  <p className="text-sm text-neutral-500 mb-3 tracking-wide uppercase">
                    Send a Message
                  </p>
                  <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
                    Fill out the form
                  </h2>
                </div>
                <ContactForm />
              </div>

              {/* Info Side */}
              <ContactSidebar />
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
