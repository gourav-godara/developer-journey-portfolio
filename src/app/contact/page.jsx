"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
};

export default function Contact() {

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Client-side validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus("error");
            setErrorMsg("Please fill in all fields before sending.");
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                setStatus("error");
                setErrorMsg(data.error || "Something went wrong. Please try again.");
                return;
            }

            setStatus("success");
            setForm({ name: "", email: "", message: "" });

            // Reset back to idle after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);

        } catch {
            setStatus("error");
            setErrorMsg("Network error. Check your connection and try again.");
        }
    }

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
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 lg:gap-10 items-stretch">

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
                            <motion.a
                                href="mailto:gouravgodara6125@gmail.com"
                                className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 group"
                                whileHover={{
                                    scale: 1.015,
                                    borderColor: "rgba(245,166,35,0.3)",
                                    boxShadow: "0 0 24px rgba(245,166,35,0.08)",
                                }}
                                transition={{ duration: 0.25 }}
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
                                    <p className="text-white font-semibold group-hover:text-[#F5A623] transition-colors duration-300 text-xs sm:text-sm break-all">
                                        gouravgodara6125@gmail.com
                                    </p>
                                </div>
                            </motion.a>

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
                                    {
                                        Icon: FaGithub,
                                        href: "https://github.com/gourav-godara",
                                        label: "GitHub",
                                        hoverBorder: "rgba(255,255,255,0.2)",
                                        hoverBg: "rgba(255,255,255,0.06)",
                                        hoverColor: "#ffffff",
                                        glow: "0 0 20px rgba(255,255,255,0.08)",
                                    },
                                    {
                                        Icon: FaInstagram,
                                        href: "https://instagram.com/xo._.gourav",
                                        label: "Instagram",
                                        hoverBorder: "rgba(225,48,108,0.45)",
                                        hoverBg: "rgba(225,48,108,0.08)",
                                        hoverColor: "#e1306c",
                                        glow: "0 0 20px rgba(225,48,108,0.15)",
                                    },
                                    {
                                        Icon: FaLinkedinIn,
                                        href: "https://www.linkedin.com/in/gourav-godara-3172b3397",
                                        label: "LinkedIn",
                                        hoverBorder: "rgba(10,102,194,0.55)",
                                        hoverBg: "rgba(10,102,194,0.1)",
                                        hoverColor: "#0a66c2",
                                        glow: "0 0 20px rgba(10,102,194,0.18)",
                                    },
                                ].map(({ Icon, href, label, hoverBorder, hoverBg, hoverColor, glow }, i) => (
                                    <motion.a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-white/5"
                                        variants={{
                                            hidden: { opacity: 0, y: 16, scale: 0.6 },
                                            visible: { opacity: 1, y: 0, scale: 1 },
                                        }}
                                        whileHover={{
                                            y: -4,
                                            borderColor: hoverBorder,
                                            backgroundColor: hoverBg,
                                            boxShadow: glow,
                                        }}
                                        whileTap={{ scale: 0.94, y: 0 }}
                                        transition={{ duration: 0.22, ease: "easeOut" }}
                                    >
                                        <motion.span
                                            style={{ color: "#71717a", display: "flex" }}
                                            whileHover={{ color: hoverColor }}
                                            transition={{ duration: 0.22 }}
                                        >
                                            <Icon size={18} />
                                        </motion.span>
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
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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
                    <div className="flex flex-col">
                        <motion.div
                            className="bg-[#111111] border border-[#F5A623]/20 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-[0_0_60px_rgba(245,166,35,0.05)] relative overflow-hidden flex flex-col flex-1"
                            initial={{ opacity: 0, x: 40, rotate: 2 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        >

                            {/* Shimmer sweep on load */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
                                style={{ width: "50%" }}
                            />

                            {/* Amber top bar */}
                            <motion.div
                                className="w-12 h-1 rounded-full bg-[#F5A623] mb-6 sm:mb-8 relative z-10"
                                initial={{ width: 0 }}
                                animate={{ width: 48 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            />

                            <h3 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 leading-tight relative z-10">
                                Start a Conversation
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-10 flex flex-col flex-1">

                                {/* Name */}
                                <motion.input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-zinc-600 outline-none focus:border-[#F5A623]/50 transition-colors duration-300 text-sm disabled:opacity-50"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                    whileFocus={{ scale: 1.015 }}
                                />

                                {/* Email */}
                                <motion.input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-zinc-600 outline-none focus:border-[#F5A623]/50 transition-colors duration-300 text-sm disabled:opacity-50"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.0 }}
                                    whileFocus={{ scale: 1.015 }}
                                />

                                {/* Message */}
                                <motion.textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your idea..."
                                    value={form.message}
                                    onChange={handleChange}
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full flex-1 min-h-[120px] bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-zinc-600 outline-none resize-none focus:border-[#F5A623]/50 transition-colors duration-300 text-sm disabled:opacity-50"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.1 }}
                                    whileFocus={{ scale: 1.015 }}
                                />

                                {/* Error message */}
                                <AnimatePresence>
                                    {status === "error" && (
                                        <motion.div
                                            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.97 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <AlertCircle size={15} className="shrink-0" />
                                            {errorMsg}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className={`w-full py-3.5 sm:py-4 rounded-2xl font-black mt-2 flex items-center justify-center gap-3 text-sm tracking-wide transition-all duration-300 disabled:cursor-not-allowed
                                        ${status === "success"
                                            ? "bg-emerald-500 text-white"
                                            : "bg-[#F5A623] text-[#0A0A0A]"
                                        }`}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    whileHover={
                                        status === "idle"
                                            ? { scale: 1.02, boxShadow: "0 8px 30px rgba(245,166,35,0.3)" }
                                            : {}
                                    }
                                    whileTap={status === "idle" ? { scale: 0.97 } : {}}
                                >
                                    <AnimatePresence mode="wait">
                                        {status === "loading" && (
                                            <motion.span
                                                key="loading"
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <Loader2 size={16} className="animate-spin" />
                                                Sending...
                                            </motion.span>
                                        )}
                                        {status === "success" && (
                                            <motion.span
                                                key="success"
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <CheckCircle size={16} />
                                                Message Sent!
                                            </motion.span>
                                        )}
                                        {(status === "idle" || status === "error") && (
                                            <motion.span
                                                key="idle"
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                Send Message
                                                <motion.span
                                                    animate={{ x: [0, 4, 0] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    <Send size={15} />
                                                </motion.span>
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
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
