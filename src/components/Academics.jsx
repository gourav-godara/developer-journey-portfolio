"use client";

import Link from "next/link";

export default function Academics() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-20">

            {/* Premium Divider */}
            <div className="relative mb-12">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-amber-500/60"></div>
            </div>

            <div className="mb-10">
                <h2 className="text-3xl md:text-5xl text-white font-extrabold leading-tight">
                    <span className="relative inline-block">
                        Academics
                        <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-amber-500 rounded-full"></span>
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1 — Education */}
                <Link href="/academics/education">
                    <div className="group bg-[#1C1C1C] p-8 rounded-3xl border border-[#2A2A2A] flex flex-col h-full
                                    hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_28px_rgba(245,166,35,0.07)]
                                    transition-all duration-300 cursor-pointer">

                        <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                            Education
                        </h3>

                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            Academic journey from school to SVNIT Surat, including coursework, achievements, and growth as a Computer Science student.
                        </p>

                        <div className="mt-auto flex justify-end">
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-all duration-300 group-hover:text-amber-400">
                                View Details
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Card 2 — Clubs & Activities */}
                <Link href="/academics/clubs-activities">
                    <div className="group bg-[#1C1C1C] p-8 rounded-3xl border border-[#2A2A2A] flex flex-col h-full
                                    hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_28px_rgba(245,166,35,0.07)]
                                    transition-all duration-300 cursor-pointer">

                        <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                            Clubs &amp; Activities
                        </h3>

                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            Hackathons, workshops, coding communities, and campus activities that contributed to my technical and personal development.
                        </p>

                        <div className="mt-auto flex justify-end">
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-all duration-300 group-hover:text-amber-400">
                                View Details
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
}
