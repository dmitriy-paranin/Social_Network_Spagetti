import React from "react";
import s from './Post.module.css';

type MessegeType = {
    message: string
    adressAvatar: string
}

const Post: React.FC<MessegeType> = (props) => {
    return (
        <div className={s.item}>
            <img src={props.adressAvatar} alt="avatar"/>
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;