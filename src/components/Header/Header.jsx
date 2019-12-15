import React from 'react';
import h from './Header.module.scss';
import Logo from "../Logo/Logo";


const Header = () => {
    return (
        <div>
            <header className={h.Header}>
                <Logo/>
                <a href='/Volunteers'>волонтери</a>
                <a href='/Events'>події</a>
                <a href="/NewEvent">додати подію</a>
                <a href='/Profile'>профіль</a>
            </header>
            <hr className={h.hrHeader}/>
        </div>
    )
}

export default Header;
