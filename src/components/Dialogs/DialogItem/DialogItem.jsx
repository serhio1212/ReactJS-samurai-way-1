import React from "react";
import cs_style from './DialogItem.module.css';
import { NavLink } from "react-router-dom";


function DialogItem(props) {
    return (<div className={cs_style.DialogsItems}>
        <div className={cs_style.blocks}><img className={cs_style.img} src={"/image/cat_" + props.id + ".jpeg"}
                                              alt="Ho-ho"/> <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink></div>
    </div>)
}

export default DialogItem;

