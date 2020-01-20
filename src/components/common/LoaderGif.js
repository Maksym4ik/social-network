import c from "../ContentBox/ContentBox.module.scss";
import React from "react";
import loading from "../../assets/images/loading.gif"

let loaderGif = () => {

    return <img style={{width: '30px'}} alt='loader' src={loading} className={c.loaderImage}/>
}

export default loaderGif;