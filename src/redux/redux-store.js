import {applyMiddleware, combineReducers, createStore} from "redux";
import eventsPageReducer from "./eventsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import volunteersPageReducer from "./volunteersPage-reducer";
import homePageReducer from "./homePage-reducer";
import newEventReducer from "./newEventPage-reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";


//подключение редьюсеров
let reducers = combineReducers({
    eventsPage: eventsPageReducer,
    profilePage: profilePageReducer,
    volunteersPage: volunteersPageReducer,
    homePage: homePageReducer,
    newEventPage: newEventReducer,
    auth: AuthReducer
});


//создание *STORE*
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;