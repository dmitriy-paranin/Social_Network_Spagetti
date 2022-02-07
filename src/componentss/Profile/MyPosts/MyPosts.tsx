import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPostCallback: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())/*, props.newPostText*/
    }

    let newTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={newTextHandler} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts