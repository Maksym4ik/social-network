import LeftBar from "./LeftBar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        page: state.volunteersPage,
        type: 'Volunteers'

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const LeftBarVolunteersContainer = connect(mapStateToProps,mapDispatchToProps)(LeftBar);
export default LeftBarVolunteersContainer;
