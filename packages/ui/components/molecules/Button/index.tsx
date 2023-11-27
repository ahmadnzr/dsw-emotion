"use client";

import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import { defaultTheme, isEmptyObj, type ThemeType } from "../../../utils";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "contained" | "outlined" | "text";
type ButtonWidth = "fit-content" | "full";
type ButtonSize = "sm" | "md" | "lg";
type ButtonShape = "round" | "circle";

interface ButtonProps {
  /**
   * Label for the button
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
   * Button type
   */
  type?: ButtonType;

  /**
   * Button Size
   */
  size?: ButtonSize;

  /**
   * Button Shape
   */
  shape?: ButtonShape;

  /**
   * Button Shape
   */
  icon?: React.ReactNode;

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
  size = "md",
  shape,
  type = "button",
  variant = "contained",
  onClick,
  icon,
}: ButtonProps) => {
  let theme = useTheme();
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <ButtonStyled
      className={className}
      disabled={disabled}
      iconOnly={Boolean(icon) && Boolean(children)}
      onClick={onClick}
      shape={shape}
      size={size}
      theme={theme}
      type={type}
      variant={variant}
    >
      {icon ? <span className="btn-icon">{icon}</span> : null}
      {children ? <span>{children}</span> : null}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button(
  {
    outline: "none",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    fontWeight: "400",
    whiteSpace: "nowrap",
    textAlign: "center",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "& > span": {
      display: "inline-block",
    },
  },
  ({
    size,
    theme,
    variant,
    shape,
    iconOnly,
  }: {
    size: ButtonSize;
    theme: ThemeType;
    variant: ButtonVariant;
    shape?: ButtonShape;
    iconOnly?: boolean;
  }) => {
    const btnBorderStyle: Record<ButtonSize, React.CSSProperties> = {
      sm: {
        ...(shape === "round" ? { borderRadius: "24px" } : {}),
        ...(shape === "circle"
          ? {
              width: "24px",
              borderRadius: "50%",
              paddingInlineStart: 0,
              paddingInlineEnd: 0,
            }
          : {}),
        ...(!shape ? { borderRadius: "4px" } : {}),
      },
      md: {
        ...(shape === "round" ? { borderRadius: "32px" } : {}),
        ...(shape === "circle"
          ? {
              width: "32px",
              borderRadius: "50%",
              paddingInlineStart: 0,
              paddingInlineEnd: 0,
            }
          : {}),
        ...(!shape ? { borderRadius: "6px" } : {}),
      },
      lg: {
        ...(shape === "round" ? { borderRadius: "40px" } : {}),
        ...(shape === "circle"
          ? {
              width: "40px",
              borderRadius: "50%",
              paddingInlineStart: 0,
              paddingInlineEnd: 0,
            }
          : {}),
        ...(!shape ? { borderRadius: "8px" } : {}),
      },
    };

    const btnSizeStyle: Record<
      ButtonSize,
      React.CSSProperties | Record<string, React.CSSProperties>
    > = {
      sm: {
        height: "24px",
        padding: "0 7px",
        fontSize: "14px",
      },
      md: {
        height: "32px",
        padding: "4px 15px",
        fontSize: "14px",
      },
      lg: {
        height: "40px",
        padding: "6.428571428571429px 15px",
        fontSize: "16px",
      },
    };

    const btnVariantStyle: Record<
      ButtonVariant,
      React.CSSProperties | Record<string, React.CSSProperties>
    > = {
      contained: {
        color: theme.colors.neutral["100"],
        backgroundColor: theme.colors.primary["400"],
        "& .btn-icon > svg": {
          color: `${theme.colors.neutral["100"]} !important`,
        },
        "&:hover": {
          backgroundColor: theme.colors.primary["300"],
        },
        "&:active": {
          backgroundColor: theme.colors.primary["500"],
        },
      },
      outlined: {
        color: theme.colors.primary["400"],
        border: `1px solid ${theme.colors.primary["400"]}`,
        backgroundColor: theme.colors.neutral["100"],
        "& .btn-icon > svg": {
          color: `${theme.colors.primary["400"]} !important`,
        },
        "&:hover": {
          backgroundColor: theme.colors.primary["100"],
        },
      },
      text: {
        color: theme.colors.neutral["400"],
        backgroundColor: "transparent",
        "& .btn-icon > svg": {
          color: `${theme.colors.neutral["400"]} !important`,
        },
        "&:hover": {
          backgroundColor: theme.colors.primary["100"],
        },
      },
    };

    return {
      ...btnVariantStyle[variant],
      ...btnSizeStyle[size],
      ...btnBorderStyle[size],

      "& .btn-icon": {
        display: "inline-block",
        lineHeight: 0,
        ...(iconOnly
          ? {
              marginInlineEnd: "8px",
            }
          : {}),
      },
    };
  },
);

/**
 * TODO: Refactor this Button
 * 1. difference icon size base on button size
 * 2. more readable code
 * 3. support for full width button
 * */
