import React from "react";
import cs_style from "./DialogsMessage.module.css";

function DialogsMessage(props) {
  let userID = props.idAcc;
  let dialogsPostElement = React.createRef();

  let ppost = (idChat, idAcc) => {
    let text = dialogsPostElement.current.value;
    props.Dispatch({ type: "ADD-POST", text: text, idAcc: props.idAcc });
  };

  let onChangeText = (text) => {
    props.Dispatch({type : "UPDATE-TEXT", text: text});
  };

  return (
    <div>
      {props.MessagesData.map((it) => {
        if (
          props.id === props.MessagesData[it.id].idChat &&
          userID === props.MessagesData[it.id].idAcc
        ) {
          return (
            <p key={it.id}>
              <img
                className={cs_style.img}
                src={"/image/cat_" + it.idAcc + ".jpeg"}
                alt="Ho-ho"
              />{" "}
              {props.MessagesData[it.id].message}
            </p>
          );
        } else if (props.id === props.MessagesData[it.id].idChat) {
          return (
            <p key={it.id} className={cs_style.messLeft}>
              {" "}
              {props.MessagesData[it.id].message}{" "}
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
          value={props.MessageText.InitText}
          placeholder={"Input text"}
        />
      </div>

      <button
        onClick={() => {
          ppost(props.MessagesData.idChat, props.MessagesData.idAcc);
        }}
      >
        Add post
      </button>
      <button>Remove</button>
    </div>
  );
}

export default DialogsMessage;
