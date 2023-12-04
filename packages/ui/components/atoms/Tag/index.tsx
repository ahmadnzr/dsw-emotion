"use client";

import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";
import { Text } from "../Text";

interface TagProps {
  /**
   * Text inside tag
   */
  children?: string;

  /**
   * Tag backround color
   */
  backgroundColor?: string;

  /**
   * Tag text color
   */
  color?: string;

  /**
   * Tag size
   */
  size?: "sm" | "md";

  /**
   * Tag outlined
   */
  outlined?: boolean;

  /**
   * Additional style with className
   */
  style?: React.CSSProperties;

  /**
   * Additional style with className
   */
  className?: string;
}

export const Tag = ({
  children = "Text",
  backgroundColor = defaultTheme.colors.primary["200"],
  color = defaultTheme.colors.primary["400"],
  outlined = false,
  size = "md",
  style,
  className,
}: TagProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <TagStyled
      backgroundColor={backgroundColor}
      className={className}
      color={color}
      outlined={outlined}
      size={size}
      style={style}
    >
      <Text
        color={color}
        size={size === "md" ? "sm" : "xs"}
        style={{ lineHeight: 1 }}
        weight="semibold"
      >
        {children}
      </Text>
    </TagStyled>
  );
};

const TagStyled = styled.div(
  {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
  },
  ({
    backgroundColor,
    outlined,
    color,
    size,
  }: {
    backgroundColor: string;
    outlined: boolean;
    color: string;
    size: "sm" | "md";
  }) => ({
    backgroundColor,
    padding: size === "md" ? "4px 8px" : "2px 6px",
    border: `1px solid ${outlined ? color : backgroundColor}`,
  }),
);
