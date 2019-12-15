import React from 'react';
import c from './ContentBox.module.scss';
import Volunteer from "./Volunteer/Volunteer";
import Event from "./Event/Event";
import {Route} from "react-router-dom";

const ContentBox = () => {
    // // let name1 = 'Максим';
    // let name2 = 'Сергій';
    // let name3 = 'Віталій';
    return (
        <div className={c.contentBox}>
            <Route path='/Volunteers' component={Volunteer}/>
            <Route path='/Volunteers' component={Volunteer}/>
            <Route path='/Volunteers' component={Volunteer}/>
            <Route path='/Events' component={Event}/>
            <Route path='/Events' component={Event}/>
            <Route path='/Events' component={Event}/>


        </div>
    )
}

export default ContentBox;
