"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type FontSize, type ThemeType } from "../../../helpers";
import { defaultTheme } from "../../../helpers/lib/defaultTheme";

interface LabelProps {
  /**
   * Text inside label
   * */
  children: string;

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
  style?: Record<string, number | string>;
}

export const Label = ({
  children,
  color,
  size = "md",
  className,
  style,
}: LabelProps) => {
  const theme = useTheme() as ThemeType;

  return (
    <LabelStyled
      className={className}
      color={color || theme.colors.neutral.hard}
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
  ({
    color = defaultTheme.colors.neutral.medium,
    size,
  }: {
    color?: string;
    size: string;
  }) => ({
    color,
    fontSize: size,
  }),
);
