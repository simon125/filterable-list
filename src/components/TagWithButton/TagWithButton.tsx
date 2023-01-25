import React, { FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../style";
import { Tag } from "../Tag/Tag";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledTag = styled(Tag)`
  border-radius: 3px 0 0 3px;
`;

const StyledRemoveButton = styled.button`
  font-size: 1.6rem;
  color: white;
  background-color: ${COLORS.desaturatedDarkCyan};
  border: none;
  cursor: pointer;
  border-radius: 0 3px 3px 0;

  &:hover {
    background-color: ${COLORS.veryDarkGrayishCyan};
  }
`;

interface TagWithButtonProps {
  label: string;
  onClick: () => void;
}

export const TagWithButton: FC<TagWithButtonProps> = ({ label, onClick }) => {
  return (
    <StyledContainer>
      <StyledTag noHoverEffect>{label}</StyledTag>
      <StyledRemoveButton onClick={onClick}>&times;</StyledRemoveButton>
    </StyledContainer>
  );
};
