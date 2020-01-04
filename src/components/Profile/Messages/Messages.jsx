import React from 'react';
import m from './Messages.module.scss';
import {NavLink} from "react-router-dom";

const Messages = (props) => {

    let from = props.messages.map(value => <NavLink to={'/Profile/messages/id' + value.id}><h3>{value.from}</h3>
    </NavLink>);
    let message = props.messages.map(value => <span>{value.message}</span>);
    return (
        <div className={m.wrapper}>
            <div className={m.menuBar}>
                {from}
            </div>
            <div className={m.contentBar}>
                {message}
            </div>
        </div>
    )

}

export default Messages;

