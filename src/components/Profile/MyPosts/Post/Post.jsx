import React from "react";
import people from "../../../../img/people-transparent.png";
import cs_style from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={cs_style.items}>
        <img className={cs_style.img} src={people} alt="Hoho" />
        <div>
          {props.message} +({props.LikesCount}) -({props.DislikesCount}){" "}
        </div>
      </div>
    </div>
  );
};

export default Post;
