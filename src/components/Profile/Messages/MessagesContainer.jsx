import React from "react";
import {pushNewMessageCreator} from '../../../redux/profilePage-reducer';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withLoginRedirect} from "../../../hoc/withLoginRedirect";
import {compose} from "redux";


class MessagesContainer extends React.Component {

    render() {
   return <Messages {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        messages: state.profilePage.messages,
        updateMessageText: state.profilePage.updateMessageText,
    }
}
let mapDispatchToProps = {
    pushNewMessageCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoginRedirect
)(MessagesContainer);
