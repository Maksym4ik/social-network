import {newMessageTextCreator, pushNewMessageCreator} from '../../../redux/profilePage-reducer';
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.profilePage.messages,
        updateMessageText: state.profilePage.updateMessageText
    }
}
let mapDispatchToProps = {
    pushNewMessageCreator,
    newMessageTextCreator
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
