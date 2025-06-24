import React from "react";
import { useDispatch } from "react-redux";
import MyPosts from "./MyPosts.jsx";
import {
  addProfilePostActionCreator,
  updateProfileTextActionCreator,
} from "../../../redux/reducerProfilePage.js";

const MyPostsContainer = (props) => {
  const dispatch = useDispatch();

  let addProfilePost = (text) => {
    dispatch(addProfilePostActionCreator(text));
  };

  let ChangeProfileText = (text) => {
    dispatch(updateProfileTextActionCreator(text));
  };

  return (
    <MyPosts
      addProfilePost={addProfilePost}
      ChangeProfileText={ChangeProfileText}
      ProfilePage={props.ProfilePage}
    />
  );
};
export default MyPostsContainer;
