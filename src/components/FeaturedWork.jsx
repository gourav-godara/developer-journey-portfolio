import Link from "next/link";

export default function FeaturedWork() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-28">

            {/* Premium Divider */}
            <div className="relative mb-20">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-amber-500/60"></div>
            </div>

            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-5xl text-white font-extrabold leading-tight">
                    Featured{" "}
                    <span className="relative inline-block">
                        Work
                        <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-amber-500 rounded-full"></span>
                    </span>
                </h2>

                <Link href="/featured-work" className="flex items-center gap-2 text-[#6B7280] hover:text-amber-400 transition duration-300">
                    View all <span>→</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1 — Portfolio Website (linked) */}
                <Link href="/featured-work/portfolio-website">
                    <div className="group bg-[#1C1C1C] p-8 rounded-3xl border border-[#2A2A2A] min-h-80 flex flex-col
                                    hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_28px_rgba(139,92,246,0.08)]
                                    transition-all duration-300 cursor-pointer">

                        <div className="flex justify-between items-start mb-6">
                            <div className="inline-flex px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-semibold text-sm border border-purple-500/20">
                                Project
                            </div>
                            <div className="size-16 rounded-xl bg-[#2A2A2A]"></div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                            Portfolio Website
                        </h3>

                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            A modern portfolio website built to showcase my journey as a Computer Science student, featuring responsive design and...
                        </p>

                        <div className="flex flex-wrap gap-2 mb-auto">
                            <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]">Next.js</span>
                            <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]">React</span>
                            <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]">Tailwind CSS</span>
                        </div>

                        <div className="flex justify-end pt-8">
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-all duration-300 group-hover:text-amber-400">
                                Explore
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Card 2 — Empty Project */}
                <div className="group bg-[#1C1C1C] p-8 rounded-3xl border border-[#2A2A2A] min-h-80 flex flex-col
                                hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_28px_rgba(139,92,246,0.08)]
                                transition-all duration-300 cursor-pointer">

                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-semibold text-sm border border-purple-500/20">
                            Project
                        </div>
                        <div className="size-16 rounded-xl bg-[#2A2A2A]"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400"></h3>
                    <p className="text-[#6B7280] leading-relaxed mb-6"></p>

                    <div className="flex flex-wrap gap-2 mb-auto">
                        <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
                        <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
                        <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
                    </div>

                    <div className="flex justify-end pt-8">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-all duration-300 group-hover:text-amber-400">
                            Explore
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                    </div>
                </div>

                {/* Card 3 — Hackathon */}
                <div className="group bg-[#1C1C1C] p-8 rounded-3xl border border-[#2A2A2A] min-h-80 flex flex-col
                                hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_28px_rgba(245,166,35,0.08)]
                                transition-all duration-300 cursor-pointer">

                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-sm border border-amber-500/20">
                            Hackathon
                        </div>
                        <div className="size-16 rounded-xl bg-[#2A2A2A]"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400"></h3>
                    <p className="text-[#6B7280] leading-relaxed mb-6"></p>

                    <div className="flex flex-wrap gap-2 mb-auto">
                        <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
                        <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
                        <span className="px-3 py-1 bg-[#252525] border border-[#333] rounded-lg text-sm text-[#9CA3AF]"></span>
                    </div>

                    <div className="flex justify-end pt-8">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-all duration-300 group-hover:text-amber-400">
                            Explore
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
