import React from 'react';
import a from './App.module.scss';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import SearchBar from "./components/Search/Search";
import NewEvent from "./components/NewEvent/NewEvent";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import LeftBarEventContainer from "./components/LeftBar/LeftBarEventContainer";
import EventsContentBoxContainer from "./components/ContentBox/Event/EventsContentBoxContainer";
import LeftBarVolunteersContainer from "./components/LeftBar/LeftBarVolunteersContainer";
import VolunteersContentBoxContainer from "./components/ContentBox/Volunteer/VolunteersContentBoxContainer";

const App = () => {

    return (

        <div className={a.mainWrapper}>
            <div className={a.container}>
                <Header/>
                <Route path='/Home' render={() => <Home/>}/>
                <Route path='/Volunteers' render={() => <SearchBar/>}/>
                <Route path='/Events' render={() => <SearchBar/>}/>
                {/*Основа для видачі результатів (Показ профілів волонтерів)*/}
                <Route path='/Volunteers' render={() => {
                    return (
                        <div className={a.gridContainer}>
                            <LeftBarVolunteersContainer type='volunteers'/>
                            <VolunteersContentBoxContainer type='volunteers'/>
                        </div>
                    )
                }}/>

                {/*Основа для видачі результатів (Показ івентів)*/}
                <Route path='/Events' render={() => {
                    return (
                        <div className={a.gridContainer}>
                            <LeftBarEventContainer type='events'/>
                            <EventsContentBoxContainer type='events'/>
                        </div>
                    )
                }
                }
                />
                {/*Додати нову подію*/}
                <Route path='/NewEvent' render={() => <NewEvent/>}/>
                {/*Профіль користувача*/}
                <Route path='/Profile' render={() => <Profile />}/>

            </div>
        </div>

    );

}

export default App;