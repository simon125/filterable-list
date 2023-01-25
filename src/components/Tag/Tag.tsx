import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { COLORS } from "../../style";

const StyledTag = styled.div<Pick<TagProps, "noHoverEffect">>`
  color: ${COLORS.desaturatedDarkCyan};
  background-color: ${COLORS.lightGrayishCyanBg};
  padding: 10px;
  border-radius: 3px;
  transition: all 0.2s;
  max-width: fit-content;

  ${({ noHoverEffect }) =>
    !noHoverEffect &&
    css`
      &:hover {
        color: white;
        background-color: ${COLORS.desaturatedDarkCyan};
        cursor: pointer;
      }
    `}
`;

interface TagProps {
  children: ReactNode;
  noHoverEffect?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Tag: FC<TagProps> = ({
  children,
  onClick,
  noHoverEffect,
  className,
}) => {
  return (
    <motion.div
      whileTap={{ scale: noHoverEffect ? 1 : 0.8 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 140 }}
    >
      <StyledTag
        className={className}
        onClick={onClick}
        noHoverEffect={noHoverEffect}
      >
        {children}
      </StyledTag>
    </motion.div>
  );
};
