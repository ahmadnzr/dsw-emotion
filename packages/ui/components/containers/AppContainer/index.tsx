"use client";

import React from "react";
import styled from "@emotion/styled";

import {
  Header,
  Sidebar,
  type SidebarData,
  type UserInfo,
} from "../../organisms";

interface AppContainerProps {
  /**
   * children
   * */
  children: React.ReactNode;
  brandLogo: string;
  userInfo: UserInfo;
  sidebarData: SidebarData[];
}

export const AppContainer = ({
  children,
  brandLogo,
  userInfo,
  sidebarData,
}: AppContainerProps) => {
  return (
    <AppContainerStyled>
      <Header brandLogo={brandLogo} userInfo={userInfo} />
      <Sidebar sidebarData={sidebarData} />
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
