import Loader from "./_components/Loader";

const loading = () => {
  return (
    <section>
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    </section>
  );
};

export default loading;
