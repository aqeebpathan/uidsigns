import DesignList from "@app/_components/DesignList";
import SearchDesignInput from "@app/_components/SearchDesignInput";

async function fetchInitialDesigns() {
  const res = await fetch(`${process.env.BASE_URL}/api/designs?limit=6`);
  const data = await res.json();
  return data.designs;
}

const page = async () => {
  const initialDesigns = await fetchInitialDesigns();

  return (
    <section className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto relative px-4">
        <SearchDesignInput />
        <DesignList initialDesigns={initialDesigns} />
      </div>
    </section>
  );
};

export default page;
