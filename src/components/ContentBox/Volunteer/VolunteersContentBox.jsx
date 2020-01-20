import React from "react";
import c from "../ContentBox.module.scss";
import LoaderGif from "../../common/LoaderGif";
import Volunteer from "./Volunteer";


let VolunteersContentBox = (props) => {

    //VOLUNTEERS
    let pageViewV = [];
    let page = props.volunteersCurrentPage;
    //определяем количество страниц (кол обьектов / размер страници)
    let pagesCount = Math.ceil(props.volunteersCount / props.volunteersPageSize);
    let pages = [];

    //готовим масив для маппинга из количества страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    //выводим на страницу навигацию для переключения страниц
    pageViewV = pages.map(p => <span key={p} onClick={() => {
        return props.onPageChange(p)
    }} className={`${c.pages} ${page === p && c.currentPage} `}>{p}</span>);

    let pagesRender =
        <div className={c.pagesWrapper}>
            {props.isFetching ? <LoaderGif/> : 'page'} {pageViewV}
        </div>;

    let volunteersMapping = props.v.map(value => <Volunteer
        photoUrl={value.photoUrl ? value.photoUrl : "https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png"}
        followed={value.followed}
        followUser={props.followUser}//onClick
        firstName={value.firstName}
        key={value.id}
        id={value.id}
        career={value.career}
        location={value.location}
        age={value.age}
        about={value.about}
    />)

    return <div className={c.contentBox}>

        {pagesRender}
        {volunteersMapping}
        {pagesRender}
    </div>
}

export default VolunteersContentBox;