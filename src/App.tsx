import { FC } from "react";
import styled from "styled-components";
import { Header } from "./components";
import { JobList } from "./components/JobList/JobList";
import { FilterContextProvider } from "./contexts/FilterContext";
import { GlobalStyles } from "./style";

const StyledMain = styled.main``;

const App: FC = () => {
  return (
    <FilterContextProvider>
      <StyledMain>
        <GlobalStyles />
        <Header />
        <JobList />
      </StyledMain>
    </FilterContextProvider>
  );
};

export default App;
