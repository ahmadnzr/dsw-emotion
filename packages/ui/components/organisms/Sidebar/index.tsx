"use client";

import { useState } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";
import { Icon, type IconName, Text } from "../../atoms";

interface GroupChild {
  id: string;
  title: string;
}

export interface SidebarData {
  id: number;
  title: string;
  icon: IconName;
  childs: GroupChild[] | [];
}

interface SidebarProps {
  /**
   * Dynamic Sidebar Data
   * */
  sidebarData: SidebarData[];
}

export const Sidebar = ({ sidebarData }: SidebarProps) => {
  let theme = useTheme() as ThemeType;

  /**
   * Check if the component not wrapped with ThemeProvider
   * If yes then use the defaultTheme
   */
  if (isEmptyObj(theme)) {
    theme = defaultTheme;
  }

  const [open, setOpen] = useState<number | undefined>(undefined);

  const onClickGroup = (groupId: number) => {
    setOpen((val) => {
      if (val !== groupId) {
        return groupId;
      }

      return undefined;
    });
  };

  return (
    <SidebarStyled>
      {sidebarData.map((item) => (
        <GroupMenu key={item.id}>
          <MenuTitle
            onClick={() => {
              onClickGroup(item.id);
            }}
          >
            <Icon
              color={theme.colors.primary.hard}
              name={item.icon}
              size="lg"
              type="filled"
            />
            <Text className="title" weight="semibold">
              {item.title}
            </Text>
            {item.childs.length ? (
              <Icon
                color={theme.colors.primary.hard}
                name={item.id === open ? "chevron-up" : "chevron-down"}
                size="sm"
              />
            ) : null}
          </MenuTitle>
          {item.childs.map((child) => (
            <ListItem active={item.id === open} key={child.id}>
              <MenuItem>
                <Text weight="semibold">{child.title}</Text>
              </MenuItem>
            </ListItem>
          ))}
        </GroupMenu>
      ))}
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div({
  width: "200px",
  position: "fixed",
  top: "80px",
  left: 0,
  bottom: 0,
  backgroundColor: "#fff",
  userSelect: "none",
});

const GroupMenu = styled.div({});

const MenuTitle = styled.div(
  {
    padding: "0 20px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    cursor: "pointer",
    transition: "0.3s ease",

    "& .title": {
      flex: 1,
    },
  },
  ({ theme }: { theme: ThemeType }) => ({
    "&:hover": {
      backgroundColor: theme.colors.primary.soft,
    },
  }),
);

const ListItem = styled.div({}, ({ active }: { active: boolean }) => ({
  display: active ? "block" : "none",
}));

const MenuItem = styled.div(
  {
    paddingLeft: "55px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  ({ theme }: { theme: ThemeType }) => ({
    "&:hover": {
      backgroundColor: theme.colors.primary.soft,
    },
  }),
);
