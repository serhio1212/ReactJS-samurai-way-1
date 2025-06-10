import React from "react";
import cs_style from "./Dislike.module.css";

const Dislike = (props) => {
  return (
    <div>
      <div className={cs_style.ButtomBlock}>
        <span>Dislike:</span>
        {props.message}
      </div>
    </div>
  );
};

export default Dislike;
