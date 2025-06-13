const ADD_PROFILE_POST = "ADD-PROFILE-POST";
const UPDATE_PROFILE_TEXT = "UPDATE-PROFILE-TEXT";

export const addProfilePostActionCreator = (text) => {
  return { type: ADD_PROFILE_POST, text: text };
};

export const updateProfileTextActionCreator = (text) => {
  return { type: UPDATE_PROFILE_TEXT, text: text };
};

const reducerProfilePage = (ProfilePage, action) => {
  switch (action.type) {
    case ADD_PROFILE_POST:
      let valID = ProfilePage.PostsData.length;

      let newProfilePost = {
        id: valID,
        message: action.text,
        likesdata: "Go, Im ready",
        dislikesdata: "",
        likescount: "1",
        dislikescount: "0",
      };

      ProfilePage.MessageProfile.InitText !== ""
        ? ProfilePage.PostsData.push(newProfilePost)
        : console.log("Text not input");

      ProfilePage.MessageProfile.InitText = "";
      return ProfilePage;

    case UPDATE_PROFILE_TEXT:
      ProfilePage.MessageProfile.InitText = action.Text;
      return ProfilePage;

    default:
      return ProfilePage;
  }
};

export default reducerProfilePage;
