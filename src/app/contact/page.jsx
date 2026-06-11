import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#0A0A0A]">

            <Navbar />

            <section className="max-w-7xl mx-auto px-8 py-32">

                {/* Header */}
                <div className="mb-20">

                    <p className="text-[#F5A623] font-semibold tracking-[0.35em] uppercase mb-5 text-sm">
                        Contact
                    </p>

                    <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                        Let's Build
                    </h2>

                    <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                        <span className="text-white">Something </span>
                        <span className="text-[#F5A623]">Together</span>
                    </h2>

                    <p className="mt-8 text-lg text-zinc-400 max-w-xl leading-relaxed">
                        Interested in internships, hackathons, startup ideas,
                        or project collaborations? I'd love to hear from you.
                        Let's build something meaningful together.
                    </p>

                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">

                    {/* LEFT */}
                    <div className="flex flex-col gap-10">

                        {/* Let's Talk block */}
                        <div className="bg-[#111111] border border-white/5 rounded-[32px] p-10">

                            <h3 className="text-4xl font-black text-white leading-tight mb-4">
                                Let's Talk.
                            </h3>

                            <p className="text-zinc-400 leading-relaxed max-w-md">
                                Every meaningful journey starts with a conversation.
                                If you have an idea, an opportunity, or simply want
                                to connect, I'd love to hear your story.
                            </p>

                            {/* Email block */}
                            <div className="mt-8 flex items-center gap-4 bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-5 group hover:border-[#F5A623]/30 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                                    <Mail size={18} className="text-[#F5A623]" strokeWidth={2} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Direct Email</p>
                                    <a
                                        href="mailto:gouravgodara6125@gmail.com"
                                        className="text-white font-semibold hover:text-[#F5A623] transition-colors duration-300 text-sm"
                                    >
                                        gouravgodara6125@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3 mt-8">
                                <a
                                    href="https://github.com/gourav-godara"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#F5A623]/50 hover:bg-[#F5A623]/10 transition-all duration-300"
                                >
                                    <FaGithub size={18} className="text-zinc-400 group-hover:text-[#F5A623] transition-colors duration-300" />
                                </a>

                                <a
                                    href="https://instagram.com/xo._.gourav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#F5A623]/50 hover:bg-[#F5A623]/10 transition-all duration-300"
                                >
                                    <FaInstagram size={18} className="text-zinc-400 group-hover:text-[#F5A623] transition-colors duration-300" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/gourav-godara-3172b3397"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#F5A623]/50 hover:bg-[#F5A623]/10 transition-all duration-300"
                                >
                                    <FaLinkedinIn size={18} className="text-zinc-400 group-hover:text-[#F5A623] transition-colors duration-300" />
                                </a>
                            </div>

                        </div>

                        {/* Info Cards */}
                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-[#F5A623]/20 transition-all duration-300">
                                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Current Focus</p>
                                <p className="font-bold text-white text-sm leading-relaxed">
                                    DSA · Web Development · Open Source
                                </p>
                            </div>

                            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-[#F5A623]/20 transition-all duration-300">
                                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Location</p>
                                <p className="font-bold text-white text-sm leading-relaxed">
                                    SVNIT Surat · Gujarat · India
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT — Form */}
                    <div className="sticky top-28">

                        <div className="bg-[#111111] border border-[#F5A623]/20 rounded-[32px] p-8 shadow-[0_0_60px_rgba(245,166,35,0.05)]">

                            {/* Subtle amber glow top bar */}
                            <div className="w-12 h-1 rounded-full bg-[#F5A623] mb-8"></div>

                            <h3 className="text-2xl font-black text-white mb-8 leading-tight">
                                Start a Conversation
                            </h3>

                            <form className="space-y-4">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 outline-none focus:border-[#F5A623]/50 transition-all duration-300 text-sm"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 outline-none focus:border-[#F5A623]/50 transition-all duration-300 text-sm"
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your idea..."
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 outline-none resize-none focus:border-[#F5A623]/50 transition-all duration-300 text-sm"
                                />

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-[#F5A623] text-[#0A0A0A] font-black mt-11 hover:bg-[#f0b84a] hover:shadow-[0_8px_30px_rgba(245,166,35,0.3)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 text-sm tracking-wide"
                                >
                                    Send Message
                                    <Send size={16} />
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}
