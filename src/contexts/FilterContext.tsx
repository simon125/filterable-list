import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

const FilterContext = createContext<FilterContextState | null>(null);

const useFilterContextState = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const alreadyExists = (newFilter: string) => {
    return filters.includes(newFilter);
  };

  const addFilter = (newFilter: string) => {
    if (!alreadyExists(newFilter)) {
      setFilters((prevFilters) => [...prevFilters, newFilter]);
    }
  };

  const removeFilter = (filterToRemove: string) => {
    const newFilters = filters.filter(
      (filterToCheck) => filterToCheck !== filterToRemove
    );
    setFilters(newFilters);
  };

  return {
    addFilter,
    removeFilter,
    setFilters,
    filters,
  };
};

type FilterContextState = ReturnType<typeof useFilterContextState>;

interface FilterContextProviderProps {
  children: ReactNode;
}

export const FilterContextProvider: FC<FilterContextProviderProps> = ({
  children,
}) => {
  const value = useFilterContextState();

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFiltersContext = () => {
  const ctx = useContext(FilterContext);

  if (!ctx) {
    throw new Error("Sth went wrong!");
  }

  return ctx;
};
