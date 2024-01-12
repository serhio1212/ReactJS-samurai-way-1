import React, {Component} from 'react';
import cs_style from './common.module.css'
import myImage from '../../img/desktop-wallpaper.jpg';

function Common(props) {
    return (
        <div>
            <div>
                <img className={cs_style.img}
                     src={myImage}/>
            </div>
            <div className={cs_style.descriptionBlock}>
                <a>Welcome to portal!</a>
            </div>
        </div>
    )
}

export default Common;
