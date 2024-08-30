"use client";

import { useEffect, useRef } from "react";

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputClassName?: string;
  kbdClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  onSubmit,
  setSearch,
  inputClassName,
  kbdClassName,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        if (document.activeElement === inputRef.current) {
          inputRef.current?.blur(); // If input is focused, blur it
        } else {
          inputRef.current?.focus(); // If input is not focused, focus it
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <form onSubmit={onSubmit} className="w-80 relative group">
      <input
        type="text"
        value={search}
        placeholder="Find design by ID or keyword."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className={inputClassName}
        ref={inputRef}
      />
      <kbd className={kbdClassName}>/</kbd>
    </form>
  );
};

export default SearchInput;
