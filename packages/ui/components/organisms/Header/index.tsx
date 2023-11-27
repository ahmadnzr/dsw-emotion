"use client";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";
import { Badge, Icon, Tag, Text } from "../../atoms";

export interface UserInfo {
  /**
   * Username
   */
  fullname: string;

  /**
   * User role
   * */
  role: string;

  /**
   * User Image
   * */
  imageURL?: string;
}

export interface HeaderProps {
  /**
   * Brand Logo
   * */
  brandLogo: string;

  /**
   * User Details
   * */
  userInfo: UserInfo;
}

export const Header = ({ brandLogo, userInfo }: HeaderProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  return (
    <HeaderStyled>
      <HeaderLogo>
        <img
          alt=""
          className="header-logo"
          height={40}
          src={brandLogo}
          width={200}
        />
      </HeaderLogo>
      <HeaderInfo>
        <UserDetail>
          <Text weight="semibold">{userInfo.fullname}</Text>
          <Tag>{userInfo.role}</Tag>
        </UserDetail>
        <UserImage>
          <img
            alt=""
            className="usr-image"
            height={40}
            src={userInfo.imageURL}
            width={40}
          />
        </UserImage>
      </HeaderInfo>
      <NotifSection theme={theme}>
        <Badge>
          <Icon
            color={theme.colors.neutral["400"]}
            name="bell-icon"
            size="md"
          />
        </Badge>
      </NotifSection>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div({
  zIndex: 999,
  position: "fixed",
  height: "80px",
  top: 0,
  left: 0,
  right: 0,
  padding: "0 60px 0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 3px 10px 0px rgba(188, 200, 231, 0.20)",
});

const HeaderLogo = styled.div({
  "& .header-logo": {
    width: "200px",
    height: "40px",
    objectFit: "contain",
    userSelect: "none",
  },
});

const HeaderInfo = styled.div({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
});

const UserDetail = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "2px",
});

const UserImage = styled.div({
  width: "44px",
  height: "44px",
  borderRadius: "100%",
  overflow: "hidden",
  border: "1px solid #fff",
  boxShadow: "0px 8px 10px 0px rgba(188, 200, 231, 0.50)",

  "& .usr-image": {
    width: "100%",
    height: "100%",
  },
});

const NotifSection = styled.div(
  {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  ({ theme }: { theme: ThemeType }) => ({
    "&:hover": {
      backgroundColor: theme.colors.primary["200"],
    },
  }),
);
