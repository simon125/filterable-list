import React, { FC } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { COLORS } from "../../style";

import HEADER_BG_DESKTOP from "../../assets/bg-header-desktop.svg";
import HEADER_BG_MOBILE from "../../assets/bg-header-mobile.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import { useFiltersContext } from "../../contexts/FilterContext";

const StyledHeader = styled.header`
  background-color: ${COLORS.desaturatedDarkCyan};
  position: relative;
`;

const StyledSearchBar = styled(SearchBar)`
  position: absolute;
  left: 50%;
  bottom: 0;
  max-width: 1280px;
  width: 100%;
  transform: translate(-50%, 50%);
  box-shadow: 5px 5px 25px 9px rgba(0, 0, 0, 0.15);
  background-color: white;
`;

export const Header: FC = () => {
  const { filters } = useFiltersContext();
  const showSearchBar = filters.length > 0;

  return (
    <StyledHeader>
      <img
        style={{ width: "100%" }}
        src={HEADER_BG_DESKTOP}
        alt="background image"
      />
      <AnimatePresence>{showSearchBar && <StyledSearchBar />}</AnimatePresence>
    </StyledHeader>
  );
};
