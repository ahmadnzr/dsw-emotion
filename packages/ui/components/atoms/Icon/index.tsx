"use client";

import { useTheme } from "@emotion/react";
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
import DocumentDuplicateIconSolid from "@heroicons/react/24/solid/DocumentDuplicateIcon";
import TrashIconSolid from "@heroicons/react/24/solid/TrashIcon";
import PencilIconSolid from "@heroicons/react/24/solid/PencilIcon";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";

import {
  BankNotesIconStyled,
  BellIconStyled,
  BuildingLibraryIconStyled,
  ChevronDownIconStyled,
  ChevronUpIconStyled,
  ClipboardDocumentIconStyled,
  Cog6ToothIconStyled,
  DocumentDuplicateIconStyled,
  EyeIconStyled,
  EyeSlashIconStyled,
  HomeIconStyled,
  LockClosedIconStyled,
  PencilIconStyled,
  PlusCircleIconStyled,
  PlusIconStyled,
  TrashIconStyled,
  UserIconStyled,
} from "./outlined";

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
  | "cog-6-tooth"
  | "document-duplicate"
  | "pencil"
  | "trash";

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

  /**
   * Additional style
   */
  style?: React.CSSProperties;
}

export interface IconStyleProps extends IconProps {
  size: IconSize;
  theme: ThemeType;
}

export const Icon = ({
  /** for better documentation generated automatically with storybook,
   * please dont't remove these default props
   * */
  name,
  size = "md",
  type = "outline",
  color = defaultTheme.colors.neutral["300"],
  className,
  style,
}: IconProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  const props = { theme, name, size, type, color, className, style };

  if (type === "filled") {
    switch (name) {
      case "plus":
        return <PlusIconSolid {...props} />;
      case "plus-circle":
        return <PlusIconCirleSolid {...props} />;
      case "eye":
        return <EyeIconSolid {...props} />;
      case "eye-slash":
        return <EyeSlashIconSolid {...props} />;
      case "building-library":
        return <BuildingLibraryIconSolid {...props} />;
      case "user":
        return <UserIconSolid {...props} />;
      case "lock-closed":
        return <LockClosedIconSolid {...props} />;
      case "bell-icon":
        return <BellIconSolid {...props} />;
      case "chevron-down":
        return <ChevronDownIconSolid {...props} />;
      case "chevron-up":
        return <ChevronUpIconSolid {...props} />;
      case "home":
        return <HomeIconSolid {...props} />;
      case "bank-notes":
        return <BankNotesIconSolid {...props} />;
      case "clipboard-document":
        return <ClipboardDocumentIconSolid {...props} />;
      case "cog-6-tooth":
        return <Cog6ToothIconSolid {...props} />;
      case "document-duplicate":
        return <DocumentDuplicateIconSolid {...props} />;
      case "pencil":
        return <PencilIconSolid {...props} />;
      case "trash":
        return <TrashIconSolid {...props} />;
    }
  }

  switch (name) {
    case "plus":
      return <PlusIconStyled {...props} />;
    case "plus-circle":
      return <PlusCircleIconStyled {...props} />;
    case "eye":
      return <EyeIconStyled {...props} />;
    case "eye-slash":
      return <EyeSlashIconStyled {...props} />;
    case "building-library":
      return <BuildingLibraryIconStyled {...props} />;
    case "user":
      return <UserIconStyled {...props} />;
    case "lock-closed":
      return <LockClosedIconStyled {...props} />;
    case "bell-icon":
      return <BellIconStyled {...props} />;
    case "chevron-down":
      return <ChevronDownIconStyled {...props} />;
    case "chevron-up":
      return <ChevronUpIconStyled {...props} />;
    case "home":
      return <HomeIconStyled {...props} />;
    case "bank-notes":
      return <BankNotesIconStyled {...props} />;
    case "clipboard-document":
      return <ClipboardDocumentIconStyled {...props} />;
    case "cog-6-tooth":
      return <Cog6ToothIconStyled {...props} />;
    case "document-duplicate":
      return <DocumentDuplicateIconStyled {...props} />;
    case "pencil":
      return <PencilIconStyled {...props} />;
    case "trash":
      return <TrashIconStyled {...props} />;
  }
};
