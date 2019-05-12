import React from 'react';
import logo from './assets/DAZN-hero-updated.png';
import './App.css';
import TeamBar from './components/TeamBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="BoardHeader">
        <img src={logo} className="DAZN-logo" alt="logo" />
          <p className="DAZN-title">DAZN Košice - Innovation Board</p> 
        <img src={logo} className="DAZN-logo" alt="logo" />
      </header>
      <div className ="WhiteLine"/>
      <div className="MainDiv">
        <TeamBar/>
      </div>
    </div>
  );
}

export default App;
