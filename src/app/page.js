// import Playground from "@/components/Playground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white to-gray-300 text-white">
      {/* <Playground /> */}
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork/>
    </main>
  );
}
