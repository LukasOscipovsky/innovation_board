import React, { Component } from 'react';
import logo from './assets/DAZN-hero-updated.png';
import './App.css';
import axios from 'axios';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TeamDTO from './data/teamDTO';
import TeamBar from './components/TeamBar';
import jsonConverter from './mapper/jsonConverter'

const theme = createMuiTheme();

class App extends Component {

  compsFromList() {
    return getTeams()
    .then(teams => {
      return teams.map((t) => {
        return (<TeamBar team={t} />)
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="BoardHeader">
          <img src={logo} className="DAZN-logo" alt="logo" />
          <p className="DAZN-title">DAZN Košice - Innovation Board</p>
          <img src={logo} className="DAZN-logo" alt="logo" />
        </header>
        <div className="WhiteLine" />
        <MuiThemeProvider theme={theme}>
          <div className="MainDiv">
            {this.compsFromList()}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

async function getTeams(): Promise<TeamDTO[]> {
  return await axios.get('http://localhost:8080/team').then(r => {
    return jsonConverter().deserializeArray(r.data, TeamDTO);
  });
}

export default App;
