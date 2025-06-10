import React from "react";
import cs_style from "./Header.module.css";
import pepsi from "../../img/pepsi.png";

const Header = () => {
  return (
    <header className={cs_style.header}>
      <img src={pepsi} alt="koko" />
      
    </header>
  );
};

export default Header;
