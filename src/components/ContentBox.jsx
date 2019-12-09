import React from 'react';
import Photo from './img/photo.jpg';

const ContentBox = () => {
return(
<div className="contentBox">
    <div className="flex">
        <img src={Photo} alt=""/>
        <div className="contentBox__wrapper__right">
        <h1>Генадій</h1>
        <h3>Директор</h3>
            <div className="flex wrapper200">
        <h3>Львів</h3>
        <h3>17 років</h3>
            </div>
        <span>Допомагаю по дому мамі за
кишенькові кошти, допоможу вам
за тарілку супа та розвозку.</span>
        </div>
    </div>
    <hr/>
    <div className="flex">
        <img src={Photo} alt=""/>
        <div className="contentBox__wrapper__right">
            <h1>Генадій</h1>
            <h3>Директор</h3>
            <div className="flex wrapper200">
                <h3>Львів</h3>
                <h3>17 років</h3>
            </div>
            <span>Допомагаю по дому мамі за
кишенькові кошти, допоможу вам
за тарілку супа та розвозку.</span>
        </div>
    </div>
    <hr/>
    <div className="flex">
        <img src={Photo} alt=""/>
        <div className="contentBox__wrapper__right">
            <h1>Генадій</h1>
            <h3>Директор</h3>
            <div className="flex wrapper200">
                <h3>Львів</h3>
                <h3>17 років</h3>
            </div>
            <span>Допомагаю по дому мамі за
кишенькові кошти, допоможу вам
за тарілку супа та розвозку.</span>
        </div>
    </div>
</div>
)
}

export default ContentBox;
