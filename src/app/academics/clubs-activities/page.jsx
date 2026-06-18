import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ClubsActivities() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <section className="relative max-w-7xl mx-auto px-8 py-20 overflow-hidden">

        {/* Hero */}
        <div className="mb-24">
          <p className="uppercase tracking-[0.35em] text-amber-400 font-semibold text-sm mb-5">
            Communities & Growth
          </p>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-8">
            Clubs & <span className="text-amber-400">Activities</span>
          </h1>

          <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed">
            Technical communities, student organizations, workshops,
            hackathons and experiences that continue shaping my growth
            beyond academics.
          </p>
        </div>

        {/* ── Club Cards ── */}
        <div className="space-y-6 mb-28">

          {/* Nexus */}
          <div className="group relative bg-[#161616] border border-[#2A2A2A] rounded-3xl p-8 md:p-10 overflow-hidden
                          hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)] transition-all duration-400">

            {/* Background number watermark */}
            <div className="absolute right-6 top-4 text-[120px] md:text-[160px] font-black text-white/[0.025] select-none leading-none pointer-events-none">
              01
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">

              {/* Logo */}
              <div className="w-20 h-20 rounded-2xl bg-[#1C1C1C] border border-[#2A2A2A] overflow-hidden shrink-0 shadow-lg">
                <Image
                  src="/nexus.jpeg"
                  alt="Nexus Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      Nexus
                    </h2>
                    <p className="text-blue-400 font-medium text-sm uppercase tracking-widest">
                      Technical Club
                    </p>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 font-semibold text-xs">
                      Member
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#6B7280] text-xs font-medium">
                      2025 — Present
                    </span>
                  </div>
                </div>

                <p className="text-[#6B7280] leading-relaxed mb-7 max-w-2xl">
                  Participating in coding sessions, technical workshops, networking events
                  and collaborative learning opportunities with fellow developers.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Coding", "Workshops", "Community"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#9CA3AF] text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
          </div>

          {/* Wellness Club */}
          <div className="group relative bg-[#161616] border border-[#2A2A2A] rounded-3xl p-8 md:p-10 overflow-hidden
                          hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)] transition-all duration-400">

            <div className="absolute right-6 top-4 text-[120px] md:text-[160px] font-black text-white/[0.025] select-none leading-none pointer-events-none">
              02
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">

              {/* Logo */}
              <div className="w-20 h-20 rounded-2xl bg-[#1C1C1C] border border-[#2A2A2A] overflow-hidden shrink-0 shadow-lg">
                <Image
                  src="/wellness.jpeg"
                  alt="Wellness Club Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                      Wellness Club
                    </h2>
                    <p className="text-emerald-400 font-medium text-sm uppercase tracking-widest">
                      Community Club
                    </p>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold text-xs">
                      Member
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#6B7280] text-xs font-medium">
                      2025 — Present
                    </span>
                  </div>
                </div>

                <p className="text-[#6B7280] leading-relaxed mb-7 max-w-2xl">
                  Engaging in community initiatives, wellness programs and activities
                  focused on personal growth, teamwork and student development.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Teamwork", "Community"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#9CA3AF] text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
