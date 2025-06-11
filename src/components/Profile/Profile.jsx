import React from "react";
import { Outlet } from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import cs_style from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={cs_style.content}>
      <Outlet />
      <ProfileInfo />
    </div>
  );
}

export default Profile;
