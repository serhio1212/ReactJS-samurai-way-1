import React, { Fragment } from "react";
import Post from "./Post/Post.jsx";
import Dislike from "./Post/Dislike/Dislike.jsx";
import Like from "./Post/Like/Like.jsx";
import cs_style from "./MyPosts.module.css";

const MyPosts = (props) => {
  let PostsDataMapP = props.PostsData.map((p) => {
    return (
      <Fragment key={p.id}>
        <Post
          message={p.message}
          LikesCount={p.likescount}
          DislikesCount={p.dislikescount}
        />
        <Like message={p.likesdata} />
        <Dislike message={p.dislikesdata} />
      </Fragment>
    );
  });

  let newPostProElement = React.createRef();

  let proPost = (ttt) => {
    let text = newPostProElement.current.value;
    props.AddProfilePost(text);
  };

  let onChangeProText = (tttText) => {
    props.updateProfileText(tttText);
  };

  return (
    <div className={cs_style.items}>
      <div>
        <a className={cs_style.a}>My post</a>
      </div>
      <div className={cs_style.ButtonBlock}>
        <div>
          <textarea
            onChange={() => onChangeProText(newPostProElement.current.value)}
            ref={newPostProElement}
            value={props.MessageProfile.InitText}
            placeholder={"Input text"}
          />
        </div>
        <button
          onClick={() => {
            proPost(props.MessageProfile.InitText);
          }}
        >
          Add post
        </button>
        <button>Remove</button>
      </div>
      <br></br>
      <div>{PostsDataMapP}</div>
    </div>
  );
};
export default MyPosts;
