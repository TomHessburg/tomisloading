import React, { Dispatch, SetStateAction } from "react";
import Heading from "./Heading";
import List from "./List";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isMobileFiltersOpen: boolean;
  setIsMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Results({
  isMobileFiltersOpen,
  setIsMobileFiltersOpen,
  isSidebarOpen,
  setIsSidebarOpen,
}: Props) {
  return (
    <main className="w-full overflow-x-hidden">
      <Heading
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isMobileFiltersOpen={isMobileFiltersOpen}
        setIsMobileFiltersOpen={setIsMobileFiltersOpen}
      />
      <List />
    </main>
  );
}
