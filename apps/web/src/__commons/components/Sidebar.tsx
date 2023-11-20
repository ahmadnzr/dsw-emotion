"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import { Icon, Text } from "ui";

const listMenu = [
  {
    id: 0,
    title: "Dashboard",
    icon: "home",
    childs: [],
  },
  {
    id: 1,
    title: "Cashflow",
    icon: "bank-notes",
    childs: [
      {
        id: "1-0",
        title: "Pengeluaran",
      },
      {
        id: "1-1",
        title: "Pemasukan",
      },
      {
        id: "1-2",
        title: "Hutang/Piutang",
      },
    ],
  },
  {
    id: 2,
    title: "Notes",
    icon: "clipboard-document",
    childs: [],
  },
  {
    id: 3,
    title: "Settings",
    icon: "cog-6-tooth",
    childs: [],
  },
];

const Sidebar = () => {
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
      {listMenu.map((item) => (
        <GroupMenu key={item.id}>
          <MenuTitle
            onClick={() => {
              onClickGroup(item.id);
            }}
          >
            <Icon color="#0061A7" name={item.icon} type="filled" size="lg" />
            <Text className="title" weight="semibold">
              {item.title}
            </Text>
            {item.childs.length ? (
              <Icon
                color="#0061A7"
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

const MenuTitle = styled.div({
  padding: "0 20px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  cursor: "pointer",
  transition: "0.3s ease",

  "&:hover": {
    backgroundColor: "#EAF2FF",
  },

  "& .title": {
    flex: 1,
  },
});

const ListItem = styled.div({}, ({ active }: { active: boolean }) => ({
  display: active ? "block" : "none",
}));

const MenuItem = styled.div({
  paddingLeft: "55px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  transition: "0.3s ease",

  "&:hover": {
    backgroundColor: "#EAF2FF",
  },
});

export default Sidebar;
