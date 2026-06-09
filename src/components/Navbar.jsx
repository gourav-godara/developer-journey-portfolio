import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-[92%] mx-auto mt-4 px-8 py-4 flex items-center justify-between rounded-3xl bg-white border border-gray-200 shadow-md">

      <h1 className="text-2xl font-bold text-[#111827] font-sans">
        Gourav G.
      </h1>

      <ul className="flex flex-wrap justify-center gap-3 md:gap-8 text-[13px] md:text-base font-medium text-[#6B7280]">

        <li className="text-xl hover:text-[#111827] transition duration-300 cursor-pointer">
          About
        </li>

        <li className="text-xl hover:text-[#111827] transition duration-300 cursor-pointer">
          Projects
        </li>

        <li className="text-xl hover:text-[#111827] transition duration-300 cursor-pointer">
          Certificate
        </li>

        <li className="text-xl hover:text-[#111827] transition duration-300 cursor-pointer">
          <Link href="/contact">
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  );
}
