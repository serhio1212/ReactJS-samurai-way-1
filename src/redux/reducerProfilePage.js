const ADD_PROFILE_POST = "ADD-PROFILE-POST";
const UPDATE_PROFILE_TEXT = "UPDATE-PROFILE-TEXT";

export const addProfilePostActionCreator = (text) => {
  return { type: ADD_PROFILE_POST, text: text };
};

export const updateProfileTextActionCreator = (text) => {
  return { type: UPDATE_PROFILE_TEXT, text: text };
};

const initialState = {
  PostsData: [
    {
      id: 0,
      message: "Hi evereone",
      likesdata: "Fantastic post",
      dislikesdata: "",
      likescount: "1",
      dislikescount: "0",
    },
    {
      id: 1,
      message: "My first post",
      likesdata: "",
      dislikesdata: "No matter",
      likescount: "0",
      dislikescount: "1",
    },
    {
      id: 2,
      message: "Battle",
      likesdata: "Go, Im ready",
      dislikesdata: "",
      likescount: "1",
      dislikescount: "0",
    },
  ],
  MessageProfile: { InitText: "" },
};

const reducerProfilePage = (ProfilePage = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE_POST:
      if (ProfilePage.MessageProfile.InitText !== "") {
        let valID = ProfilePage.PostsData.length;
        let newProfilePost = {
          id: valID,
          message: action.text,
          likesdata: "Go, Im ready",
          dislikesdata: "",
          likescount: "1",
          dislikescount: "0",
        };
        return {
          ...ProfilePage,
          PostsData: [...ProfilePage.PostsData, newProfilePost],
          MessageProfile: { InitText: "" },
        };
      } else {
        console.log("Text not input");
        return ProfilePage;
      }
    case UPDATE_PROFILE_TEXT:
      return { ...ProfilePage, MessageProfile: { InitText: action.Text } };
    default:
      return ProfilePage;
  }
};

export default reducerProfilePage;
