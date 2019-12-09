import React from 'react';
import h from './Header.module.scss';
import {ReactComponent as SvgLogo} from "./img/SvgLogo.svg";
import Logo from "./Logo";


const Header = () => {
return(
<header className={h.Header}>
    <Logo/>
    <a href='#s'>волонтери</a>
    <a href='#s'>події</a>
    <a href='#s'>додати подію</a>
    <a href='#s'>профіль</a>
    <div className={h.Header__bg}> </div>
</header>
)
}

export default Header;
