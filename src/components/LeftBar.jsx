import React from 'react';
import { ReactComponent as Arrow } from './img/arrow.svg';
import '../App.module.scss';
import l from './LeftBar.module.scss';

const LeftBar = () => {
return(
<div className={l.leftBar}>
    <div className={l.leftBar__wrapper}>
        <div className={l.flexRaw}>
            <h2>Вид діяльності</h2>
            <Arrow />
        </div>
        <div className={l.flexRaw}>
            <input className={l.checkBox} type="checkbox"/>
            <span className={l.info}>перший вид</span>
        </div>
        <div className={l.flexRaw}>
            <input className={l.checkBox} type="checkbox"/>
            <span className={l.info}> другий вид</span>
        </div>
        <div className={l.flexRaw}>
            <input className={l.checkBox} type="checkbox"/>
            <span className={l.info}> третій вид</span>
        </div>
    </div>
    <hr/>
    <div className={l.leftBar__wrapper}>
        <div className={l.flexRaw}>
            <h2>Вік</h2>
            <Arrow />
        </div>

    </div><hr/>
    <div className={l.leftBar__wrapper}>
        <div className={l.flexRaw}>
            <h2>Стать</h2>
            <Arrow />
        </div>
    </div><hr/>
    <div className={l.leftBar__wrapper}>
        <div className={l.flexRaw}>
            <h2>Мова</h2>
            <Arrow />
        </div>
    </div>
    <hr/>
</div>
)
}

export default LeftBar;
