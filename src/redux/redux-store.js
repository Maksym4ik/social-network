import {applyMiddleware, combineReducers, createStore} from "redux";
import eventsPageReducer from "./eventsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import volunteersPageReducer from "./volunteersPage-reducer";
import homePageReducer from "./homePage-reducer";
import newEventReducer from "./newEventPage-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";


//подключение редьюсеров
let reducers = combineReducers({
    eventsPage: eventsPageReducer,  //для страници ивентов
    profilePage: profilePageReducer, //страница пользователя
    volunteersPage: volunteersPageReducer, //страница со всеми пользователями
    homePage: homePageReducer, //мэйн страница
    newEventPage: newEventReducer, // добавить ивент
    auth: AuthReducer,
    form: formReducer  //редьюсер от redux-form для оброботки форм
});


//создание *STORE*
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;