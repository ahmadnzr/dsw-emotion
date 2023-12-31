"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import {
  type FontSize,
  type ThemeType,
  defaultTheme,
  isEmptyObj,
} from "../../../utils";

interface LabelProps {
  /**
   * Text inside label
   * */
  children: string;

  /**
   * htmlFor */
  htmlFor?: string;

  /**
   * Text color */
  color?: string;

  /**
   * The size of the label
   * */
  size?: FontSize;

  /**
   * Addtional css styling with classname
   * */
  className?: string;

  /**
   * Addtional css styling with style (inline css)
   * */
  style?: React.CSSProperties;
}

export const Label = ({
  children,
  color,
  size = "md",
  className,
  style,
  htmlFor,
}: LabelProps) => {
  let theme = useTheme() as ThemeType;

  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <LabelStyled
      className={className}
      color={color || theme.colors.neutral["400"]}
      htmlFor={htmlFor}
      size={theme.fonts.size[size]}
      style={style}
    >
      {children}
    </LabelStyled>
  );
};

const LabelStyled = styled.label(
  {
    letterSpacing: "0.13px",
  },
  ({ color, size }: { color: string; size: string }) => ({
    color,
    fontSize: size,
  }),
);
