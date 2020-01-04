import React from 'react';
import p from './Posts.module.scss';
import Post from "./Post/Post";

const Posts = (props) => {
let post=props.posts.map(value => <Post title={value.title} description={value.description} date={value.date} likes={value.likes}/>);
    return (
        <div className={p.wrapper}>
            <div className={p.newPost}>
                <textarea className={p.title} minLength='3' maxLength='20' placeholder="Назва"></textarea>
                <textarea className={p.description} minLength='10' maxLength='100' placeholder="Ваші думки"></textarea>
                <div className={p.postInfo}>
                    <span>date 12.12.2019</span>
                    <button className={p.buttonPush}>Додати</button>
                    {/*<span>likes 11</span>*/}
                </div>
            </div>
            {post}
        </div>
    )

}

export default Posts;

