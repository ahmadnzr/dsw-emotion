"use client";

import React from "react";
import { clsx } from "clsx";
import { useTheme } from "@emotion/react";

import { defaultTheme, isEmptyObj } from "../../../utils";
import { Icon, type IconName } from "../../atoms";

import { ButtonStyled } from "./styles";

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
  leftIcon?: IconName;

  /**
   * Button variant
   */
  variant?: ButtonVariant;

  /**
   * Button width
   */
  width?: ButtonWidth;
}

export const Button = ({
  children,
  className,
  disabled = false,
  size = "md",
  shape,
  style,
  type = "button",
  variant = "contained",
  onClick,
  leftIcon,
  width,
}: ButtonProps) => {
  let theme = useTheme();
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <ButtonStyled
      className={clsx(
        `button-${variant}`,
        `button_${size}`,
        shape && `button_${size}_${shape} button_${shape}`,
        width === "full" && `button_width_${width}`,
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
    >
      {leftIcon ? (
        <Icon
          className={clsx(`button-${variant}__icon`, `button__icon_${size}`)}
          name={leftIcon}
        />
      ) : null}
      {children ? <span>{children}</span> : null}
    </ButtonStyled>
  );
};
