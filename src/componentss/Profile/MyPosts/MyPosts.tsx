import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post adressAvatar='https://novostivl.ru/wp-content/uploads/2021/09/01/5-680x420.jpg' message='Hi, how are you?' />

                <Post adressAvatar='https://thumbs.dreamstime.com/b/%D0%BC%D0%BE-%D0%BE-%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B5%D1%81%D1%82%D1%8C-%D0%BC%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B8%D0%B7-%D0%B5-%D0%B8%D1%8F-%D1%81%D0%BF%D0%B0%D0%B3%D0%B5%D1%82%D1%82%D0%B8-34069539.jpg' message="Hi Lola! I'm HAVAYOU spagetti! Bu-ha-ha!"  />
            </div>
        </div>
    )
}

export default MyPosts;