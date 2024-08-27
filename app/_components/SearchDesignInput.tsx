const SearchDesignInput = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Find design by ID or keyword."
          className="w-[360px] px-5 py-3 bg-white rounded outline-none text-black placeholder-[#A9A9A9] transition-transform duration-300 transform scale-100  focus:outline-white text-md sm:text-[16px]"
        />
        <kbd className="absolute top-1.5 right-1.5 bg-neutral-800 py-2 px-2.5 rounded text-sm font-medium">
          <span>⌘</span> F
        </kbd>
      </div>
    </div>
  );
};

export default SearchDesignInput;
