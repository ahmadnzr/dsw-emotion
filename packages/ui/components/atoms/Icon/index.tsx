"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import PlusIconCirle from "@heroicons/react/24/outline/PlusCircleIcon";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";

export type IconName = "plus" | "plus-circle";
export type IconSize = "sm" | "md" | "lg";

interface IconProps {
  /**
   * Please see : https://heroicons.dev/.
   * Change icon name from PascalCase to kebab-case. Also see the available icon from this option select
   */
  name: IconName;

  /**
   * Please see the configured theme.
   * icon size  = theme.spacing[sm|md|lg]*2
   */
  size?: IconSize;

  /**
   * Icon color
   */
  color?: string;
}

export const Icon = ({
  name,
  size = "md",
  color = defaultTheme.colors.neutral.medium,
}: IconProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  const getIconSize = (icSize: IconSize) => {
    const iconSize: Record<IconSize, { height: string; width: string }> = {
      sm: {
        width: `${theme.spacing.sm * 2}px`,
        height: `${theme.spacing.sm * 2}px`,
      },
      md: {
        width: `${theme.spacing.md * 2}px`,
        height: `${theme.spacing.md * 2}px`,
      },
      lg: {
        width: `${theme.spacing.lg * 2}px`,
        height: `${theme.spacing.lg * 2}px`,
      },
    };

    return iconSize[icSize];
  };

  switch (name) {
    case "plus":
      return <PlusIconStyled color={color} size={getIconSize(size)} />;
    case "plus-circle":
      return <PlusIconCircleStyled color={color} size={getIconSize(size)} />;
  }
};

const PlusIconStyled = styled(PlusIcon)(
  ({
    size,
    color,
  }: {
    size: { width: string; height: string };
    color: string;
  }) => ({
    ...size,
    color,
  }),
);

const PlusIconCircleStyled = styled(PlusIconCirle)(
  ({
    size,
    color,
  }: {
    size: { width: string; height: string };
    color: string;
  }) => ({
    ...size,
    color,
  }),
);
