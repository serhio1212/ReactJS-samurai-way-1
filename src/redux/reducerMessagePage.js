const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";

export const addPostActionCreator = (text, idAcc) => {
  return { type: ADD_POST, text: text, idAcc: idAcc };
};

export const updateTextActionCreator = (text) => {
  return { type: UPDATE_TEXT, text: text };
};

const initialState = {
  DialogsData: [
    { id: 0, idAcc: 0, name: "MegaStars" },
    { id: 1, idAcc: 1, name: "Mama" },
    { id: 2, idAcc: 2, name: "Mihail" },
    { id: 3, idAcc: 3, name: "Yuliya" },
    { id: 4, idAcc: 4, name: "Ekaterina" },
  ],
  MessagesData: [
    { id: 0, idChat: 1, idAcc: 1, message: "Hi" },
    { id: 1, idChat: 1, idAcc: 0, message: "How is your it-kamasutra?" },
    { id: 2, idChat: 0, idAcc: 0, message: "Yo" },
    { id: 3, idChat: 0, idAcc: 3, message: "Shadap" },
    { id: 4, idChat: 0, idAcc: 0, message: ":(" },
    { id: 5, idChat: 3, idAcc: 3, message: "I`m here!" },
    { id: 6, idChat: 4, idAcc: 4, message: "Ho-ho!" },
    { id: 7, idChat: 1, idAcc: 1, message: "Good!" },
    { id: 8, idChat: 1, idAcc: 0, message: "Nice!" },
  ],
  MessageText: { InitText: "" },
};

const reducerMessagePage = (MessagePage = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (MessagePage.MessageText.InitText !== "") {
        let valID = MessagePage.MessagesData.length;
        let newPost = {
          id: valID,
          idChat: action.idAcc,
          idAcc: action.idAcc,
          message: MessagePage.MessageText.InitText,
        };
        return {
          ...MessagePage,
          MessagesData: [...MessagePage.MessagesData, newPost],
          MessageText: { InitText: "" },
        };
      } else {
        console.log("Text not input");
        return MessagePage;
      }
    case UPDATE_TEXT:
      return { ...MessagePage, MessageText: { InitText: action.text } };
    default:
      return MessagePage;
  }
};

export default reducerMessagePage;
