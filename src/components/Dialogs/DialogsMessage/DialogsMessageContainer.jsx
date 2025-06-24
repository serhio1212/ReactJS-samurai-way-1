import React from "react";
import { useDispatch } from "react-redux";
import {
  addPostActionCreator,
  updateTextActionCreator,
} from "../../../redux/reducerMessagePage";
import DialogsMessage from "./DialogsMessage";
import StoreContext from "../../../redux/StoreContext";

function DialogsMessageContainer(props) {
  debugger;
  return (
    <StoreContext.Consumer>
      {(Store) => {
        let userID = props.idAcc;

        // const dispatch = useDispatch();

        let ppostConatainer = (idChat, idAcc, text) => {
          Store.dispatch(addPostActionCreator(text, props.idAcc));
        };

        let ChangeTextContainer = (text) => {
          Store.dispatch(updateTextActionCreator(text));
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
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsMessageContainer;
