"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    color: "amber",
    skills: [
      { name: "HTML & CSS", level: 85, note: "Strong foundation" },
      { name: "C++", level: 80, note: "Main DSA language" },
      { name: "JavaScript", level: 72, note: "Web & logic" },
      { name: "C", level: 65, note: "College + systems" },
      { name: "Python", level: 55, note: "Sem 2 learned" },
    ],
  },
  {
    category: "Frameworks",
    color: "purple",
    skills: [
      { name: "Tailwind CSS", level: 85, note: "Daily use" },
      { name: "React", level: 75, note: "Component-driven UI" },
      { name: "Next.js", level: 72, note: "App Router + SSR" },
      { name: "Framer Motion", level: 65, note: "Animations" },
      { name: "Node.js", level: 55, note: "Backend basics" },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "emerald",
    skills: [
      { name: "VS Code", level: 90, note: "Primary editor" },
      { name: "Git & GitHub", level: 78, note: "Version control" },
      { name: "npm", level: 75, note: "Package management" },
      { name: "Linux Terminal", level: 60, note: "Ubuntu on MacBook" },
      { name: "MongoDB", level: 40, note: "Basic knowledge" },
    ],
  },
];

const colorMap = {
  amber: {
    bar: "bg-amber-400",
    glow: "shadow-[0_0_10px_rgba(251,191,36,0.35)]",
    tag: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    dot: "bg-amber-400",
  },
  purple: {
    bar: "bg-purple-400",
    glow: "shadow-[0_0_10px_rgba(192,132,252,0.35)]",
    tag: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    dot: "bg-purple-400",
  },
  emerald: {
    bar: "bg-emerald-400",
    glow: "shadow-[0_0_10px_rgba(52,211,153,0.35)]",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    dot: "bg-emerald-400",
  },
};

function SkillBar({ name, level, note, color, index }) {
  const c = colorMap[color];
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
          <span className="text-white font-semibold text-sm">{name}</span>
          <span className="text-zinc-600 text-xs hidden sm:block">{note}</span>
        </div>
        <span className="text-zinc-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${c.bar} ${c.glow}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: index * 0.07 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 sm:py-32">

      {/* Divider */}
      <div className="relative mb-16 sm:mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-amber-500/60" />
      </div>

      {/* Header */}
      <motion.div
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="uppercase tracking-[0.35em] text-amber-400 font-semibold text-xs sm:text-sm mb-4">
          Technical Arsenal
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tight">
            Skills &{" "}
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
              Stack
            </motion.span>
          </h2>

          {/* LeetCode CTA pill */}
          <motion.a
            href="https://leetcode.com/u/GouravXCode/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1A1A1A] border border-amber-500/20 text-amber-400 text-sm font-semibold hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            150+ problems on LeetCode
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <motion.p
          className="mt-5 text-[#6B7280] text-base sm:text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A snapshot of everything I've learned, built with, and actively use —
          from DSA to full-stack web development.
        </motion.p>
      </motion.div>

      {/* 3 skill cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {skillGroups.map((group, gi) => {
          const c = colorMap[group.color];
          return (
            <motion.div
              key={group.category}
              className="bg-[#161616] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest border ${c.tag}`}>
                  {group.category}
                </span>
                <span className="text-zinc-600 text-xs font-mono">{group.skills.length} skills</span>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} color={group.color} index={si} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Currently learning strip */}
      <motion.div
        className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <p className="text-zinc-400 text-sm">
            <span className="text-white font-semibold">Currently learning: </span>
            Advanced DSA · Next.js · Full Stack Development
          </p>
        </div>
        <span className="text-zinc-600 text-xs uppercase tracking-widest shrink-0">
          Always growing →
        </span>
      </motion.div>

    </section>
  );
}
