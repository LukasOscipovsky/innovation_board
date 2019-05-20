import React from 'react';
import logo from './assets/DAZN-hero-updated.png';
import './App.css';
import TeamBar from './components/TeamBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="BoardHeader">
        <img src={logo} className="DAZN-logo" alt="logo" />
          <p className="DAZN-title">DAZN Košice - Innovation Board</p> 
        <img src={logo} className="DAZN-logo" alt="logo" />
      </header>
      <div className ="WhiteLine"/>
      <MuiThemeProvider theme={theme}>
        <div className="MainDiv">
          <TeamBar name="Rights Platform"/>
          <TeamBar name="Cms Componentisation"/>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
