interface Design {
  title: string;
  imageUrl: string;
  designerName: string;
  sourceUrl: string;
  designerUrl: string;
}

export async function fetchDesigns(): Promise<Design[]> {
  try {
    const res = await fetch("http://localhost:3000/api/designs");

    const data = await res.json();

    return data.designs;
  } catch (error) {
    console.log("Error fetching designs:", error);
    return [];
  }
}

import Link from "next/link";
import DesignCard from "./DesignCard";
import { title } from "process";

const FeatureDesigns = async () => {
  const designs = await fetchDesigns();
  console.log(designs);

  return (
    <section className=" bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {designs.map(
            ({ imageUrl, designerName, sourceUrl, designerUrl }, i) => (
              <DesignCard
                title={title}
                imageUrl={imageUrl}
                designerName={designerName}
                sourceUrl={sourceUrl}
                designerUrl={designerUrl}
                key={i}
              />
            )
          )}
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
