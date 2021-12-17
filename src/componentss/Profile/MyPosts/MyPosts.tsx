import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you!', likesCount: 6},
        {id: 2, message: 'Don\'t worry', likesCount: 10},
        {id: 3, message: 'It\'s my first post superstar', likesCount: 12},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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