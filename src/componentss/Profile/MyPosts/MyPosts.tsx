import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../index";



const MyPosts = (props:PostsType) => {
      let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    { postsElements }
                </div>
            </div>
        </div>
    )
}

export default MyPosts;