"use client";

import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import {
  Header,
  Sidebar,
  type HeaderProps,
  type SidebarProps,
} from "../../organisms";
import { Text } from "../../atoms";
import { defaultTheme, isEmptyObj, type ThemeType } from "../../../utils";

interface AppContainerProps extends HeaderProps, SidebarProps {
  /**
   * children
   * */
  children: React.ReactNode;
}

export const AppContainer = ({
  children,
  brandLogo,
  userInfo,
  sidebarData,
  onClickMenu,
  activePath,
}: AppContainerProps) => {
  let theme = useTheme() as ThemeType;

  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <AppContainerStyled>
      <Header brandLogo={brandLogo} userInfo={userInfo} />
      <Sidebar
        activePath={activePath}
        onClickMenu={onClickMenu}
        sidebarData={sidebarData}
      />
      <PageWrapper>
        <PageHeader>
          <Text size="sm">{activePath}</Text>
        </PageHeader>
        <PageContent>{children}</PageContent>
      </PageWrapper>
    </AppContainerStyled>
  );
};

const AppContainerStyled = styled.div({});

const PageWrapper = styled.main({
  padding: "5px 20px",
  position: "fixed",
  top: "80px",
  left: "200px",
  right: 0,
  bottom: 0,
  backgroundColor: "#F4F7FB",
});

const PageHeader = styled.div({});
const PageContent = styled.div({}, ({ theme }: { theme: ThemeType }) => ({
  marginTop: theme.spacing.xs,
}));
