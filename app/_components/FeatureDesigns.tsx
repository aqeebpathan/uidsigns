import Image from "next/image";
import Link from "next/link";

const featureDesigns = [
  { src: "/ui.png", designerName: "sarah" },
  { src: "/ui.png", designerName: "sarah" },
  { src: "/ui.png", designerName: "sarah" },
  { src: "/ui.png", designerName: "sarah" },
  { src: "/ui.png", designerName: "sarah" },
  { src: "/ui.png", designerName: "sarah" },
];

const FeatureDesigns = () => {
  return (
    <section className=" bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {featureDesigns.map(({ src, designerName }, i) => (
            <div className="group" key={i}>
              <div className="shadow-md rounded-md h-[300px] overflow-hidden border border-[#3d3d3d] hover:border-[#888888] cursor-pointer transition">
                <Image
                  src={src}
                  alt="UI Design"
                  width={400}
                  height={300}
                  className="w-full object-contain"
                />
              </div>
              <p className="my-3 text-[#ADADAD] text-[17px]">
                Designed by{" "}
                <span className="text-white">
                  <Link href="#">{designerName}</Link>
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center py-10">
          <Link
            href="/collections"
            className="py-1 px-4 border border-[#3d3d3d] text-[#A9A9A9] hover:text-[#EBEBEB] transition rounded-md"
          >
            View Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureDesigns;
