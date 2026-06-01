export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32 mb-20">

      <div className="max-w-4xl">

        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight text-gray-400">
          Hey, I'm <span className="text-[#111827]">Gourav G.</span>
        </h1>

        <p className="mt-4 text-lg md:text-2xl font-medium text-[#6B7280] uppercase tracking-wide">
          CSE Student | DSA Enthusiast | Frontend Developer
        </p>

        <p className="mt-8 text-[#6B7280] text-lg max-w-xl leading-relaxed">
          Building modern web experiences while learning DSA,
          frontend development, and real-world software engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <button className="px-6 py-3 bg-[#111827] text-white rounded-full hover:bg-[#4f5660] transition">
            View Projects
             <span> →</span>
          </button>

          <button className="px-6 py-3 border border-gray-400 text-black rounded-full hover:bg-white transition">
            Contact Me
          </button>

        </div>

      </div>

    </section>
  );
}
