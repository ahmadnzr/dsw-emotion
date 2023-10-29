"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type ThemeType, type HeadingType } from "../../../helpers";
import { defaultTheme } from "../../../helpers/lib/defaultTheme";

interface HeadingProps {
  /**
   * Text inside Heading 1
   * */
  children: string;

  /**
   * Heading level
   * */
  level?: HeadingType;

  /**
   * Text color */
  color?: string;

  /**
   * Addtional css styling with classname
   * */
  className?: string;

  /**
   * Addtional css styling with style (inline css)
   * */
  style?: Record<string, number | string>;
}

export const Heading = (props: HeadingProps) => {
  const headingProps = props;
  const theme = useTheme() as ThemeType;

  const getHeadingContent = (params: HeadingProps) => {
    const { children, level = "h1", color, className, style } = params;
    const styles = {
      className,
      color: color || theme.colors.neutral.hard,
      style,
      size: theme.fonts.heading[level],
    };

    const HeadingLevel: Record<HeadingType, JSX.Element> = {
      h1: <H1Styled {...styles}>{children}</H1Styled>,
      h2: <H2Styled {...styles}>{children}</H2Styled>,
    };

    return HeadingLevel[level];
  };

  return getHeadingContent(headingProps);
};

const H1Styled = styled.h1(
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

const H2Styled = styled.h2(
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
