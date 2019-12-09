import React from 'react';
import { ReactComponent as Arrow } from './img/arrow.svg';
import '../App.css';

const LeftBar = () => {
return(
<div className='leftBar'>
    <div className="leftBar__content">
        <div className="flexRaw">
            <h2>Вид діяльності</h2>
            <Arrow />
        </div>
        <div className="flexRaw">
            <input className="checkBox" type="checkbox"/>
            <span className='leftBar_info'>перший вид</span>
        </div>
        <div className="flexRaw">
            <input className="checkBox" type="checkbox"/>
            <span className='leftBar_info'>другий вид</span>
        </div>
        <div className="flexRaw">
            <input className="checkBox" type="checkbox"/>
            <span className='leftBar_info'>третій вид</span>
        </div>
    </div>
    <hr/>
    <div className="leftBar__content">
        <div className="flexRaw">
            <h2>Вік</h2>
            <Arrow />
        </div>

    </div><hr/>
    <div className="leftBar__content">
        <div className="flexRaw">
            <h2>Стать</h2>
            <Arrow />
        </div>
    </div><hr/>
    <div className="leftBar__content">
        <div className="flexRaw">
            <h2>Мова</h2>
            <Arrow />
        </div>
    </div>
    <hr/>
</div>
)
}

export default LeftBar;
