import React from 'react';
import a from './App.module.scss';
import {Route} from "react-router-dom";
import SearchBar from "./components/Search/Search";
import NewEvent from "./components/NewEvent/NewEvent";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import LeftBarEventContainer from "./components/LeftBar/LeftBarEventContainer";
import EventsContentBoxContainer from "./components/ContentBox/Event/EventsContentBoxContainer";
import LeftBarVolunteersContainer from "./components/LeftBar/LeftBarVolunteersContainer";
import VolunteersContentBoxContainer from "./components/ContentBox/Volunteer/VolunteersContentBoxContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {

    return (

        <div className={a.mainWrapper}>
            <div className={a.container}>
                <HeaderContainer/>
                <Route path='/Home' render={() => <Home/>}/>
                <Route path='/Volunteers' render={() => <SearchBar/>}/>
                <Route path='/Events' render={() => <SearchBar/>}/>
                {/*Основа для видачі результатів (Показ профілів волонтерів)*/}
                <Route path='/Volunteers' render={() => {
                    return (
                        <div className={a.gridContainer}>
                            <LeftBarVolunteersContainer/>
                            <VolunteersContentBoxContainer/>
                        </div>
                    )
                }}/>

                {/*Основа для видачі результатів (Показ івентів)*/}
                <Route path='/Events' render={() => <div className={a.gridContainer}>
                    <LeftBarEventContainer type='events'/>
                    <EventsContentBoxContainer type='events'/>
                </div>}/>

                {/*Додати нову подію*/}
                <Route path='/NewEvent' render={() => <NewEvent/>}/>

                {/*Профіль користувача*/}
                <Route path='/Profile' render={() => <Profile/>}/>

                {/*login/registration*/}
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>
        </div>

    );

}

export default App;