"use client";

import { useTheme } from "@emotion/react";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import PlusIconCirle from "@heroicons/react/24/outline/PlusCircleIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";
import BuildingLibraryIcon from "@heroicons/react/24/outline/BuildingLibraryIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import LockClosedIcon from "@heroicons/react/24/outline/LockClosedIcon";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";

export type IconName =
  | "plus"
  | "plus-circle"
  | "eye"
  | "eye-slash"
  | "building-library"
  | "user"
  | "lock-closed";

export type IconSize = "sm" | "md" | "lg";

export interface IconProps {
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

  const getIconStyle = (icColor: string, icSize: IconSize) => {
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

    return {
      color: icColor,
      ...iconSize[icSize],
    };
  };

  switch (name) {
    case "plus":
      return <PlusIcon style={getIconStyle(color, size)} />;
    case "plus-circle":
      return <PlusIconCirle style={getIconStyle(color, size)} />;
    case "eye":
      return <EyeIcon style={getIconStyle(color, size)} />;
    case "eye-slash":
      return <EyeSlashIcon style={getIconStyle(color, size)} />;
    case "building-library":
      return <BuildingLibraryIcon style={getIconStyle(color, size)} />;
    case "user":
      return <UserIcon style={getIconStyle(color, size)} />;
    case "lock-closed":
      return <LockClosedIcon style={getIconStyle(color, size)} />;
  }
};
