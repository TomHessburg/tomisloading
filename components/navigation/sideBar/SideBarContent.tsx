import { SEARCH_FILTERS } from "components/search/utils/filters";
import { AnimatePresence } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import Categories from "./Categories";
import Heading from "./Heading";
import Section from "./Section";

export default function SideBarContent({
  setIsMobileFiltersOpen,
}: {
  setIsMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [section, setSection] = useState<string | null>(null);

  return (
    <>
      <Heading
        setIsMobileFiltersOpen={setIsMobileFiltersOpen}
        section={section}
        setSection={setSection}
      />
      <AnimatePresence initial={false}>
        {!section && <Categories setSection={setSection} />}
        {section === "Frontend" && (
          <Section filters={SEARCH_FILTERS.frontend} />
        )}
        {section === "Backend" && <Section filters={SEARCH_FILTERS.backend} />}
        {section === "Algos & DS" && <Section filters={SEARCH_FILTERS.algos} />}
        {section === "Languages" && <Section filters={SEARCH_FILTERS.langs} />}
        {section === "Other" && <Section filters={SEARCH_FILTERS.other} />}
      </AnimatePresence>
    </>
  );
}
