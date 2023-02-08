import React, { useState } from "react";
import { placeholderResults } from "components/search/utils/placeholderResults";

interface DefaultContext {
  results: typeof placeholderResults[0][];
  filterResults: Function;
  filters: string[];
}

const defaultContext: DefaultContext = {
  results: [],
  filterResults: (filter: string) => ({}),
  filters: [],
};

export const SearchContext = React.createContext(defaultContext);

interface Props {
  children: JSX.Element;
}

export const SearchContextProvider = ({ children }: Props) => {
  const [results, setResults] = useState(placeholderResults);
  const [filters, setFilters] = useState<string[]>([]);

  const filterResults = (filter?: string) => {
    if (!filter) {
      setFilters([]);
      return;
    }

    setFilters((pv) =>
      pv.includes(filter) ? pv.filter((val) => val !== filter) : [...pv, filter]
    );
  };

  return (
    <SearchContext.Provider
      value={{
        results,
        filterResults,
        filters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
