export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">

      <div className="mb-14">

        <p className="text-[#000000] font-extrabold uppercase tracking-[0.2em] mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
          Passionate about technology, problem solving, and building impactful digital experiences.
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-14 items-start">

        <div>

          <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
            I’m Gourav, a Computer Science student focused on software engineering,
            data structures & algorithms, and modern web development.
          </p>

          <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
            Currently building projects, improving problem-solving skills in C++,
            and exploring how technology can create meaningful real-world impact.
          </p>

          <p className="text-[#6B7280] text-lg leading-relaxed">
            My goal is to continuously learn, build scalable systems,
            and grow into a strong software engineer capable of solving challenging problems.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-[#111827] mb-2">
              C++
            </h3>

            <p className="text-[#6B7280]">
              DSA & Problem Solving
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-[#111827] mb-2">
              React
            </h3>

            <p className="text-[#6B7280]">
              Frontend Development
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-[#111827] mb-2">
              GitHub
            </h3>

            <p className="text-[#6B7280]">
              Version Control & Open Source
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-[#111827] mb-2">
              Learning
            </h3>

            <p className="text-[#6B7280]">
              Consistency & Growth
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

