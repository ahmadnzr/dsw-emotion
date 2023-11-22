"use client";

import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";
import { Heading } from "../../atoms";

interface PageWrapperProps {
  /**
   * React.children
   **/
  children?: React.ReactNode;

  /**
   * Page Title
   **/
  pageTitle: string;

  /**
   * Component styles
   **/
  style?: React.CSSProperties;

  /**
   * Component className
   **/
  className?: string;
}

export const PageWrapper = ({
  children,
  style,
  className,
  pageTitle,
}: PageWrapperProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <PageWrapperStyled className={className} style={style}>
      <PageHeader>
        <Heading level="h2" weight="semibold">
          {pageTitle}
        </Heading>
      </PageHeader>
      <PageContent>{children}</PageContent>
    </PageWrapperStyled>
  );
};

const PageWrapperStyled = styled.div({}, () => ({}));
const PageHeader = styled.div({});
const PageContent = styled.div({}, ({ theme }: { theme: ThemeType }) => ({
  marginTop: theme.spacing.md,
}));
