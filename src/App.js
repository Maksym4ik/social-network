import React from 'react';
import a from './App.module.scss';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import SearchBar from "./components/Search/Search";
import LeftBar from "./components/LeftBar/LeftBar";
import ContentBox from "./components/ContentBox/ContentBox";
import NewEvent from "./components/NewEvent/NewEvent";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

const App = (props) => {

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
                                <LeftBar filters={props.state.volunteersPage.filtersVolunteers}/>
                                <ContentBox volunteers={props.state.volunteersPage.volunteers}/>
                            </div>
                        )
                    }}/>

                    {/*Основа для видачі результатів (Показ івентів)*/}
                    <Route path='/Events' render={() => {
                        return (
                            <div className={a.gridContainer}>
                                <LeftBar filters={props.state.eventsPage.filtersEvents}/>
                                <ContentBox events={props.state.eventsPage.events}/>
                            </div>
                        )
                    }}/>
                    {/*Додати нову подію*/}
                    <Route path='/NewEvent' render={() => <NewEvent/>}/>
                    {/*Профіль користувача*/}
                    <Route path='/Profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>

                </div>
            </div>

    );

}

export default App;