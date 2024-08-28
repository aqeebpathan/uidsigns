const Loader = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:.5s]"></div>
      <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:.1s]"></div>
      <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:.5s]"></div>
    </div>
  );
};

export default Loader;
