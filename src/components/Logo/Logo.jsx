import React from 'react';
import {ReactComponent as LogoIcon} from "../img/SvgLogo.svg";
import l from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={l.logo}>
            <LogoIcon/>
            <span><a href="/Home">VolGroup</a></span>
        </div>

    )
}

export default Logo;