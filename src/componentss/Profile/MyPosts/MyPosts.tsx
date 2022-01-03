import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}


const MyPosts = (props:MyPostsPropsType) => {
      let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
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