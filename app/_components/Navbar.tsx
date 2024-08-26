"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import { navLinks } from "../_constants";
import Image from "next/image";
import {
  PiDotsThreeOutlineFill,
  PiDotsThreeOutlineLight,
} from "react-icons/pi";

type NavLink = {
  label: string;
  url: string;
};

type MobileNavbarProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState<boolean>(false);

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

  const toggleNavbar = () => {
    setIsMobileNavbarOpen((curState) => !curState);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b ${
        scrolled
          ? "bg-black border-neutral-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5 ${
          isMobileNavbarOpen && "bg-black"
        }`}
      >
        <div className="min-w-[160.5px]">
          <Link
            href="/"
            className="text-white text-3xl tracking-tighter font-medium flex items-center gap-0.5 w-fit min-h-9"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className={`w-9 h-8 ${scrolled && "hover:scale-110 transition"}`}
            />
            {!scrolled && " UiDsigns."}
          </Link>
        </div>
        <nav>
          <ul className="hidden md:flex gap-8">
            {navLinks.map(({ label, url }: NavLink) => (
              <li
                key={label}
                className="text-[#ADADAD] hover:text-white transition duration-200"
              >
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:inline-flex w-[160.5px] ">
          <button className="w-full bg-white text-black py-3 rounded text-sm">
            Subscribe
          </button>
        </div>

        <button
          onClick={toggleNavbar}
          className="text-[#EBEBEB] flex md:hidden"
        >
          {isMobileNavbarOpen ? (
            <PiDotsThreeOutlineLight size={25} />
          ) : (
            <PiDotsThreeOutlineFill size={25} />
          )}
        </button>
      </div>

      {isMobileNavbarOpen && (
        <MobileNavbar
          isOpen={isMobileNavbarOpen}
          setOpen={setIsMobileNavbarOpen}
        />
      )}
    </header>
  );
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, setOpen }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center gap-4 px-4 py-3 text-md border-b border-neutral-800 md:hidden  ${
        isOpen && "bg-black"
      }`}
    >
      <ul className="flex flex-row gap-4 sm:gap-8">
        {navLinks.map(({ label, url }: NavLink) => (
          <li
            onClick={() => setOpen((curState) => !curState)}
            key={label}
            className="text-[#ADADAD] hover:text-white transition duration-200"
          >
            <Link href={url}>/{label}</Link>
          </li>
        ))}
      </ul>

      <div className="w-[160.5px]">
        <button className="w-full bg-white text-black py-3 rounded text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Navbar;
