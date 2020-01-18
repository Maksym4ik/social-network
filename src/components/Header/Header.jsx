import React from 'react';
import h from './Header.module.scss';
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (

            <header className={h.Header}>
                <Logo/>
                <NavLink to='/Volunteers' activeClassName={h.active} >волонтери</NavLink>
                <NavLink to='/Events' activeClassName={h.active}>події</NavLink>
                <NavLink to="/NewEvent" activeClassName={h.active}>додати подію</NavLink>
                <NavLink to='/Profile/profileInfo' activeClassName={h.active}>профіль</NavLink>
            </header>


    )
}

export default Header;
