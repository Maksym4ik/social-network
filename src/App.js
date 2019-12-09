import React from 'react';
import './App.module.scss';
import Header from './components/Header';
import SearchBar from "./components/Search";
import LeftBar from "./components/LeftBar";
import ContentBox from "./components/ContentBox";
import a from './App.module.scss';


const App = () => {
  return(
      <div className ={a.container}>
        <Header />
        <SearchBar/>
        <div className={a.gridContainer}>
          <LeftBar/>
          <ContentBox/>
        </div>
      </div>

  );

}

export default App;