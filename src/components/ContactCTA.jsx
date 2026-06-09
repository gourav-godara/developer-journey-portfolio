import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-10">

            {/* Premium Divider */}
            <div className="relative mb-30">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>
            </div>

            <div
                className="
                relative overflow-hidden
                rounded-[40px]
                bg-white
                border border-gray-200
                shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                p-12 md:p-20
                text-center
            "
            >

                {/* Background Word */}
                <div
                    className="
                    absolute inset-0
                    flex items-center justify-center
                    pointer-events-none
                    select-none
                "
                >
                    <span
                        className="
                        text-[120px]
                        md:text-[220px]
                        font-black
                        text-gray-100
                        leading-none
                    "
                    >
                        CONNECT
                    </span>
                </div>

                {/* Accent Glow */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-100 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10">

                    <p className="text-red-500 uppercase tracking-[0.35em] font-semibold mb-6">
                        CONTACT
                    </p>

                    <h2 className="text-[#111827] text-5xl md:text-7xl font-black mb-6">
                        Let's Connect
                    </h2>

                    <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Whether it's an internship opportunity, a project,
                        a startup idea, or just a conversation about technology,
                        I'm always happy to connect with ambitious people.
                    </p>

                    <Link
                        href="/contact"
                        className="
                        inline-flex items-center gap-3
                        px-8 py-4
                        rounded-2xl
                        bg-[#111827]
                        text-white
                        font-bold
                        hover:scale-105
                        transition-all duration-300
                        shadow-lg"
                    >
                        Open Channel →
                    </Link>

                </div>

            </div>

        </section>
    );
}
