"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skills = [
  { label: "C++", x: "81%", y: "12%", delay: "0s" },
  { label: "React", x: "88%", y: "35%", delay: "0.4s" },
  { label: "Next.js", x: "62%", y: "8%", delay: "0.8s" },
  { label: "DSA", x: "92%", y: "58%", delay: "1.2s" },
  { label: "Tailwind", x: "70%", y: "72%", delay: "0.3s" },
  { label: "Node.js", x: "84%", y: "82%", delay: "0.9s" },
  { label: "Git", x: "60%", y: "55%", delay: "1.5s" },
];

const lines = [
  { text: "const gourav = {", indent: 0, color: "#9CA3AF" },
  { text: 'role: "CSE Student",', indent: 1, color: "#F5A623" },
  { text: 'focus: "DSA + WebDev + AI",', indent: 1, color: "#F5A623" },
  { text: 'college: "SVNIT Surat",', indent: 1, color: "#F5A623" },
  { text: "passion: [", indent: 1, color: "#9CA3AF" },
  { text: '"Problem Solving",', indent: 2, color: "#86EFAC" },
  { text: '"Competitive Programming",', indent: 2, color: "#86EFAC" },
  { text: '"Building Products",', indent: 2, color: "#86EFAC" },
  { text: '"Hackathons",', indent: 2, color: "#86EFAC" },
  { text: "],", indent: 1, color: "#9CA3AF" },
  { text: "available: true,", indent: 1, color: "#7DD3FC" },
  { text: "};", indent: 0, color: "#9CA3AF" },
];

function openChatbot() {
  window.dispatchEvent(new CustomEvent("open-chatbot"));
}

export default function Hero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === "0" ? "1" : "0";
      }
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-8 py-28 mb-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — Text */}
        <div className="max-w-xl">

          {/* Pills row */}
          <div className="flex flex-wrap items-center gap-3 mb-8">

            {/* Status pill — existing */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
                Available for Internships
              </span>
            </div>

            {/* ── AI Chatbot Teaser Pill ── */}
            <motion.button
              onClick={openChatbot}
              className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 cursor-pointer overflow-hidden group"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.06, borderColor: "rgba(245,166,35,0.6)" }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Shimmer sweep on hover */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/15 to-transparent pointer-events-none"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />

              {/* Pulsing glow ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-amber-500/10 pointer-events-none"
                animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />

              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                className="relative z-10"
              >
                <Sparkles size={13} className="text-amber-400" />
              </motion.span>

              <span className="text-amber-400 text-xs font-semibold tracking-wide relative z-10">
                ✦ Ask AI about me
              </span>
            </motion.button>

          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-[#4B5563]">
            Hey, I'm{" "}
            <span className="text-white block mt-1">Gourav G.</span>
          </h1>

          <p className="mt-5 text-base md:text-lg font-medium text-[#6B7280] uppercase tracking-widest">
            CSE Student |{" "}
            <span className="text-amber-400">DSA Enthusiast</span>{" "}
            | Frontend Dev
          </p>

          <p className="mt-6 text-[#9CA3AF] text-base leading-relaxed max-w-lg">
            Building modern web experiences while mastering DSA,
            frontend development, and real-world software engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-12">
            <Link
              href="/featured-work"
              className="px-7 py-3.5 bg-amber-500 text-[#0F0F0F] font-bold rounded-full hover:bg-amber-400 hover:shadow-[0_8px_30px_rgba(245,166,35,0.25)] transition-all duration-300 text-sm text-center"
            >
              View Projects →
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-[#2A2A2A] text-white rounded-full hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 text-sm text-center"
            >
              Contact Me
            </Link>
          </div>

        </div>

        {/* RIGHT — Creative Visual */}
        <div className="relative hidden lg:flex items-center justify-center h-[480px]">

          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-3xl bg-amber-500/[0.03] blur-3xl pointer-events-none"></div>

          {/* Grid dots background */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #F5A623 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          ></div>

          {/* Code card */}
          <div className="relative w-[340px] bg-[#111111] border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 z-10">

            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
              <span className="ml-3 text-xs text-zinc-500 font-mono">gourav.js</span>
            </div>

            {/* Code lines */}
            <div className="px-5 py-5 font-mono text-sm leading-7 select-none">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="flex"
                  style={{ paddingLeft: `${line.indent * 16}px` }}
                >
                  <span className="text-zinc-600 w-6 text-xs mr-3 mt-0.5 flex-shrink-0 text-right">
                    {i + 1}
                  </span>
                  <span style={{ color: line.color }}>{line.text}</span>
                  {i === lines.length - 1 && (
                    <span
                      ref={cursorRef}
                      className="ml-1 inline-block w-2 h-5 bg-amber-400 align-middle"
                    ></span>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="px-5 py-3 bg-[#1A1A1A] border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-600 font-mono">JavaScript</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-xs text-zinc-500 font-mono">ready</span>
              </span>
            </div>

          </div>

          {/* Floating skill pills */}
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="absolute px-3 py-1.5 bg-[#1A1A1A] border border-white/8 rounded-full text-xs font-semibold text-zinc-300 shadow-lg"
              style={{
                left: skill.x,
                top: skill.y,
                transform: "translate(-50%, -50%)",
                animation: `float 4s ease-in-out infinite`,
                animationDelay: skill.delay,
              }}
            >
              {skill.label}
            </div>
          ))}

          {/* Connecting lines (decorative SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.12 }}>
            <line x1="50%" y1="50%" x2="78%" y2="12%" stroke="#F5A623" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="88%" y2="35%" stroke="#F5A623" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="92%" y2="58%" stroke="#F5A623" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="70%" y2="72%" stroke="#F5A623" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
      `}</style>

    </section>
  );
}
