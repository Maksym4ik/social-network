import React from "react";
import Login from "./Login";
import {connect} from "react-redux";


class LoginContainer extends React.Component {

    render() {
        return <Login {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
      form: state.form
    }
}

let mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);