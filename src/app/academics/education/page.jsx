import Navbar from "@/components/Navbar";

export default function Education() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white to-gray-200 text-white">

      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-28">

        {/* Hero */}
        <div className="mb-28">
          <p className="uppercase tracking-[0.3em] text-red-500 font-semibold mb-4">
            Academic Journey
          </p>

          <h1 className="text-6xl font-extrabold text-[#111827] mb-6">
            Education
          </h1>

          <p className="text-xl text-[#6B7280] max-w-3xl leading-relaxed">
            My journey from school education to Computer Science Engineering at
            SVNIT Surat, including the dedicated year spent preparing for JEE.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Main Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-red-500 via-red-400 to-red-200"></div>

          {/* ================================================= */}
          {/* B.Tech */}
          {/* ================================================= */}

          <div className="relative flex gap-10 pb-24">

            <div className="relative z-10">
              <div className="w-8 h-8 rounded-xl bg-red-500 border-4 border-white shadow-[0_0_25px_rgba(239,68,68,0.5)]"></div>
            </div>

            <div className="flex-1 pb-14 relative">

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                <div>
                  <p className="text-red-500 font-bold tracking-wider uppercase mb-3">
                    2025 - Present
                  </p>

                  <h2 className="text-5xl font-bold text-[#111827] mb-3">
                    B.Tech CSE
                  </h2>

                  <p className="text-xl text-[#6B7280] mb-5">
                    SVNIT Surat
                  </p>

                  <p className="text-[#4B5563] max-w-3xl leading-relaxed text-lg">
                    Pursuing Computer Science & Engineering with focus on
                    Data Structures & Algorithms, Web Development,
                    Open Source and Competitive Programming.
                  </p>
                </div>

                <div>
                  <span className="px-6 py-3 rounded-2xl bg-white border border-red-200 text-red-500 font-bold shadow-lg">
                    CGPA: 8.0
                  </span>
                </div>

              </div>

              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full shadow-[0_0_25px_rgba(239,68,68,0.4)]"></div>

            </div>

          </div>

          {/* ================================================= */}
          {/* DROP YEAR */}
          {/* ================================================= */}

          <div className="relative flex gap-10 pb-24">

            <div className="relative z-10">

              {/* Diamond Node */}
              <div className="w-8 h-8 bg-red-500 rotate-45 border-4 border-white rounded-xl shadow-[0_0_25px_rgba(239,68,68,0.5)]"></div>

            </div>

            <div className="flex-1 pb-14 relative">

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                <div>

                  <p className="text-red-500 font-bold tracking-wider uppercase mb-3">
                    2024 - 2025
                  </p>

                  <h2 className="text-5xl font-bold text-[#111827] mb-3">
                    JEE Preparation Year
                  </h2>

                  <p className="text-xl text-[#6B7280] mb-5">
                    Dedicated Competitive Exam Preparation
                  </p>

                  <ul className="space-y-2 text-[#4B5563] text-lg">
                    <li>• Secured admission to SVNIT Surat CSE</li>
                    <li>• JEE Advanced Qualified</li>
                    <li>• JEE Mains - 99.14 %ile</li>
                  </ul>

                </div>

                <div>
                  <span className="px-6 py-3 rounded-2xl bg-white border border-red-200 text-red-500 font-bold shadow-lg">
                    Percentile: 99.14 %ile
                  </span>
                </div>

              </div>

              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full shadow-[0_0_25px_rgba(239,68,68,0.4)]"></div>

            </div>

          </div>

          {/* ================================================= */}
          {/* 12th */}
          {/* ================================================= */}

          <div className="relative flex gap-10 pb-24">

            <div className="relative z-10">
              <div className="w-8 h-8 rounded-xl bg-red-500 border-4 border-white shadow-[0_0_25px_rgba(239,68,68,0.5)]"></div>
            </div>

            <div className="flex-1 pb-14 relative">

              <div className="flex flex-col md:flex-row md:justify-between gap-8">

                <div>

                  <p className="text-red-500 font-bold tracking-wider uppercase mb-3">
                    2022 - 2024
                  </p>

                  <h2 className="text-5xl font-bold text-[#111827] mb-3">
                    Senior Secondary 
                  </h2>

                  <p className="text-xl text-[#6B7280] mb-5">
                    Oxford International School
                  </p>

                  <ul className="space-y-2 text-[#4B5563] text-lg">
                    <li>• RBSE Board</li>
                  </ul>

                </div>

                <div>
                  <span className="px-6 py-3 rounded-2xl bg-white border border-red-200 text-red-500 font-bold shadow-lg">
                    Percentage: 79.6%
                  </span>
                </div>

              </div>

              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full shadow-[0_0_25px_rgba(239,68,68,0.4)]"></div>

            </div>

          </div>

          {/* ================================================= */}
          {/* 10th */}
          {/* ================================================= */}

          <div className="relative flex gap-10">

            <div className="relative z-10">
              <div className="w-8 h-8 rounded-xl bg-red-500 border-4 border-white shadow-[0_0_25px_rgba(239,68,68,0.5)]"></div>
            </div>

            <div className="flex-1">

              <div className="flex flex-col md:flex-row md:justify-between gap-8">

                <div>

                  <p className="text-red-500 font-bold tracking-wider uppercase mb-3">
                    2020 - 2022
                  </p>

                  <h2 className="text-5xl font-bold text-[#111827] mb-3">
                    Secondary Education
                  </h2>

                  <p className="text-xl text-[#6B7280] mb-5">
                    Eklavya International Academy
                  </p>

                  <ul className="space-y-2 text-[#4B5563] text-lg">
                    <li>• CBSE Board</li>
                    <li>• 100% in Mathematics in boards</li>
                  </ul>

                </div>

                <div>
                  <span className="px-6 py-3 rounded-2xl bg-white border border-red-200 text-red-500 font-bold shadow-lg">
                    Percentage: 91%
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
