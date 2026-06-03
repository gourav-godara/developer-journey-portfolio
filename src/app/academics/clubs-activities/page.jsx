import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ClubsActivities() {
    return (
        <main className="min-h-screen bg-linear-to-b from-white to-gray-200 text-white">

            <Navbar />

            <section className="relative max-w-7xl mx-auto px-8 py-28 overflow-hidden">

                {/* Hero */}
                <div className="mb-28">

                    <p className="uppercase tracking-[0.3em] text-blue-500 font-semibold mb-4">
                        Communities & Growth
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black text-[#111827] mb-6 tracking-tight">
                        Clubs & Activities
                    </h1>

                    <p className="text-lg text-[#6B7280] max-w-3xl leading-relaxed">
                        Technical communities, student organizations, workshops,
                        hackathons and experiences that continue shaping my growth
                        beyond academics.
                    </p>

                </div>

                {/* ================================================= */}
                {/* Nexus */}
                {/* ================================================= */}

                <div className="relative pb-20">

                    {/* Background Number */}
                    <div className="absolute right-0 top-0 text-[120px] md:text-[180px] font-black text-black/[0.03] select-none">
                        01
                    </div>

                    <div className="flex gap-8">

                        {/* Logo */}
                        <div className="w-24 h-24 rounded-3xl bg-white border-4 border-gray-300 shadow-xl overflow-hidden shrink-0">
                            <Image
                                src="/nexus.jpeg"
                                alt="Nexus Logo"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

                                <div>

                                    <h2 className="text-4xl font-bold text-[#111827] mb-2">
                                        Nexus
                                    </h2>

                                    <p className="text-blue-500 font-medium mb-6">
                                        Technical Club
                                    </p>

                                    <p className="text-[#4B5563] max-w-3xl leading-relaxed">
                                        Participating in coding sessions, technical
                                        workshops, networking events and collaborative
                                        learning opportunities with fellow developers.
                                    </p>

                                </div>

                                <div className="flex flex-col gap-3">

                                    <span className="w-32 inline-flex items-center justify-center px-4 py-2 rounded-full border border-blue-300 bg-blue-100 text-blue-600 font-semibold text-sm">
                                        Member
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                                        2025 - Present
                                    </span>

                                </div>

                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-3 mt-8">

                                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#6B7280]">
                                    Coding
                                </span>

                                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#6B7280]">
                                    Workshops
                                </span>

                                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#6B7280]">
                                    Community
                                </span>

                            </div>

                            {/* Divider */}
                            <div className="mt-12 h-[3px] w-full bg-gradient-to-r from-transparent via-blue-500/80 to-transparent rounded-full shadow-[0_0_20px_rgba(59,130,246,0.35)]"></div>

                        </div>

                    </div>

                </div>

                {/* ================================================= */}
                {/* Wellness Club */}
                {/* ================================================= */}

                <div className="relative pb-20">

                    {/* Background Number */}
                    <div className="absolute right-0 top-0 text-[120px] md:text-[180px] font-black text-black/[0.03] select-none">
                        02
                    </div>

                    <div className="flex gap-8">

                        {/* Logo */}
                        <div className="w-24 h-24 rounded-3xl bg-white border-4  border-gray-300 shadow-xl overflow-hidden shrink-0">
                            <Image
                                src="/wellness.jpeg"
                                alt="Wellness Club Logo"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

                                <div>

                                    <h2 className="text-4xl font-bold text-[#111827] mb-2">
                                        Wellness Club
                                    </h2>

                                    <p className="text-green-500 font-medium mb-6">
                                        Community Club
                                    </p>

                                    <p className="text-[#4B5563] max-w-3xl leading-relaxed">
                                        Engaging in community initiatives, wellness
                                        programs and activities focused on personal
                                        growth, teamwork and student development.
                                    </p>

                                </div>

                                <div className="flex flex-col gap-3">

                                    <span className="w-32 inline-flex items-center justify-center px-4 py-2 rounded-full border border-green-300 bg-green-100 text-green-600 font-semibold text-sm">
                                        Member
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                                        2025 - Present
                                    </span>

                                </div>

                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-3 mt-8">

                                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#6B7280]">
                                    Leadership
                                </span>

                                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#6B7280]">
                                    Teamwork
                                </span>

                                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#6B7280]">
                                    Community
                                </span>

                            </div>

                            {/* Divider */}
                            <div className="mt-12 h-[3px] w-full bg-gradient-to-r from-transparent via-green-500/80 to-transparent rounded-full shadow-[0_0_20px_rgba(34,197,94,0.35)]"></div>

                        </div>

                    </div>

                </div>

                {/* Growth Section */}

                <div className="mt-28">

                    <h2 className="text-4xl font-bold text-[#111827] mb-10">
                        What I'm Building Through These Experiences
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm text-center text-[#111827] font-medium">
                            Teamwork
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm text-center text-[#111827] font-medium">
                            Leadership
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm text-center text-[#111827] font-medium">
                            Networking
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm text-center text-[#111827] font-medium">
                            Communication
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}
