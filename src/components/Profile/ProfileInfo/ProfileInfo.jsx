import React, {Component} from 'react';
import cs_style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={cs_style.img}
                     src="https://e1.pxfuel.com/desktop-wallpaper/778/683/desktop-wallpaper-cubes-colorful-internet-icons-cubes-icons-social-network-media-social-section-%D1%80%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%B8%D0%BD%D0%B3-social-media-icons.jpg"/>
            </div>
            <div className={cs_style.descriptionBlock}>
                <a>Ava+decription</a>
            </div>
        </div>
    )
}

export default ProfileInfo;