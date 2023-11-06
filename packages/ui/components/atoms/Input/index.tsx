"use client";

import React, { forwardRef, type ForwardedRef } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import {
  type ThemeType,
  defaultTheme,
  isEmptyObj,
  reactSvgComponentToMarkupString,
} from "../../../utils";
import { Icon, type IconName, type IconProps } from "../Icon";
import { Text } from "../Text";

interface InputProps {
  /**
   * Left icon of the Input, please see Icon component to see icon name
   */
  leftIcon?: IconName;

  /**
   * Right icon of the Input, please see Icon component to see icon name
   */
  rightIcon?: IconName;

  /**
   * Input name
   */
  name?: string;

  /**
   * Input type
   */
  type?: string;

  /**
   * Input id
   */
  id?: string;

  /**
   * Input value
   */
  value?: string;

  /**
   * Input autocomplete
   */
  autoComplete?: string;

  /**
   * Input placeholder
   */
  placeholder?: string;

  /**
   * Error message
   */
  error?: string;

  /**
   * Additional style with classname
   */
  className?: string;

  /**
   * `onChange` event
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(function MyInput(
  {
    leftIcon,
    rightIcon,
    value,
    name,
    onChange,
    placeholder,
    autoComplete,
    type = "text",
    id,
    className,
    error,
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <Container>
      <InputContainer
        isError={Boolean(error)}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        theme={theme}
      >
        <InputStyled
          autoComplete={autoComplete}
          className={className}
          id={id}
          isError={Boolean(error)}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          theme={theme}
          type={type}
          value={value}
        />
      </InputContainer>
      {error ? (
        <Text color={theme.colors.error.hard} size="xs">
          {`* ${error}`}
        </Text>
      ) : null}
    </Container>
  );
});

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const InputContainer = styled.div(
  {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  ({
    leftIcon,
    rightIcon,
    theme,
    isError,
  }: {
    leftIcon?: IconName;
    rightIcon?: IconName;
    theme: ThemeType;
    isError: boolean;
  }) => {
    const iconStyle = {
      content: '""',
      display: "inline-block",
      width: theme.fonts.size.lg,
      height: theme.fonts.size.lg,
      backgroundSize: "100% 100%",
    };

    return {
      padding: `${theme.spacing.sm}px ${theme.spacing.md + 2}px`,
      borderRadius: `${theme.spacing.md}px`,
      border: `1px solid ${
        isError ? theme.colors.error.hard : theme.colors.neutral.medium
      }`,
      color: theme.colors.neutral.medium,

      ...(leftIcon !== undefined
        ? {
            "&::before": {
              ...iconStyle,
              background: `url(${reactSvgComponentToMarkupString<IconProps>(
                Icon,
                {
                  name: leftIcon,
                  color: isError
                    ? theme.colors.error.hard
                    : theme.colors.neutral.medium,
                },
              )}) no-repeat center`,
            },
          }
        : {}),

      ...(rightIcon !== undefined
        ? {
            "&::after": {
              ...iconStyle,
              background: `url(${reactSvgComponentToMarkupString<IconProps>(
                Icon,
                {
                  name: rightIcon,
                },
              )}) no-repeat center`,
            },
          }
        : {}),
    };
  },
);

const InputStyled = styled.input(
  {
    margin: 0,
    padding: 0,
    flex: 1,
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  ({ theme, isError }: { theme: ThemeType; isError: boolean }) => ({
    fontSize: theme.fonts.size.md,
    color: isError ? theme.colors.error.hard : theme.colors.neutral.hard,
    letterSpacing: "0.45px",
    fontWeight: theme.fonts.weight.normal,

    "&::placeholder": {
      color: theme.colors.neutral.medium,
    },
  }),
);
