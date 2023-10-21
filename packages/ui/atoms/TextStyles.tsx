"use client";
import React from "react";
import styled from "@emotion/styled";

import { Colors } from "../helpers";

interface TextProps {
  color: string;
  size: "sm" | "md" | "lg" | "xl";
  weight: "bold" | "semibold" | "normal" | "thin";
}

interface TextStylesProps extends Partial<TextProps> {
  children?: React.ReactNode;
}

export const TextStyles = ({
  children,
  color = Colors.NEUTRAL.medium,
  size = "md",
  weight = "normal",
}: TextStylesProps) => {
  return (
    <Text color={color} size={size} weight={weight}>
      {children}
    </Text>
  );
};

const Text = styled.p({}, ({ color, size, weight }: TextProps) => {
  const fontSizes: Record<TextProps["size"], string> = {
    sm: "13px",
    md: "15px",
    lg: "17px",
    xl: "24px",
  };

  const fontWeights: Record<TextProps["weight"], number> = {
    bold: 700,
    semibold: 600,
    normal: 400,
    thin: 300,
  };

  return {
    color,
    fontWeight: fontWeights[weight],
    fontSize: fontSizes[size],
  };
});
