import EventImage from "../../img/EventImage.jpg";
import React from "react";
import c from "./Event.module.scss"

const Event = (props) => {
    return (
        <div>
            <div className={c.flex}>
                <img src={EventImage} alt=""/>
                <div className={c.wrapper}>
                    <h1>Сімейний фест</h1>
                    <h3>Арена Львів</h3>
                    <div className={`${c.flex} ${c.wrapper200}`}>
                        <h3>Львів</h3>
                        <h3>12.10.2019</h3>
                    </div>
                    <span>Подія для покращення свого настрою, піднімемо його і волотерам і учасникам.</span>
                </div>

            </div>
            <hr className={c.hrContent}/>
        </div>
    )
}

export default Event;