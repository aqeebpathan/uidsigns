"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { navLinks } from "../_constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Check initial scroll position when component mounts
    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b ${
        scrolled
          ? " bg-black border-neutral-800"
          : "bg-transparent border-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5">
        <Link
          href="/"
          className="text-white text-4xl tracking-tighter font-medium"
        >
          UiDsigns.
        </Link>
        <nav>
          <ul className="hidden sm:flex gap-8">
            {navLinks.map(({ label, url }) => (
              <li
                key={label}
                className="text-[#ADADAD] hover:text-white transition duration-200"
              >
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-[142px] inline-flex">
          <button className="w-full bg-white text-black py-3 rounded text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
