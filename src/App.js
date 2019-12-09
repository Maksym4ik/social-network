import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from "./components/Search";
import LeftBar from "./components/LeftBar";
import ContentBox from "./components/ContentBox";


const App = () => {
  return(
      <div className = 'container'>
        <Header />
        <SearchBar/>
        <div className="gridContainer">
          <LeftBar/>
          <ContentBox/>
        </div>
      </div>

  );

}

export default App;