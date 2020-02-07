import {getLogin} from "../api/api";

let TAKE_LOGIN_INFO = 'TAKE_LOGIN_INFO';

let initialStale =
    {
        login: 'login',
        id: 0,
        email: 'email',
        isAuth: true
    };

let AuthReducer = (state = initialStale, action) => {

    switch (action.type) {
        case TAKE_LOGIN_INFO:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default AuthReducer;

export const takeLoginInfo = (login, id, email, isAuth) => ({type: TAKE_LOGIN_INFO, data: {login, id, email, isAuth}});

export const getAuth = () => {
    return (dispatch) => {
        getLogin().then(response => {
            let {login, id, email, isAuth} = response.data;
            dispatch(takeLoginInfo(login, id, email, isAuth));
        })
    }

}


