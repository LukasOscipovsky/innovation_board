import React from 'react';
import logo from './assets/DAZN-hero.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="BoardHeader">
        <img src={logo} className="DAZN-logo" alt="logo" />
          <p className="DAZN-title">Innovation Board</p> 
        <img src={logo} className="DAZN-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
