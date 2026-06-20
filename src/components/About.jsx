"use client";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">
      {/* Premium Divider */}
      <div className="relative mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-amber-500/60"></div>
      </div>

      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-4 leading-tight">
          About{" "}
          <span className="relative inline-block">
            Me
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-amber-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        <div className="max-w-lg">
          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
            I'm Gourav Godara, a Computer Science student at SVNIT Surat with a strong interest
            in software engineering, problem solving, and building digital products.
          </p>

          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
            Every project, coding challenge, and new technology I explore is part of a long-term
            goal to become a skilled engineer capable of building impactful products.
          </p>

          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
            Currently, I focus on Data Structures & Algorithms, full stack web development, and
            creating projects that strengthen both technical and practical problem-solving skills.
          </p>

          <p className="text-[#9CA3AF] text-lg leading-relaxed">
            Beyond academics, I'm interested in startups, open source, hackathons,
            and continuously learning technologies that can create real world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {title: "Education", desc: "B.Tech CSE at SVNIT Surat"},
            {title: "Competitive Exams", desc: "99.14%ile JEE Mains • JEE Advanced Qualified"},
            {title: "DSA Journey", desc: "C++ • LeetCode • Problem Solving"},
            {title: "Web Development", desc: "Next.js • React • Tailwind CSS"},
            {title: "Hackathons", desc: "Building products under pressure and collaborating with teams"},
            {title: "Future Vision", desc: "Software Engineering • Startups • Impactful Products" }
          ].map((card) => (
            <div
              key={card.title}
              className="group bg-[#1C1C1C] p-6 rounded-2xl border border-[#2A2A2A] min-h-35
             hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)]
             transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-amber-400 group-hover:translate-x-1">
                {card.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
