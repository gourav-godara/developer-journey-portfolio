"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
};

// ─────────────────────────────────────────────
// ADD YOUR CERTIFICATES HERE
// Each certificate supports:
//   image: path to image in /public folder  e.g. "/certs/aws.png"
//   linkedinUrl: LinkedIn post/activity URL  e.g. "https://linkedin.com/posts/..."
//   (use one or both — if neither, a placeholder is shown)
// ─────────────────────────────────────────────
const certificates = [
    {
        id: 1,
        title: "Echelon 2026",
        issuer: "Information Security Education and Awareness(ISEA)",
        date: "Feb-2026",
        tag: "CYBERSECURITY X AI",                                                                               // category tag shown on card
        image: "/certs/Echelon-2026-certificate.jpeg",                                                           // e.g. "/certs/cert1.png"
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7420700077368889344/",                // e.g. "https://linkedin.com/posts/..."
        credentialUrl: null,                                                                                     // direct verify link if any
    },
    {
        id: 2,
        title: "Web3 & Rust Foundation",
        issuer: "Arbitrum Builders Lab & Xcan",
        date: "Mar-2026",
        tag: "WEB3 & BLOCKCHAIN",
        image: "/certs/Web3-and-blockchain-certificate.jpeg",
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7449297880932093952/",
        credentialUrl: null,
    },
    // ── paste another block above this line to add more certificates ──
];

function CertCard({ cert, index }) {
    const hasImage = !!cert.image;
    const hasLink = cert.linkedinUrl || cert.credentialUrl;

    return (
        <motion.div
            className="group bg-[#161616] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl overflow-hidden
                 hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.06)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -3 }}
        >
            {/* Image / Preview Area */}
            <div className="relative w-full h-48 sm:h-56 bg-[#111111] border-b border-[#2A2A2A] overflow-hidden">

                {hasImage ? (
                    <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    /* Placeholder when no image */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                            <Award size={24} className="text-amber-400" />
                        </div>
                        <p className="text-zinc-600 text-xs">Add image path or LinkedIn URL</p>
                    </div>
                )}

                {/* LinkedIn badge overlay */}
                {cert.linkedinUrl && !hasImage && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0A66C2]/10 border border-[#0A66C2]/20">
                        <div className="text-center">
                            <div className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center mx-auto mb-2">
                                <span className="text-white font-black text-sm">in</span>
                            </div>
                            <p className="text-xs text-zinc-400">LinkedIn Post</p>
                        </div>
                    </div>
                )}

                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#0A0A0A]/80 border border-white/10 text-zinc-400 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-sm">
                        {cert.tag}
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6">

                <h3 className="text-lg sm:text-xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                    {cert.title}
                </h3>

                <div className="flex items-center justify-between mt-1">
                    <div>
                        <p className="text-sm text-[#9CA3AF]">{cert.issuer}</p>
                        <p className="text-xs text-zinc-600 mt-0.5">{cert.date}</p>
                    </div>
                </div>

                {/* Action buttons */}
                {hasLink && (
                    <div className="flex gap-2 mt-4">
                        {cert.linkedinUrl && (
                            <a
                                href={cert.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all duration-200 text-xs font-semibold"
                            >
                                <span className="font-black">in</span>
                                LinkedIn Post
                            </a>
                        )}
                        {cert.credentialUrl && (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-all duration-200 text-xs font-semibold"
                            >
                                <ExternalLink size={12} />
                                Verify
                            </a>
                        )}
                    </div>
                )}

            </div>
        </motion.div>
    );
}

export default function Certifications() {
    return (
        <main className="min-h-screen bg-[#0F0F0F] text-white">
            <Navbar />

            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

                {/* ── Hero ── */}
                <motion.div
                    className="mb-12 sm:mb-20"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={fadeUp}
                        custom={0}
                        className="uppercase tracking-[0.35em] text-amber-400 font-semibold text-xs sm:text-sm mb-4 sm:mb-5"
                    >
                        Beyond The Classroom
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        custom={1}
                        className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none tracking-tight"
                    >
                        Certi
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
                            fications
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="mt-5 sm:mt-8 text-base sm:text-lg text-[#6B7280] max-w-2xl leading-relaxed"
                    >
                        A growing collection of certifications and learning milestones reflecting
                        my commitment to continuous growth in software development, computer
                        science, and emerging technologies.
                    </motion.p>

                    {/* Count pill */}
                    <motion.div
                        variants={fadeUp}
                        custom={3}
                        className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                        <span className="text-amber-400 text-sm font-semibold">
                            {certificates.length} Certifications Earned · Growing
                        </span>
                    </motion.div>
                </motion.div>

                {/* ── Divider ── */}
                <motion.div
                    className="relative mb-12 sm:mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-amber-500/60"></div>
                </motion.div>

                {/* ── Cert Grid ── */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {certificates.map((cert, i) => (
                        <CertCard key={cert.id} cert={cert} index={i} />
                    ))}
                </div>

                {/* ── Add More CTA (shown when < 3 certs) ── */}
                {certificates.length < 3 && (
                    <motion.div
                        className="mt-6 border-2 border-dashed border-[#2A2A2A] rounded-2xl sm:rounded-3xl p-10 flex flex-col items-center justify-center gap-3 hover:border-amber-500/30 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
                            <span className="text-zinc-500 text-2xl font-black">+</span>
                        </div>
                        <p className="text-zinc-600 text-sm text-center">
                            More certifications coming soon
                        </p>
                    </motion.div>
                )}

            </section>

            <Footer />
        </main>
    );
}
