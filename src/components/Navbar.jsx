"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-[92%] mx-auto mt-4 px-8 py-4 flex items-center justify-between rounded-3xl bg-[#161616] border border-[#2A2A2A] shadow-lg shadow-black/40 relative z-50">

        <h1 className="text-2xl font-bold text-white font-sans tracking-tight">
          Gourav <span className="text-amber-400">G.</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-base font-medium text-[#9CA3AF]">
          <li className="text-xl hover:text-amber-400 transition duration-300 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="text-xl hover:text-amber-400 transition duration-300 cursor-pointer">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-xl hover:text-amber-400 transition duration-300 cursor-pointer">
            <Link href="/certifications">Certificate</Link>
          </li>
          <li className="text-xl hover:text-amber-400 transition duration-300 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden w-[92%] mx-auto z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-[#161616] border border-[#2A2A2A] rounded-2xl px-4 py-3 flex flex-col shadow-lg shadow-black/40">
          {[
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Certificate", href: "/certifications" },
            { label: "Contact", href: "/contact" },
          ].map((item, i) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-4 text-[#9CA3AF] hover:text-amber-400 transition-colors duration-300 text-lg font-medium"
              >
                {item.label}
                <span className="text-zinc-600 text-sm">→</span>
              </Link>
              {i < 3 && <div className="h-px bg-white/5 mx-4" />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
