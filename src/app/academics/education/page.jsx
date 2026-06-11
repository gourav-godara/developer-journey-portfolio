import Navbar from "@/components/Navbar";

export default function Education() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-20">

        {/* ── Hero ── */}
        <div className="mb-24">
          <p className="uppercase tracking-[0.35em] text-amber-400 font-semibold text-sm mb-5">
            Academic Journey
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-7xl md:text-8xl font-black text-white leading-none">
              Edu<span className="text-amber-400">cation</span>
            </h1>

            {/* Inline stats row */}
            <div className="flex gap-6 pb-2">
              <div className="text-right">
                <p className="text-4xl font-black text-white">8.0</p>
                <p className="text-xs text-[#6B7280] uppercase tracking-widest mt-1">Current CGPA</p>
              </div>
              <div className="w-px bg-[#2A2A2A]"></div>
              <div className="text-right">
                <p className="text-4xl font-black text-white">99.14</p>
                <p className="text-xs text-[#6B7280] uppercase tracking-widest mt-1">JEE %ile</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mt-8">
            My journey from school education to Computer Science Engineering at
            SVNIT Surat, including the dedicated year spent preparing for JEE.
          </p>
        </div>

        {/* ── Horizontal Year Ruler ── */}
        <div className="relative mb-20 select-none">

          {/* Faded background year range */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[72px] md:text-[100px] font-black text-white/[0.025] leading-none tracking-tight whitespace-nowrap">
              2020 — 2025
            </span>
          </div>

          {/* Ruler track */}
          <div className="relative flex items-center gap-0 py-8">
            <div className="absolute left-0 right-0 h-px bg-[#2A2A2A]"></div>

            {/* Amber filled portion — from 2020 to now */}
            <div className="absolute left-0 w-[85%] h-px bg-gradient-to-r from-amber-500/80 to-amber-500/20"></div>

            {/* Year nodes */}
            {[
              { year: "2020", label: "Secondary", left: "0%" },
              { year: "2022", label: "Senior Sec.", left: "28%" },
              { year: "2024", label: "JEE Prep", left: "57%" },
              { year: "2025", label: "B.Tech", left: "85%" },
            ].map((node) => (
              <div
                key={node.year}
                className="absolute flex flex-col items-center"
                style={{ left: node.left, transform: "translateX(-50%)" }}
              >
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,166,35,0.6)] mb-2 z-10 relative"></div>
                <p className="text-xs font-bold text-amber-400 mt-2">{node.year}</p>
                <p className="text-[10px] text-[#6B7280] mt-0.5 whitespace-nowrap">{node.label}</p>
              </div>
            ))}

            {/* Present dot */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "85%", transform: "translateX(-50%)" }}
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse mt-2 absolute -top-1"></div>
            </div>
          </div>
        </div>

        {/* ── Credential Blocks ── */}
        <div className="space-y-5">

          {/* B.Tech */}
          <div className="group grid md:grid-cols-[1fr_auto] gap-6 bg-[#161616] border border-[#2A2A2A] rounded-3xl p-8 md:p-10
                          hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.05)] transition-all duration-400">
            <div className="flex flex-col md:flex-row gap-8">

              {/* Year badge */}
              <div className="shrink-0">
                <span className="inline-block px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase">
                  2025 — Present
                </span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  B.Tech CSE
                </h2>
                <p className="text-[#9CA3AF] text-lg mb-4">SVNIT Surat</p>
                <p className="text-[#6B7280] leading-relaxed max-w-2xl">
                  Pursuing Computer Science &amp; Engineering with focus on
                  Data Structures &amp; Algorithms, Web Development,
                  Open Source and Competitive Programming.
                </p>
              </div>
            </div>

            {/* Stat chip */}
            <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-1">
              <p className="text-5xl font-black text-white">8.0</p>
              <p className="text-xs text-[#6B7280] uppercase tracking-widest">CGPA</p>
            </div>
          </div>

          {/* JEE Prep */}
          <div className="group grid md:grid-cols-[1fr_auto] gap-6 bg-[#161616] border border-[#2A2A2A] rounded-3xl p-8 md:p-10
                          hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.05)] transition-all duration-400">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="shrink-0">
                <span className="inline-block px-4 py-2 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] text-[#9CA3AF] text-xs font-bold tracking-widest uppercase">
                  2024 — 2025
                </span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  JEE Prep Year
                </h2>
                <p className="text-[#9CA3AF] text-lg mb-4">Dedicated Competitive Exam Preparation</p>
                <ul className="space-y-1.5 text-[#6B7280]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                    Secured admission to SVNIT Surat CSE
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                    JEE Advanced Qualified
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                    JEE Mains — 99.14 %ile
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-1">
              <p className="text-5xl font-black text-white">99.14</p>
              <p className="text-xs text-[#6B7280] uppercase tracking-widest">%ile</p>
            </div>
          </div>

          {/* 12th */}
          <div className="group grid md:grid-cols-[1fr_auto] gap-6 bg-[#161616] border border-[#2A2A2A] rounded-3xl p-8 md:p-10
                          hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.05)] transition-all duration-400">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="shrink-0">
                <span className="inline-block px-4 py-2 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] text-[#9CA3AF] text-xs font-bold tracking-widest uppercase">
                  2022 — 2024
                </span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  Senior Secondary
                </h2>
                <p className="text-[#9CA3AF] text-lg mb-4">Oxford International School</p>
                <ul className="space-y-1.5 text-[#6B7280]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                    RBSE Board
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-1">
              <p className="text-5xl font-black text-white">79.6<span className="text-2xl text-amber-400">%</span></p>
              <p className="text-xs text-[#6B7280] uppercase tracking-widest">Score</p>
            </div>
          </div>

          {/* 10th */}
          <div className="group grid md:grid-cols-[1fr_auto] gap-6 bg-[#161616] border border-[#2A2A2A] rounded-3xl p-8 md:p-10
                          hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.05)] transition-all duration-400">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="shrink-0">
                <span className="inline-block px-4 py-2 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] text-[#9CA3AF] text-xs font-bold tracking-widest uppercase">
                  2020 — 2022
                </span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  Secondary Education
                </h2>
                <p className="text-[#9CA3AF] text-lg mb-4">Eklavya International Academy</p>
                <ul className="space-y-1.5 text-[#6B7280]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                    CBSE Board
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                    100% in Mathematics in boards
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-1">
              <p className="text-5xl font-black text-white">91<span className="text-2xl text-amber-400">%</span></p>
              <p className="text-xs text-[#6B7280] uppercase tracking-widest">Score</p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}
