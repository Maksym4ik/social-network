import {combineReducers, createStore} from "redux";
import eventsPageReducer from "./eventsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import volunteersPageReducer from "./volunteersPage-reducer";
import homePageReducer from "./homePage-reducer";
import newEventReducer from "./newEventPage-reducer";



//подключение редьюсеров
let reducers = combineReducers({
    eventsPage: eventsPageReducer,
    profilePage: profilePageReducer,
    volunteersPage: volunteersPageReducer,
    homePage: homePageReducer,
    newEventPage: newEventReducer
});


//создание *STORE*
let store = createStore(reducers);

export default store;