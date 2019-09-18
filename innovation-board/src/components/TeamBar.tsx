import React, { Component } from 'react';
import Innovation from './Innovation';
import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/innovationDTO';
import InnovationModal from './InnovationModal';
import { saveTeam } from '../client/teamClient';
import plus from '../assets/Plus.png';

interface TeamProps {
  team: TeamDTO
}

interface TeamState {
  team: TeamDTO;
  innovationOpened: boolean;
  newInnovation: InnovationDTO;
}

class TeamBar extends Component<TeamProps, TeamState> {

  componentWillMount() {
    this.setState({
      team: this.props.team,
      innovationOpened: false,
      newInnovation: new InnovationDTO(),
    })
  }

  saveTeam(innovation: InnovationDTO) {
    innovation.setPriority = 0;

    if (this.props.team.getInnovations === undefined) {
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

  compsFromList() {
    if (this.props.team.getInnovations !== undefined) {
      return this.props.team.getInnovations
        .map((i) => {
          return (<Innovation triggerInSave={innovation => this.saveTeam(innovation)} in={i} />)
        });
    }
  }

  render() {
    let upper = this.props.team.getTeamName === undefined ? '' : this.props.team.getTeamName.toUpperCase();

    return (
      <div className='teamBar'>
        <div className='titleContainer'>
          <label className='title'>{upper}</label>
          <img src={plus} className='plus' onClick={e => this.setState({ innovationOpened: true })} />
          <InnovationModal triggerInSave={innovation => { this.setState({ innovationOpened: false }); this.saveTeam(innovation) }} open={this.state.innovationOpened} in={this.state.newInnovation} />
        </div>
        <div className='innovationContainer'>
          {this.compsFromList()}
        </div>
      </div>
    );
  }
}

export default TeamBar;