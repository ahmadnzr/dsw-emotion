"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import { Icon } from "ui";

const listMenu = [
  {
    id: 0,
    title: "Dashboard",
    childs: [],
  },
  {
    id: 1,
    title: "Tabungan",
    childs: [
      {
        id: 0,
        title: "Rekening Koran",
      },
      {
        id: 1,
        title: "Giro",
      },
    ],
  },
];

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const onClickMenu = (isHaveChild: boolean) => {
    if (!isHaveChild) {
      return;
    }

    setActive((val) => !val);
  };

  return (
    <SidebarStyled>
      {listMenu.map((item) => (
        <GroupMenu key={item.id}>
          <MenuTitle
            onClick={() => {
              onClickMenu(Boolean(item.childs.length));
            }}
          >
            <Icon color="#0061A7" name="building-library" size="md" />
            {item.title}
          </MenuTitle>
          {item.childs.map((child) => (
            <ListItem active={active} key={child.id}>
              <MenuItem>{child.title}</MenuItem>
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
});

const GroupMenu = styled.div({});

const MenuTitle = styled.div({
  padding: "0 20px",
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

const ListItem = styled.div({}, ({ active }: { active: boolean }) => ({
  display: active ? "block" : "none",
}));

const MenuItem = styled.div({
  paddingLeft: "50px",
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
