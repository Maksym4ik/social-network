import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withLoginRedirect = (Component) => {
    class LoginRedirect extends React.Component {
        render() {

                if (!this.props.isAuth) return <Redirect to='/login'/>
                return <Component {...this.props}/>

        }
    }

    return connect(mapStateToPropsRedirect)(LoginRedirect)
}

