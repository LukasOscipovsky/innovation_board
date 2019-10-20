import React, { Component } from 'react';
import Innovation from './Innovation';
import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/innovationDTO';
import { saveTeam, deleteTeam } from '../client/teamClient';
import InnovationModal from '../modals/InnovationModal';
import DeleteTeamModal from '../modals/DeleteTeamModal';
import AddBox from '@material-ui/icons/AddBoxTwoTone';
import ArrowForward from '@material-ui/icons/ArrowForwardTwoTone';
import ArrowBack from '@material-ui/icons/ArrowBackTwoTone';
import Clear from '@material-ui/icons/Clear';

interface TeamProps {
  team: TeamDTO;
  presentationEnabled: boolean;
  triggerTeamsUpdate(team: TeamDTO): void;
}

interface TeamState {
  innsToRender: Array<InnovationDTO>,
  team: TeamDTO;
  innModalOpened: boolean;
  deleteModalOpened: boolean;
  presentationEnabled: boolean;
  width: number;
}

const innSize = 75;
const gap = 8

class TeamBar extends Component<TeamProps, TeamState> {
  private next: number = 0;
  private left: number = 0;
  private right: number = 0;
  private gridSize: number = 0;
  private container: any;
  private interval: any;

  UNSAFE_componentWillMount() {
    this.setState({
      innsToRender: [],
      team: this.props.team,
      presentationEnabled: this.props.presentationEnabled,
      innModalOpened: false,
      deleteModalOpened: false
    })
  }

  UNSAFE_componentWillReceiveProps(props: TeamProps) {
    if (this.state.presentationEnabled !== props.presentationEnabled) {
      this.setState({ presentationEnabled: props.presentationEnabled });
      this.setMode(props.presentationEnabled);
    }
  }

  componentDidMount() {
    this.setMode(false);
  }

  setMode(presentationEnabled: boolean) {
    if (presentationEnabled) {
      this.updateWindowDimensions();

      this.interval = setInterval(() => {
        this.setInnovationsToRender();
      }, 5000);
      return;
    }

    clearInterval(this.interval);

    this.updateWindowDimensions();
    //window.addEventListener('resize', this.updateWindowDimensions);

    this.setState({ innsToRender: this.props.team.getInnovations.slice(0, this.gridSize) });
  }

  updateWindowDimensions = () => {
    this.gridSize = Math.trunc((this.container.clientWidth / innSize) / (1 + gap / innSize));
    this.right = this.gridSize;
    this.left = 0;
  };

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
    if (this.gridSize <= this.right) {
      if (this.props.team.getInnovations.length > this.gridSize) {
        this.left = this.props.team.getInnovations.length - this.gridSize;
      } else {
        this.left = 0;
      }
    }

    if (this.props.team.getInnovations.length >= this.right) {
      this.right = this.props.team.getInnovations.length;
    }

    this.slice();
  }

  deleteInnovation(innovation: InnovationDTO) {
    this.props.team.setInnovations = this.props.team.getInnovations.filter(t => t.getUuid !== innovation.getUuid);

    saveTeam(this.props.team);

    this.setState({ team: this.props.team });
    if (this.left > 0) {
      this.left--;
    }

    if (this.gridSize < this.right) {
      this.right--;
    }


    this.slice();
  }

  setInnovationsToRender() {
    let temp: number = 0;

    if (this.props.team.getInnovations !== undefined) {
      if (this.next > this.props.team.getInnovations.length) {
        this.next = 0;
      }
      temp = this.next;
      this.next = this.next + this.gridSize;

      let presentationInns = this.props.team.getInnovations.slice(temp, this.next);
      this.setState({ innsToRender: presentationInns });
    }
  }

  deleteTeam() {
    deleteTeam(this.state.team.getUuid);

    this.props.triggerTeamsUpdate(this.state.team);
  }

  handleBackwards = () => {
    if (this.props.team.getInnovations === undefined) {
      return;
    }

    if (this.props.team.getInnovations.length < this.right || this.left === 0) {
      return;
    }

    this.left--;
    this.right--;

    this.slice();
  }

  handleForwards = () => {
    if (this.props.team.getInnovations === undefined) {
      return;
    }

    if (this.props.team.getInnovations.length < this.right || this.right === this.props.team.getInnovations.length) {
      return;
    }

    this.left++;
    this.right++;

    this.slice();
  }

  slice() {
    let slicedInns = this.props.team.getInnovations.slice(this.left, this.right);

    this.setState({
      innsToRender: slicedInns
    })
  }

  compsFromList() {
    return this.state.innsToRender.map((i) => {
      return (<Innovation key={i.getUuid} presentationEnabled={this.state.presentationEnabled} triggerInSave={innovation => this.saveTeam(innovation)} in={i} triggerInDelete={innovation => this.deleteInnovation(innovation)} />);
    })
  }

  render() {
    let upper: string = this.props.team.getTeamName.toUpperCase();

    return (
      <div className='teamBar'>
        <div className='titleContainer'>
          <div className='clear'>
            <Clear style={{ color: '#FF4136', width: 15, cursor: 'pointer', visibility: this.props.presentationEnabled ? 'hidden' : 'visible' }} onClick={e => this.setState({ deleteModalOpened: true })} />
            <DeleteTeamModal
              open={this.state.deleteModalOpened}
              triggerClose={() => this.setState({ deleteModalOpened: false })}
              triggerDelete={() => { this.setState({ deleteModalOpened: false }); this.deleteTeam() }} />
          </div>
          <div className='title'>
            <label className='name'>{upper}</label>
            <AddBox style={{ width: 30, paddingRight: 10, cursor: 'pointer', visibility: this.props.presentationEnabled ? 'hidden' : 'visible' }} onClick={e => this.setState({ innModalOpened: true })} />
            <InnovationModal
              triggerInInnovationClose={() => this.setState({ innModalOpened: false })}
              triggerInInnovationSave={innovation => { this.setState({ innModalOpened: false }); this.saveTeam(innovation) }}
              open={this.state.innModalOpened}
              in={new InnovationDTO()} />
          </div>
        </div>
        <div className='arrowLeft' style={{ visibility: this.state.presentationEnabled ? 'hidden' : 'visible' }}>
          <ArrowBack onClick={e => { this.handleBackwards() }} />
        </div>
        <div className='innovationContainer' style={{ gridGap: gap, gridTemplateColumns: `repeat(auto-fill, minmax(${innSize}px, 1fr))` }} ref={el => (this.container = el)}>
          {this.compsFromList()}
        </div>
        <div className='arrowRight' style={{ visibility: this.state.presentationEnabled ? 'hidden' : 'visible' }}>
          <ArrowForward onClick={e => { this.handleForwards() }} />
        </div>
      </div>
    );
  }
}

export default TeamBar;