import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import React from "react";
import {takeMeBack, takeMyProfile, takeNewProfile, takeVolunteers, applyEditModeAbout} from "../../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {withLoginRedirect} from "../../../hoc/withLoginRedirect";
import {compose} from "redux";


class ProfileInfoContainer extends React.Component {

    //local State
    state = {
        editMode: false,
        textAbout: ''
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 1001;
        this.props.takeVolunteers(userId);

    }
    onEditModeChange = (e) => {
        this.setState({
            textAbout: e.currentTarget.value
        })
    }

//получить профиль пользователя
    takeUserProfile = () => {
        this.props.takeMyProfile(this.props.volunteers);
    }

    //edit mode for field about
    activateEditMode = () => {
        debugger
        this.setState({
            editMode: true,
            textAbout: this.props.profileInfo.about
        })
    }

    deactivateEditMode =() => {
        this.setState({
            editMode: false
        })
        this.props.applyEditModeAbout(this.state.textAbout);
    }

    render() {
        let btnMyProfile = <button onClick={this.takeUserProfile}>myProfile</button>
        return <>
            {btnMyProfile}
            <ProfileInfo
                profileInfo={this.props.profileInfo}
                activateMode={this.activateEditMode}
                onEditModeChange={this.onEditModeChange}
                deactivateMode={this.deactivateEditMode}
                editMode={this.state.editMode}
                textAbout={this.state.textAbout}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        volunteers: state.volunteersPage.volunteers
    }
}
let mapDispatchToProps = {
    takeNewProfile,
    takeMeBack,
    takeVolunteers,
    takeMyProfile,
    applyEditModeAbout
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withLoginRedirect
)(ProfileInfoContainer);
