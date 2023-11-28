"use client";

import { useState } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type ThemeType, defaultTheme, isEmptyObj } from "../../../utils";
import { Icon, type IconName, Text } from "../../atoms";

interface GroupChild {
  id: string;
  title: string;
  path: string;
}

export interface SidebarData {
  id: number;
  title: string;
  icon: IconName;
  path: string;
  childs: GroupChild[] | [];
}

export interface SidebarProps {
  /**
   * Dynamic Sidebar Data
   * */
  sidebarData: SidebarData[];
  activePath?: string;
  onClickMenu: (path: string) => void;
}

export const Sidebar = ({
  sidebarData,
  activePath,
  onClickMenu,
}: SidebarProps) => {
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
            active={activePath === item.path}
            onClick={() => {
              onClickGroup(item.id);

              if (!item.childs.length) {
                onClickMenu(item.path);
              }
            }}
            theme={theme}
          >
            <Icon
              className="menu-icon"
              color={theme.colors.primary["400"]}
              name={item.icon}
              size="lg"
              type="filled"
            />
            <Text className="title" weight="semibold">
              {item.title}
            </Text>
            {item.childs.length ? (
              <Icon
                color={theme.colors.primary["400"]}
                name={item.id === open ? "chevron-up" : "chevron-down"}
                size="sm"
              />
            ) : null}
          </MenuTitle>
          {item.childs.map((child) => (
            <ListItem active={item.id === open} key={child.id}>
              <MenuItem
                active={activePath === child.path}
                onClick={() => {
                  onClickMenu(child.path);
                }}
                theme={theme}
              >
                <Text className="menu-child" weight="semibold">
                  {child.title}
                </Text>
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
  ({ theme, active }: { theme: ThemeType; active: boolean }) => ({
    ...(active
      ? {
          backgroundColor: theme.colors.primary["400"],
          "& .title": {
            color: theme.colors.neutral["100"],
          },
          "& .menu-icon": {
            color: `${theme.colors.neutral["100"]} !important`,
          },
        }
      : {
          "&:hover": {
            backgroundColor: theme.colors.primary["200"],
          },
        }),
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
  ({ theme, active }: { theme: ThemeType; active: boolean }) => ({
    ...(active
      ? {
          backgroundColor: theme.colors.primary["400"],
          "& .menu-child": {
            color: theme.colors.neutral["100"],
          },
        }
      : {
          "&:hover": {
            backgroundColor: theme.colors.primary["200"],
          },
        }),
  }),
);
