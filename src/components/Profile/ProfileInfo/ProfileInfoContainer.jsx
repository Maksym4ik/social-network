import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import React from "react";
import {takeMeBack, takeNewProfile} from "../../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {volunteersAPI} from "../../../api/api";


class ProfileInfoContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId, newUser;
        if (!userId) userId=1001;
        volunteersAPI.getVolunteers(1).then(response => {
                response.data.map(value => {
                    if (Number(userId) === value.id)
                        newUser = value;
                    return value
                })
                this.props.takeNewProfile(newUser)
            })

    }


    render() {
        let btnMyProfile = <button onClick={this.props.takeMeBack}>myProfile</button>
        return <>
            {btnMyProfile}
            <ProfileInfo {...this.props}/></>
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}
let mapDispatchToProps = {
    takeNewProfile,
    takeMeBack
}


let MapUrlDataContainerComponents = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, mapDispatchToProps)(MapUrlDataContainerComponents);
