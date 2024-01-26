import React, {Component} from 'react';
import cs_style from './Post.module.css'
import people from "../../../../img/people-transparent.png";


const Post = (props) => {
  return ( <div>
    <div className = {cs_style.items}>
    <img className = {cs_style.img} src={people} alt="Hoho" />
      <div> {props.message} +({props.LikesCount}) -({props.DislikesCount}) </div>
      {console.log("post component make job")}
      </div>
    </div>
)}

export default Post;
