import React, {ChangeEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsType, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let newTextHandler = (text /*e: ChangeEvent<HTMLTextAreaElement>*/) => {
                    /*let text = e.currentTarget.value;*/
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }

                return (<MyPosts updateNewPostText={newTextHandler}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>)
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;