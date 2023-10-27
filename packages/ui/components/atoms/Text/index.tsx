"use client";

import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import { type ThemeType } from "../../../helpers";
import { defaultTheme } from "../../../helpers/lib/defaultTheme";

type SIZE = "xs" | "sm" | "md" | "lg";
type WEIGHT = "bold" | "semibold" | "normal" | "thin";

interface TextProps {
  /**
   * Content of the text
   */
  children?: React.ReactNode;
  /**
   * The size of the text
   */
  size?: SIZE;
  /**
   * Which color to use
   */
  color?: string;
  /**
   * The weight of the text
   */
  weight?: WEIGHT;
}

export const Text = ({
  children,
  size = "md",
  weight = "normal",
  color,
}: TextProps) => {
  const theme = useTheme() as ThemeType;

  return (
    <TextStyles
      color={color || theme.colors?.neutral.hard}
      size={size}
      weight={weight}
    >
      {children}
    </TextStyles>
  );
};

const listFontSize: Record<SIZE, string> = {
  xs: "10px",
  sm: "14px",
  md: "16px",
  lg: "20px",
};

const listFontWeight: Record<WEIGHT, number> = {
  bold: 700,
  semibold: 600,
  normal: 400,
  thin: 300,
};
const TextStyles = styled.p(
  {
    margin: 0,
    fontStyle: "normal",
    letterSpacing: "0.15px",
  },
  ({
    size = "md",
    weight = "normal",
    color = defaultTheme.colors?.neutral.medium,
  }: {
    size?: SIZE;
    weight?: WEIGHT;
    color?: string;
  }) => ({
    fontSize: listFontSize[size],
    fontWeight: listFontWeight[weight],
    color,
  }),
);
