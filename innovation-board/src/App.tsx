import React, { Component } from 'react';
import logo from './assets/DAZN-hero-updated.png';
import './App.css';
import TeamDTO from './data/teamDTO';
import TeamBar from './components/TeamBar';
import AddBox from '@material-ui/icons/AddBoxTwoTone';
import AirPlay from '@material-ui/icons/AirplayTwoTone';
import CancelPresentation from '@material-ui/icons/CancelPresentationTwoTone';
import TeamModal from './modals/TeamModal';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { saveTeam, getTeams } from './client/teamClient';

const theme = createMuiTheme();

interface AppState {
  teams: TeamDTO[];
  modalOpened: boolean;
  presentationEnabled: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalOpened: false,
      teams: [],
      presentationEnabled: false
    }
  }

  componentDidMount() {
    getTeams().then(r => {
      this.setState({ teams: r });
    }, err => console.log(err));
  }

  addNewTeam(team: TeamDTO) {
    if (team.getTeamName === null || team.getTeamName === '') {
      return;
    }

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
    let renderPresentation;

    if (!this.state.presentationEnabled) {
      renderPresentation = <div className="presentationMode">
        <AirPlay style={{ padding: 5 }} onClick={e => this.setState({ presentationEnabled: !this.state.presentationEnabled })} />
      </div>
    } else {
      renderPresentation = <div className="presentationMode">
        <CancelPresentation style={{ padding: 5 }} onClick={e => this.setState({ presentationEnabled: !this.state.presentationEnabled })} />
      </div>
    }

    return (
      <div className="app">
        <header className="boardHeader">
          <img src={logo} className="appDaznLogo" alt="logo" />
          <p className="daznTitle">DAZN Košice - Innovation Board</p>
        </header>
        <div className="createTeam" style={{ visibility: this.state.presentationEnabled ? 'hidden' : 'visible' }}>
          <div className="team">
            <label className="add">Create Team</label>
            <AddBox style={{ width: 30, cursor: 'pointer' }} onClick={e => this.setState({ modalOpened: !this.state.presentationEnabled })} />
            <TeamModal triggerInTeamClose={() => this.setState({ modalOpened: false })} triggerInTeamSave={team => { this.setState({ modalOpened: false }); this.addNewTeam(team) }} open={this.state.modalOpened} />
          </div>
        </div>
        {renderPresentation}
        <MuiThemeProvider theme={theme}>
          <div className="teams">
            {this.state.teams.map(t => <TeamBar key={t.getUuid} presentationEnabled={this.state.presentationEnabled} team={t} triggerTeamsUpdate={team => this.deleteTeam(team)} />)}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
