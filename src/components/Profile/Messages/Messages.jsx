import React from 'react';
import m from './Messages.module.scss';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Messages = (props) => {

    let path = '/Profile/messages/id';
    let from = props.messages.map(value =>
        <NavLink key={value.id} to={path + value.id} activeClassName={m.navActive}>
            <h3>{value.from}</h3>
        </NavLink>);
    let message = props.messages.map(value => <span key={value.id}>{value.message}</span>);


    let pushText = (value) => {
        props.pushNewMessageCreator(value.messageText);
    }

    return (
        <div className={m.wrapper}>
            <div className={m.menuBar}>
                {from}
            </div>
            <div className={m.contentBar}>
                <div className={m.messages}>
                    {message}
                </div>

               <MessageFormRedux onSubmit={pushText}/>
            </div>
        </div>

    )
}
export default Messages;

const MessageForm = (props) => {
    return <form className={m.sentItem} onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"messageText"}/>
        <button>send</button>
    </form>
}

const MessageFormRedux = reduxForm({form: "messageForm"})(MessageForm)