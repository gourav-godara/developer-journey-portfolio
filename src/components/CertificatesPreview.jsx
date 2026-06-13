import Link from "next/link";

export default function CertificatesPreview() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-28">

            {/* Premium Divider */}
            <div className="relative mb-20">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-amber-500/60"></div>
            </div>

            <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-white">
                    Certifi<span className="relative inline-block">cations<span className="absolute -bottom-1 left-0 w-full h-[3px] bg-amber-500 rounded-full"></span></span>
                </h2>
            </div>

            {/* Main Card */}
            <Link href="/certifications">
                <div className="group relative overflow-hidden bg-[#161616] rounded-[32px] border border-[#2A2A2A] p-10 md:p-12 cursor-pointer
                                hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-[0_0_60px_rgba(245,166,35,0.07)]
                                transition-all duration-500">

                    {/* Background glow blobs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-[0.04] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-[0.05] pointer-events-none"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-6 border border-amber-500/20">
                                Beyond The Classroom
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                                Courses &amp; Credentials
                            </h3>

                            <p className="text-lg text-[#6B7280] leading-relaxed max-w-xl">
                                A collection of certifications, technical courses,
                                and learning milestones that reflect my commitment
                                to continuous growth in software development,
                                computer science, and emerging technologies.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col items-start md:items-end justify-center">
                            <div className="text-right">
                                <h4 className="text-6xl md:text-7xl font-black text-white">
                                    <span className="text-amber-300">2</span>
                                </h4>
                                <p className="text-[#6B7280] text-lg mt-2">Certifications Earned</p>
                            </div>

                            <div className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-[#9CA3AF] group-hover:text-amber-400 transition-all duration-300">
                                View Certifications
                                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>

        </section>
    );
}
