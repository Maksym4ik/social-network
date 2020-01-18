import {connect} from "react-redux";
import {clickOnPageAC, followAC, setVolunteersAC} from "../../../redux/volunteersPage-reducer";
import React from "react";
import * as axios from "axios";
import Volunteer from "./Volunteer";
import VolunteersContentBox from "./VolunteersContentBox";


class VolunteersContentBoxApi extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3000/volunteers${this.props.volunteersCurrentPage}`)
            .then(response => this.props.setVolunteers(response.data))

    }

    volunteerMapping = () => {
        return this.props.v.map(value => <Volunteer
            photoUrl={value.photoUrl ? value.photoUrl : "https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png"}
            followed={value.followed}
            followUser={this.props.followUser}//onClick
            firstName={value.firstName}
            key={value.id}
            id={value.id}
            career={value.career}
            location={value.location}
            age={value.age}
            about={value.about}/>)
    }

    onPageChange = (e) => {

        this.props.clickOnPageVolunteers(e);
        axios.get(`http://localhost:3000/volunteers${e}`)
            .then(response => this.props.setVolunteers(response.data))

    }

    render() {
        return <VolunteersContentBox
            onPageChange={this.onPageChange}
            volunteerMapping={this.volunteerMapping}
            v={this.props.v}
            volunteersCount={this.props.volunteersCount}
            volunteersPageSize={this.props.volunteersPageSize}
            volunteersCurrentPage={this.props.volunteersCurrentPage}

        />
    }

}

let mapStateToProps = (state) => {
    return {
        v: state.volunteersPage.volunteers,
        volunteersCount: state.volunteersPage.volunteersCount,
        volunteersPageSize: state.volunteersPage.volunteersPageSize,
        volunteersCurrentPage: state.volunteersPage.volunteersCurrentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followAC(userId)),
        setVolunteers: (volunteers) => dispatch(setVolunteersAC(volunteers)),
        clickOnPageVolunteers: (pageNumber) => dispatch(clickOnPageAC(pageNumber))
    }
}
const VolunteersContentBoxContainer = connect(mapStateToProps, mapDispatchToProps)(VolunteersContentBoxApi);

export default VolunteersContentBoxContainer;
