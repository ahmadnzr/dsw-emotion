"use client";

import React from "react";
import styled from "@emotion/styled";

import {
  Header,
  Sidebar,
  type HeaderProps,
  type SidebarProps,
} from "../../organisms";

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
  return (
    <AppContainerStyled>
      <Header brandLogo={brandLogo} userInfo={userInfo} />
      <Sidebar
        activePath={activePath}
        onClickMenu={onClickMenu}
        sidebarData={sidebarData}
      />
      <ContentWrapper>{children}</ContentWrapper>
    </AppContainerStyled>
  );
};

const AppContainerStyled = styled.div({});

const ContentWrapper = styled.main({
  padding: "20px",
  position: "fixed",
  top: "80px",
  left: "200px",
  right: 0,
  bottom: 0,
  backgroundColor: "#F4F7FB",
});
