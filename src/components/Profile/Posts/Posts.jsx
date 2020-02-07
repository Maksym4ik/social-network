import React from 'react';
import p from './Posts.module.scss';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {
    let post = props.posts.map(value => <Post title={value.title} description={value.description} date={value.date}
                                              likes={value.likes} key={value.id}/>);

    //вызов функции добавить values of 2 textarea in da state


    return (
        <div className={p.wrapper}>
            <PostFormRedux onSubmit={props.pushPost}/>
            {post}
        </div>
    )

}

export default Posts;

let PostForm = (props) => {
    return <form className={p.newPost} onSubmit={props.handleSubmit}>
        <Field className={p.title}
               component={"textarea"} name={"title"}
               minLength='3' maxLength='15' placeholder='Назва'/>
        <Field className={p.description}
               component={"textarea"}name={"description"}
               minLength='10' maxLength='100' placeholder='Думи мої'/>

        <div className={p.postInfo}>
            <span>date</span>
            <button className={p.buttonPush} >Додати</button>
        </div>
    </form>
}

const PostFormRedux = reduxForm({form: "postForm"})(PostForm)
