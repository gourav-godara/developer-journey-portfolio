import Link from "next/link";

export default function FeaturedWork() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-28">

            {/* Premium Divider */}
            <div className="relative mb-20">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>
            </div>

            <div className="flex items-center justify-between mb-10">

                <h2 className="text-3xl md:text-5xl text-[#111827] font-extrabold leading-tight">
                    Featured Work
                </h2>

                <Link href="/featured-work" className="md:flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition">
                    View all
                    <span>→</span>
                </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <Link href="/featured-work/portfolio-website">
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-80 hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-purple-300 transition-all duration-300 cursor-pointer">

                        <div className="flex justify-between items-start mb-6">

                            <div className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm">
                                Project
                            </div>

                            <div className="size-18 rounded-xl bg-gray-100"></div>

                        </div>

                        <h3 className="text-2xl font-bold text-[#111827] mb-2 transition-all duration-300 group-hover:translate-x-1">
                            Portfolio Website
                        </h3>

                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            A modern portfolio website built to showcase my journey as a Computer Science student, featuring responsive design and...
                        </p>

                        <div className="flex flex-wrap gap-2">

                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                Next.js
                            </span>

                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                React
                            </span>

                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                Tailwind CSS
                            </span>

                        </div>

                        <div className="mt-auto flex justify-end pt-12">
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-300 group-hover:text-black">
                                Explore
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </div>

                    </div>
                </Link>


                <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-80 hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-purple-300 transition-all duration-300 cursor-pointer">

                    <div className="flex justify-between items-start mb-6">

                        <div className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm">
                            Project
                        </div>

                        <div className="size-18 rounded-xl bg-gray-100"></div>

                    </div>

                    <h3 className="text-2xl font-bold text-[#111827] mb-2 transition-all duration-300 group-hover:translate-x-1">

                    </h3>

                    <p className="text-[#6B7280] leading-relaxed mb-6">

                    </p>

                    <div className="flex flex-wrap gap-2">

                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">

                        </span>

                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">

                        </span>

                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">

                        </span>

                    </div>

                    <div className="mt-auto flex justify-end pt-12">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-300 group-hover:text-black">
                            Explore
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-100 hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-amber-300 transition-all duration-300 cursor-pointer">

                    <div className="flex justify-between items-start mb-6">

                        <div className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-600 font-semibold text-sm">
                            Hackathon
                        </div>

                        <div className="size-18 rounded-xl bg-gray-100"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#111827] mb-2 transition-all duration-300 group-hover:translate-x-1">

                    </h3>

                    <p className="text-[#6B7280] leading-relaxed mb-6">

                    </p>

                    <div className="flex flex-wrap gap-2">

                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">

                        </span>

                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">

                        </span>

                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">

                        </span>

                    </div>

                    <div className="mt-auto flex justify-end pt-12">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-300 group-hover:text-black">
                            Explore
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
