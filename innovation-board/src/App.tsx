import React, { Component } from 'react';
import logo from './assets/DAZN-hero-updated.png';
import './App.css';
import TeamDTO from './data/teamDTO';
import getTeams from './client/teamClient';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TeamBar from './components/TeamBar';

const theme = createMuiTheme();

interface AppState {
  teams: TeamDTO[];
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      teams: [],
    }
  }

  componentDidMount() {
    getTeams().then(r => {
      this.setState({ teams: r });
    }, err => console.log(err));
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
            {this.state.teams.map(t => <TeamBar team={t} />)}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
