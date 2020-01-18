import React from 'react';
import m from './Messages.module.scss';
import {NavLink} from "react-router-dom";

const Messages = (props) => {

    let path = '/Profile/messages/id';
    let from = props.messages.map(value =>
        <NavLink key={value.id} to={path + value.id} activeClassName={m.navActive}>
            <h3>{value.from}</h3>
        </NavLink>);
    let message = props.messages.map(value => <span key={value.id}>{value.message}</span>);

    let updateText = (e) => {
        let messageText = e.target.value;
        props.newMessageTextCreator(messageText);
    }
    let pushText = () => {
        props.pushNewMessageCreator();
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

                <div className={m.sentItem}>
                    <textarea onChange={updateText} value={props.updateMessageText}/>
                    <button onClick={pushText}>send</button>
                </div>
            </div>
        </div>

    )
}
export default Messages;
