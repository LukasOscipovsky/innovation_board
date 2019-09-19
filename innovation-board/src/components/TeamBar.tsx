import React, { Component } from 'react';
import Innovation from './Innovation';
import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/innovationDTO';
import { saveTeam } from '../client/teamClient';
import plus from '../assets/Plus.png';

interface TeamProps {
  team: TeamDTO
}

interface TeamState {
  team: TeamDTO;
}

class TeamBar extends Component<TeamProps, TeamState> {

  componentWillMount() {
    this.setState({
      team: this.props.team,
    })
  }

  saveTeam(innovation: InnovationDTO) {
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
    let upper = this.props.team.getTeamName.toUpperCase();

    return (
      <div className='teamBar'>
        <div className='titleContainer'>
          <label className='title'>{upper}</label>
          <img src={plus} className='plus' alt='plus' />
        </div>
        <div className='innovationContainer'>
          {this.compsFromList()}
        </div>
      </div>
    );
  }
}

export default TeamBar;