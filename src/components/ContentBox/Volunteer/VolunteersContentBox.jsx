import React from "react";
import c from "../ContentBox.module.scss";


let VolunteersContentBox = (props) => {

    //VOLUNTEERS
    let pageViewV = [];
    let current = props.volunteersCurrentPage;
    //определяем количество страниц (кол обьектов / размер страници)
    let pagesCount = Math.ceil(props.volunteersCount / props.volunteersPageSize);
    let pages = [];
    //готовим масив для маппинга из количества страниц
    for (let i = current > 1 ? current - 1 : current; i <= pagesCount; i++) {
        pages.push(i);
    }
    //выводим на страницу навигацию для переключения страниц
    pageViewV = pages.map(p => <span key={p} onClick={() => {
        return props.onPageChange(p)
    }} className={`${c.pages} ${current === p && c.currentPage} `}>{p}</span>);

    let pagesRender =
        <div className={c.pagesWrapper}>
            page {pageViewV}
        </div>;


    return <div className={c.contentBox}>

        {pagesRender}
        {props.volunteerMapping()}
        {pagesRender}
    </div>
}

export default VolunteersContentBox;