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
  backgroundColor = defaultTheme.colors.primary.soft,
  color = defaultTheme.colors.primary.medium,
  outlined = false,
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
      style={style}
    >
      <Text color={color} size="xs" weight="semibold">
        {children}
      </Text>
    </TagStyled>
  );
};

const TagStyled = styled.div(
  {
    padding: "2px 8px",
    borderRadius: "4px",
    width: "fit-content",
  },
  ({
    backgroundColor,
    outlined,
    color,
  }: {
    backgroundColor: string;
    outlined: boolean;
    color: string;
  }) => ({
    backgroundColor,
    border: `1px solid ${outlined ? color : backgroundColor}`,
  }),
);
