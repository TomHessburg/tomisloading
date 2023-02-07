import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-white p-3 border-b-[1px] border-border sticky z-10 top-0 left-0 right-0 flex items-center">
      <Logo />
      <SearchBar />
      <NavItems />
    </header>
  );
}
