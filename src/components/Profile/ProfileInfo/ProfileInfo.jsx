import React from 'react';
import p from './ProfileInfo.module.scss';
import PhotoCard from '../../../assets/images/ava.jpg';

const ProfileInfo = (props) => {
    let P = props.profileInfo;
    return (

        <div className={p.wrapper}>
            <div className={p.mainInfo}>
                <img src={PhotoCard} alt=""/>
                <div className={p.description}>
                    <h1>{P.firstName}</h1>
                    <h1>{P.secName}</h1>
                    <h2>{P.age} <span> роки</span></h2>
                    <h2>{P.location}</h2>
                    <h1>{P.career}</h1>
                </div>
            </div>

            <div className={p.aboutFull}>
                <textarea maxLength='450' disabled value={P.about}/>
            </div>
        </div>
    )

}

export default ProfileInfo;

