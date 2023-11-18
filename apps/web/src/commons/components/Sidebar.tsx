"use client";

import styled from "@emotion/styled";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <SidebarStyled>
      <GroupMenu>
        <MenuTitle
          onClick={() => {
            setActive(!active);
          }}
        >
          Dashboard
        </MenuTitle>
        <ListItem active={active}>
          <MenuItem>Oke 1</MenuItem>
          <MenuItem>OKe 2</MenuItem>
          <MenuItem>OKE 3</MenuItem>
        </ListItem>
      </GroupMenu>
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
  cursor: "pointer",
});

const ListItem = styled.div({}, ({ active }: { active: boolean }) => ({
  display: active ? "block" : "none",
}));

const MenuItem = styled.div({});

export default Sidebar;
