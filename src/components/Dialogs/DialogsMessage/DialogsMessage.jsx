import React, {useEffect, useState} from "react";
import {BrowserRouter, Router, Routes, Route, NavLink, Outlet} from "react-router-dom";
import cs_style from './DialogsMessage.module.css';

function DialogsMessage(props) {
    // debugger;
    // let [tr, updTr] = useState(true);
    let tr = true;

    return (
        <div>

            {/*<div className={cs_style.dialog}>{props.MessageValue.map(el => el.name)}</div>*/}
            {/*{props.MessagesData.map((it) => props.id === props.MessagesData[it.id].idAcc ? ((tr) ?  (tr = !tr) || (*/}
            {/*    <p key={it.id}>{props.MessagesData[it.id].message}</p>) : (tr = !tr) && (*/}
            {/*    <p key={it.id} className={cs_style.messLeft}>{props.MessagesData[it.id].message}</p>)) : "")}*/}
            {props.MessagesData.map((it) => {
                if (props.id === props.MessagesData[it.id].idChat && tr === true) {
                    (tr = !tr);
                    return (<p key={it.id}><img className={cs_style.img} src={"/image/cat_" + it.idAcc + ".jpeg"}
                                                alt="Ho-ho"/> {props.MessagesData[it.id].message}</p>);
                } else if (props.id === props.MessagesData[it.id].idChat && tr === false) {
                    (tr = !tr);
                    return (<p key={it.id} className={cs_style.messLeft}>  {props.MessagesData[it.id].message} <img className = {cs_style.img} src={"/image/cat_"+it.idAcc+".jpeg"} alt="Ho-ho" /></p>);
                } else {
                    console.log("kj")
                }
            })}
        </div>
    )
}


export default DialogsMessage;