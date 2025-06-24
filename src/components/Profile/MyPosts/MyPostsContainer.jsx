import React from "react";
import { useDispatch } from "react-redux";
import MyPosts from "./MyPosts.jsx";
import {
  addProfilePostActionCreator,
  updateProfileTextActionCreator,
} from "../../../redux/reducerProfilePage.js";
import StoreContext from "../../../redux/StoreContext.js";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(Store) => {
        // const dispatch = useDispatch();

        let addProfilePost = (text) => {
          Store.dispatch(addProfilePostActionCreator(text));
        };

        let ChangeProfileText = (text) => {
          Store.dispatch(updateProfileTextActionCreator(text));
        };

        return (
          <MyPosts
            addProfilePost={addProfilePost}
            ChangeProfileText={ChangeProfileText}
            ProfilePage={Store.getState().ProfilePage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MyPostsContainer;
