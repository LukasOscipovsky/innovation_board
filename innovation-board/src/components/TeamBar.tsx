import React, { Component } from 'react';
import Innovation from './Innovation';
import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/InnovationDTO';
import { saveTeam, deleteTeam } from '../client/teamClient';
import InnovationModal from '../modals/InnovationModal';
import AddBox from '@material-ui/icons/AddBoxTwoTone';
import Clear from '@material-ui/icons/Clear';

interface TeamProps {
  team: TeamDTO
}

interface TeamState {
  team: TeamDTO;
  modalOpened: boolean;
}

class TeamBar extends Component<TeamProps, TeamState> {

  componentWillMount() {
    this.setState({
      team: this.props.team,
      modalOpened: false,
    })
  }

  saveTeam(innovation: InnovationDTO) {
    if (this.props.team.getInnovations === undefined ||
      innovation.getTitle === '' ||
      innovation.getDescription === '') {
      return;
    }

    let inToUpdate: InnovationDTO | undefined = this.props.team.getInnovations.find(t => t.getTitle === innovation.getTitle);

    if (inToUpdate === undefined) {
      this.props.team.getInnovations.push(innovation);
    } else {
      inToUpdate = innovation;
    }

    saveTeam(this.props.team);

    this.setState({ team: this.props.team });
  }

  deleteInnovation(innovation: InnovationDTO) {
    this.props.team.setInnovations = this.props.team.getInnovations.filter(t => !(t.getTitle === innovation.getTitle));

    saveTeam(this.props.team);

    this.setState({ team: this.props.team });
  }

  compsFromList() {
    if (this.props.team.getInnovations !== undefined) {
      return this.props.team.getInnovations
        .map((i) => {
          return (<Innovation triggerInSave={innovation => this.saveTeam(innovation)} in={i} triggerInDelete={innovation => this.deleteInnovation(innovation)} />)
        });
    }
  }

  render() {
    let upper: string = this.props.team.getTeamName.toUpperCase();

    return (
      <div className='teamBar'>
        <div className='titleContainer'>
          <div className='clear'>
            <Clear style={{ color: '#FF4136', width: 15, cursor: 'pointer' }} onClick={e => deleteTeam(this.state.team.getTeamName)} />
          </div>
          <div className='title'>
            <label className='name'>{upper}</label>
            <AddBox style={{ width: 30, paddingRight: 10, cursor: 'pointer' }} onClick={e => this.setState({ modalOpened: true })} />
            <InnovationModal
              triggerInInnovationClose={() => this.setState({ modalOpened: false })}
              triggerInInnovationSave={innovation => { this.setState({ modalOpened: false }); this.saveTeam(innovation) }}
              open={this.state.modalOpened}
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