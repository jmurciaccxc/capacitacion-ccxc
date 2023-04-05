import React from "react";
import TopBar from "./TopBar/TopBar";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <div className="header">
      <TopBar />
      <Menu />
      <div>Menu</div>
    </div>
  );
};

export default Header;
