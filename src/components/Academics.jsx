import Link from "next/link";

export default function Academics() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-28">

            {/* Premium Divider */}
            <div className="relative mb-20">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>
            </div>

            <div className="flex items-center justify-between mb-10">

                <h2 className="text-3xl md:text-5xl text-[#111827] font-extrabold leading-tight">
                    Academics
                </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* card - 1 */}
                <Link href="/academics/education">
                    <div className="group bg-white p-8 rounded-3xl border-2 border-gray-200 min-h-24 hover:-translate-y-2 hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer">

                        <h3 className="text-2xl font-bold text-[#111827] mb-2 transition-all duration-300 group-hover:translate-x-1">
                            Education
                        </h3>

                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            My educational background, academic performance, and milestones from school to university.
                        </p>

                        <div className="mt-auto flex justify-end">
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-300 group-hover:text-black">
                                View Details
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>

                {/* card - 2 */}
                <Link href="/academics/clubs-activities">
                    <div className="group bg-white p-8 rounded-3xl border-2 border-gray-200 min-h-24 hover:-translate-y-2 hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer">

                        <h3 className="text-2xl font-bold text-[#111827] mb-2 transition-all duration-300 group-hover:translate-x-1">
                            Clubs & Activities
                        </h3>

                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            Technical communities, student organizations, extracurricular involvement and experiences that helped me grow beyond the classroom.
                        </p>

                        <div className="mt-auto flex justify-end">
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-300 group-hover:text-black">
                                View Details
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
