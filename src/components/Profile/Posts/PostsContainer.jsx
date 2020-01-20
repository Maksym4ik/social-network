import {newPostTextCreator, pushNewPostCreator} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        updatePostText: state.profilePage.updatePostText
    }
}
let mapDispatchToProps = {
    pushNewPostCreator,
    newPostTextCreator
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;