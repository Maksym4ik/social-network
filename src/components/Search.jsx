import React from 'react';
import {ReactComponent as SearchIcon} from "./img/searchIcon.svg";

const SearchBar = () => {
return(
    <div className="Search">
        <div className="Search__wrapper">
            <div className="Search__wrapper__left">
                <h1> Пошук</h1>
                <SearchIcon />
                <div className="searchBar"></div>
                {/*<svg href={searchIcon}></svg>*/}
            </div>
            <div className='Search__wrapper__right'>
                <span className="currentCity">Львів </span>
                <span className="changeCity">обрати інше?</span>
            </div>
        </div>
        <div className="Search__wrapper">
            <h1>Фільтри</h1>
            <h1>Актуальніnpm волонтери</h1>
        </div>
    </div>
)
}

export default SearchBar;
