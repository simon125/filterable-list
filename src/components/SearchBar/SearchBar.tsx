import React, { FC } from "react";
import { AnimatePresence, motion, usePresence, Variants } from "framer-motion";
import styled from "styled-components";
import { useFiltersContext } from "../../contexts/FilterContext";
import { TagWithButton } from "../TagWithButton/TagWithButton";

const StyledSearchBar = styled.div`
  min-height: 60px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 50px;
`;

interface SearchBarProps {
  className?: string;
}

const tagsVariants: Variants = {
  initial: { x: 15, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  out: { y: -15, scale: 0.98, opacity: 0 },
};

export const SearchBar: FC<SearchBarProps> = ({ className }) => {
  const { filters, removeFilter, setFilters } = useFiltersContext();

  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0, y: -30 }}
      animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
      exit={{ scale: 0.96, opacity: 0, y: -30 }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        type: "spring",
        stiffness: 120,
        delayChildren: 0.55,
      }}
    >
      <StyledSearchBar className={className}>
        <AnimatePresence>
          {filters.map((filter) => (
            <motion.div
              layout
              key={filter}
              variants={tagsVariants}
              initial="initial"
              animate="animate"
              exit="out"
              transition={{ type: "just" }}
            >
              <TagWithButton
                label={filter}
                onClick={() => removeFilter(filter)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </StyledSearchBar>
    </motion.div>
  );
};
