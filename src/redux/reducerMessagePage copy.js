const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";

export const addPostActionCreator = (text, idAcc) => {
  return { type: ADD_POST, text: text, idAcc: idAcc };
};

export const updateTextActionCreator = (text) => {
  return { type: UPDATE_TEXT, text: text };
};

const reducerMessagePage = (MessagePage, action) => {
  switch (action.type) {
    case ADD_POST:
      let valID = MessagePage.MessagesData.length;
      let newPost = {
        id: valID,
        idChat: action.idAcc,
        idAcc: action.idAcc,
        message: MessagePage.MessageText.InitText,
      };
      MessagePage.MessageText.InitText !== ""
        ? MessagePage.MessagesData.push(newPost)
        : console.log("Text not input");
      MessagePage.MessageText.InitText = "";
      return MessagePage;
    case UPDATE_TEXT:
      MessagePage.MessageText.InitText = action.text;
      return MessagePage;
    default:
      return MessagePage;
  }
};

export default reducerMessagePage;
