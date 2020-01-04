import React from 'react';
import l from './LeftBar.module.scss';
import FiltersItem from "./FiltersItem/FiltersItem";
// import allData from "../../index";

const LeftBar = (props) => {

    //вызов всех возможных фильтров с помощью масива и метода мар

    let outFilters = props.filters.map(filters => <FiltersItem filterName={filters.filterName} property={filters.property} pathTo={filters.pathTo}/>);
    return (
        <div className={l.leftBar}>
            {outFilters}
        </div>
    )
}

export default LeftBar;
