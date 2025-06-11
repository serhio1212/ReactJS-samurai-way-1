import React, { Fragment } from "react";
import Post from "./Post/Post.jsx";
import Dislike from "./Post/Dislike/Dislike.jsx";
import Like from "./Post/Like/Like.jsx";
import cs_style from "./MyPosts.module.css";

const MyPosts = (props) => {
  let PostsDataMapList = props.PostsData.map((post) => {
    return (
      <Fragment key={post.id}>
        <Post
          message={post.message}
          LikesCount={post.likescount}
          DislikesCount={post.dislikescount}
        />
        <Like message={post.likesdata} />
        <Dislike message={post.dislikesdata} />
      </Fragment>
    );
  });

  let newPostProfileElement = React.createRef();

  let profilePost = (text) => {
    text = newPostProfileElement.current.value;
    props.AddProfilePost(text);
  };

  let onChangeProfileText = (Text) => {
    props.updateProfileText(Text);
  };

  return (
    <div className={cs_style.items}>
      <div>
        <a className={cs_style.a}>My post</a>
      </div>
      <div className={cs_style.ButtonBlock}>
        <div>
          <textarea
            onChange={() =>
              onChangeProfileText(newPostProfileElement.current.value)
            }
            ref={newPostProfileElement}
            value={props.MessageProfile.InitText}
            placeholder={"Input text"}
          />
        </div>
        <button
          onClick={() => {
            profilePost(props.MessageProfile.InitText);
          }}
        >
          Add post
        </button>
        <button>Remove</button>
      </div>
  
      <div>{PostsDataMapList}</div>
    </div>
  );
};
export default MyPosts;
