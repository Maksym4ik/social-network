import {connect} from "react-redux";
import {
    clickOnPageEvents,
    isFetchingActive,
    setEvents,
} from "../../../redux/eventsPage-reducer";
import React from "react";
import * as axios from "axios";
import Event from "./Event";
import EventsContentBox from "./EventsContentBox";

class EventsContentBoxApi extends React.Component {

    componentDidMount() {
        this.props.isFetchingActive(true);
        axios.get(`http://localhost:3000/events${this.props.eventsCurrentPage}`)
            .then(response => {
                this.props.setEvents(response.data)
                this.props.isFetchingActive(false);
            })

    }

    event = () => {
        return this.props.e.map(value => <Event eventName={value.eventName}
                                                key={value.id}
                                                nameLocation={value.nameLocation}
                                                location={value.location}
                                                data={value.data}
                                                about={value.about}/>)
    }

    onPageChange = (e) => {
        this.props.isFetchingActive(true);
        this.props.clickOnPageEvents(e);
        axios.get(`http://localhost:3000/events${e}`)
            .then(response => {
                this.props.isFetchingActive(false);
                this.props.setEvents(response.data)
            })

    }

    render() {
        return <>
            <EventsContentBox
                onPageChange={this.onPageChange}
                event={this.event}
                e={this.props.e}
                eventsCount={this.props.eventsCount}
                eventsPageSize={this.props.eventsPageSize}
                eventsCurrentPage={this.props.eventsCurrentPage}
                isFetching={this.props.isFetching}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        e: state.eventsPage.events,
        eventsCount: state.eventsPage.eventsCount,
        eventsPageSize: state.eventsPage.eventsPageSize,
        eventsCurrentPage: state.eventsPage.eventsCurrentPage,
        isFetching: state.eventsPage.isFetching
    }
}
let mapDispatchToProps = {
    clickOnPageEvents,
    setEvents,
    isFetchingActive
}

const EventsContentBoxContainer = connect(mapStateToProps, mapDispatchToProps)(EventsContentBoxApi);
export default EventsContentBoxContainer;
