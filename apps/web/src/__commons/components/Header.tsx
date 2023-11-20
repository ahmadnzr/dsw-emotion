"use client";

import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Badge, Colors, Icon, Tag, Text } from "ui";

import Logo from "../assets/img/logo.png";
import User from "../assets/img/user.png";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo>
        <Image
          alt=""
          className="header-logo"
          height={40}
          src={Logo}
          width={200}
        />
      </HeaderLogo>
      <HeaderInfo>
        <UserDetail>
          <Text size="md" weight="semibold">
            Ahmad Nizar
          </Text>
          <Tag>Admin</Tag>
        </UserDetail>
        <UserImage>
          <Image
            alt=""
            className="usr-image"
            height={40}
            src={User}
            width={40}
          />
        </UserImage>
      </HeaderInfo>
      <NotifSection>
        <Badge>
          <Icon color={Colors.neutral.hard} name="bell-icon" size="md" />
        </Badge>
      </NotifSection>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div({
  position: "fixed",
  height: "80px",
  top: 0,
  left: 0,
  right: 0,
  padding: "0 60px 0 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "white",
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

const NotifSection = styled.div({
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "0.3s ease",

  "&:hover": {
    backgroundColor: Colors.primary.soft,
  },
});

export default Header;
