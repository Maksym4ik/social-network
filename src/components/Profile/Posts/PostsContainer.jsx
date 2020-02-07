import { pushNewPostCreator} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";
import React from "react";
import {withLoginRedirect} from "../../../hoc/withLoginRedirect";
import {compose} from "redux";

class PostsContainer extends React.Component {

     pushPost = (value) => {

        this.props.pushNewPostCreator(value);
    }

    render() {
        return <Posts {...this.props} pushPost={this.pushPost}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        updatePostText: state.profilePage.updatePostText,
    }
}
let mapDispatchToProps = {
    pushNewPostCreator
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoginRedirect
)(PostsContainer)
