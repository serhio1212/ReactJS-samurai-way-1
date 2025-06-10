import React, { Component } from "react";
import cs_style from "./Friends.module.css";

function Friends(props) {
  let index = 0;
  return (
    <div>
      <p></p>
      <div className={cs_style.hFriends}>Friends</div>
      <div className={cs_style.descriptionBlock}>
        {/*   {props.ffriends.map((el) => (index<=3 ? ((index++) && <img className = {cs_style.img}*/}
        {/*   src={"/image/cat_" + el.idAcc + ".jpeg"} alt="Ho-ho"/>) : ""*/}
        {/*) )}*/}
        {props.ffriends.map((el) => {
          if (index <= 2) {
            index++;
            return (
              <div key={el.id} className={cs_style.ppp}>
                <img
                  className={cs_style.img}
                  src={"/image/cat_" + el.idAcc + ".jpeg"}
                  alt="Ho-ho"
                />
                <div>{props.ffriends[el.id].name}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Friends;
