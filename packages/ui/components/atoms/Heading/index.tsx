"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import {
  type ThemeType,
  type HeadingType,
  type FontWeight,
  type FontSize,
  defaultTheme,
  isEmptyObj,
  Colors,
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
   * font size
   */
  size?: FontSize;

  /**
   * Text color
   */
  color?: string;

  /**
   * Text color
   */
  weight?: FontWeight;

  /**
   * Addtional css styling with classname
   */
  className?: string;

  /**
   * Addtional css styling with style (inline css)
   */
  style?: React.CSSProperties;
}

export const Heading = ({
  children,
  level = "h1",
  color = Colors.neutral[400],
  className,
  style,
  size = "md",
  weight = "normal",
}: HeadingProps) => {
  let theme = useTheme() as ThemeType;

  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  const styles = {
    className,
    color,
    style,
    size: theme.fonts.size[size],
    weight: theme.fonts.weight[weight],
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
    case "h3":
      return <H3Styled {...styles}>{children}</H3Styled>;
    case "h4":
      return <H4Styled {...styles}>{children}</H4Styled>;
  }
};

const defaultStyles = {
  letterSpacing: "0.13px",
};

const defaultPropStyle = ({
  color,
  size,
  weight,
}: {
  color: string;
  size: string;
  weight: number;
}) => ({
  color,
  fontSize: size,
  fontWeight: weight,
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

const H3Styled = styled.h3(
  {
    ...defaultStyles,
  },
  defaultPropStyle,
);

const H4Styled = styled.h4(
  {
    ...defaultStyles,
  },
  defaultPropStyle,
);
