"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Hero = () => {
  const pathname = usePathname();
  const showHero = pathname === "/"; // Adjust the condition as needed

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
              <form className="w-80">
                <input
                  type="text"
                  placeholder="Find design by ID or keyword."
                  className="w-full px-4 py-2 bg-white rounded outline-none text-black placeholder-[#A9A9A9] transition-transform duration-300 transform scale-100 hover:scale-110 focus:scale-110 focus:outline-white text-sm sm:text-[16px]"
                />
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;

<div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    Backgrounds
  </p>
</div>;
