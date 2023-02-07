import React from "react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`bg-input h-[40px] px-3 flex items-center justify-start rounded-lg flex-grow transition-colors border-[1px] ${
        focused ? "text-black border-black" : "text-unfocused border-input"
      }`}
    >
      <MdSearch size="24px" className="flex-shrink-0" />
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type="text"
        placeholder="Search videos..."
        className="text-sm bg-input focus:outline-0 border-none focus:ring-0 w-full"
      />
    </div>
  );
}
