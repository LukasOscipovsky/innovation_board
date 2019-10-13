import React, { Component } from 'react';
import Innovation from './Innovation';
import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/innovationDTO';
import { saveTeam, deleteTeam } from '../client/teamClient';
import InnovationModal from '../modals/InnovationModal';
import DeleteTeamModal from '../modals/DeleteTeamModal';
import AddBox from '@material-ui/icons/AddBoxTwoTone';
import Clear from '@material-ui/icons/Clear';

interface TeamProps {
  team: TeamDTO
  triggerTeamsUpdate(team: TeamDTO): void
}

interface TeamState {
  innsToRender: Array<InnovationDTO>,
  team: TeamDTO;
  innModalOpened: boolean;
  deleteModalOpened: boolean;
}

const toAdd: number = 5;

class TeamBar extends Component<TeamProps, TeamState> {
  private index: number = 5;
  private next: number = 0;

  componentWillMount() {
    this.setState({
      innsToRender: [],
      team: this.props.team,
      innModalOpened: false,
      deleteModalOpened: false,
    })

    setInterval(() => {
      this.setInnovationsToRender();
    }, 5000);
  }

  saveTeam(innovation: InnovationDTO) {
    if (this.props.team.getInnovations === undefined ||
      innovation.getTitle === '' ||
      innovation.getDescription === '') {
      return;
    }

    let inToUpdate: InnovationDTO | undefined = this.props.team.getInnovations.find(t => t.getUuid === innovation.getUuid);

    if (inToUpdate === undefined) {
      this.props.team.getInnovations.push(innovation);
    } else {
      inToUpdate = innovation;
    }

    saveTeam(this.props.team);

    this.setState({ team: this.props.team });
  }

  deleteInnovation(innovation: InnovationDTO) {
    this.props.team.setInnovations = this.props.team.getInnovations.filter(t => t.getUuid !== innovation.getUuid);

    saveTeam(this.props.team);

    this.setState({ team: this.props.team });
  }

  compsFromList() {
    return this.state.innsToRender.map((i) => {
      return (<Innovation triggerInSave={innovation => this.saveTeam(innovation)} in={i} triggerInDelete={innovation => this.deleteInnovation(innovation)} />)
    });
  }

  setInnovationsToRender() {
    if (this.props.team.getInnovations !== undefined) {
      if (this.index >= this.props.team.getInnovations.length) {
        this.next = 0;
        this.index = toAdd;
      } else {
        this.next = this.next + toAdd;
        this.index = this.index + toAdd;
      }

      let x = this.props.team.getInnovations.slice(this.next, this.index);

      this.setState({ innsToRender: [] });
      this.setState({ innsToRender: x });
    }
  }

  deleteTeam() {
    deleteTeam(this.state.team.getUuid);

    this.props.triggerTeamsUpdate(this.state.team);
  }

  render() {
    let upper: string = this.props.team.getTeamName.toUpperCase();

    return (
      <div className='teamBar'>
        <div className='titleContainer'>
          <div className='clear'>
            <Clear style={{ color: '#FF4136', width: 15, cursor: 'pointer' }} onClick={e => this.setState({ deleteModalOpened: true })} />
            <DeleteTeamModal
              open={this.state.deleteModalOpened}
              triggerClose={() => this.setState({ deleteModalOpened: false })}
              triggerDelete={() => { this.setState({ deleteModalOpened: false }); this.deleteTeam() }} />
          </div>
          <div className='title'>
            <label className='name'>{upper}</label>
            <AddBox style={{ width: 30, paddingRight: 10, cursor: 'pointer' }} onClick={e => this.setState({ innModalOpened: true })} />
            <InnovationModal
              triggerInInnovationClose={() => this.setState({ innModalOpened: false })}
              triggerInInnovationSave={innovation => { this.setState({ innModalOpened: false }); this.saveTeam(innovation) }}
              open={this.state.innModalOpened}
              in={new InnovationDTO()} />
          </div>
        </div>
        <div className='innovationContainer'>
          {this.compsFromList()}
        </div>
      </div>
    );
  }
}

export default TeamBar;