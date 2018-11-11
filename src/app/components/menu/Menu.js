import React from "react";
import { withRouter } from "react-router-dom";

import Button from "./Button";

import "./Menu.css";

const menuItems = [
  {
    text: "Top",
    to: "/"
  },
  {
    text: "New",
    to: "/new"
  },
  {
    text: "About",
    to: "/article/5"
  }
];

const renderMenu = currentRoute =>
  menuItems.map((menuButton, key) => (
    <Button
      className={currentRoute === menuButton.to ? "activeButton" : ""}
      key={key}
      {...menuButton}
    />
  ));
const Menu = ({ location }) => (
  <nav className="menu">{renderMenu(location.pathname)}</nav>
);

export default withRouter(Menu);
