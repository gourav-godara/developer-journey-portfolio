import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import CertificatesPreview from "@/components/CertificatesPreview";
import Academics from "@/components/Academics";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <CertificatesPreview />
      <Academics />
      <ContactCTA />
      <Footer />
    </main>
  );
}
