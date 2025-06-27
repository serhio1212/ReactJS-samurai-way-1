import { connect } from "react-redux";
import MyPosts from "./MyPosts.jsx";
import {
  addProfilePostActionCreator,
  updateProfileTextActionCreator,
} from "../../../redux/reducerProfilePage.js";

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addProfilePost: (text) => {
      dispatch(addProfilePostActionCreator(text));
    },
    ChangeProfileText: (text) => {
      dispatch(updateProfileTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
