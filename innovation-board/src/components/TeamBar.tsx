import React, { Component } from 'react';
import Innovation from './Innovation';
import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/InnovationDTO';
import { saveTeam } from '../client/teamClient'

interface TeamProps {
  team: TeamDTO
}

class TeamBar extends Component<TeamProps, {}> {

  saveTeam(innovation: InnovationDTO) {
    if (this.props.team.getInnovations === undefined) {
      return;
    }

    let inToUpdate: InnovationDTO | undefined = this.props.team.getInnovations.find(t => t.getTitle === innovation.getTitle);

    if (inToUpdate === undefined) {
      this.props.team.getInnovations.push(innovation);
    } else {
      console.log(innovation);
      inToUpdate = innovation;
    }

    saveTeam(this.props.team);
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
        </div>
        <div className='innovationContainer'>
          {this.compsFromList()}
        </div>
      </div>
    );
  }
}

export default TeamBar;