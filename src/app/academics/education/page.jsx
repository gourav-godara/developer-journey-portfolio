"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const credentials = [
  {
    period: "2025 — Present",
    active: true,
    title: "B.Tech CSE",
    institution: "SVNIT Surat",
    description:
      "Pursuing Computer Science & Engineering with focus on Data Structures & Algorithms, Web Development, Open Source and Competitive Programming.",
    bullets: null,
    stat: "7.77",
    statLabel: "CGPA",
  },
  {
    period: "2024 — 2025",
    active: false,
    title: "JEE Prep Year",
    institution: "Dedicated Competitive Exam Preparation",
    description: null,
    bullets: [
      "Secured admission to SVNIT Surat CSE",
      "JEE Advanced Qualified",
      "JEE Mains — 99.14 %ile",
    ],
    stat: "99.14",
    statLabel: "%ile",
  },
  {
    period: "2022 — 2024",
    active: false,
    title: "Senior Secondary",
    institution: "Oxford International School",
    description: null,
    bullets: ["RBSE Board"],
    stat: "79.6%",
    statLabel: "Score",
  },
  {
    period: "2020 — 2022",
    active: false,
    title: "Secondary Education",
    institution: "Eklavya International Academy",
    description: null,
    bullets: ["CBSE Board", "100% in Mathematics in boards"],
    stat: "91%",
    statLabel: "Score",
  },
];

const nodes = [
  { year: "2020", label: "Secondary", left: "0%" },
  { year: "2022", label: "Senior Sec.", left: "28%" },
  { year: "2024", label: "JEE Prep", left: "57%" },
  { year: "2025", label: "B.Tech", left: "85%" },
];

export default function Education() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

        {/* ── Hero ── */}
        <motion.div
          className="mb-16 sm:mb-24"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="uppercase tracking-[0.35em] text-amber-400 font-semibold text-xs sm:text-sm mb-4 sm:mb-5"
          >
            Academic Journey
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none"
            >
              Edu
              <motion.span
                className="text-amber-400 inline-block"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(245,166,35,0)",
                    "0 0 26px rgba(245,166,35,0.5)",
                    "0 0 0px rgba(245,166,35,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                cation
              </motion.span>
            </motion.h1>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex gap-6 pb-2"
            >
              <div className="text-left md:text-right">
                <p className="text-3xl sm:text-4xl font-black text-white">7.77</p>
                <p className="text-[10px] sm:text-xs text-[#6B7280] uppercase tracking-widest mt-1">Current CGPA</p>
              </div>
              <div className="w-px bg-[#2A2A2A]"></div>
              <div className="text-left md:text-right">
                <p className="text-3xl sm:text-4xl font-black text-white">99.14</p>
                <p className="text-[10px] sm:text-xs text-[#6B7280] uppercase tracking-widest mt-1">JEE %ile</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-base sm:text-lg text-[#6B7280] max-w-2xl leading-relaxed mt-6 sm:mt-8"
          >
            My journey from school education to Computer Science Engineering at
            SVNIT Surat, including the dedicated year spent preparing for JEE.
          </motion.p>
        </motion.div>

        {/* ── Horizontal Year Ruler ── */}
        <motion.div
          className="relative mb-16 sm:mb-20 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[48px] sm:text-[72px] md:text-[100px] mb-15 font-black text-white/[0.025] leading-none tracking-tight whitespace-nowrap">
              2020 — 2025
            </span>
          </div>

          <div className="relative flex items-center gap-0 py-8">
            {/* Base line */}
            <div className="absolute left-0 right-0 top-[10px] h-px bg-[#2A2A2A]"></div>

            {/* Animated amber progress line */}
            <motion.div
              className="absolute left-0 top-[10px] h-px bg-gradient-to-r from-amber-500/80 to-amber-500/20"
              initial={{ width: 0 }}
              animate={{ width: "86%" }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeOut",
              }}
            ></motion.div>

            {nodes.map((node, i) => (
              <motion.div
                key={node.year}
                className="absolute flex flex-col items-center"
                style={{ left: node.left, transform: "translateX(-50%)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.15 }}
              >
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,166,35,0.6)] z-10 relative"></div>
                <p className="text-[10px] sm:text-xs font-bold text-amber-400 mt-2">{node.year}</p>
                <p className="text-[9px] sm:text-[10px] text-[#6B7280] mt-0.5 whitespace-nowrap">{node.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Credential Blocks ── */}
        <div className="space-y-4 sm:space-y-5">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.title}
              className="group grid md:grid-cols-[1fr_auto] gap-4 sm:gap-6 bg-[#161616] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10
                         hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.05)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">

                {/* Year badge */}
                <div className="shrink-0">
                  <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-widest uppercase border
                    ${cred.active
                      ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                      : "bg-[#1C1C1C] border-[#2A2A2A] text-[#9CA3AF]"
                    }`}
                  >
                    {cred.period}
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1.5 sm:mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {cred.title}
                  </h2>
                  <p className="text-[#9CA3AF] text-base sm:text-lg mb-3 sm:mb-4">{cred.institution}</p>

                  {cred.description && (
                    <p className="text-[#6B7280] leading-relaxed max-w-2xl text-sm sm:text-base">
                      {cred.description}
                    </p>
                  )}

                  {cred.bullets && (
                    <ul className="space-y-1.5 text-[#6B7280] text-sm sm:text-base">
                      {cred.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Stat chip */}
              <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-1 mt-2 md:mt-0">
                <p className="text-4xl sm:text-5xl font-black text-white">{cred.stat}</p>
                <p className="text-[10px] sm:text-xs text-[#6B7280] uppercase tracking-widest">{cred.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
