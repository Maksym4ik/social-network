import {connect} from "react-redux";
import {clickOnPageEvents, getStartEvents, isFetchingActive, setEvents,} from "../../../redux/eventsPage-reducer";
import React from "react";
import Event from "./Event";
import EventsContentBox from "./EventsContentBox";

class EventsContentBoxApi extends React.Component {

    componentDidMount() {
        this.props.getStartEvents(this.props.eventsCurrentPage);
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
        this.props.clickOnPageEvents(e);
        this.props.getStartEvents(e);

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
    isFetchingActive,
    getStartEvents
}

const EventsContentBoxContainer = connect(mapStateToProps, mapDispatchToProps)(EventsContentBoxApi);
export default EventsContentBoxContainer;
