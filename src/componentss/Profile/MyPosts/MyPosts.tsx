import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props:MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = () => {props.addPost(props.newPostText)}

    let onPostCgange = (e) => {
        props.
    }

    return (
        <div>
            <h3>My posts</h3>

            <div>
                <textarea onChange={onPostCgange} value={props.newPostText}/>
                <button onClick={addNewPost}>Add post</button>
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