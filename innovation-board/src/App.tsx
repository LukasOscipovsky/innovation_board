import React, { Component } from 'react';
import logo from './assets/DAZN-hero-updated.png';
import './App.css';
import TeamDTO from './data/teamDTO';
import TeamBar from './components/TeamBar';
import AddBox from '@material-ui/icons/AddBoxTwoTone';
import TeamModal from './modals/TeamModal';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { saveTeam, getTeams } from './client/teamClient';

const theme = createMuiTheme();

interface AppState {
  teams: TeamDTO[];
  modalOpened: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalOpened: false,
      teams: [],
    }
  }

  componentDidMount() {
    getTeams().then(r => {
      this.setState({ teams: r });
    }, err => console.log(err));
  }

  addNewTeam(team: TeamDTO) {
    saveTeam(team);

    this.setState(state => {
      const updatedTeams: Array<TeamDTO> = [...state.teams, team];

      return {
        teams: updatedTeams
      }
    }
    );
  }

  deleteTeam(team: TeamDTO) {
    this.setState(state => {
      const updatedTeams = this.state.teams.filter(t => t.getUuid !== team.getUuid)

      return {
        teams: updatedTeams
      }
    })
  }

  render() {
    return (
      <div className="app">
        <header className="boardHeader">
          <img src={logo} className="appDaznLogo" alt="logo" />
          <p className="daznTitle">DAZN Košice - Innovation Board</p>
        </header>
        <div className="whiteLine" />
        <div className="createTeam">
          <div className="team">
            <label className="add">Create Team</label>
            <AddBox style={{ width: 30, cursor: 'pointer' }} onClick={e => this.setState({ modalOpened: true })} />
            <TeamModal triggerInTeamSave={team => { this.setState({ modalOpened: false }); this.addNewTeam(team) }} open={this.state.modalOpened} />
          </div>
        </div>
        <MuiThemeProvider theme={theme}>
          {this.state.teams.map(t => <TeamBar team={t} triggerTeamsUpdate={team => this.deleteTeam(team)} />)}
        </MuiThemeProvider>
      </div>
    );
  }
}
