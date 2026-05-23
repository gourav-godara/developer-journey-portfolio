export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#111827] leading-tight tracking-tight font-sans">
        Gourav's Developer Journey
      </h1>

      <p className="text-[#6B7280] text-lg max-w-2xl">
        Building modern web experiences while learning DSA,
        frontend development, and real-world software engineering.
      </p>

      <button className="mt-8 px-6 py-3 bg-[#3B82F6] text-white rounded-full font-semibold hover:bg-[#60A5FA] hover:scale-105 transition duration-300">
        Explore Journey
      </button>
    </section>
  );
}
