import React from 'react';
import a from './App.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import SearchBar from "./components/Search/Search";
import LeftBar from "./components/LeftBar/LeftBar";
import ContentBox from "./components/ContentBox/ContentBox";
import NewEvent from "./components/NewEvent/NewEvent";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";


const App = () => {
    let b = 33;
    return (
        <BrowserRouter>
            <div className={a.container}>
                <Header/>
                <Route path='/Home' component={Home}/>
                <Route path='/Volunteers' component={SearchBar}/>
                <Route path='/Events' component={SearchBar}/>
                {/*Основа для видачі результатів (Показ профілів волонтерів, і показ івентів)*/}
                <div className={a.gridContainer}>
                    <Route path='/Volunteers' component={LeftBar}/>
                    <Route path='/Volunteers' component={ContentBox}/>
                    <Route path='/Events' component={LeftBar}/>
                    <Route path='/Events' component={ContentBox}/>
                </div>
                {/*Додати нову подію*/}
                <Route path='/NewEvent' component={NewEvent}/>
                {/*Профіль користувача*/}
                <Route path='/Profile' component={Profile}/>
            </div>
        </BrowserRouter>
    );

}

export default App;