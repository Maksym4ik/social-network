import {connect} from "react-redux";
import {
    followUser,
    setVolunteers,
    clickOnPageVolunteers,
    isFetchingActive
} from "../../../redux/volunteersPage-reducer";
import React from "react";
import * as axios from "axios";
import VolunteersContentBox from "./VolunteersContentBox";
import {withRouter} from "react-router-dom";


class VolunteersContentBoxContainer extends React.Component {

    componentDidMount() {
        debugger
        this.props.isFetchingActive(true);
        axios.get(`http://localhost:3000/volunteers${this.props.volunteersCurrentPage}`)
            .then(response => {
                this.props.isFetchingActive(false);
                this.props.setVolunteers(response.data)
            })

    }


    onPageChange = (e) => {
        this.props.isFetchingActive(true);
        this.props.clickOnPageVolunteers(e);
        axios.get(`http://localhost:3000/volunteers${e}`)
            .then(response => {
                this.props.isFetchingActive(false);
                this.props.setVolunteers(response.data)
            })

    }

    render() {
        return <VolunteersContentBox
            onPageChange={this.onPageChange}
            volunteerMapping={this.volunteerMapping}
            v={this.props.v}
            volunteersCount={this.props.volunteersCount}
            volunteersPageSize={this.props.volunteersPageSize}
            volunteersCurrentPage={this.props.volunteersCurrentPage}
            isFetching={this.props.isFetching}
            followUser={this.props.followUser}

        />
    }

}

let mapStateToProps = (state) => {
    return {
        v: state.volunteersPage.volunteers,
        volunteersCount: state.volunteersPage.volunteersCount,
        volunteersPageSize: state.volunteersPage.volunteersPageSize,
        volunteersCurrentPage: state.volunteersPage.volunteersCurrentPage,
        isFetching: state.volunteersPage.isFetching
    }
}
let mapDispatchToProps = {
    followUser,
    setVolunteers,
    clickOnPageVolunteers,
    isFetchingActive
}

let WithUrlDataContainerComponent = withRouter(VolunteersContentBoxContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
