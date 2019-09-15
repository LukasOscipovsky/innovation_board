import React, { Component } from 'react';
import InnovationDTO from '../data/InnovationDTO';
import InnovationModal from './InnovationModal'

interface IProps {
  in: InnovationDTO;
  triggerInSave(innovation: InnovationDTO): void
}

interface IState {
  in: InnovationDTO;
  open: boolean;
}

const colors: { [id: number]: string; } = {};
colors[0] = "#f8fc00";
colors[1] = "#A52A2A";
colors[2] = "#006400";

class Innovation extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);

    this.state = {
      in: this.props.in,
      open: false
    }
  }

  render() {
    let upper: string = this.state.in.title === undefined ? '' : this.state.in.title.toUpperCase();
    let lineColor: string = this.props.in.status === undefined ? '#A9A9A9' : colors[this.props.in.status];

    return (
      <div className='innovation'>
        <div className='title-container'>
          <label className='title' onClick={e => this.setState({ open: true })}>{upper}</label>
          <InnovationModal triggerInSave={innovation => this.props.triggerInSave(innovation)} open={this.state.open} in={this.state.in} />
        </div>
        <div className='line' style={{ background: lineColor, opacity: 1 }} />
      </div>
    );
  }
}

export default Innovation;