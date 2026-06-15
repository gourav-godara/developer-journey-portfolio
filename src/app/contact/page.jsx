"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
};

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#0A0A0A]">

            <Navbar />

            <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-32">

                {/* Header */}
                <motion.div
                    className="mb-12 sm:mb-16 md:mb-20"
                    initial="hidden"
                    animate="visible"
                >

                    <motion.p
                        className="text-[#F5A623] font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-4 sm:mb-5 text-xs sm:text-sm"
                        variants={fadeUp}
                        custom={0}
                    >
                        Contact
                    </motion.p>

                    <motion.h2
                        className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] sm:leading-none tracking-tight"
                        variants={fadeUp}
                        custom={1}
                    >
                        Let's Build
                    </motion.h2>

                    <motion.h2
                        className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.05] sm:leading-none tracking-tight"
                        variants={fadeUp}
                        custom={2}
                    >
                        <span className="text-white">Something </span>
                        <motion.span
                            className="text-[#F5A623] inline-block"
                            animate={{
                                textShadow: [
                                    "0 0 0px rgba(245,166,35,0)",
                                    "0 0 26px rgba(245,166,35,0.5)",
                                    "0 0 0px rgba(245,166,35,0)",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            Together
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed"
                        variants={fadeUp}
                        custom={3}
                    >
                        Interested in internships, hackathons, startup ideas,
                        or project collaborations? I'd love to hear from you.
                        Let's build something meaningful together.
                    </motion.p>

                </motion.div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 lg:gap-10 items-start">

                    {/* LEFT */}
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">

                        {/* Let's Talk block */}
                        <motion.div
                            className="bg-[#111111] border border-white/5 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3 sm:mb-4">
                                Let's Talk<span className="text-[#F5A623]">.</span>
                            </h3>

                            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md">
                                Every meaningful journey starts with a conversation.
                                If you have an idea, an opportunity, or simply want
                                to connect, I'd love to hear your story.
                            </p>

                            {/* Email block */}
                            <motion.div
                                className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 group"
                                whileHover={{
                                    scale: 1.015,
                                    borderColor: "rgba(245,166,35,0.3)",
                                    boxShadow: "0 0 24px rgba(245,166,35,0.08)",
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0"
                                    whileHover={{ rotate: [0, -12, 12, -12, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Mail size={18} className="text-[#F5A623]" strokeWidth={2} />
                                </motion.div>
                                <div className="min-w-0">
                                    <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mb-1">Direct Email</p>
                                    <a
                                        href="mailto:gouravgodara6125@gmail.com"
                                        className="text-white font-semibold hover:text-[#F5A623] transition-colors duration-300 text-xs sm:text-sm break-all"
                                    >
                                        gouravgodara6125@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* Social Icons */}
                            <motion.div
                                className="flex items-center gap-3 mt-6 sm:mt-8"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
                                }}
                            >
                                {[
                                    { Icon: FaGithub, href: "https://github.com/gourav-godara" },
                                    { Icon: FaInstagram, href: "https://instagram.com/xo._.gourav" },
                                    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/gourav-godara-3172b3397" },
                                ].map(({ Icon, href }, i) => (
                                    <motion.a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-white/5"
                                        variants={{
                                            hidden: { opacity: 0, y: 16, scale: 0.6 },
                                            visible: { opacity: 1, y: 0, scale: 1 },
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 8,
                                            borderColor: "rgba(245,166,35,0.5)",
                                            backgroundColor: "rgba(245,166,35,0.1)",
                                        }}
                                        whileTap={{ scale: 0.9, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        <Icon size={18} className="text-zinc-400 group-hover:text-[#F5A623] transition-colors duration-300" />
                                    </motion.a>
                                ))}
                            </motion.div>

                        </motion.div>

                        {/* Info Cards */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
                            }}
                        >

                            <motion.div
                                className="bg-[#111111] border border-white/5 rounded-2xl p-5 sm:p-6"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ y: -4, borderColor: "rgba(245,166,35,0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mb-2">Current Focus</p>
                                <p className="font-bold text-white text-xs sm:text-sm leading-relaxed">
                                    DSA · Web Development · Open Source
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-[#111111] border border-white/5 rounded-2xl p-5 sm:p-6"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ y: -4, borderColor: "rgba(245,166,35,0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mb-2">Location</p>
                                <p className="font-bold text-white text-xs sm:text-sm leading-relaxed">
                                    SVNIT Surat · Gujarat · India
                                </p>
                            </motion.div>

                        </motion.div>

                    </div>

                    {/* RIGHT — Form */}
                    <div className="lg:sticky lg:top-28">

                        <motion.div
                            className="bg-[#111111] border border-[#F5A623]/20 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-[0_0_60px_rgba(245,166,35,0.05)] relative overflow-hidden"
                            initial={{ opacity: 0, x: 40, rotate: 2 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        >

                            {/* Shimmer sweep */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
                                style={{ width: "50%" }}
                            />

                            {/* Subtle amber glow top bar */}
                            <motion.div
                                className="w-12 h-1 rounded-full bg-[#F5A623] mb-6 sm:mb-8 relative z-10"
                                initial={{ width: 0 }}
                                animate={{ width: 48 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            ></motion.div>

                            <h3 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 leading-tight relative z-10">
                                Start a Conversation
                            </h3>

                            <form className="space-y-3 sm:space-y-4 relative z-10">

                                {[
                                    { type: "text", placeholder: "Your Name" },
                                    { type: "email", placeholder: "Your Email" },
                                ].map((field, i) => (
                                    <motion.input
                                        key={field.placeholder}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-zinc-600 outline-none focus:border-[#F5A623]/50 transition-colors duration-300 text-sm"
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                                        whileFocus={{ scale: 1.015 }}
                                    />
                                ))}

                                <motion.textarea
                                    rows="5"
                                    placeholder="Tell me about your idea..."
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-zinc-600 outline-none resize-none focus:border-[#F5A623]/50 transition-colors duration-300 text-sm"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.1 }}
                                    whileFocus={{ scale: 1.015 }}
                                />

                                <motion.button
                                    type="submit"
                                    className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#F5A623] text-[#0A0A0A] font-black mt-6 sm:mt-11 flex items-center justify-center gap-3 text-sm tracking-wide"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 8px 30px rgba(245,166,35,0.3)",
                                        backgroundColor: "#f0b84a",
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Send Message
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Send size={16} />
                                    </motion.span>
                                </motion.button>

                            </form>

                        </motion.div>

                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}
