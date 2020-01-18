import React from "react";
import c from "./Volunteer.module.scss"


const Volunteer = (props) => {

    return (
        <div>
            <div className={c.flex}>
                <img src={props.photoUrl} alt="broken avatar"/>
                <div className={c.wrapper}>
                    <h1>{props.firstName}</h1>
                    <h3>{props.career}</h3>
                    <div className={`${c.flex} ${c.wrapper200}`}>
                        <h3>{props.location}</h3>
                        <h3>{props.age} років</h3>
                    </div>
                    <span>{props.about}</span>
                    <div className={c.buttons}>
                        {props.followed
                            ?
                            <button onClick={() => props.followUser(props.id)} className={c.active}>followed</button>
                            :
                            <button onClick={() => props.followUser(props.id)} className={c.notActive}>follow</button>}
                        <button className={c.notActive}>message</button>
                        <button className={c.notActive}>invite</button>
                        <button className={c.notActive}>rate</button>
                    </div>
                </div>
            </div>
            <hr className={c.hrContent}/>
        </div>
    )
}

export default Volunteer;
