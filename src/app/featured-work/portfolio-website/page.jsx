"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export default function PortfolioWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

        {/* Back */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          custom={0}
        >
          <Link
            href="/featured-work"
            className="inline-flex items-center gap-2 text-[#6B7280] hover:text-amber-400 transition-colors duration-200 text-sm mb-10 sm:mb-14 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to Featured Work
          </Link>
        </motion.div>

        {/* ── Hero ── */}
        <div className="mb-12 sm:mb-16">

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.1}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
          >
            <span className="px-3 sm:px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold text-xs sm:text-sm">
              Project
            </span>
            <span className="px-3 sm:px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#6B7280] text-xs sm:text-sm">
              2026 — Present
            </span>
            <span className="px-3 sm:px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-medium">
              Live ↗
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.2}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-5 sm:mb-8"
          >
            Portfolio{" "}
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
              Website
            </motion.span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.3}
            className="text-base sm:text-xl text-[#6B7280] max-w-2xl leading-relaxed"
          >
            A modern portfolio website built to showcase my journey as a Computer Science student,
            featuring responsive design, smooth interactions, and a clean dark aesthetic.
          </motion.p>
        </div>

        {/* ── Project Image Placeholder ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="w-full bg-[#161616] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl mb-10 sm:mb-16 overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#2A2A2A]">
            <div className="relative w-full aspect-video bg-[#1A1A1A] overflow-hidden">
              <img
                src="/portfolio-project-screenshots/s1.jpeg"
                alt="Portfolio Screenshot 1"
                className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out"
              />
            </div>
            <div className="relative w-full aspect-video bg-[#1A1A1A] overflow-hidden">
              <img
                src="/portfolio-project-screenshots/s2.jpeg"
                alt="Portfolio Screenshot 2"
                className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Detail Grid ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16"
        >
          {/* Tech Stack */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="md:col-span-1 bg-[#161616] border border-[#2A2A2A] rounded-2xl p-5 sm:p-6"
          >
            <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Groq API"].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-xs sm:text-sm text-[#9CA3AF]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Stats */}
          <div className="md:col-span-2 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { num: "100%", label: "Responsive" },
              { num: "AI", label: "Chatbot" },
              { num: "2026", label: "Launched" },
            ].map(({ num, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={0}
                className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-4 sm:p-6 flex flex-col justify-between"
              >
                <p className="text-2xl sm:text-4xl font-black text-white">{num}</p>
                <p className="text-[10px] text-[#6B7280] uppercase tracking-widest mt-2">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── About the Project ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-10 sm:mb-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8"
          >
            <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-4">About</p>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">What is this project?</h3>
            <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
              Designed and developed a personal portfolio website from scratch to present projects,
              technical skills, certifications, and academic achievements. Implemented a custom AI assistant
              using the Groq API to provide instant information about my experience and work, complemented by
              modern animations and a premium responsive interface.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0}
            className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8"
          >
            <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-4">Learnings</p>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">What I built with it</h3>
            <ul className="space-y-3">
              {[
                "Next.js App Router & file-based routing",
                "Responsive layout with Tailwind CSS",
                "Component-driven architecture with React",
                "Dark theme design system from scratch",
                "AI chatbot using Groq API with custom system prompt",
                "Framer Motion animations and page transitions",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-[#6B7280] text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#161616] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-[0.04] pointer-events-none"></div>

          <div className="relative z-10">
            <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-2">View Live</p>
            <h3 className="text-xl sm:text-2xl font-black text-white">See it in action</h3>
            <p className="text-[#6B7280] text-sm mt-1">The site you're on right now!</p>
          </div>

          <div className="flex gap-3 sm:gap-4 relative z-10 shrink-0 w-full sm:w-auto">
            <a
              href="https://github.com/gourav-godara/developer-journey-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center px-5 sm:px-6 py-3 bg-[#1C1C1C] border border-[#2A2A2A] text-white rounded-xl font-semibold hover:border-amber-500/40 hover:text-amber-400 transition-all duration-200 text-sm"
            >
              GitHub →
            </a>
            <a
              href="/"
              className="flex-1 sm:flex-none text-center px-5 sm:px-6 py-3 bg-amber-500 text-[#0F0F0F] rounded-xl font-bold hover:bg-amber-400 transition-all duration-200 text-sm shadow-lg shadow-amber-500/20"
            >
              Live Site →
            </a>
          </div>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
