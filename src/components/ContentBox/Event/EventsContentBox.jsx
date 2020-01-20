import React from "react";
import c from "../ContentBox.module.scss";
import LoaderGif from "../../common/LoaderGif";



let EventsContentBox = (props) => {

    let pageViewE = [];
    let current = props.eventsCurrentPage;

    //определяем количество страниц (кол обьектов / размер страници)
    let pagesCount = Math.ceil(props.eventsCount / props.eventsPageSize);
    let pages = [];

    //готовим масив для маппинга из количества страниц
    for (let i = current > 1 ? current - 1 : current; i <= pagesCount; i++) {
        pages.push(i);
    }
    //выводим на страницу навигацию для переключения страниц
    pageViewE = pages.map(p => <span
        key={p}
        onClick={() => {
            return props.onPageChange(p)
        }}
        className={`${c.pages} ${current === p && c.currentPage}`}>{p}
        </span>);

    let pagesRender =
        <div className={c.pagesWrapper}>
                {props.isFetching ? <LoaderGif/>: 'page '} {pageViewE}
        </div>;

    return <div className={c.contentBox}>

        {pagesRender}
        {props.event()}
        {pagesRender}
    </div>
}

export default EventsContentBox;