import React, { FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../style";

import { Typography } from "../Typography/Typography";

const StyledDetailsContainer = styled.div`
  display: flex;
  color: ${COLORS.darkGrayishCyan};

  span + span::before {
    content: "•";
    margin: 0 10px;
  }
`;

interface DetailsListProps {
  data: string[];
}

export const DetailsList: FC<DetailsListProps> = ({ data }) => {
  return (
    <StyledDetailsContainer>
      {data.map((item) => (
        <Typography as="span" key={item}>
          {item}
        </Typography>
      ))}
    </StyledDetailsContainer>
  );
};
