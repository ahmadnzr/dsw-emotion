"use client";

import { useTheme } from "@emotion/react";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import PlusIconCirle from "@heroicons/react/24/outline/PlusCircleIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";
import BuildingLibraryIcon from "@heroicons/react/24/outline/BuildingLibraryIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import LockClosedIcon from "@heroicons/react/24/outline/LockClosedIcon";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import BankNotesIcon from "@heroicons/react/24/outline/BanknotesIcon";
import ClipboardDocumentIcon from "@heroicons/react/24/outline/ClipboardDocumentIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
/**
 * Solid Icon
 */
import PlusIconSolid from "@heroicons/react/24/solid/PlusIcon";
import PlusIconCirleSolid from "@heroicons/react/24/solid/PlusCircleIcon";
import EyeIconSolid from "@heroicons/react/24/solid/EyeIcon";
import EyeSlashIconSolid from "@heroicons/react/24/solid/EyeSlashIcon";
import BuildingLibraryIconSolid from "@heroicons/react/24/solid/BuildingLibraryIcon";
import UserIconSolid from "@heroicons/react/24/solid/UserIcon";
import LockClosedIconSolid from "@heroicons/react/24/solid/LockClosedIcon";
import BellIconSolid from "@heroicons/react/24/solid/BellIcon";
import ChevronDownIconSolid from "@heroicons/react/24/solid/ChevronDownIcon";
import ChevronUpIconSolid from "@heroicons/react/24/solid/ChevronUpIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import BankNotesIconSolid from "@heroicons/react/24/solid/BanknotesIcon";
import ClipboardDocumentIconSolid from "@heroicons/react/24/solid/ClipboardDocumentIcon";
import Cog6ToothIconSolid from "@heroicons/react/24/solid/Cog6ToothIcon";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";

export type IconName =
  | "plus"
  | "plus-circle"
  | "eye"
  | "eye-slash"
  | "building-library"
  | "user"
  | "lock-closed"
  | "bell-icon"
  | "chevron-down"
  | "chevron-up"
  | "home"
  | "bank-notes"
  | "clipboard-document"
  | "cog-6-tooth";

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
   * type of icon
   */
  type?: "outline" | "filled";

  /**
   * Icon color
   */
  color?: string;

  /**
   * Additional classname
   */
  className?: string;
}

export const Icon = ({
  name,
  size = "md",
  type = "outline",
  color = defaultTheme.colors.neutral.medium,
  className,
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
        width: "12px",
        height: "12px",
      },
      md: {
        width: "18px",
        height: "18px",
      },
      lg: {
        width: "24px",
        height: "24px",
      },
    };

    return {
      color: icColor,
      ...iconSize[icSize],
    };
  };

  if (type === "filled") {
    switch (name) {
      case "plus":
        return (
          <PlusIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "plus-circle":
        return (
          <PlusIconCirleSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "eye":
        return (
          <EyeIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "eye-slash":
        return (
          <EyeSlashIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "building-library":
        return (
          <BuildingLibraryIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "user":
        return (
          <UserIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "lock-closed":
        return (
          <LockClosedIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "bell-icon":
        return (
          <BellIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "chevron-down":
        return (
          <ChevronDownIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "chevron-up":
        return (
          <ChevronUpIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "home":
        return (
          <HomeIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "bank-notes":
        return (
          <BankNotesIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "clipboard-document":
        return (
          <ClipboardDocumentIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
      case "cog-6-tooth":
        return (
          <Cog6ToothIconSolid
            className={className}
            style={getIconStyle(color, size)}
          />
        );
    }
  }

  switch (name) {
    case "plus":
      return (
        <PlusIcon className={className} style={getIconStyle(color, size)} />
      );
    case "plus-circle":
      return (
        <PlusIconCirle
          className={className}
          style={getIconStyle(color, size)}
        />
      );
    case "eye":
      return (
        <EyeIcon className={className} style={getIconStyle(color, size)} />
      );
    case "eye-slash":
      return (
        <EyeSlashIcon className={className} style={getIconStyle(color, size)} />
      );
    case "building-library":
      return (
        <BuildingLibraryIcon
          className={className}
          style={getIconStyle(color, size)}
        />
      );
    case "user":
      return (
        <UserIcon className={className} style={getIconStyle(color, size)} />
      );
    case "lock-closed":
      return (
        <LockClosedIcon
          className={className}
          style={getIconStyle(color, size)}
        />
      );
    case "bell-icon":
      return (
        <BellIcon className={className} style={getIconStyle(color, size)} />
      );
    case "chevron-down":
      return (
        <ChevronDownIcon
          className={className}
          style={getIconStyle(color, size)}
        />
      );
    case "chevron-up":
      return (
        <ChevronUpIcon
          className={className}
          style={getIconStyle(color, size)}
        />
      );
    case "home":
      return (
        <HomeIcon className={className} style={getIconStyle(color, size)} />
      );
    case "bank-notes":
      return (
        <BankNotesIcon
          className={className}
          style={getIconStyle(color, size)}
        />
      );
    case "clipboard-document":
      return (
        <ClipboardDocumentIcon
          className={className}
          style={getIconStyle(color, size)}
        />
      );
    case "cog-6-tooth":
      return (
        <Cog6ToothIcon
          className={className}
          style={getIconStyle(color, size)}
        />
      );
  }
};
