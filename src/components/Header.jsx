import React from 'react';
import h from './Header.module.scss';


const Header = () => {
return(
<header className={h.Header}>

    <h1><a href='#s'>волонтери</a></h1>
    <h1> <a href='#s'>події</a></h1>
    <h1><a href='#s'>додати подію</a></h1>
    <h1> <a href='#s'>профіль</a></h1>
    <div className={h.Header__bg}> </div>
</header>
)
}

export default Header;
