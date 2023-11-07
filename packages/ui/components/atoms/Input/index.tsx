"use client";

import React, { forwardRef, useState, type ForwardedRef } from "react";
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
   * Eye Button
   */
  eyeButton?: boolean;

  /**
   * Action On Eye Button clicked
   */

  onEyeButtonClick?: () => void;

  /**
   * `onChange` event
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(function MyInput(
  {
    leftIcon,
    eyeButton,
    onEyeButtonClick,
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

  const [openEye, setOpenEye] = useState(false);

  const handleOnEyeButton = () => {
    setOpenEye(!openEye);

    if (onEyeButtonClick) {
      onEyeButtonClick();
    }
  };

  return (
    <Container>
      <InputContainer
        isError={Boolean(error)}
        leftIcon={leftIcon}
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
        {eyeButton ? (
          <EyeButtonContainer>
            <EyeButton onClick={handleOnEyeButton} theme={theme}>
              <Icon
                color={
                  error ? theme.colors.error.hard : theme.colors.neutral.medium
                }
                name={openEye ? "eye" : "eye-slash"}
                size="md"
              />
            </EyeButton>
          </EyeButtonContainer>
        ) : null}
      </InputContainer>
      {error ? (
        <Text className="error-text" color={theme.colors.error.hard} size="xs">
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

  "& .error-text": {
    marginLeft: "4px",
  },
});

const InputContainer = styled.div(
  {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  ({
    leftIcon,
    theme,
    isError,
  }: {
    leftIcon?: IconName;
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

      "&:hover": {
        cursor: "text",
        border: `1px solid ${theme.colors.primary.hard}`,
      },

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

    "&::before": {
      content: '"OK"',
    },
  }),
);

const EyeButtonContainer = styled.div({
  position: "relative",
  width: "24px",
});

const EyeButton = styled.div(
  {
    position: "absolute",
    cursor: "pointer",
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  ({ theme }: { theme: ThemeType }) => ({
    "&:hover": {
      backgroundColor: theme.colors.primary.soft,
    },
  }),
);
