import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-32">

            {/* Full Width Footer Divider */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 mb-5">

                <div className="h-[2px] bg-gradient-to-r
                    from-transparent
                    via-[#111827]
                    to-transparent">
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 -top-[7px]
                    w-5 h-5 rounded-full
                    bg-[#111827]
                    border-4 border-white
                    shadow-[0_0_25px_rgba(17,24,39,0.25)]">
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-8">

                {/* Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">

                    {/* Brand */}
                    <div className="text-center md:text-left">

                        <h3 className="text-xl font-bold text-[#111827]">
                            Gourav Godara
                        </h3>

                        <p className="text-sm text-[#6B7280] mt-1">
                            Software Engineer in Progress
                        </p>

                    </div>

                    {/* Copyright */}
                    <div className="text-center">

                        <p className="text-[#6B7280] text-sm">
                            © 2026 Designed & Built by Gourav Godara | All rights reserved | Privacy Policy
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}
