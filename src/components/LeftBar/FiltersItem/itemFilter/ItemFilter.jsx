import React from "react";
import l from "../../LeftBar.module.scss";


const ItemFilter = (props) => {
    //вывод проперти для фильтров из базы данных
    let outProperty = props.property.map(value => {
        return (<div className={l.propertyColumn} key={value}><input type="checkbox"/><label className={l.info}>{value}</label></div>)
    });
    return (
        <div className={l.flexColumn}>
                {outProperty}
        </div>
    )

}

export default ItemFilter;