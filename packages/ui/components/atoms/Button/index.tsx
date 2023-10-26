"use client";

import React from "react";
import styled from "@emotion/styled";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "primary" | "secondary" | "text";
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
  variant = "primary",
  onClick,
  width = "fit-content",
}: ButtonProps) => {
  return (
    <ButtonStyles
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
      width={width}
    >
      {children}
    </ButtonStyles>
  );
};

const ButtonStyles = styled.button(
  {
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s ease",
    "&:hover": {
      opacity: 0.9,
    },
  },
  ({ variant, width }: { variant: ButtonVariant; width: ButtonWidth }) => ({
    backgroundColor: variant === "primary" ? "#0061A7" : "transparent",
    width: width === "fit-content" ? "fit-content" : "100%",
  }),
);
