import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HackathonPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            <Navbar />

            <section className="max-w-7xl mx-auto px-8 py-16">

                {/* Back Link */}
                <Link
                    href="/featured-work"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 text-sm mb-12"
                >
                    ← Back to Featured Work
                </Link>

                {/* Badges */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="px-4 py-1.5 rounded-full bg-[#F5A623]/20 text-[#F5A623] text-sm font-semibold border border-[#F5A623]/30">
                        Hackathon
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-zinc-400 text-sm border border-white/10">
                        2025
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
                        Competed ↗
                    </span>
                </div>

                {/* Hero Title */}
                <h1 className="text-7xl md:text-8xl font-black leading-none tracking-tight mb-6">
                    Hackathon
                    <br />
                    <span className="text-[#F5A623]">Project</span>
                </h1>

                <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-16">
                    A competitive hackathon build — designed, developed, and shipped
                    under time pressure. Fast iteration, real problems, real solutions.
                </p>

                {/* Preview Block */}
                <div className="w-full bg-[#111111] border border-white/5 rounded-[24px] h-72 flex flex-col items-center justify-center mb-12">
                    <p className="text-4xl font-black text-zinc-700">Preview</p>
                    <p className="text-zinc-600 text-sm mt-2">Screenshot / Demo GIF</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-6">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "Tailwind CSS"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Duration</p>
                        <div>
                            <p className="text-4xl font-black text-white">24h</p>
                            <p className="text-zinc-500 text-xs mt-1 uppercase tracking-widest">Sprint</p>
                        </div>
                    </div>

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Team Size</p>
                        <div>
                            <p className="text-4xl font-black text-white">4</p>
                            <p className="text-zinc-500 text-xs mt-1 uppercase tracking-widest">Members</p>
                        </div>
                    </div>

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Year</p>
                        <div>
                            <p className="text-4xl font-black text-white">2025</p>
                            <p className="text-zinc-500 text-xs mt-1 uppercase tracking-widest">Competed</p>
                        </div>
                    </div>

                </div>

                {/* About + Learnings */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">About</p>
                        <h3 className="text-2xl font-black text-white mb-4">
                            What is this project?
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Built during a competitive hackathon, this project tackles a real-world
                            problem under strict time constraints. The focus was on rapid prototyping,
                            clean UX, and a working demo — shipping something meaningful from zero
                            within the hackathon window.
                        </p>
                    </div>

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Learnings</p>
                        <h3 className="text-2xl font-black text-white mb-6">
                            What I built with it
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Rapid prototyping under time pressure",
                                "Team collaboration and task delegation",
                                "Full-stack feature shipping end to end",
                                "Pitching and presenting to a live jury",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Problem + Solution Row */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Problem</p>
                        <h3 className="text-2xl font-black text-white mb-4">
                            The Challenge
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Identify a real pain point and build a working solution within the
                            hackathon timeframe. The problem statement demanded both technical
                            execution and creative thinking simultaneously.
                        </p>
                    </div>

                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Solution</p>
                        <h3 className="text-2xl font-black text-white mb-4">
                            What We Shipped
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            A fully functional MVP with a clean interface, core features working
                            end-to-end, and a polished demo ready to present — all within the
                            competition deadline.
                        </p>
                    </div>

                </div>

                {/* CTA Row */}
                <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

                    <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">View Live</p>
                        <h3 className="text-2xl font-black text-white">See it in action</h3>
                        <p className="text-zinc-500 text-sm mt-1">Check out the repo or the live demo</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/gourav-godara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                        >
                            GitHub →
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 rounded-xl bg-[#F5A623] text-[#0A0A0A] font-black text-sm hover:bg-[#f0b84a] hover:shadow-[0_8px_30px_rgba(245,166,35,0.3)] hover:scale-[1.02] transition-all duration-300"
                        >
                            Live Demo →
                        </a>
                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}
