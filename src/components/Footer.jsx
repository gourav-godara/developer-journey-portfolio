import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-32 bg-[#0F0F0F]">

            {/* Full Width Footer Divider */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 mb-10">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-[5px]
                    w-[10px] h-[10px] rounded-full
                    bg-amber-500
                    shadow-[0_0_12px_rgba(245,166,35,0.6)]">
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">
                            Gourav <span className="text-amber-400">Godara</span>
                        </h3>
                        <p className="text-sm text-[#6B7280] mt-1">
                            Software Engineer in Progress
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-[#4B5563] text-sm">
                            © 2026 Designed &amp; Built by Gourav Godara. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>

        </footer>
    );
}
