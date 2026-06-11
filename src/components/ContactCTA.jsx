import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-10">

            {/* Premium Divider */}
            <div className="relative mb-30">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-amber-500/60"></div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] bg-[#161616] border border-[#2A2A2A] p-12 md:p-20 text-center">

                {/* Background word watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[120px] md:text-[220px] font-black text-white/[0.03] leading-none">
                        CONNECT
                    </span>
                </div>

                {/* Amber glow top-left, purple glow bottom-right */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500 rounded-full blur-3xl opacity-[0.06] pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-[0.07] pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10">

                    <p className="text-amber-400 uppercase tracking-[0.35em] font-semibold mb-6 text-sm">
                        CONTACT
                    </p>

                    <h2 className="text-white text-5xl md:text-7xl font-black mb-6">
                        Let's Connect
                    </h2>

                    <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Whether it's an internship opportunity, a project,
                        a startup idea, or just a conversation about technology,
                        I'm always happy to connect with ambitious people.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 text-[#0F0F0F] font-bold hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20"
                    >
                        Open Channel →
                    </Link>

                </div>

            </div>

        </section>
    );
}
