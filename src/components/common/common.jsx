import React from "react";
import myImage from "../../img/desktop-wallpaper.jpg";
import cs_style from "./common.module.css";


function Common(props) {
  return (
    <div>
      <div>
        <img className={cs_style.img} src={myImage} />
      </div>
      <div className={cs_style.descriptionBlock}>
        <a>Welcome to portal!</a>
      </div>
    </div>
  );
}

export default Common;
