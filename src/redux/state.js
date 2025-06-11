let reTree = () => {
  console.log("Update TRUE");
};

let Store = {
  _StateJS: {
    ProfilePage: {
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
    },
    MessagePage: {
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
    },
    MessageText: { InitText: "" },
    MessageProfile: { InitText: "" },
    sidebar: {
      perusers: [
        { id: 0, idAcc: 1, name: "Mama" },
        { id: 1, idAcc: 2, name: "Mihail" },
        { id: 2, idAcc: 3, name: "Yuliya" },
        { id: 3, idAcc: 4, name: "Ekaterina" },
      ],
    },
  },

  getState() {
    let StateJS = this._StateJS;
    return StateJS;
  },

  subscribe(observer) {
    reTree = observer;
  },

  Dispatch(action) {
    if (action.type === "ADD-POST") {
      let valID = Store.getState().MessagePage.MessagesData.length;
      let newPost = {
        id: valID,
        idChat: action.idAcc,
        idAcc: action.idAcc,
        message: Store.getState().MessageText.InitText,
      };
      Store.getState().MessageText.InitText !== ""
        ? Store.getState().MessagePage.MessagesData.push(newPost)
        : console.log("Text not input");
      Store.getState().MessageText.InitText = "";
      reTree(
        Store.getState(),
        this.Dispatch
      );
    }
    if (action.type === "ADD-PROFILE-POST") {
      let valID = Store.getState().MessagePage.MessagesData.length;

      let newProfilePost = {
        id: valID,
        message: action.text,
        likesdata: "Go, Im ready",
        dislikesdata: "",
        likescount: "1",
        dislikescount: "0",
      };

      Store.getState().MessageProfile.InitText !== ""
        ? Store.getState().ProfilePage.PostsData.push(newProfilePost)
        : console.log("Text not input");

      Store.getState().MessageProfile.InitText = "";

      reTree(
        Store.getState(),
        this.Dispatch
      );
    }
 
  if (action.type === "UPDATE-TEXT") {
    Store.getState().MessageText.InitText = action.text;

    reTree(
      this.getState(),
      this.Dispatch
    );
  }
  if (action.type === "UPDATE-PROFILE-TEXT") {
    Store.getState().MessageProfile.InitText = action.Text;
    reTree(
      Store.getState(),
      this.Dispatch
    );
  }


  },

  // updateProfileText(Text) {
   
  // }
};

export default Store;
window.Store = Store;
