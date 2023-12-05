"use client";

import React from "react";
import styled from "@emotion/styled";
import { clsx } from "clsx";
import { useTheme } from "@emotion/react";

import { defaultTheme, isEmptyObj, type ThemeType } from "../../../utils";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "contained" | "outlined" | "text" | "link";
type ButtonWidth = "fit-content" | "full";
type ButtonSize = "sm" | "md" | "lg";
type ButtonShape = "round" | "circle";

interface ButtonProps {
  /**
   * Text on **`button`**
   */
  children?: React.ReactNode;

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
   * Event when button click
   */
  onClick?: () => void;

  /**
   * Button Shape
   */
  shape?: ButtonShape;

  /**
   * Button Size
   */
  size?: ButtonSize;

  /**
   * Custom styling with style
   */
  style?: React.CSSProperties;

  /**
   * Button type
   */
  type?: ButtonType;

  /**
   * Button Shape
   */
  icon?: React.JSX.Element;

  /**
   * Button variant
   */
  variant?: ButtonVariant;

  /**
   * Button width
   */
  width?: ButtonWidth;
}

export const NewButton = ({
  children,
  className,
  disabled = false,
  size = "md",
  // shape,
  style,
  type = "button",
  variant = "contained",
  onClick,
  // icon,
  width,
}: ButtonProps) => {
  let theme = useTheme();
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <ButtonStyled
      className={clsx(
        `button__${variant}`,
        `button_${size}`,
        width === "full" && `button_width_${width}`,
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
    >
      {children ? <span>{children}</span> : null}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button(
  {
    outline: "none",
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s ease",
  },
  ({ theme }: { theme: ThemeType }) => {
    return {
      "&.button_sm": {
        padding: "0 7px",
        fontSize: "14px",
        borderRadius: "4px",
      },
      "&.button_md": {
        padding: "4px 15px",
        fontSize: "14px",
        borderRadius: "6px",
      },
      "&.button_lg": {
        padding: "6px 15px",
        fontSize: "16px",
        borderRadius: "8px",
      },
      "&.button_width_full": {
        width: "100%",
      },

      "&.button__contained": {
        color: theme.colors.neutral[100],
        backgroundColor: theme.colors.primary[400],
        border: `1px solid ${theme.colors.primary[400]}`,

        "&:hover": {
          backgroundColor: theme.colors.primary[300],
          border: `1px solid ${theme.colors.primary[300]}`,
        },
        "&:active": {
          backgroundColor: theme.colors.primary[400],
        },
      },
      "&.button__outlined": {
        color: theme.colors.primary[400],
        backgroundColor: theme.colors.neutral[100],
        border: `1px solid ${theme.colors.primary[400]}`,

        "&:hover": {
          backgroundColor: theme.colors.primary[100],
        },
        "&:active": {
          backgroundColor: theme.colors.primary[200],
        },
      },
      "&.button__text": {
        color: theme.colors.primary[500],
        backgroundColor: "transparent",
        border: "1px solid transparent",

        "&:hover": {
          backgroundColor: theme.colors.primary[100],
        },
        "&:active": {
          backgroundColor: theme.colors.primary[200],
        },
      },
      "&.button__link": {
        color: theme.colors.primary[500],
        backgroundColor: "transparent",

        "&:where(.button_sm, .button_md, .button_lg)": {
          padding: 0,
          borderRadius: 0,
        },
        "&:hover": {
          color: theme.colors.primary[300],
        },
        "&:active": {
          color: theme.colors.primary[500],
        },
      },
    };
  },
);

/**
 * TODO: Refactor this Button
 * 1. difference icon size base on button size
 * 2. more readable code
 * 3. support for full width button
 * 4. get spacing from theme
 * 5. error button
 * */
