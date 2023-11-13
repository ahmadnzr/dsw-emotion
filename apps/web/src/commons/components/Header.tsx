"use client";

import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Badge, Colors, Icon, Text } from "ui";

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
          <Text>Ahmad Nizar</Text>
          <Tag>
            <Text size="xs">Admin</Text>
          </Tag>
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
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "white",
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
});

const Tag = styled.div({
  backgroundColor: Colors.neutral.medium,
  padding: "2px 4px",
  borderRadius: "4px",
  width: "fit-content",
});

const UserImage = styled.div({
  width: "44px",
  height: "44px",
  borderRadius: "100%",
  overflow: "hidden",

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
