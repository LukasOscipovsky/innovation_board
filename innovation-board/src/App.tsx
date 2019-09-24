import React, { Component } from 'react';
import logo from './assets/DAZN-hero-updated.png';
import './App.css';
import TeamDTO from './data/teamDTO';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TeamBar from './components/TeamBar';
import { saveTeam, getTeams } from './client/teamClient';
import AddBox from '@material-ui/icons/AddBoxTwoTone';

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

  addNewTeam() {
    let team: TeamDTO = new TeamDTO();
    team.setTeamName = 'test';
    team.setInnovations = [];
    saveTeam(team);
    getTeams().then(r => {
      this.setState({ teams: r });
    }, err => console.log(err));
  }

  render() {
    return (
      <div className="app">
        <header className="boardHeader">
          <p className="daznTitle">DAZN Košice - Innovation Board</p>
          <img src={logo} className="appDaznLogo" alt="logo" />
        </header>
        <div className="whiteLine" />
        <div className="createTeam">
          <div className="team">
            <label className="add">Create Team</label>
            <AddBox style={{ width: 30, paddingRight: 10 }} onClick={e => this.addNewTeam()} />
          </div>
        </div>
        <MuiThemeProvider theme={theme}>
          <div className="mainDiv">
            {this.state.teams.map(t => <TeamBar team={t} />)}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
