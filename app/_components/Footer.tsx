import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto text-[#EBEBEB] px-4">
        <div className="py-10 flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-10 ">
          <div>
            {" "}
            <h1 className="text-3xl font-semibold">
              <Link href="/" className="flex items-center gap-0.5 w-fit">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-9 h-8"
                />
                UiDsigns.
              </Link>
            </h1>
            <p className="text-[#A9A9A9] mt-1">
              Explore top UI/UX designs that set trends, by leading designers
            </p>
          </div>
          <div className="flex gap-6 group md:leading-8">
            <Link href="/about" className="link">
              /About
            </Link>
            <Link href="/terms" className="link">
              /Terms
            </Link>
            <Link href="/privacy" className="link">
              /Privacy
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-10 pb-10">
          <Link
            href="https://instagram.com/uidsigns"
            target="_blank"
            className="w-full py-3 bg-white text-black text-center rounded-md hover:bg-[#F0F0F0] transition"
          >
            Instagram
          </Link>
          <Link
            href="https://x.com/uidsigns"
            target="_blank"
            className="w-full py-3  bg-white  text-black text-center rounded-md hover:bg-[#F0F0F0] transition"
          >
            Twitter / X
          </Link>
        </div>
        <p className="pb-8 sm:pb-10 text-[#A9A9A9]">
          <span className="text-[#EBEBEB]">Have questions?</span> reach out at{" "}
          <Link
            href="mailto:contact@uidsigns.com"
            className="underline underline-offset-4 hover:text-white transition"
          >
            contact@uidsigns.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
