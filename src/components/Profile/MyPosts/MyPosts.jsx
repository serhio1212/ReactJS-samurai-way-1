import React, {Component, Fragment} from 'react';
import Post from './Post/Post.jsx';
import Dislike from './Post/Dislike/Dislike.jsx';
import Like from './Post/Like/Like.jsx';
import cs_style from './MyPosts.module.css';


const MyPosts = ({PostsData}) => {

    let PostsDataMapP = PostsData.map((p) => {
        return (<Fragment key={p.id} >
            <Post message={p.message} LikesCount={p.likescount} DislikesCount={p.dislikescount}/>
            <Like message={p.likesdata}/>
            <Dislike message={p.dislikesdata}/>
        </Fragment>)
    })

    let newPostElement = React.createRef();
    // let addText = () => {
    // if (newPostElement.current.value) = Null ? 'prop' : postMessage = newPostElement.current.value;
    //     AddPost(postMessage);
    // }
    return (
        <div className={cs_style.items}>

            <div>
                <a className={cs_style.a}>My post</a>
            </div>
            <div className={cs_style.ButtonBlock}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button >Add post</button>
                <button>Remove</button>
            </div>
            <br></br>
            <div>
                {PostsDataMapP}
            </div>
        </div>
    )
}
export default MyPosts;
