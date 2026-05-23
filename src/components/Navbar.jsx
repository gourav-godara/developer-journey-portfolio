export default function Navbar() {
  return (
    <nav className="w-[92%] mx-auto mt-4 px-8 py-4 flex items-center justify-between rounded-2xl bg-[#F3F4F6]">

      <h1 className="text-2xl font-bold text-[#111827] font-sans">
        Gourav
      </h1>

      <ul className="flex flex-wrap justify-center gap-3 md:gap-8 text-[13px] md:text-base font-medium text-[#6B7280]">

        <li className="hover:text-[#111827] transition duration-300 cursor-pointer">
          About
        </li>

        <li className="hover:text-[#111827] transition duration-300 cursor-pointer">
          Projects
        </li>

        <li className="hover:text-[#111827] transition duration-300 cursor-pointer">
          Certificate
        </li>

        <li className="hover:text-[#111827] transition duration-300 cursor-pointer">
          Contact
        </li>

      </ul>

    </nav>
  );
}
