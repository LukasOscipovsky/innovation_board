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
    if (this.props.team.innovations === undefined) {
      return;
    }

    let inToUpdate: InnovationDTO | undefined = this.props.team.innovations.find(t => t.title === innovation.title);

    if (inToUpdate === undefined) {
      this.props.team.innovations.push(innovation);
    } else {
      console.log(innovation);
      inToUpdate = innovation;
    }

    saveTeam(this.props.team);
  }

  compsFromList() {
    if (this.props.team.innovations !== undefined) {
      return this.props.team.innovations
        .map((i) => {
          return (<Innovation triggerInSave={innovation => this.saveTeam(innovation)} in={i} />)
        });
    }
  }

  render() {
    let upper = this.props.team.teamName === undefined ? '' : this.props.team.teamName.toUpperCase();

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