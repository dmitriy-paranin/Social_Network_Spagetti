import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText:string) => void
    updateNewPostText: (newText:string) => void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                /*addPostCallback={props.addPost}
                updateNewPostText={props.updateNewPostText}*//>
        </div>
    )
}

export default Profile;