import React from 'react';
import p from './Posts.module.scss';
import Post from "./Post/Post";

const Posts = (props) => {
    let post = props.posts.map(value => <Post title={value.title} description={value.description} date={value.date}
                                              likes={value.likes} key={value.id}/>);
    let titleText = React.createRef(),
        descriptionText = React.createRef();

    //вызов функции добавить values of 2 textarea in da state
    let buttonClick = ()=>{
        props.pushNewPostCreator();
    }

    //вызов функции - добавить value of textarea in da temp array
    let updateText = (e) => {
        props.newPostTextCreator(titleText.current.value,descriptionText.current.value);
    }

    return (
        <div className={p.wrapper}>
            <div className={p.newPost}>
                <textarea onChange={updateText} ref={titleText} className={p.title} minLength='3' maxLength='15' value={props.updatePostText.textTitle} placeholder='Назва' />
                <textarea onChange={updateText} ref={descriptionText} className={p.description} minLength='10' maxLength='100' value={props.updatePostText.textDescription} placeholder='Ваші думки'/>

                <div className={p.postInfo}>
                    <span>date</span>
                    <button className={p.buttonPush} onClick={ buttonClick }>Додати</button>
                    {/*<span>likes 11</span>*/}
                </div>
            </div>
            {post}
        </div>
    )

}

export default Posts;

