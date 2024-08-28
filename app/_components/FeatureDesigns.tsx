import Link from "next/link";
import DesignCard from "./DesignCard";
import { Design } from "../../types/design";

export async function fetchFeaturedDesigns(): Promise<Design[]> {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/featured-designs`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching designs:", error);
    return [];
  }
}

const FeatureDesigns = async () => {
  const featuredDesigns = await fetchFeaturedDesigns();

  return (
    <section className=" bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {featuredDesigns.map((design, i) => (
            <DesignCard key={design._id} design={design} />
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
