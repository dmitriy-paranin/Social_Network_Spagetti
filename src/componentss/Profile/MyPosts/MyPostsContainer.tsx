import React, {ChangeEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsType, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const mapSateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text /*e: ChangeEvent<HTMLTextAreaElement>*/) => {
            /*let text = e.currentTarget.value;*/
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect (mapSateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;