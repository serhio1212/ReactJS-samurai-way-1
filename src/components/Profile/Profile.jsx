import React, {Component} from 'react';
import cs_style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

function Profile({PostsData }) {

    return (
        <div className={cs_style.content}>
            <ProfileInfo />
            <MyPosts PostsData={PostsData}/>

        </div>
    )
}

export default Profile;
