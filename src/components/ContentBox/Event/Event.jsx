import EventImage from "../../../assets/images/EventImage.jpg";
import React from "react";
import c from "./Event.module.scss"

const Event = (props) => {
    return (
        <div>
            <div className={c.flex}>
                <img src={EventImage} alt=""/>
                <div className={c.wrapper}>
                    <h1>{props.eventName}</h1>
                    <h3>{props.nameLocation}</h3>
                    <div className={`${c.flex} ${c.wrapper200}`}>
                        <h3>{props.location}</h3>
                        <h3>{props.data}</h3>
                    </div>
                    <span>{props.about}</span>
                </div>
            </div>
            <hr className={c.hrContent}/>
        </div>
    )
}

export default Event;