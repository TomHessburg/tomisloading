import { SearchContext } from "components/context/SearchContext";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { Result } from "./Result";

export default function List() {
  const { results } = useContext(SearchContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 px-3 pb-6">
      <AnimatePresence initial={false}>
        {results.map((result) => {
          return <Result key={result.slug} {...result} />;
        })}
      </AnimatePresence>
    </div>
  );
}
