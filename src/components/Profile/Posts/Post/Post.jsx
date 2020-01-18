import React from "react";
import p from './Post.module.scss';


const Post = (props) => {

    return(
        <div className={p.post}>
            <h3>{props.title}</h3>
            <textarea disabled value={props.description}/>
            <div className={p.postInfo}>
                <span>{props.date}</span>
                <span>likes {props.likes}</span>
            </div>
        </div>
    )
}


export default Post;