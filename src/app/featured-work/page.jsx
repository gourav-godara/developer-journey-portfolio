import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function FeaturedWorkPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white to-gray-300 text-white">

      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-[#111827]">
          Featured Work
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed">
          From software projects to hackathons and
          competitive programming, each experience
          represents a step in my journey as an engineer.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-8 pb-28">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <Link href="/featured-work/portfolio-website">
            <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-80 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer">

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

          {/* Card 2 */}
          <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-80 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer">

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

          {/* Card 3 */}
          <div className="group bg-white p-8 rounded-3xl border border-gray-200 min-h-100 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300 transition-all duration-300 cursor-pointer">

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

    </main>
  );
}
