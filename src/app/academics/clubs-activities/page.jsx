import Navbar from "@/components/Navbar";

export default function ClubsActivities() {
    return (
        <main className="min-h-screen bg-linear-to-b from-white to-gray-300 text-white">

            <Navbar />

            <section className="max-w-7xl mx-auto px-8 py-28">

                {/* Hero */}
                <div className="mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
                        Clubs & Activities
                    </h1>

                    <p className="text-[#6B7280] text-lg max-w-2xl">
                        Technical communities, student organizations, workshops,
                        hackathons, and experiences that have shaped my growth
                        beyond the classroom.
                    </p>
                </div>

                {/* Club 1 */}
                <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-8 hover:shadow-lg transition-all duration-300">

                    <div className="flex gap-6">

                        {/* Logo */}
                        <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                            {/* Add Logo Here */}
                        </div>

                        {/* Content */}
                        <div className="flex-1">

                            {/* Heading + Badge */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">

                                <h2 className="text-3xl font-bold text-[#111827]">
                                    Nexus
                                </h2>

                                <span className="inline-flex w-fit px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                                    Technical Club
                                </span>

                            </div>

                            <p className="text-[#6B7280] mb-4">
                                <span className="text-blue-500">Member </span>• 2025 - Present
                            </p>

                            <p className="text-[#4B5563] max-w-3xl">
                                Participating in coding sessions, technical workshops,
                                networking events, and collaborative learning opportunities
                                with fellow developers.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">

                                <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                    Coding
                                </span>

                                <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                    Workshops
                                </span>

                                <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                    Community
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Club 2 */}
                <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-8 hover:shadow-lg transition-all duration-300">

                    <div className="flex gap-6">

                        {/* Logo */}
                        <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                            {/* Add Logo Here */}
                        </div>

                        {/* Content */}
                        <div className="flex-1">

                            {/* Heading + Badge */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">

                                <h2 className="text-3xl font-bold text-[#111827]">
                                    Wellness Club
                                </h2>

                                <span className="inline-flex w-fit px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                                    Community
                                </span>

                            </div>

                            <p className="text-[#6B7280] mb-4">
                                <span className="text-blue-500">Member </span>• 2026 - Present
                            </p>

                            <p className="text-[#4B5563] max-w-3xl">
                                Participating in coding sessions, technical workshops,
                                networking events, and collaborative learning opportunities
                                with fellow developers.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">

                                <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                    Coding
                                </span>

                                <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                    Workshops
                                </span>

                                <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-[#6B7280]">
                                    Community
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Future Growth */}
                <div className="mt-20">

                    <h2 className="text-3xl font-bold text-[#111827] mb-8">
                        What I'm Building Through These Experiences
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                            Teamwork
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                            Leadership
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                            Networking
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                            Communication
                        </div>

                    </div>

                </div>

            </section >

        </main >
    );
}
