import GhostIconButton from "components/buttons/GhostIconButton";
import { SearchContext } from "components/context/SearchContext";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { MdKeyboardArrowLeft, MdClose } from "react-icons/md";

interface Props {
  section: string | null;
  setSection: Dispatch<SetStateAction<string | null>>;
  setIsMobileFiltersOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function Heading({
  section,
  setSection,
  setIsMobileFiltersOpen,
}: Props) {
  const { filters, filterResults } = useContext(SearchContext);

  return (
    <div className="flex items-center justify-between mb-4">
      {section ? (
        <button
          onClick={() => setSection(null)}
          className="flex items-center text-brand"
        >
          <MdKeyboardArrowLeft size="24px" />
          <span className="font-semibold text-sm leading-7">back</span>
        </button>
      ) : (
        <span className="font-bold text-xl">Filters</span>
      )}
      <div className="flex items-center">
        <button
          onClick={() => filterResults()}
          className="text-brand-red text-sm hover:underline"
        >
          {filters.length} filter{filters.length === 1 ? "" : "s"}
        </button>
        <GhostIconButton
          Icon={MdClose}
          className="ml-2 block sm:hidden"
          onClick={() =>
            setIsMobileFiltersOpen && setIsMobileFiltersOpen(false)
          }
        ></GhostIconButton>
      </div>
    </div>
  );
}
