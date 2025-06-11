import React from "react";
import pepsi from "../../img/pepsi.png";
import cs_style from "./Header.module.css";

const Header = () => {
  return (
    <header className={cs_style.header}>
      <img src={pepsi} alt="koko" />
    </header>
  );
};

export default Header;
