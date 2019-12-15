import Photo from "../../img/photo.jpg";
import React from "react";
import c from "./Volunteer.module.scss"
import SearchBar from "../../Search/Search";


const Volunteer = (props) => {

    return (

        <div>{SearchBar.actual = 'волонтери'}
            <div className={c.flex}>
                <img src={Photo} alt=""/>
                <div className={c.wrapper}>
                    <h1>{props.FullName}</h1>
                    <h3>Директор</h3>
                    <div className={`${c.flex} ${c.wrapper200}`}>
                        <h3>Львів</h3>
                        <h3>17 років</h3>
                    </div>
                    <span>Допомагаю по дому мамі за
кишенькові кошти, допоможу вам
за тарілку супа та розвозку.</span>
                </div>

            </div>
            <hr className={c.hrContent}/>
        </div>
    )
}

export default Volunteer;