"use client";

import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import { defaultTheme, isEmptyObj, type ThemeType } from "../../../utils";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "contained" | "outlined" | "text";
type ButtonWidth = "fit-content" | "full";

interface ButtonProps {
  /**
   * Label for the button
   */
  children: React.ReactNode;

  /**
   * To create custom style from the parent of button.
   * see nested selector from emotion: https://emotion.sh/docs/nested
   */
  className?: string;

  /**
   * When button disable or not
   */
  disabled?: boolean;

  /**
   * Button type
   */
  type?: ButtonType;

  /**
   * Button variant
   */
  variant?: ButtonVariant;

  /**
   * Button width
   */
  width?: ButtonWidth;

  /**
   * Event when button click
   */
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  disabled = false,
  type = "button",
  variant = "contained",
  onClick,
  width = "fit-content",
}: ButtonProps) => {
  let theme = useTheme();
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <ButtonStyled
      className={className}
      disabled={disabled}
      onClick={onClick}
      theme={theme}
      type={type}
      variant={variant}
      width={width}
    >
      {children}
    </ButtonStyled>
  );
};

const getStyleVariant = (variant: ButtonVariant, theme: ThemeType) => {
  const variantStyled: Record<
    ButtonVariant,
    Record<string, string | Record<string, string>>
  > = {
    contained: {
      backgroundColor: theme.colors.primary.medium,
      border: `1px solid ${theme.colors.primary.medium}`,
      color: theme.colors.neutral.light,
      "&:hover": {
        backgroundColor: theme.colors.primary.hard,
        border: `1px solid ${theme.colors.primary.hard}`,
      },
    },
    outlined: {
      backgroundColor: theme.colors.neutral.light,
      color: theme.colors.primary.medium,
      border: `1px solid ${theme.colors.primary.medium}`,
      "&:hover": {
        backgroundColor: theme.colors.primary.light,
      },
    },
    text: {
      backgroundColor: "transparent",
      color: theme.colors.primary.medium,
      border: `1px solid transparent`,
      "&:hover": {
        backgroundColor: theme.colors.primary.light,
      },
    },
  };

  return variantStyled[variant];
};

const ButtonStyled = styled.button(
  {
    cursor: "pointer",
    boxSizing: "border-box",
  },
  ({
    theme,
    variant,
    width,
  }: {
    theme: ThemeType;
    variant: ButtonVariant;
    width: ButtonWidth;
  }) => {
    const variantStyled = getStyleVariant(variant, theme);

    return {
      padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
      borderRadius: theme.spacing.sm,
      fontWeight: theme.fonts.weight.semibold,
      fontSize: theme.fonts.size.sm,
      width: width === "full" ? "100%" : "fit-content",
      ...variantStyled,
    };
  },
);

/**
 * TODO:
 * 1. Create story for multiple size (ex. sm, md, lg)
 * 2.
 */
