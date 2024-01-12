import React, {Component, useState} from "react";
import cs_style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import DialogsMessage from "./DialogsMessage/DialogsMessage.jsx";

function Dialogs(props) {
 // debugger;

    // let DialogItemMap = props.DialogsData.map((d, l) => <DialogItem key={d.name} name={d.name} id={d.id} count={`()=>${props.setCount}(${props.count} = ${props.id})`} setCount={d.setCount}/>);
    let DialogItemMap = props.DialogsData.map((d, l) => <DialogItem key={d.name} name={d.name} id={d.id}/>);
    // let DialogsMessageMap = (props.MessagesData.map((m, q) => <DialogsMessage key={q} MessageValue={m.message}/>));
 //    console.log(typeof props.DialogsArray);
 //    console.log(Array.isArray(props.DialogsArray.DialogsData));
 //    console.log(Array.isArray(props.DialogsArray.DialogsData.name));
 //    const mmm = Object.entries(props.DialogsArray.DialogsData);
 //    // const nnn = Object.entries(mmm)[0][1][1]
 //    const nnn = Object.entries(mmm)[0][1][1]
 //    const kkk = Object.entries(nnn)
 //    console.log( kkk[0][1]);
 //    // console.log(sss);
 //    console.log("str" / 2);
 //    // console.log(isNaN("str"));
 //    console.log(props.DialogsArray.DialogsData[1].name);
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