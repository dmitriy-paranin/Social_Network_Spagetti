import React from "react";
import s from './Prof ile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText:string) => void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}/>
        </div>
    )
}

export default Profile;