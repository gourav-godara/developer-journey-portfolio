import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturedWorkPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-20 pb-10">
        <p className="uppercase tracking-[0.35em] text-amber-400 font-semibold text-sm mb-5">
          Projects & Hackathons
        </p>
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
          Featured <span className="text-amber-400">Work</span>
        </h1>
        <p className="mt-8 text-lg text-[#6B7280] max-w-2xl leading-relaxed">
          From software projects to hackathons and competitive programming,
          each experience represents a step in my journey as an engineer.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Card 1 — Portfolio Website */}
          <Link href="/featured-work/portfolio-website">
            <div className="group bg-[#161616] p-8 rounded-3xl border border-[#2A2A2A] min-h-80 flex flex-col
                            hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_32px_rgba(139,92,246,0.08)]
                            transition-all duration-300 cursor-pointer">

              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-semibold text-sm border border-purple-500/20">
                  Project
                </div>
                <div className="size-16 rounded-xl bg-[#2A2A2A]"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                Portfolio Website
              </h3>

              <p className="text-[#6B7280] leading-relaxed mb-6">
                A modern portfolio website built to showcase my journey as a Computer Science student,
                featuring responsive design and...
              </p>

              <div className="flex flex-wrap gap-2 mb-auto">
                {["Next.js", "React", "Tailwind CSS"].map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]">{t}</span>
                ))}
              </div>

              <div className="flex justify-end pt-8">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-all duration-300 group-hover:text-amber-400">
                  Explore <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 — Empty Project */}
          <div className="group bg-[#161616] p-8 rounded-3xl border border-[#2A2A2A] min-h-80 flex flex-col
                          hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_32px_rgba(139,92,246,0.08)]
                          transition-all duration-300 cursor-pointer">

            <div className="flex justify-between items-start mb-6">
              <div className="inline-flex px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-semibold text-sm border border-purple-500/20">
                In Progress
              </div>
              <div className="size-16 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-2xl">
                ⚡
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
              Currently Building
            </h3>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              Working on new projects focused on software engineering,
              full stack development, and real world problem solving.
              More projects will be added soon.
            </p>

            <div className="flex flex-wrap gap-2 mb-auto">
              <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
              <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
            </div>

            <div className="flex justify-end pt-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280]">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Card 3 — Hackathon */}
          <Link href="/featured-work/hackathon">
            <div className="group bg-[#161616] p-8 rounded-3xl border border-[#2A2A2A] min-h-80 flex flex-col
                          hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_32px_rgba(245,166,35,0.08)]
                          transition-all duration-300 cursor-pointer">

              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-sm border border-amber-500/20">
                  Upcoming
                </div>
                <div className="size-16 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-2xl">
                  🏆
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                Hackathons & Competitions
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Preparing for hackathons, coding contests, and collaborative
                engineering challenges to build practical experience and
                strengthen problem solving skills.
              </p>

              <div className="flex flex-wrap gap-2 mb-auto">
                <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
                <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
              </div>

              <div className="flex justify-end pt-8">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280]">
                  Updates Coming Soon
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
