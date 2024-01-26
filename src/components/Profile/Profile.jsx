import React, {Component} from 'react';
import cs_style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

function Profile(props) {

    return (
        <div className={cs_style.content}>
            <ProfileInfo />
            <MyPosts AddProPost={props.AddProPost} MessageProTextData={props.MessageProTextData} updateProText={props.updateProText} PostsData={props.PostsData} />

        </div>
    )
}

export default Profile;
