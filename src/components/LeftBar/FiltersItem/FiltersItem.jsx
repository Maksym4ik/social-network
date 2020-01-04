import React from 'react';
import {ReactComponent as Arrow} from '../../img/arrow.svg';
import l from '../LeftBar.module.scss';
import {NavLink} from "react-router-dom";
import ItemFilter from "./itemFilter/ItemFilter";

const FiltersItem = (props) => {
    let pathTo=`/Volunteers/${props.pathTo}`;

    return (
        <div className={l.leftBarWrapper}>
            <div className={l.flexRaw}>

                <NavLink to={pathTo} activeClassName={l.active} className='navBtn'>{props.filterName}</NavLink>
                <Arrow/>
            </div>
            <ItemFilter property={props.property}/>

            <hr/>
        </div>

    )
}

export default FiltersItem;
