import { motion } from "framer-motion";

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
            I'm Gourav, a Computer Science student focused on software engineering,
            data structures & algorithms, and modern web development.
          </p>

          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
            Passionate about technology, problem solving, and building impactful digital experiences.
          </p>

          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
            Currently building projects, improving problem-solving skills in C++,
            and exploring how technology can create meaningful real-world impact.
          </p>

          <p className="text-[#9CA3AF] text-lg leading-relaxed">
            My goal is to continuously learn, build scalable systems,
            and grow into a strong software engineer capable of solving challenging problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: "Building", desc: "Projects | Portfolio | Future Products" },
            { title: "Problem Solving", desc: "DSA | LeetCode | Codeforces | Competitive Programming" },
            { title: "Learning", desc: "Courses | Certificates | Books | New Technologies" },
            { title: "Open Source", desc: "GitHub | Contributions | Community Work" },
            { title: "Achievements", desc: "Hackathons | Contest Results | Awards | Milestones" },
            { title: "Growth", desc: "Journey | Consistency | Goals | Progress" },
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
