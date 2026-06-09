import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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

                    <div className="grid lg:grid-cols-2 gap-16 p-10 md:p-16 relative z-10">

                        {/* LEFT */}
                        <div className="flex flex-col justify-between">

                            <div>

                                <span className="inline-flex px-4 py-2 rounded-full bg-red-100 text-red-500 font-medium text-sm">
                                    Open Channel
                                </span>

                                <h3 className="mt-8 text-5xl font-black text-[#111827] leading-tight">
                                    Let's Talk.
                                </h3>

                                <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
                                    Every meaningful journey starts with a conversation.
                                    If you have an idea, an opportunity, or simply want
                                    to connect, I'd love to hear your story.
                                </p>

                                <div className="flex items-center gap-4 mt-8">

                                    <a
                                        href="https://github.com/gourav-godara"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <FaGithub size={20} className="text-[#111827]" />
                                    </a>

                                    <a
                                        href="https://instagram.com/xo._.gourav"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <FaInstagram size={20} className="text-[#111827]" />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/gourav-godara-3172b3397"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <FaLinkedinIn size={20} className="text-[#111827]" />
                                    </a>

                                </div>

                            </div>

                            {/* Info Cards */}
                            <div className="grid gap-4 mt-12">

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
                                        SVNIT Surat • India
                                    </p>

                                </div>

                                <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">

                                    <p className="text-sm text-gray-400 mb-1">
                                        Best For
                                    </p>

                                    <p className="font-semibold text-[#111827]">
                                        Internships, Hackathons & Startup Ideas
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="bg-[#111827] rounded-[32px] p-8 shadow-2xl">

                                <h3 className="text-3xl font-bold text-white mb-8">
                                    Send a Message
                                </h3>

                                <form className="space-y-5">

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-400 outline-none"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-400 outline-none"
                                    />

                                    <textarea
                                        rows="5"
                                        placeholder="Tell me about your idea..."
                                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-400 outline-none resize-none"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-2xl bg-white text-[#111827] font-bold hover:scale-[1.02] transition-all duration-300">
                                        Send Message →
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
