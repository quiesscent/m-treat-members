"use client"
import React from "react";

import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";

const SideNav = () => {
  return (
    <Sidebar width={"270px"}>
      <Logo img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png">
        AdminMart
      </Logo>
      <Menu subHeading="HOME">
        <MenuItem link="/" badge="true">
          Modern
        </MenuItem>
        <MenuItem>eCommerce</MenuItem>
        <MenuItem>Analytical</MenuItem>
      </Menu>
      <Menu subHeading="APPS">
        <MenuItem>Chat</MenuItem>
        <MenuItem>Calendar</MenuItem>
      </Menu>
      <Menu subHeading="OTHERS">
        <Submenu title="Menu Level">
          <MenuItem>Post</MenuItem>
          <MenuItem>Details</MenuItem>
          <Submenu title="Level 2">
            <MenuItem>new</MenuItem>
            <MenuItem>Hello</MenuItem>
          </Submenu>
        </Submenu>

        <MenuItem>Chip</MenuItem>
        <MenuItem target="_blank" link="google.com">
          External Link
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
