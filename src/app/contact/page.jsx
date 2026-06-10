import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">

            <Navbar />

            <section className="max-w-7xl mx-auto px-8 py-32">

                {/* Header */}
                <div className="text-center mb-16">

                    <p className="text-red-500 font-semibold tracking-[0.35em] uppercase mb-4">
                        Contact
                    </p>

                    <h2 className="text-6xl md:text-7xl font-black text-[#111827]">
                        Let's Build
                    </h2>

                    <h2 className="text-6xl md:text-7xl font-black text-[#111827]">
                        Something Together
                    </h2>

                    <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                        Interested in internships, hackathons, startup ideas,
                        or project collaborations? I'd love to hear from you.
                        Let's build something meaningful together.
                    </p>

                </div>

                {/* Main Card */}

                <div className="relative overflow-hidden rounded-[40px] bg-white border border-gray-200 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

                    <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 p-10 md:p-16 relative z-10 items-start">

                        {/* LEFT */}
                        <div className="flex flex-col justify-between">

                            <div>

                                <h3 className="text-5xl font-black text-[#111827] leading-tight">
                                    Let's Talk.
                                </h3>

                                <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
                                    Every meaningful journey starts with a conversation.
                                    If you have an idea, an opportunity, or simply want
                                    to connect, I'd love to hear your story.
                                </p>

                                <div className="mt-10">

                                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-5 hover:shadow-lg transition-all duration-300">

                                        <div className="flex items-start gap-4">

                                            <div className="mt-1">
                                                <Mail
                                                    size={22}
                                                    className="text-indigo-500 hover: transition-colors duration-300"
                                                    strokeWidth={2}
                                                />
                                            </div>

                                            <div>

                                                <p className="text-2xl font-bold text-[#111827]">
                                                    Direct Email
                                                </p>

                                                <a
                                                    href="mailto:gouravgodara6125@gmail.com"
                                                    className="text-gray-500 hover:text-indigo-500 transition-colors duration-300"
                                                >
                                                    gouravgodara6125@gmail.com
                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Social Icons */}
                                <div className="flex items-center gap-4 mt-8">

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/gourav-godara"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                    >
                                        <FaGithub
                                            size={20}
                                            className="text-[#111827] group-hover:scale-110 transition-all duration-300"
                                        />
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="https://instagram.com/xo._.gourav"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                    >
                                        <FaInstagram
                                            size={20}
                                            className="text-[#111827] group-hover:scale-110 transition-all duration-300"
                                        />
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/gourav-godara-3172b3397"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                    >
                                        <FaLinkedinIn
                                            size={20}
                                            className="text-[#111827] group-hover:scale-110 transition-all duration-300"
                                        />
                                    </a>

                                </div>

                            </div>

                            {/* Info Cards */}
                            <div className="grid md:grid-cols-2 gap-4 mt-12">

                                <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
                                    <p className="text-sm text-gray-400 mb-1">
                                        Current Focus
                                    </p>

                                    <p className="font-semibold text-[#111827]">
                                        DSA • Web Development • Open Source
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
                                    <p className="text-sm text-gray-400 mb-1">
                                        Location
                                    </p>

                                    <p className="font-semibold text-[#111827]">
                                        SVNIT Surat • Gujarat • India
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="bg-[#d32a2abb] rounded-[32px] p-8 shadow-2xl h-fit sticky top-28">

                                <h3 className="text-2xl font-bold justify-center text-white mb-10">
                                    Let's Start a Conversation
                                </h3>

                                <form className="space-y-5">

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-400 outline-none focus:border-red-400 transition-all duration-300"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-400 outline-none focus:border-red-400 transition-all duration-300"
                                    />

                                    <textarea
                                        rows="5"
                                        placeholder="Tell me about your idea..."
                                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-400 outline-none resize-none focus:border-red-400 transition-all duration-300"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-2xl bg-white text-[#111827] font-bold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        Send Message

                                        <Send
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}
