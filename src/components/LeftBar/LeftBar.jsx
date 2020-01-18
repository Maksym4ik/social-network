import React from 'react';
import l from './LeftBar.module.scss';
import FiltersItem from "./FiltersItem/FiltersItem";
// import allData from "../../index";

const LeftBar = (props) => {
    let filtersItem = filters => <FiltersItem
        type={props.type}
        key={filters.id}
        filterName={filters.filterName}
        property={filters.property}
        pathTo={filters.pathTo}/>;
    //вызов всех возможных фильтров с помощью масива и метода мар
    let out = (props.type === 'Events') ? props.page.filtersEvents.map(filters => filtersItem(filters)) :
        props.page.filtersVolunteers.map(filters => filtersItem(filters));
    return (
        <div className={l.leftBar}>
            {out}
        </div>
    )
}

export default LeftBar;
