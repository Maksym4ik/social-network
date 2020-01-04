import React from 'react';
import {ReactComponent as LogoIcon} from "../../img/SvgLogo.svg";
import l from './Logo.module.scss';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={l.logo}>
            <LogoIcon/>
            <span><NavLink to="/Home">VolGroup</NavLink></span>
        </div>

    )
}

export default Logo;