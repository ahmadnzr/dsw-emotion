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

  /**
   * Additional style with style properties
   */
  style?: React.CSSProperties;

  /**
   * Additional style with className
   */
  className?: string;

  /**
   * custom tag for text (span or p)
   * */
  tag?: "p" | "span";
}

export const Text = ({
  children,
  size = "md",
  weight = "normal",
  color,
  style,
  className,
  tag = "span",
}: TextProps) => {
  let theme = useTheme() as ThemeType;

  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  if (tag === "span") {
    return (
      <TextStyleSpan
        className={className}
        color={color || theme.colors.neutral.hard}
        size={theme.fonts.size[size]}
        style={style}
        weight={theme.fonts.weight[weight]}
      >
        {children}
      </TextStyleSpan>
    );
  }

  return (
    <TextStyles
      className={className}
      color={color || theme.colors.neutral.hard}
      size={theme.fonts.size[size]}
      style={style}
      weight={theme.fonts.weight[weight]}
    >
      {children}
    </TextStyles>
  );
};

interface TextStyleInterface {
  size: string;
  weight: number;
  color: string;
}

const getTextStyles = ({ size, weight, color }: TextStyleInterface) => ({
  margin: 0,
  fontStyle: "normal",
  letterSpacing: "0.15px",
  fontSize: size,
  fontWeight: weight,
  color,
});

const TextStyleSpan = styled.span(
  {},
  ({ size, weight, color }: TextStyleInterface) => ({
    ...getTextStyles({ size, weight, color }),
  }),
);

const TextStyles = styled.p(
  {},
  ({ size, weight, color }: TextStyleInterface) => ({
    ...getTextStyles({ size, weight, color }),
  }),
);
