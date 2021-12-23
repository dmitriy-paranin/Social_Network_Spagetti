import React from "react";
import s from './Prof ile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsType} from "./../../index"


const Profile = (props:MyPostsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;