import React from "react";
import { useDispatch } from "react-redux";
import {
  addPostActionCreator,
  updateTextActionCreator,
} from "../../../redux/reducerMessagePage";
import DialogsMessage from "./DialogsMessage";

function DialogsMessageContainer(props) {
  let userID = props.idAcc;

  const dispatch = useDispatch();

  let ppostConatainer = (idChat, idAcc, text) => {
    dispatch(addPostActionCreator(text, props.idAcc));
  };

  let ChangeTextContainer = (text) => {
    dispatch(updateTextActionCreator(text));
  };

  return (
    <DialogsMessage
      ppostConatainer={ppostConatainer}
      ChangeTextContainer={ChangeTextContainer}
      id={props.id}
      idAcc={props.idAcc}
      MessagesData={props.MessagesData}
      MessageText={props.MessageText}
    />
  );
}

export default DialogsMessageContainer;
