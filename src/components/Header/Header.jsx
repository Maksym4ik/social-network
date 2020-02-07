import React from 'react';
import h from './Header.module.scss';
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";


const Header = ({isAuth, login}) => {
    return (

        <header className={h.Header}>
            <Logo/>
            <NavLink to='/Volunteers' activeClassName={h.active}>волонтери</NavLink>
            <NavLink to='/Events' activeClassName={h.active}>події</NavLink>
            <NavLink to="/NewEvent" activeClassName={h.active}>додати подію</NavLink>
            <div className={h.profile}>
                <NavLink to='/Profile/profileInfo' activeClassName={h.active} >профіль </NavLink>
                <NavLink to={!isAuth ? `/login` : `/Profile/settings`} className={h.login} activeClassName={h.loginActive}>{isAuth ? login : `Log In`}</NavLink>
            </div>
        </header>


    )
}

export default Header;
