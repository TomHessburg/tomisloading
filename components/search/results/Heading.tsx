import React, { Dispatch, SetStateAction, useContext } from "react";
import { SearchContext } from "components/context/SearchContext";
import GhostIconButton from "components/buttons/GhostIconButton";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { COMMON_FILTERS } from "../utils/filters";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isMobileFiltersOpen: boolean;
  setIsMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Heading({
  isSidebarOpen,
  setIsSidebarOpen,
  isMobileFiltersOpen,
  setIsMobileFiltersOpen,
}: Props) {
  const { filterResults, filters } = useContext(SearchContext);

  return (
    <div className="p-2 flex items-center justify-start">
      {/* NORMAL FILTER BUTTON */}
      <div className="mr-4 pr-4 border-r-[1px] border-border w-fit hidden sm:block">
        <GhostIconButton
          onClick={() => setIsSidebarOpen((pv) => !pv)}
          Icon={MdKeyboardArrowLeft}
          className="transition-transform"
          style={{ transform: `rotate(${isSidebarOpen ? "0" : "180"}deg)` }}
        />
      </div>
      {/* MOBILE FILTER BUTTON */}
      <div className="mr-4 pr-4 border-r-[1px] border-border w-fit block sm:hidden">
        <GhostIconButton
          onClick={() => setIsMobileFiltersOpen((pv) => !pv)}
          Icon={MdKeyboardArrowLeft}
          className="transition-transform"
          style={{
            transform: `rotate(${isMobileFiltersOpen ? "0" : "180"}deg)`,
          }}
        />
      </div>

      <div className="flex items-center justify-start max-w-full overflow-x-scroll no-scrollbar">
        {COMMON_FILTERS.map((item) => (
          <button
            onClick={() => {
              filterResults(item);
            }}
            key={item}
            className={`text-sm whitespace-nowrap mr-4 block ${
              filters.includes(item)
                ? "font-semibold text-brand"
                : "text-unfocused"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
