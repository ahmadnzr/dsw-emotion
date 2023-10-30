"use client";

import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import {
  type ThemeType,
  type FontSize,
  type FontWeight,
  isEmptyObj,
  defaultTheme,
} from "../../../utils";

interface TextProps {
  /**
   * Content of the text
   */
  children?: React.ReactNode;
  /**
   * The size of the text
   */
  size?: FontSize;
  /**
   * Which color to use
   */
  color?: string;
  /**
   * The weight of the text
   */
  weight?: FontWeight;
}

export const Text = ({
  children,
  size = "md",
  weight = "normal",
  color,
}: TextProps) => {
  let theme = useTheme() as ThemeType;

  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }
  return (
    <TextStyles
      color={color || theme.colors.neutral.hard}
      size={theme.fonts.size[size]}
      weight={theme.fonts.weight[weight]}
    >
      {children}
    </TextStyles>
  );
};

const TextStyles = styled.p(
  {
    margin: 0,
    fontStyle: "normal",
    letterSpacing: "0.15px",
  },
  ({
    size,
    weight,
    color,
  }: {
    size: string;
    weight: number;
    color: string;
  }) => ({
    fontSize: size,
    fontWeight: weight,
    color,
  }),
);
