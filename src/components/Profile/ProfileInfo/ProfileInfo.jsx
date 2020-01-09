import React from 'react';
import p from './ProfileInfo.module.scss';
import PhotoCard from '../../img/ava.jpg';

const ProfileInfo = (props) => {
    return (
        <div className={p.wrapper}>
            <div className={p.mainInfo}>
                <img src={PhotoCard} alt=""/>
                <div className={p.description}>
                    <h1>{props.profileInfo.firstName}</h1>
                    <h1>{props.profileInfo.secName}</h1>
                    <h2>{props.profileInfo.age} <span> роки</span></h2>
                    <h2>{props.profileInfo.location}</h2>
                    <h1>{props.profileInfo.career}</h1>
                </div>
            </div>

            <div className={p.aboutFull}>
                <textarea maxLength='450' disabled>{props.profileInfo.about}</textarea>
            </div>
        </div>
    )

}

export default ProfileInfo;

