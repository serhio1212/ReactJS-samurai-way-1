import React, { useState } from "react";
import { BrowserRouter, Router, Routes, Route, NavLink, Outlet } from "react-router-dom";
import cs_style from './DialogsMessage.module.css';
// import { AddPost } from "../../../redux/state";

function DialogsMessage(props) {
    let userID=props.idAcc;

    let dialogsPostElement=React.createRef();

    let ppost=(idChat, idAcc) => {
        let text=dialogsPostElement.current.value;
        props.AddPost(text, props.idAcc);
        console.log(text);
        dialogsPostElement.current.value = "";

    }
    return (
        <div>

            {/*<div className={cs_style.dialog}>{props.MessageValue.map(el => el.name)}</div>*/}
            {/*{props.MessagesData.map((it) => props.id === props.MessagesData[it.id].idAcc ? ((tr) ?  (tr = !tr) || (*/}
            {/*    <p key={it.id}>{props.MessagesData[it.id].message}</p>) : (tr = !tr) && (*/}
            {/*    <p key={it.id} className={cs_style.messLeft}>{props.MessagesData[it.id].message}</p>)) : "")}*/}
            {props.MessagesData.map((it) => {
                if (props.id === props.MessagesData[it.id].idChat && userID === props.MessagesData[it.id].idAcc) {
                    return (<p key={it.id}><img className={cs_style.img} src={"/image/cat_" + it.idAcc + ".jpeg"}
                                                alt="Ho-ho"/> {props.MessagesData[it.id].message}</p>);
                } else if (props.id === props.MessagesData[it.id].idChat) {
                    return (<p key={it.id} className={cs_style.messLeft}>  {props.MessagesData[it.id].message} <img
                        className={cs_style.img} src={"/image/cat_" + it.idAcc + ".jpeg"} alt="Ho-ho"/></p>);
                } else {
                    console.log("end else DialogsMessage")
                }
            })}

            <div>
                <textarea ref={dialogsPostElement} ></textarea>
            </div>
            <button onClick={() => {
                ppost(props.MessagesData.idChat, props.MessagesData.idAcc)
            }}>Add post
            </button>
            <button>Remove</button>

        </div>
    )
}


export default DialogsMessage;