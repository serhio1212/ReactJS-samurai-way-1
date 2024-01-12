import React, {Component, useState} from "react";
import cs_style from './DialogItem.module.css';
import {NavLink, Route} from "react-router-dom";
import Settings from "../../Settings/Settings";
import Friends from "../../Friends/Friends";


function DialogItem(props) {
    // debugger;


    return (
        <div className={cs_style.dialogsItems}>
            {/*<div> <img className = {cs_style.img} src="/image/chell.png" alt="Ho-ho" /> </div>*/}
           <div className={cs_style.blocks}> <img className = {cs_style.img} src={"/image/cat_"+props.id+".jpeg"} alt="Ho-ho" /> <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink> </div>
        </div>
    )
}
export default DialogItem;