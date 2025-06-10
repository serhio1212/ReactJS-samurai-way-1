import React, { Component, useState } from "react";
import DialogItem from "./DialogItem/DialogItem.jsx";
import cs_style from "./Dialogs.module.css";


function Dialogs(props) {
  let DialogItemMap = props.DialogsData.map((d, l) => (
    <DialogItem key={d.name} name={d.name} id={d.id} />
  ));

  return (
    <div className={cs_style.Dialogs}>
      {DialogItemMap}
      {/*{DialogsMessageMap}*/}

    </div>
  );
}

export default Dialogs;
