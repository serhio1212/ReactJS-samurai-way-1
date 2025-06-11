import React from "react";
import cs_style from "./Like.module.css";

const Like = (props) => {
  return (
    <div>
      <div className={cs_style.ButtomBlock}>
        <span>Like</span>
        {":      "}
        {props.message}
      </div>
    </div>
  );
};

export default Like;
