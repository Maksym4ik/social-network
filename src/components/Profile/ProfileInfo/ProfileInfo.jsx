import React from 'react';
import p from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
    let Profile = props.profileInfo;
    return (

        <div className={p.wrapper}>
            <div className={p.mainInfo}>
                <img src={Profile.photoUrl ? Profile.photoUrl : "https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png"} alt="UserPhoto"/>
                <div className={p.description}>
                    <h1>{Profile.firstName}</h1>
                    <h2>{Profile.age} <span> роки</span></h2>
                    <h2>{Profile.location}</h2>
                    <h1>{Profile.career}</h1>
                </div>
            </div>

            <div className={p.aboutFull}>
                <textarea maxLength='450' disabled value={Profile.about}/>
            </div>
        </div>
    )

}

export default ProfileInfo;

