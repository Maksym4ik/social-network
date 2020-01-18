import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";


let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
export default ProfileInfoContainer;
