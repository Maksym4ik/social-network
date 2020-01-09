import React from 'react';
import p from './Posts.module.scss';
import Post from "./Post/Post";


const Posts = (props) => {
    let post = props.posts.map(value => <Post title={value.title} description={value.description} date={value.date}
                                              likes={value.likes}/>);
    let titleText = React.createRef(),
        descriptionText = React.createRef();

    let buttonClick = ()=>{
        props.dispatch({type: 'PUSH-NEW-POST'});
    }

    let updateText = () => {
        props.dispatch({type: 'NEW-POST-TEXT', title: titleText.current.value, description: descriptionText.current.value});
        // props.newPostText(titleText.current.value,descriptionText.current.value)
    }

    return (
        <div className={p.wrapper}>
            <div className={p.newPost}>
                <textarea onChange={updateText} ref={titleText} className={p.title} minLength='3' maxLength='15' value={props.updateText.textTitle} placeholder='Назва' />
                <textarea onChange={updateText} ref={descriptionText} className={p.description} minLength='10' maxLength='100' value={props.updateText.textDescription} placeholder='Ваші думки'>
                </textarea>
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

