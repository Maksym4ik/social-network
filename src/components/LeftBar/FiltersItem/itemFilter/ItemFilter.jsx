import React from "react";
import l from "../../LeftBar.module.scss";


const ItemFilter = (props) => {
    //вывод проперти для фильтров из базы данных
    let outProperty = props.property.map(el => {
        return (<div className={l.propertyColumn}><input type="checkbox"/><label className={l.info}>{el}</label></div>)
    });
    return (
        <div className={l.flexColumn}>
                {outProperty}
        </div>
    )

}

export default ItemFilter;