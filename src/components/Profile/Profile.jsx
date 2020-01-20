import React from 'react';
import p from './Profile.module.scss';
import {NavLink, Route} from "react-router-dom";
import Settings from "./Settings/Settings";
import PostsContainer from "./Posts/PostsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


const Profile = () => {

    return (
        <div className={p.wrapper}>
           <div className={p.menuBar}>
               <NavLink to='/Profile/profileInfo' activeClassName={p.active}>Профіль</NavLink>
               <NavLink to='/Profile/messages' activeClassName={p.active}>Повідомлення</NavLink>
               <NavLink to='/Profile/settings' activeClassName={p.active}>Налаштування</NavLink>
               <NavLink to='/Profile/posts' activeClassName={p.active}>Активність</NavLink>
           </div>
           <div className={p.contentBox}>
               <Route path='/Profile/profileInfo/:userId' render={() => <ProfileInfoContainer/>} />
               <Route path='/Profile/messages' render={() => <MessagesContainer/>} />
               <Route path='/Profile/settings' render={() => <Settings />} />
               <Route path='/Profile/posts' render={() => <PostsContainer />} />
           </div>

        </div>
    )

}



export default Profile;