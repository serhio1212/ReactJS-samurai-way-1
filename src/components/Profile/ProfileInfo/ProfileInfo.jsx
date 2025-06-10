import React, { Component } from "react";
import cs_style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={cs_style.img} src="/image/desktop-wallpaper.jpg" />
      </div>
      <div className={cs_style.descriptionBlock}>
        <a>Ava+decription</a>
      </div>
    </div>
  );
};

export default ProfileInfo;
