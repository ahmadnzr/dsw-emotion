"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import {
  type ThemeType,
  defaultTheme,
  isEmptyObj,
  reactSvgComponentToMarkupString,
} from "../../../utils";
import { Icon, type IconName, type IconProps } from "../Icon";

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
   * Input value
   */
  value?: string;

  /**
   * Input placeholder
   */
  placeholder?: string;

  /**
   * `onChange` event
   */
  onChange?: () => void;
}

export const Input = ({
  leftIcon,
  rightIcon,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <InputContainer leftIcon={leftIcon} rightIcon={rightIcon} theme={theme}>
      <InputStyled
        onChange={onChange}
        placeholder={placeholder}
        theme={theme}
        value={value}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div(
  {
    display: "flex",
    alignItems: "center",
    gap: "2px",
  },
  ({
    leftIcon,
    rightIcon,
    theme,
  }: {
    leftIcon?: IconName;
    rightIcon?: IconName;
    theme: ThemeType;
  }) => {
    const iconStyle = {
      content: '""',
      display: "inline-block",
      width: "18px",
      height: "18px",
      backgroundSize: "100% 100%",
      fontSize: "18px",
    };

    return {
      padding: `${theme.spacing.sm}px ${theme.spacing.md + 2}px`,
      borderRadius: `${theme.spacing.md}px`,
      border: `1px solid ${theme.colors.neutral.ultrasoft}`,
      color: theme.colors.neutral.ultrasoft,

      ...(leftIcon !== undefined
        ? {
            "&::before": {
              ...iconStyle,
              background: `url(${reactSvgComponentToMarkupString<IconProps>(
                Icon,
                {
                  name: leftIcon,
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
    flex: 1,
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  ({ theme }: { theme: ThemeType }) => ({
    fontSize: theme.fonts.size.md,
    color: theme.colors.neutral.hard,
    letterSpacing: "0.45px",
    fontWeight: theme.fonts.weight.normal,
  }),
);
