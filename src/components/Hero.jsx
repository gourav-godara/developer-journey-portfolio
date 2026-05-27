export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-400 leading-tight tracking-tight font-sans">
        Hey, I am <span className="text-gray-600">Gourav</span>
      </h1>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#111827] leading-tight tracking-tight font-sans">
        Software Engineer
      </h1>

      <p className="text-[#6B7280] text-lg max-w-2xl">
        Building modern web experiences while learning DSA,
        frontend development, and real-world software engineering.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-500 hover:scale-102 transition duration-300 active:bg-blue-700">
        Explore Journey
      </button>
    </section>

    
  );
}
