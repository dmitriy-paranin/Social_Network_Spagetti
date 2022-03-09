import React, {ChangeEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsType, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let newTextHandler = (text /*e: ChangeEvent<HTMLTextAreaElement>*/) => {
        /*let text = e.currentTarget.value;*/
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }

    return (<MyPosts
        updateNewPostText={newTextHandler}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />)
}
export default MyPostsContainer;