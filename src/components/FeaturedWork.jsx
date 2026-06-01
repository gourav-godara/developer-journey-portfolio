export default function FeaturedWork() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-28">

            <div className="flex items-center justify-between mb-20">

                <h2 className="text-3xl md:text-5xl text-[#111827] font-extrabold leading-tight">
                    Featured Work
                </h2>

                <button className=" md:flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition">
                    View all
                    <span>→</span>
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-80 hover:-translate-y-2 hover:shadow-xl hover:border-purple-200 transition-all duration-300 cursor-pointer">

                    <div className="flex justify-between items-start mb-2">

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
                            Tailwind
                        </span>

                    </div>

                    <div className="mt-auto flex justify-end pt-15">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-300 group-hover:text-black">
                            Explore
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                            </span>
                        </span>
                    </div>

                </div>

                <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-80 hover:-translate-y-2 hover:shadow-xl hover:border-purple-200 transition-all duration-300 cursor-pointer">

                    <div className="flex justify-between items-start mb-2">

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

                    <div className="mt-auto flex justify-end pt-15">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-300 group-hover:text-black">
                            Explore
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                            </span>
                        </span>
                    </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-100 hover:-translate-y-2 hover:shadow-xl hover:border-amber-200 transition-all duration-300 cursor-pointer">
                    
                    <div className="flex justify-between items-start mb-2">

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

                    <div className="mt-auto flex justify-end pt-15">
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
