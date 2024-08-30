"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const SearchDesignInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key == "f") {
        event.preventDefault();

        if (document.activeElement === inputRef.current) {
          inputRef.current?.blur(); // If input is focused, blur it
        } else {
          inputRef.current?.focus(); // If input is not focused, focus it
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/collections?search=${encodeURIComponent(query)}`);
    if (inputRef.current) {
      setQuery(""); // Clear the input
      inputRef.current.blur(); // Unfocus the input
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <form onSubmit={handleSubmit} className="relative w-full sm:w-fit">
        <input
          type="text"
          placeholder="Find design by ID or keyword."
          className="w-full sm:w-[360px] px-5 py-3 pr-[76px] bg-white rounded outline-none text-black placeholder-[#A9A9A9] transition-transform duration-300 transform scale-100 focus:outline-white text-md sm:text-[16px]"
          ref={inputRef}
          value={query}
          onChange={handleChange}
        />
        <kbd className="hidden lg:block absolute top-1.5 right-1.5 bg-[#2c2c2c] py-2 px-2.5 rounded text-sm font-medium">
          <span>⌘</span> F
        </kbd>
      </form>
    </div>
  );
};

export default SearchDesignInput;
