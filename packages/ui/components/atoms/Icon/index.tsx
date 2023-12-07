"use client";

import { useTheme } from "@emotion/react";

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
import {
  BankNotesIconStyled as BankNotesIconSolidStyled,
  BellIconStyled as BellIconSolidStyled,
  BuildingLibraryIconStyled as BuildingLibraryIconSolidStyled,
  ChevronDownIconStyled as ChevronDownIconSolidStyled,
  ChevronUpIconStyled as ChevronUpIconSolidStyled,
  ClipboardDocumentIconStyled as ClipboardDocumentIconSolidStyled,
  Cog6ToothIconStyled as Cog6ToothIconSolidStyled,
  DocumentDuplicateIconStyled as DocumentDuplicateIconSolidStyled,
  EyeIconStyled as EyeIconSolidStyled,
  EyeSlashIconStyled as EyeSlashIconSolidStyled,
  HomeIconStyled as HomeIconSolidStyled,
  LockClosedIconStyled as LockClosedIconSolidStyled,
  PencilIconStyled as PencilIconSolidStyled,
  PlusCircleIconStyled as PlusCircleIconSolidStyled,
  PlusIconStyled as PlusIconSolidStyled,
  TrashIconStyled as TrashIconSolidStyled,
  UserIconStyled as UserIconSolidStyled,
} from "./solid";

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
export type IconType = "outline" | "solid";

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
  type?: IconType;

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

  if (type === "solid") {
    switch (name) {
      case "plus":
        return <PlusIconSolidStyled {...props} />;
      case "plus-circle":
        return <PlusCircleIconSolidStyled {...props} />;
      case "eye":
        return <EyeIconSolidStyled {...props} />;
      case "eye-slash":
        return <EyeSlashIconSolidStyled {...props} />;
      case "building-library":
        return <BuildingLibraryIconSolidStyled {...props} />;
      case "user":
        return <UserIconSolidStyled {...props} />;
      case "lock-closed":
        return <LockClosedIconSolidStyled {...props} />;
      case "bell-icon":
        return <BellIconSolidStyled {...props} />;
      case "chevron-down":
        return <ChevronDownIconSolidStyled {...props} />;
      case "chevron-up":
        return <ChevronUpIconSolidStyled {...props} />;
      case "home":
        return <HomeIconSolidStyled {...props} />;
      case "bank-notes":
        return <BankNotesIconSolidStyled {...props} />;
      case "clipboard-document":
        return <ClipboardDocumentIconSolidStyled {...props} />;
      case "cog-6-tooth":
        return <Cog6ToothIconSolidStyled {...props} />;
      case "document-duplicate":
        return <DocumentDuplicateIconSolidStyled {...props} />;
      case "pencil":
        return <PencilIconSolidStyled {...props} />;
      case "trash":
        return <TrashIconSolidStyled {...props} />;
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
