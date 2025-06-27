import React from "react";
import cs_style from "./DialogsMessage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addPostActionCreator,
  updateTextActionCreator,
} from "../../../redux/reducerMessagePage";

function DialogsMessage(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const ppostContainer = (text, idAcc) => {
    dispatch(addPostActionCreator(text, idAcc));
  };
  const ChangeTextContainer = (text) => {
    dispatch(updateTextActionCreator(text));
  };

  let dialogsPostElement = React.createRef();

  let ppost = (idAcc) => {
    let text = dialogsPostElement.current.value;
    ppostContainer(text, idAcc);
  };

  let onChangeText = (text) => {
    ChangeTextContainer(text);
  };

  return (
    <div>
      {console.log(`${params.id}   -   ${params.idAcc}`)}
      {props.MessagePage.MessagesData.map((it) => {
        if (params.id == it.idChat && params.idAcc == it.idAcc) {
          return (
            <p key={it.id}>
              {console.log(`true`)}
              <img
                className={cs_style.img}
                src={"/image/cat_" + it.idAcc + ".jpeg"}
                alt="Ho-ho"
              />{" "}
              {it.message}
            </p>
          );
        } else if (params.id === it.idChat) {
          return (
            <p key={it.id} className={cs_style.messLeft}>
              {console.log(`else if`)} {it.message}{" "}
              <img
                className={cs_style.img}
                src={"/image/cat_" + it.idAcc + ".jpeg"}
                alt="Ho-ho"
              />
            </p>
          );
        } else {
          console.log("end else DialogsMessage");
        }
      })}

      <div>
        <textarea
          onChange={() => onChangeText(dialogsPostElement.current.value)}
          ref={dialogsPostElement}
          value={props.MessagePage.MessageText.InitText}
          placeholder={"Input text"}
        />
      </div>

      <button
        onClick={() => {
          ppost(params.idAcc);
        }}
      >
        Add post
      </button>
      <button>Remove</button>
    </div>
  );
}

export default DialogsMessage;
