"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import CheckBox from "components/checkbox/CheckBox";
import { SearchContext } from "components/context/SearchContext";

interface Props {
  filters: string[];
}

export default function Section({ filters }: Props) {
  const { filters: searchFilters, filterResults } = useContext(SearchContext);

  return (
    <motion.div
      variants={{
        enter: { x: 0 },
        exit: { x: 200 },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      {filters.map((filter) => (
        <CheckBox
          text={filter}
          toggleCheck={() => filterResults(filter)}
          checked={searchFilters.includes(filter)}
        />
      ))}
    </motion.div>
  );
}
