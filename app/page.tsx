import Hero from "./_components/Hero";
import FeatureDesigns from "./_components/FeatureDesigns";

const Home = () => {
  return (
    <main>
      <div className="w-full bg-black bg-grid-white/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Hero />
      </div>
      <FeatureDesigns />
    </main>
  );
};

export default Home;
