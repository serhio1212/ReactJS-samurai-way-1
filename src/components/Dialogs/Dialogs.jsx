import React, {Component, useState} from "react";
import cs_style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import DialogsMessage from "./DialogsMessage/DialogsMessage.jsx";

function Dialogs(props) {
 // debugger;

    // let DialogItemMap = props.DialogsData.map((d, l) => <DialogItem key={d.name} name={d.name} id={d.id} count={`()=>${props.setCount}(${props.count} = ${props.id})`} setCount={d.setCount}/>);
    let DialogItemMap = props.DialogsData.map((d, l) => <DialogItem key={d.name} name={d.name} id={d.id}/>);

    const [userName, updUserName] = useState("Serhio");


return (
    <div className={cs_style.Dialogs}>
        {/*{props.DialogsData.name}*/}
        {/*{console.log(typeof props.DialogsData)}*/}
        {/*{console.log(props.DialogsArray.DialogsData.name);}*/}
        {/*{const kkk = () => props.DialogsData.MessagesData.name}*/}

        {DialogItemMap}
        {/*{DialogsMessageMap}*/}
    </div>

)
}

export default Dialogs;