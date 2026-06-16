"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function FeaturedWorkPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 pb-8 sm:pb-10">
        <motion.p
          className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-amber-400 font-semibold text-xs sm:text-sm mb-4 sm:mb-5"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Projects &amp; Hackathons
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.05] sm:leading-none tracking-tight text-white"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Featured{" "}
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
            Work
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-5 sm:mt-8 text-base sm:text-lg text-[#6B7280] max-w-2xl leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          From software projects to hackathons and competitive programming,
          each experience represents a step in my journey as an engineer.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">

          {/* Card 1 — Portfolio Website */}
          <Link href="/featured-work/portfolio-website">
            <motion.div
              className="group bg-[#161616] p-6 sm:p-8 rounded-3xl border border-[#2A2A2A] min-h-[19rem] sm:min-h-80 flex flex-col cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={0}
              whileHover={{
                y: -8,
                borderColor: "rgba(139,92,246,0.5)",
                boxShadow: "0 0 32px rgba(139,92,246,0.08)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <motion.div
                  className="inline-flex px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 text-purple-400 font-semibold text-xs sm:text-sm border border-purple-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  Project
                </motion.div>
                <motion.div
                  className="relative size-14 sm:size-16 rounded-xl overflow-hidden border border-[#333]"
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image
                    src="/portfolio-logo.jpeg"
                    alt="Portfolio Website"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                Portfolio Website
              </h3>

              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-5 sm:mb-6">
                A modern portfolio website built to showcase my journey as a Computer Science student,
                featuring responsive design and...
              </p>

              <div className="flex flex-wrap gap-2 mb-auto">
                {["Next.js", "React", "Tailwind CSS"].map((t, i) => (
                  <motion.span
                    key={t}
                    className="px-2.5 sm:px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-xs sm:text-sm text-[#9CA3AF]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-end pt-6 sm:pt-8">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B7280] transition-all duration-300 group-hover:text-amber-400">
                  Explore{" "}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Card 2 — In Progress */}
          <motion.div
            className="group bg-[#161616] p-6 sm:p-8 rounded-3xl border border-[#2A2A2A] min-h-[19rem] sm:min-h-80 flex flex-col cursor-pointer"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={1}
            whileHover={{
              y: -8,
              borderColor: "rgba(139,92,246,0.5)",
              boxShadow: "0 0 32px rgba(139,92,246,0.08)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-5 sm:mb-6">
              <motion.div
                className="inline-flex px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 text-purple-400 font-semibold text-xs sm:text-sm border border-purple-500/20"
                whileHover={{ scale: 1.05 }}
              >
                In Progress
              </motion.div>
              <motion.div
                className="size-14 sm:size-16 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-xl sm:text-2xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ⚡
              </motion.div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
              Currently Building
            </h3>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-5 sm:mb-6">
              Working on new projects focused on software engineering,
              full stack development, and real world problem solving.
              More projects will be added soon.
            </p>

            <div className="flex flex-wrap gap-2 mb-auto">
              <span className="px-2.5 sm:px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-xs sm:text-sm text-[#9CA3AF]"></span>
              <span className="px-2.5 sm:px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-xs sm:text-sm text-[#9CA3AF]"></span>
            </div>

            <div className="flex justify-end pt-6 sm:pt-8">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B7280]">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Card 3 — Hackathon */}
          <Link href="/featured-work/hackathon">
            <motion.div
              className="group bg-[#161616] p-6 sm:p-8 rounded-3xl border border-[#2A2A2A] min-h-[19rem] sm:min-h-80 flex flex-col cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={2}
              whileHover={{
                y: -8,
                borderColor: "rgba(245,166,35,0.5)",
                boxShadow: "0 0 32px rgba(245,166,35,0.08)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <motion.div
                  className="inline-flex px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs sm:text-sm border border-amber-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  Upcoming
                </motion.div>
                <motion.div
                  className="size-14 sm:size-16 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-xl sm:text-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  🏆
                </motion.div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                Hackathons &amp; Competitions
              </h3>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-5 sm:mb-6">
                Preparing for hackathons, coding contests, and collaborative
                engineering challenges to build practical experience and
                strengthen problem solving skills.
              </p>

              <div className="flex flex-wrap gap-2 mb-auto">
                <span className="px-2.5 sm:px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-xs sm:text-sm text-[#9CA3AF]"></span>
                <span className="px-2.5 sm:px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-xs sm:text-sm text-[#9CA3AF]"></span>
              </div>

              <div className="flex justify-end pt-6 sm:pt-8">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B7280]">
                  Updates Coming Soon
                </span>
              </div>
            </motion.div>
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
