"use client";

import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import {
  type ThemeType,
  defaultTheme,
  isEmptyObj,
  Colors,
} from "../../../utils";

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface BadgeProps {
  /**
   * Budge Content
   */
  children?: React.ReactNode;

  /**
   * Dot Position
   */
  dotPosition?: Position;

  /**
   * Dot Color
   */
  dotColor?: string;

  /**
   * Additional style with className
   */
  className?: string;
}

export const Badge = ({
  className,
  children,
  dotPosition = "top-right",
  dotColor = Colors.error["400"],
}: BadgeProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <BadgeStyled className={className}>
      {children}
      <Dot bgColor={dotColor} position={dotPosition} />
    </BadgeStyled>
  );
};

const BadgeStyled = styled.div({}, () => ({
  position: "relative",
  width: "fit-content",
  height: "fit-content",
}));

const Dot = styled.div(
  {
    position: "absolute",
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    border: "1px solid #fff",

    "&::before": {
      content: '""',
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
  ({ position, bgColor }: { position: Position; bgColor: string }) => {
    const dotPosition: Record<Position, Record<string, string | number>> = {
      "top-right": {
        top: 0,
        right: "-2px",
      },
      "top-left": {
        top: 0,
        left: "-2px",
      },
      "bottom-left": {
        bottom: 0,
        left: "-2px",
      },
      "bottom-right": {
        bottom: 0,
        right: "2px",
      },
    };
    return {
      ...dotPosition[position],
      backgroundColor: bgColor,
    };
  },
);
