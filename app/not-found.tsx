import Link from "next/link";

const notFound = () => {
  return (
    <section className="w-full h-screen dark:bg-black bg-white text-[#EBEBEB] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-7xl sm:text-9xl">404</h1>
        <p className="text-2xl mb-2">Page Not Found</p>
        <Link href="/" className="py-2">
          Don&apos;t worry, click me to get you back on track.
        </Link>
      </div>
    </section>
  );
};

export default notFound;
