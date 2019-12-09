import React from 'react';
import Photo from './img/photo.jpg';
import c from './ContentBox.module.scss';

const ContentBox = () => {
return(
<div className={c.contentBox}>
    <div className={c.flex}>
        <img src={Photo} alt=""/>
        <div className={c.wrapper}>
        <h1>Генадій</h1>
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
    <hr/>
    <div className={c.flex}>
        <img src={Photo} alt=""/>
        <div className={c.wrapper}>
            <h1>Генадій</h1>
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
    <hr/>
    <div className={c.flex}>
        <img src={Photo} alt=""/>
        <div className={c.wrapper}>
            <h1>Генадій</h1>
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
</div>
)
}

export default ContentBox;
