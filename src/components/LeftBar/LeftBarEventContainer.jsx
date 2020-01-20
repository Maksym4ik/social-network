import LeftBar from "./LeftBar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        page: state.eventsPage,
        type: 'Events'
    }
}
let mapDispatchToProps ={

    }

const LeftBarEventContainer = connect(mapStateToProps,mapDispatchToProps)(LeftBar);
export default LeftBarEventContainer;
