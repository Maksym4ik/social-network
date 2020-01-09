import React from 'react';
import p from './Profile.module.scss';
import {NavLink, Route} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Messages from "./Messages/Messages";
import Settings from "./Settings/Settings";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return (
        <div className={p.wrapper}>
           <div className={p.menuBar}>
               <NavLink to='/Profile/profile' activeClassName={p.active}>Профіль</NavLink>
               <NavLink to='/Profile/messages' activeClassName={p.active}>Повідомлення</NavLink>
               <NavLink to='/Profile/settings' activeClassName={p.active}>Налаштування</NavLink>
               <NavLink to='/Profile/posts' activeClassName={p.active}>Активність</NavLink>
           </div>
           <div className={p.contentBox}>
               <Route path='/Profile/profile' render={() => <ProfileInfo  profileInfo={props.profilePage.profileInfo}/>} />
               <Route path='/Profile/messages' render={() => <Messages messages={props.profilePage.messages}/>} />
               <Route path='/Profile/settings' render={() => <Settings />} />
               <Route path='/Profile/posts' render={() => <Posts posts={props.profilePage.posts} dispatch={props.dispatch} updateText={props.profilePage.updateText}/>} />
           </div>
            {console.log(props.newPostText)}
        </div>
    )

}

export default Profile;