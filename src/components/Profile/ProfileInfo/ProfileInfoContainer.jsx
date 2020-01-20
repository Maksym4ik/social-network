import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import React from "react";
import * as axios from "axios";
import {takeMeBack, takeNewProfile} from "../../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";


class ProfileInfoContainer extends React.Component{

    componentDidMount() {
        axios.get('http://localhost:3000/volunteers1')
            .then(response => {
                this.props.takeNewProfile(response.data[2]);
            })
    }
    render() {
        return <> <button onClick={this.props.takeMeBack}>myProfile</button> <ProfileInfo {...this.props}/></>
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
