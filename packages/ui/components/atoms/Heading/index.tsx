"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import {
  type ThemeType,
  type HeadingType,
  defaultTheme,
  isEmptyObj,
} from "../../../utils";

interface HeadingProps {
  /**
   * Text inside Heading
   */
  children: string;

  /**
   * Heading level
   */
  level?: HeadingType;

  /**
   * Text color
   */
  color?: string;

  /**
   * Addtional css styling with classname
   */
  className?: string;

  /**
   * Addtional css styling with style (inline css)
   */
  style?: Record<string, number | string>;
}

export const Heading = ({
  children,
  level = "h1",
  color,
  className,
  style,
}: HeadingProps) => {
  let theme = useTheme() as ThemeType;

  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  const styles = {
    className,
    color: color || theme.colors.neutral.hard,
    style,
    size: theme.fonts.heading[level],
  };

  // Cannot use autodocs from storybook when use this approach
  // const HeadingLevel: Record<HeadingType, React.ReactNode> = {
  //   h1: <H1Styled {...styles}>{children}</H1Styled>,
  //   h2: <H2Styled {...styles}>{children}</H2Styled>,
  // };

  switch (level) {
    case "h1":
      return <H1Styled {...styles}>{children}</H1Styled>;
    case "h2":
      return <H2Styled {...styles}>{children}</H2Styled>;
  }
};

const defaultStyles = {
  letterSpacing: "0.13px",
};

const defaultPropStyle = ({
  color,
  size,
}: {
  color: string;
  size: string;
}) => ({
  color,
  fontSize: size,
});

const H1Styled = styled.h1(
  {
    ...defaultStyles,
  },
  defaultPropStyle,
);

const H2Styled = styled.h2(
  {
    ...defaultStyles,
  },
  defaultPropStyle,
);
