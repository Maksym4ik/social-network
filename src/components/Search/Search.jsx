import React from 'react';
import {ReactComponent as SearchIcon} from "../img/searchIcon.svg";
import s from './Search.module.scss';

const SearchBar = (props) => {
    return (
        <div className={s.search}>
            <div className={s.search__wrapper}>
                <div className={s.search__wrapper__left}>
                    <span> Пошук</span>
                    <SearchIcon/>
                    <div className={s.inputText}></div>
                    {/*<svg href={searchIcon}></svg>*/}
                </div>
                <div className={s.search__wrapper__right}>
                    <span className={s.currentCity}>Львів </span>
                    <span className={s.changeCity}>обрати інше?</span>
                </div>
            </div>
            <div className={s.search__wrapper}>
                <h1>Фільтри</h1>
                <h1>Актуальні {props.srlf}</h1>
            </div>
        </div>
    )
}

export default SearchBar;
