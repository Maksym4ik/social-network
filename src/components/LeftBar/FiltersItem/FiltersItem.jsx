import React from 'react';
import {ReactComponent as Arrow} from '../../../assets/images/arrow.svg';
import l from '../LeftBar.module.scss';
import {NavLink} from "react-router-dom";
import ItemFilter from "./itemFilter/ItemFilter";

const FiltersItem = (props) => {
    let pathTo=`/${props.type}/${props.pathTo}`;

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
