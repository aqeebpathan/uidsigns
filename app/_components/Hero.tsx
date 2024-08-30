"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SearchInput from "./SearchInput";

const Hero = () => {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const showHero = pathname === "/"; // Adjust the condition as needed

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/collections?search=${search}`);
  };

  return (
    <>
      {showHero && (
        <section id="hero" className="pt-40 pb-24">
          <div className="max-w-7xl mx-auto relative px-4">
            <p className="w-fit mx-auto border rounded-full py-0.5 sm:py-1 px-2.5 sm:px-4 mb-4 mt-1 sm:mt-0 text-sm text-white flex items-center gap-1.5">
              <Image
                src="/shine.svg"
                alt=""
                width={15}
                height={15}
                draggable="false"
              />
              <span>
                UiDsigns{" "}
                <span className="text-[#A9A9A9]">is still being developed</span>
              </span>
            </p>

            <h1 className="text-4xl sm:text-7xl text-[#EBEBEB] font-bold text-center py-3 relative z-20 bg-clip-text bg-gradient-to-b  ">
              Designs That <br />
              Define Excellence
            </h1>

            <div className="max-w-2xl mx-auto">
              <p className="text-center text-sm sm:text-xl text-[#ADADAD] py-3.5">
                Discover the most innovative UI/UX designs that inspire and set
                trends, brought to you by the world&apos;s leading designers
              </p>
            </div>

            <div className="flex justify-center mt-12">
              <SearchInput
                search={search}
                setSearch={setSearch}
                onSubmit={handleSubmit}
                inputClassName={
                  "w-full px-4 py-2 pr-12 bg-white rounded outline-none text-black placeholder-[#A9A9A9] transition-transform duration-300 transform scale-100 hover:scale-110 focus:scale-110 focus:outline-white text-sm sm:text-[16px]"
                }
                kbdClassName={
                  "bg-[#2c2c2c] absolute right-1.5 top-1.5 px-2 rounded font-bold group-hover:translate-x-4 group-hover:scale-110 transition-transform duration-300 transform group-focus-within:translate-x-4 group-focus-within:scale-110 pointer-events-none"
                }
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
