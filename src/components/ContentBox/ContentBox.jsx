import React from 'react';
import c from './ContentBox.module.scss';
import Volunteer from "./Volunteer/Volunteer";
import Event from "./Event/Event";
import {Route} from "react-router-dom";

const ContentBox = (props) => {

    // eslint-disable-next-line no-unused-vars
    let outVolunteers;
    // eslint-disable-next-line no-unused-vars
    let outEvents;
    return (
        <div className={c.contentBox}>
            <Route path='/Volunteers' render={() => outVolunteers = props.volunteers.map(value => <Volunteer firstName={value.firstName} career={value.career} location={value.location} age={value.age} about={value.about}/>)}/>
            <Route path='/Events' render={() => outEvents = props.events.map(value => <Event eventName={value.eventName} nameLocation={value.nameLocation} location={value.location} data={value.data} about={value.about}/>)}/>

        </div>
    )
}

export default ContentBox;
