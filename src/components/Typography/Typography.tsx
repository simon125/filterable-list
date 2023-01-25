import React, { FC, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  children,
  as = "p",
  className,
}) => {
  const Component = as;

  return <Component className={className}>{children}</Component>;
};
