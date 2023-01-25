import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "../../style";

const StyledBadge = styled.div<{ variant: keyof typeof COLORS }>`
  display: inline-block;
  padding: 7px;
  padding-bottom: 5px;
  border-radius: 17px;
  background-color: ${({ variant }) => COLORS[variant]};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
`;

interface BadgeProps {
  children: ReactNode;
  variant: keyof typeof COLORS;
}

export const Badge: FC<BadgeProps> = ({ variant, children }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};
