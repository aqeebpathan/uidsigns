import DesignList from "@app/_components/DesignList";
import SearchDesignInput from "@app/_components/SearchDesignInput";

async function fetchInitialDesigns() {
  const res = await fetch(`${process.env.BASE_URL}/api/designs?limit=12`);
  const data = await res.json();
  return data.designs;
}

const page = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const initialDesigns = await fetchInitialDesigns();
  const query = searchParams.search || "";

  return (
    <section className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto relative px-4">
        <SearchDesignInput />
        <DesignList initialDesigns={initialDesigns} searchQuery={query} />
      </div>
    </section>
  );
};

export default page;
