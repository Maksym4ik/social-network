import {connect} from "react-redux";
import {
    clickOnPageVolunteers,
    followUser, getVolunteers,
    isFetchingActive,
    setVolunteers
} from "../../../redux/volunteersPage-reducer";
import React from "react";
import VolunteersContentBox from "./VolunteersContentBox";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class VolunteersContentBoxContainer extends React.Component {

    componentDidMount() {
        let {volunteersCurrentPage} = this.props;
        this.props.getVolunteers(volunteersCurrentPage);

    }


    onPageChange = (e) => {
        let {clickOnPageVolunteers} = this.props;
        clickOnPageVolunteers(e);
        this.props.getVolunteers(e);

    }

    render() {
        return <VolunteersContentBox
            onPageChange={this.onPageChange}
            {...this.props}

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
    isFetchingActive,
    getVolunteers
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(VolunteersContentBoxContainer)

